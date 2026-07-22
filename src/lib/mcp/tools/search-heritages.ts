import { defineTool } from "@lovable.dev/mcp-js";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export default defineTool({
  name: "search_heritages",
  title: "Search heritages",
  description:
    "Search Vietnamese heritages by keyword across title, subtitle, and short description (case-insensitive).",
  inputSchema: {
    query: z.string().min(1).describe("Free-text keyword, e.g. 'ca trù', 'Hội An', 'Chăm'."),
    limit: z.number().int().min(1).max(50).optional(),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ query, limit }) => {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY!,
      { auth: { persistSession: false } },
    );
    const like = `%${query}%`;
    const { data, error } = await supabase
      .from("heritages")
      .select("slug,title,subtitle,region,unesco_type,year,short_desc")
      .or(`title.ilike.${like},subtitle.ilike.${like},short_desc.ilike.${like}`)
      .limit(limit ?? 20);
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { items: data ?? [] },
    };
  },
});