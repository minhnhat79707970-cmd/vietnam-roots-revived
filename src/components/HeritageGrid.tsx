import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { DrumOrnament } from "./DrumOrnament";
import { useHeritages } from "@/hooks/useHeritages";
import { Skeleton } from "@/components/ui/skeleton";
import { useT } from "@/contexts/LanguageContext";

// 4 di sản chính hiển thị zigzag, các di sản còn lại làm chip
const featuredSlugs = ["nha-nhac-cung-dinh-hue", "khong-gian-cong-chieng", "dan-ca-quan-ho", "ca-tru"];

export const HeritageGrid = () => {
  const { data: heritages = [], isLoading } = useHeritages();
  const t = useT();

  const featured = featuredSlugs
    .map((slug) => heritages.find((h) => h.slug === slug))
    .filter((h): h is NonNullable<typeof h> => Boolean(h));

  const others = heritages.filter((h) => !featuredSlugs.includes(h.slug));

  return (
    <section id="heritage" className="relative py-32 px-6 bg-patina-deep text-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-gold font-medium">
            {t("Tầng II · Di sản phi vật thể", "Floor II · Intangible heritage")}
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-6">
            {t("Tiếng vọng", "Echoes of")} <span className="italic text-gradient-bronze">{t("ngàn năm", "a thousand years")}</span>
          </h2>
          <p className="text-background/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            {t(
              "Mười lăm di sản văn hoá phi vật thể của Việt Nam đã được UNESCO ghi danh — mỗi điệu hát, mỗi tiếng đàn là một mạch nguồn của hồn dân tộc.",
              "Fifteen Vietnamese intangible cultural heritages inscribed by UNESCO — every melody and every note is a wellspring of the nation's soul.",
            )}
            <span className="block text-gold/70 italic font-serif-vn text-base mt-3">
              {t(
                "Nhấp vào tên di sản để khám phá lịch sử và hình ảnh đầy đủ.",
                "Click a heritage name to explore its full history and images.",
              )}
            </span>
          </p>
          <DrumOrnament className="text-gold w-48 h-5 mx-auto mt-8" />
        </div>

        {isLoading && (
          <div className="space-y-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="grid md:grid-cols-12 gap-8">
                <Skeleton className="md:col-span-5 aspect-[4/5] bg-patina/40" />
                <div className="md:col-span-7 space-y-4">
                  <Skeleton className="h-12 w-3/4 bg-patina/40" />
                  <Skeleton className="h-24 w-full bg-patina/30" />
                  <Skeleton className="h-32 w-full bg-patina/20" />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-12">
          {featured.map((item, idx) => (
            <article
              key={item.slug}
              className={`group grid md:grid-cols-12 gap-8 items-stretch ${
                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Hình ảnh — clickable */}
              <Link
                to={`/di-san/${item.slug}`}
                className="md:col-span-5 relative overflow-hidden aspect-[4/5] bg-patina block"
                aria-label={`Xem chi tiết ${item.title}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-[var(--ease-bronze)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-patina-deep/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold bg-patina-deep/70 backdrop-blur-sm px-3 py-1.5">
                    UNESCO {item.year}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-background/80 bg-patina-deep/70 backdrop-blur-sm px-3 py-1.5">
                    {item.region}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold-light/90">
                    {t("Khởi nguyên", "Origin")} · {item.origin}
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    {t("Xem", "View")} <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>

              {/* Nội dung & lịch sử */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-3">
                  {t("Di sản số", "Heritage No.")} 0{idx + 1}
                </div>
                <Link to={`/di-san/${item.slug}`} className="group/title inline-block">
                  <h3 className="font-display text-4xl md:text-5xl text-background mb-4 leading-tight group-hover/title:text-gold transition-colors">
                    {item.title}
                    <ArrowUpRight className="inline w-6 h-6 ml-2 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-gold" />
                  </h3>
                </Link>
                <p className="text-background/70 leading-relaxed mb-8 max-w-xl">
                  {item.shortDesc}
                </p>

                {/* Dòng thời gian rút gọn — 3 mốc đầu */}
                <div className="relative pl-6 border-l border-gold/30 space-y-5">
                  <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-gold" />
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold/80 -mt-1 mb-2">
                    {t("Lịch sử hình thành", "History")}
                  </div>
                  {item.history.slice(0, 3).map((h, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[27px] top-1.5 w-2 h-2 rounded-full bg-patina-light/80 ring-4 ring-patina-deep" />
                      <div className="font-serif-vn italic text-gold-light text-lg mb-1">
                        {h.era}
                      </div>
                      <p className="text-background/65 text-sm leading-relaxed max-w-xl">
                        {h.note}
                      </p>
                    </div>
                  ))}
                  {item.history.length > 3 && (
                    <Link
                      to={`/di-san/${item.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-gold hover:text-gold-light transition-colors mt-2"
                    >
                      {t("Xem trọn dòng lịch sử", "View full timeline")} <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other heritage chips — bây giờ clickable */}
        <div className="mt-24 pt-16 border-t border-gold/15">
          <div className="text-center text-xs tracking-[0.3em] uppercase text-gold/70 mb-3">
            {t("11 di sản khác đã được UNESCO ghi danh", "11 other heritages inscribed by UNESCO")}
          </div>
          <div className="text-center text-[11px] italic font-serif-vn text-background/50 mb-8">
            {t(
              "Nhấp vào từng di sản để xem hình ảnh, lịch sử và đặc trưng đầy đủ",
              "Click each heritage to view full images, history and features",
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {others.map((h) => (
              <Link
                key={h.slug}
                to={`/di-san/${h.slug}`}
                className="group text-sm px-4 py-2 border border-gold/30 text-background/80 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all flex items-center gap-2"
              >
                {h.title}
                <span className="text-[10px] tracking-widest text-gold/60 group-hover:text-gold">
                  · {h.year}
                </span>
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
