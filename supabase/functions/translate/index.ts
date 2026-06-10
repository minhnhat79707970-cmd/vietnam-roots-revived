// Edge function: dịch một mảng chuỗi tiếng Việt sang ngôn ngữ đích bằng Lovable AI.
// Body: { texts: string[], target: "en" | string }
// Trả về: { translations: string[] }

import { createClient } from "npm:@supabase/supabase-js@2";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const LANG_NAME: Record<string, string> = {
  en: "English",
  fr: "French",
  ja: "Japanese",
  ko: "Korean",
  zh: "Simplified Chinese",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  try {
    // Require an authenticated Supabase user — prevents anonymous abuse of paid AI credits.
    const authHeader = req.headers.get("Authorization") ?? "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
    );
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token);
    if (claimsError || !claimsData?.claims) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    const { texts, target } = await req.json();
    if (!Array.isArray(texts) || texts.length === 0) {
      return new Response(JSON.stringify({ translations: [] }), {
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }
    if (texts.length > 200) {
      return new Response(JSON.stringify({ error: "Too many texts (max 200)" }), {
        status: 400,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    const targetLang = LANG_NAME[target] ?? "English";
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    const numbered = texts
      .map((t: string, i: number) => `${i + 1}. ${String(t ?? "").replace(/\n/g, " ⏎ ")}`)
      .join("\n");

    const systemPrompt = `You are a professional Vietnamese-to-${targetLang} translator specializing in Vietnamese cultural heritage, history, UNESCO content, and museum exhibition copy. Translate naturally and elegantly while preserving meaning, proper nouns (Hồ Chí Minh, Đền Hùng, Hội An, Hùng Vương, etc. — keep diacritics), dates, era markers, and cultural terms. Keep tone formal, museum-grade. Do not add explanations.`;

    const userPrompt = `Translate each numbered Vietnamese line below into ${targetLang}. Reply with ONLY a JSON array of strings, in the SAME ORDER, same length as input. Restore "⏎" markers back to actual newlines. No preamble.\n\n${numbered}`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      return new Response(
        JSON.stringify({ error: `AI gateway error ${aiRes.status}: ${errText}` }),
        { status: aiRes.status, headers: { ...headers, "Content-Type": "application/json" } },
      );
    }

    const data = await aiRes.json();
    const content: string = data?.choices?.[0]?.message?.content ?? "[]";

    let translations: string[] = [];
    try {
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        translations = parsed.map((s) => String(s ?? ""));
      } else if (Array.isArray(parsed?.translations)) {
        translations = parsed.translations.map((s: unknown) => String(s ?? ""));
      } else {
        // Có thể là object { "1": "...", "2": "..." }
        const values = Object.values(parsed);
        if (values.every((v) => typeof v === "string")) {
          translations = values as string[];
        }
      }
    } catch {
      // Bóc tách lỏng nếu model trả văn bản kèm rào
      const match = content.match(/\[[\s\S]*\]/);
      if (match) {
        try {
          const arr = JSON.parse(match[0]);
          if (Array.isArray(arr)) translations = arr.map((s) => String(s ?? ""));
        } catch {/* ignore */}
      }
    }

    // Đảm bảo độ dài khớp đầu vào
    if (translations.length !== texts.length) {
      const padded = texts.map((t: string, i: number) => translations[i] ?? t);
      translations = padded;
    }

    return new Response(JSON.stringify({ translations }), {
      headers: { ...headers, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }
});