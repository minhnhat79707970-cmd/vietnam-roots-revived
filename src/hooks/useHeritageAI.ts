// Hook giao tiếp với edge function `heritage-chat` (Lovable AI Gateway).
// Streaming SSE — cập nhật content theo thời gian thực.

import { useCallback, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

export interface SuggestedQuestion {
  text: string;
  icon: string;
}

export const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  { text: "Triều đại nhà Lý kéo dài bao lâu?", icon: "🏯" },
  { text: "Hội An trở thành di sản UNESCO năm nào?", icon: "🏮" },
  { text: "Ai đã ba lần đánh bại quân Mông – Nguyên?", icon: "⚔️" },
  { text: "Văn hoá Đông Sơn có đặc điểm gì?", icon: "🥁" },
  { text: "Lễ hội Katê của người Chăm diễn ra thế nào?", icon: "🎭" },
  { text: "Chữ Nôm và chữ Hán khác nhau ra sao?", icon: "📜" },
];

const FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/heritage-chat`;

export function useHeritageAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(async (userText: string) => {
    const text = userText.trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };
    const assistantId = crypto.randomUUID();
    const assistantMsg: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
      isStreaming: true,
    };

    const history = [...messages, userMsg].map((m) => ({ role: m.role, content: m.content }));
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setIsLoading(true);

    abortRef.current = new AbortController();

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${session?.access_token ?? import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: history }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) {
        let msg = `Lỗi máy chủ (${res.status}).`;
        if (res.status === 429) msg = "Quá nhiều yêu cầu, vui lòng thử lại sau ít phút.";
        if (res.status === 402) msg = "Đã hết hạn mức AI miễn phí — vui lòng nâng cấp gói.";
        throw new Error(msg);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("Không nhận được luồng phản hồi.");
      const decoder = new TextDecoder();
      let buffer = "";
      let acc = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const raw of lines) {
          const line = raw.trim();
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload);
            const delta: string = json?.choices?.[0]?.delta?.content ?? "";
            if (delta) {
              acc += delta;
              setMessages((prev) =>
                prev.map((m) => (m.id === assistantId ? { ...m, content: acc } : m)),
              );
            }
          } catch {/* ignore parse errors */}
        }
      }

      setMessages((prev) =>
        prev.map((m) => (m.id === assistantId ? { ...m, isStreaming: false } : m)),
      );
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") {
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, isStreaming: false } : m)),
        );
      } else {
        const errMsg = err instanceof Error ? err.message : "Đã có lỗi xảy ra.";
        toast({ title: "Hồn Việt AI", description: errMsg, variant: "destructive" });
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: `Xin lỗi, ${errMsg}`, isStreaming: false }
              : m,
          ),
        );
      }
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  }, [messages, isLoading]);

  const stopGeneration = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return { messages, isLoading, sendMessage, stopGeneration, clearMessages };
}