import { useCallback, useEffect, useRef, useState } from "react";
import { Send, Square, Trash2, X, Sparkles } from "lucide-react";
import { Message, SUGGESTED_QUESTIONS, useHeritageAI } from "@/hooks/useHeritageAI";
import { DrumOrnament } from "@/components/DrumOrnament";

function TypingDots() {
  return (
    <span className="inline-flex h-4 items-end gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.8s" }}
        />
      ))}
    </span>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div className={`mb-4 flex items-end gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {!isUser && (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-patina text-gold-light shadow-soft">
          <Sparkles className="h-4 w-4" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm
          ${isUser
            ? "rounded-br-sm bg-gradient-to-br from-vermilion to-vermilion-deep text-background"
            : "rounded-bl-sm border border-gold/20 bg-patina-deep/60 text-background/90 backdrop-blur-sm"}`}
      >
        {msg.isStreaming && !msg.content ? (
          <TypingDots />
        ) : (
          <span className="whitespace-pre-wrap font-sans">{msg.content}</span>
        )}
        {msg.isStreaming && msg.content && (
          <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-gold align-middle" />
        )}
      </div>
    </div>
  );
}

function EmptyState({ onSelect }: { onSelect: (q: string) => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="mb-5 scale-75">
        <DrumOrnament />
      </div>
      <h3 className="font-serif-vn text-2xl text-gold-light">Hồn Việt AI</h3>
      <p className="ornament-border mt-3 max-w-xs text-xs uppercase tracking-[0.3em] text-background/60">
        Trợ lý Di sản
      </p>
      <p className="mt-6 max-w-xs text-sm leading-relaxed text-background/70">
        Hỏi bất cứ điều gì về bốn nghìn năm văn hiến: triều đại, di sản UNESCO, lễ hội, danh nhân…
      </p>
      <div className="mt-6 w-full">
        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gold/70">Gợi ý</p>
        <div className="flex flex-wrap justify-center gap-2">
          {SUGGESTED_QUESTIONS.map((q) => (
            <button
              key={q.text}
              onClick={() => onSelect(q.text)}
              className="flex items-center gap-1.5 rounded-full border border-gold/30 bg-patina-deep/40
                         px-3 py-1.5 text-xs text-gold-light transition-all hover:border-gold/70
                         hover:bg-patina/60 active:scale-95"
            >
              <span>{q.icon}</span>
              <span>{q.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function HeritageChatbot({ isOpen, onClose }: Props) {
  const { messages, isLoading, sendMessage, stopGeneration, clearMessages } = useHeritageAI();
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const handleSend = useCallback(() => {
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
  }, [input, isLoading, sendMessage]);

  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-patina-deep/60 backdrop-blur-sm transition-opacity duration-300
                    ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Trợ lý Di sản Hồn Việt AI"
        className={`fixed bottom-0 right-0 z-50 flex h-[88vh] w-full flex-col overflow-hidden
                    border border-gold/30 shadow-bronze transition-all duration-500 ease-out
                    sm:bottom-24 sm:right-6 sm:h-[640px] sm:w-[420px] sm:rounded-lg
                    ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"}`}
        style={{
          background:
            "linear-gradient(160deg, hsl(180 70% 10%) 0%, hsl(180 60% 14%) 50%, hsl(180 70% 9%) 100%)",
        }}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-gold/20 bg-patina-deep/50 px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bronze text-patina-deep shadow-soft">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-serif-vn text-lg leading-none text-gold-light">Hồn Việt AI</p>
            <p className="mt-1 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-background/60">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Trợ lý Di sản
            </p>
          </div>
          {messages.length > 0 && (
            <button
              onClick={clearMessages}
              className="flex h-8 w-8 items-center justify-center rounded-md text-background/60 transition hover:bg-patina/40 hover:text-gold"
              aria-label="Xoá hội thoại"
              title="Xoá hội thoại"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md text-background/60 transition hover:bg-patina/40 hover:text-gold"
            aria-label="Đóng"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
          {messages.length === 0 ? (
            <EmptyState onSelect={sendMessage} />
          ) : (
            <>
              {messages.map((m) => <MessageBubble key={m.id} msg={m} />)}
              <div ref={endRef} />
            </>
          )}
        </div>

        {/* Quick chips after first message */}
        {messages.length > 0 && !isLoading && (
          <div className="border-t border-gold/15 px-3 py-2">
            <div className="flex gap-2 overflow-x-auto pb-0.5">
              {SUGGESTED_QUESTIONS.slice(0, 3).map((q) => (
                <button
                  key={q.text}
                  onClick={() => sendMessage(q.text)}
                  className="flex flex-shrink-0 items-center gap-1 rounded-full border border-gold/30
                             bg-patina-deep/40 px-2.5 py-1 text-[11px] text-gold-light transition
                             hover:bg-patina/60 active:scale-95"
                >
                  {q.icon}
                  <span className="max-w-[140px] truncate">{q.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-gold/20 bg-patina-deep/40 px-3 pb-4 pt-3">
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Hỏi về lịch sử, văn hoá Việt Nam…"
              rows={1}
              maxLength={500}
              disabled={isLoading}
              aria-label="Nhập câu hỏi"
              className="flex-1 resize-none rounded-md border border-gold/30 bg-patina-deep/70 px-3 py-2 text-sm
                         text-background placeholder:text-background/40 focus:border-gold/70
                         focus:outline-none focus:ring-1 focus:ring-gold/40"
              style={{ maxHeight: 110 }}
            />
            <button
              onClick={isLoading ? stopGeneration : handleSend}
              disabled={!isLoading && !input.trim()}
              aria-label={isLoading ? "Dừng" : "Gửi"}
              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border transition active:scale-95
                ${isLoading
                  ? "border-vermilion/60 bg-vermilion/30 text-vermilion-foreground"
                  : input.trim()
                    ? "border-gold/60 bg-bronze text-patina-deep shadow-soft hover:brightness-110"
                    : "cursor-not-allowed border-gold/20 bg-patina-deep/50 text-background/30"}`}
            >
              {isLoading ? <Square className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            </button>
          </div>
          <p className="mt-2 text-center text-[10px] uppercase tracking-[0.25em] text-background/40">
            Hồn Việt AI · Câu trả lời có thể chưa hoàn hảo
          </p>
        </div>
      </div>
    </>
  );
}