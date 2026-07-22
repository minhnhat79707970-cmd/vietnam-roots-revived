import { defineTool } from "@lovable.dev/mcp-js";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export default defineTool({
  name: "get_region",
  title: "Get region detail",
  description:
    "Fetch the full detail of one Vietnamese cultural region by slug — geography, history, tangible & intangible heritages, cuisine, landmarks.",
  inputSchema: {
    slug: z.string().min(1).describe("Region slug, e.g. 'mien-bac', 'mien-trung', 'mien-nam'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ slug }) => {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY!,
      { auth: { persistSession: false } },
    );
    const { data, error } = await supabase.from("regions").select("*").eq("slug", slug).maybeSingle();
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    if (!data) return { content: [{ type: "text", text: `No region found with slug '${slug}'.` }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { region: data },
    };
  },
});