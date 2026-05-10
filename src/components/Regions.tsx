import { Link } from "react-router-dom";
import templeImg from "@/assets/heritage-temple.jpg";
import { SunStar } from "./DrumOrnament";
import { useRegions } from "@/hooks/useRegions";
import { Skeleton } from "@/components/ui/skeleton";
import { useT } from "@/contexts/LanguageContext";

export const Regions = () => {
  const { data: regionsList = [], isLoading } = useRegions();
  const t = useT();
  const regions = regionsList.map((r) => ({
    slug: r.slug,
    code: r.code,
    name: r.name,
    sub: r.sub,
    items: r.heritages.slice(0, 5).map((h) => h.name),
  }));

  return (
    <section id="regions" className="relative py-32 px-6 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 -z-10">
        <img src={templeImg} alt="" aria-hidden className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-vermilion font-medium">
            {t("Tầng III · Bản đồ di sản", "Floor III · Heritage map")}
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-6 text-gradient-patina">
            {t("Ba miền", "Three regions,")} <span className="italic">{t("một dải", "one land")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {isLoading &&
            [0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-96 w-full" />
            ))}
          {regions.map((r) => (
            <Link
              key={r.name}
              to={`/mien/${r.slug}`}
              className="group relative bg-card border border-border p-8 hover:shadow-bronze hover:border-gold/50 transition-all duration-700 block"
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                <SunStar className="w-full h-full text-patina" />
              </div>

              <div className="font-display text-7xl text-gold-deep/20 group-hover:text-gold/40 transition-colors duration-700 leading-none">
                {r.code}
              </div>

              <h3 className="font-display text-4xl text-patina-deep mt-2 mb-1">
                {r.name}
              </h3>
              <div className="text-sm text-vermilion italic mb-6 font-serif-vn text-base">
                {r.sub}
              </div>

              <ul className="space-y-3">
                {r.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-foreground/80 group/item">
                    <span className="text-gold mt-1.5 text-xs">◆</span>
                    <span className="group-hover/item:text-patina transition-colors">{it}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border text-xs tracking-[0.3em] uppercase text-gold-deep group-hover:text-vermilion flex items-center gap-2 transition-colors">
                {t("Khám phá chi tiết", "Explore in detail")} <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
