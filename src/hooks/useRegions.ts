import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { RegionDetailData, RegionSlug } from "@/data/regions";
import { useLanguage } from "@/contexts/LanguageContext";
import { translateDeep } from "@/lib/translateRow";

type Row = {
  slug: RegionSlug;
  code: string;
  name: string;
  sub: string;
  tagline: string;
  intro: string;
  geography: string;
  accent_class: string;
  history: RegionDetailData["history"];
  heritages: RegionDetailData["heritages"];
  cuisine: string[];
  intangible: RegionDetailData["intangible"];
  intangible_note: string;
  landmarks: RegionDetailData["landmarks"];
  landmarks_note: string;
  tangible: RegionDetailData["tangible"];
  tangible_note: string;
};

const mapRow = (r: Row): RegionDetailData => ({
  slug: r.slug,
  code: r.code,
  name: r.name,
  sub: r.sub,
  tagline: r.tagline,
  intro: r.intro,
  geography: r.geography,
  accentClass: r.accent_class,
  history: r.history ?? [],
  heritages: r.heritages ?? [],
  cuisine: r.cuisine ?? [],
  intangible: r.intangible ?? [],
  intangibleNote: r.intangible_note,
  landmarks: r.landmarks ?? [],
  landmarksNote: r.landmarks_note,
  tangible: r.tangible ?? [],
  tangibleNote: r.tangible_note,
});

export const useRegions = () => {
  const { language } = useLanguage();
  return useQuery({
    queryKey: ["regions", language],
    queryFn: async (): Promise<RegionDetailData[]> => {
      const { data, error } = await supabase
        .from("regions")
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

export const useRegion = (slug: string | undefined) => {
  const { language } = useLanguage();
  return useQuery({
    queryKey: ["region", slug, language],
    enabled: Boolean(slug),
    queryFn: async (): Promise<RegionDetailData | null> => {
      const { data, error } = await supabase
        .from("regions")
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