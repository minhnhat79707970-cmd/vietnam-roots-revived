import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { getHeritageImage } from "@/data/heritageImages";
import { useLanguage } from "@/contexts/LanguageContext";
import { translateDeep } from "@/lib/translateRow";
import type {
  HeritageDetail,
  HistoryEra,
  ExtendedSection,
  Reference,
} from "@/data/heritages";

type Row = {
  slug: string;
  img_key: string;
  title: string;
  subtitle: string;
  year: string;
  unesco_type: string;
  region: string;
  origin: string;
  short_desc: string;
  long_desc: string[];
  history: HistoryEra[];
  characteristics: { label: string; value: string }[];
  preservation: string;
  extended: ExtendedSection[];
  references: Reference[];
};

const mapRow = (r: Row): HeritageDetail => ({
  slug: r.slug,
  img: getHeritageImage(r.img_key),
  title: r.title,
  subtitle: r.subtitle,
  year: r.year,
  unescoType: r.unesco_type as HeritageDetail["unescoType"],
  region: r.region,
  origin: r.origin,
  shortDesc: r.short_desc,
  longDesc: r.long_desc ?? [],
  history: r.history ?? [],
  characteristics: r.characteristics ?? [],
  preservation: r.preservation,
  extended: r.extended ?? [],
  references: r.references ?? [],
});

export const useHeritages = () => {
  const { language } = useLanguage();
  return useQuery({
    queryKey: ["heritages", language],
    queryFn: async (): Promise<HeritageDetail[]> => {
      const { data, error } = await supabase
        .from("heritages")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      const items = (data as unknown as Row[]).map(mapRow);
      if (language === "vi") return items;
      return await translateDeep(items, language);
    },
    staleTime: 5 * 60_000,
  });
};

export const useHeritage = (slug: string | undefined) => {
  const { language } = useLanguage();
  return useQuery({
    queryKey: ["heritage", slug, language],
    enabled: Boolean(slug),
    queryFn: async (): Promise<HeritageDetail | null> => {
      const { data, error } = await supabase
        .from("heritages")
        .select("*")
        .eq("slug", slug!)
        .maybeSingle();
      if (error) throw error;
      if (!data) return null;
      const item = mapRow(data as unknown as Row);
      if (language === "vi") return item;
      return await translateDeep(item, language);
    },
    staleTime: 5 * 60_000,
  });
};