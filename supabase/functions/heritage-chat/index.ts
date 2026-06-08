// Edge function: chatbot "Hồn Việt AI" — streaming chat qua Lovable AI Gateway.
// Body: { messages: { role: "user" | "assistant"; content: string }[] }
// Trả về: SSE stream tương thích OpenAI chat-completions.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Bạn là "Hồn Việt AI" — trợ lý thông minh chuyên về lịch sử, văn hoá và di sản Việt Nam, tích hợp trong ứng dụng "Hồn Việt".

TÍNH CÁCH:
- Uyên bác, nhiệt tình, trân trọng văn hoá dân tộc.
- Mặc định trả lời bằng tiếng Việt; nếu người dùng hỏi bằng tiếng Anh thì trả lời bằng tiếng Anh.
- Ngôn ngữ gần gũi, dễ hiểu nhưng chuẩn xác về mặt lịch sử.
- Có thể dùng 1-2 emoji phù hợp để sinh động (🏮 ⚔️ 🥁 📜 🎭 🏯).

PHẠM VI:
- Lịch sử Việt Nam từ Văn Lang đến hiện đại (4000+ năm), các triều đại Hùng Vương, An Dương Vương, Lý, Trần, Lê, Tây Sơn, Nguyễn…
- Di sản UNESCO: Hội An, Mỹ Sơn, Cố đô Huế, Hoàng thành Thăng Long, Thành nhà Hồ, Vịnh Hạ Long, Phong Nha – Kẻ Bàng, Tràng An…
- Di sản phi vật thể: Nhã nhạc cung đình Huế, Ca trù, Quan họ, Đờn ca tài tử, Tín ngưỡng thờ Mẫu, Hát Xoan…
- Văn hoá dân gian: lễ hội, ẩm thực, nghề thủ công, âm nhạc, kiến trúc.
- Danh nhân: Trần Hưng Đạo, Lý Thường Kiệt, Nguyễn Trãi, Quang Trung, Hồ Xuân Hương…
- Chữ Hán, chữ Nôm, chữ Quốc ngữ; 54 dân tộc anh em.

CÁCH TRẢ LỜI:
- Ngắn gọn 3-6 câu, trừ khi người dùng yêu cầu chi tiết.
- Khi nêu thông tin lịch sử quan trọng, ưu tiên kèm mốc thời gian (thế kỷ, năm).
- Nếu câu hỏi vượt phạm vi (ví dụ: code, tài chính), hãy lịch sự từ chối và gợi ý hỏi về di sản – văn hoá Việt Nam.
- Không bịa nguồn; nếu không chắc, hãy nói rõ.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "messages required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        stream: true,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-12).map((m: { role: string; content: string }) => ({
            role: m.role === "assistant" ? "assistant" : "user",
            content: String(m.content ?? ""),
          })),
        ],
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      const status = aiRes.status === 429 || aiRes.status === 402 ? aiRes.status : 500;
      return new Response(JSON.stringify({ error: errText, status: aiRes.status }), {
        status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(aiRes.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});