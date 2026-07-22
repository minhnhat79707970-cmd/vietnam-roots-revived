import { defineTool } from "@lovable.dev/mcp-js";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export default defineTool({
  name: "list_heritages",
  title: "List Vietnamese heritages",
  description:
    "List Vietnamese cultural and natural heritage entries from the Hồn Việt database (title, slug, region, UNESCO type, year, short description). Optional filter by region (bac/trung/nam) or unesco_type.",
  inputSchema: {
    region: z.enum(["bac", "trung", "nam"]).optional().describe("Filter by region: bac (North), trung (Central), nam (South)."),
    unesco_type: z.string().optional().describe("Filter by UNESCO type substring, e.g. 'vật thể', 'phi vật thể', 'thiên nhiên'."),
    limit: z.number().int().min(1).max(100).optional().describe("Max rows to return (default 50)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ region, unesco_type, limit }) => {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY!,
      { auth: { persistSession: false } },
    );
    let q = supabase
      .from("heritages")
      .select("slug,title,subtitle,region,unesco_type,year,short_desc,origin")
      .order("display_order", { ascending: true })
      .limit(limit ?? 50);
    if (region) q = q.eq("region", region);
    if (unesco_type) q = q.ilike("unesco_type", `%${unesco_type}%`);
    const { data, error } = await q;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { items: data ?? [] },
    };
  },
});