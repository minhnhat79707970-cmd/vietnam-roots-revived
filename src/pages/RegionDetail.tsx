import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, MapPin, Music2, Sparkles } from "lucide-react";
import { regionsData, RegionSlug } from "@/data/regions";
import { DrumOrnament, SunStar } from "@/components/DrumOrnament";
import templeImg from "@/assets/heritage-temple.jpg";
import { Footer } from "@/components/Footer";

const categoryColors: Record<string, string> = {
  "Di tích": "border-gold/40 text-gold",
  "Thiên nhiên": "border-patina-light/50 text-patina-light",
  "Phi vật thể": "border-vermilion/40 text-vermilion",
  "Lễ hội": "border-terracotta/50 text-terracotta",
  "Ẩm thực": "border-clay/60 text-clay",
};

const RegionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug && (slug in regionsData) ? regionsData[slug as RegionSlug] : null;

  if (!data) return <Navigate to="/" replace />;

  const otherRegions = (Object.keys(regionsData) as RegionSlug[])
    .filter((s) => s !== data.slug)
    .map((s) => regionsData[s]);

  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-patina-deep text-background">
        <div className="absolute inset-0">
          <img src={templeImg} alt="" aria-hidden className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-patina-deep via-patina-deep/85 to-patina-deep/40" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10">
          <SunStar className="w-full h-full text-gold animate-spin-slow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <Link
            to="/#regions"
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold/80 hover:text-gold transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" /> Quay về bản đồ di sản
          </Link>

          <div className="font-display text-[12rem] md:text-[18rem] leading-[0.8] text-gold/20 -mb-8">
            {data.code}
          </div>
          <span className="text-xs tracking-[0.4em] uppercase text-gold">
            Tầng III · Bản đồ di sản
          </span>
          <h1 className="font-display text-6xl md:text-8xl mt-4 mb-6">
            {data.name}
          </h1>
          <p className="font-serif-vn italic text-2xl md:text-3xl text-gold-light/90 max-w-3xl mb-6">
            {data.tagline}
          </p>
          <DrumOrnament className="text-gold w-64 h-5" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-vermilion mb-4">
              Khái quát
            </div>
            <h2 className="font-display text-4xl text-patina-deep">{data.sub}</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-foreground/80 leading-relaxed text-lg">
            <p>{data.intro}</p>
            <div className="flex items-start gap-3 pt-4 border-t border-border">
              <MapPin className="w-5 h-5 text-patina mt-1 shrink-0" />
              <p className="text-base text-muted-foreground italic">{data.geography}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-vermilion">
              Dòng chảy lịch sử
            </span>
            <h2 className="font-display text-5xl mt-4 text-gradient-patina">
              Những mốc son <span className="italic">định hình</span>
            </h2>
          </div>

          <div className="relative pl-8 md:pl-12 border-l-2 border-gold/30 space-y-12">
            {data.history.map((h, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[42px] md:-left-[54px] top-2 w-4 h-4 rounded-full bg-gold ring-8 ring-secondary/30" />
                <div className="font-serif-vn italic text-2xl text-vermilion mb-2">
                  {h.era}
                </div>
                <p className="text-foreground/85 text-lg leading-relaxed max-w-2xl">
                  {h.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-vermilion">
              Di sản tiêu biểu
            </span>
            <h2 className="font-display text-5xl mt-4 text-patina-deep">
              Tinh hoa <span className="italic text-gradient-bronze">{data.name}</span>
            </h2>
            <DrumOrnament className="text-gold w-48 h-5 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.heritages.map((it) => (
              <article
                key={it.name}
                className="group relative bg-card border border-border p-8 hover:border-gold/60 hover:shadow-bronze transition-all duration-700"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span
                    className={`text-[10px] tracking-[0.3em] uppercase border px-3 py-1 ${
                      categoryColors[it.category] ?? "border-border text-muted-foreground"
                    }`}
                  >
                    {it.category}
                  </span>
                  <span className="text-xs italic text-muted-foreground font-serif-vn">
                    {it.era}
                  </span>
                </div>
                <h3 className="font-display text-3xl text-patina-deep mb-3 group-hover:text-vermilion transition-colors">
                  {it.name}
                </h3>
                <p className="text-foreground/75 leading-relaxed">{it.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTANGIBLE HERITAGE — phân chia theo miền */}
      <section className="relative py-28 px-6 bg-secondary/40 border-y border-border overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--patina-deep)) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-vermilion mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Di sản phi vật thể của {data.name}
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-patina-deep">
              Hồn cốt <span className="italic text-gradient-bronze">vùng đất</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto mt-6 leading-relaxed font-serif-vn italic text-lg">
              {data.intangibleNote}
            </p>
            <DrumOrnament className="text-gold w-48 h-5 mx-auto mt-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.intangible.map((it, i) => (
              <article
                key={it.name}
                className="group relative bg-background border border-border p-7 hover:border-vermilion/50 hover:shadow-bronze transition-all duration-700 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="font-display text-5xl text-gold/30 leading-none group-hover:text-gold/60 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {it.unesco && (
                    <span className="text-[9px] tracking-[0.25em] uppercase border border-gold/50 text-gold-deep bg-gold/5 px-2.5 py-1">
                      UNESCO · {it.unesco}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-vermilion mb-3">
                  <Music2 className="w-3 h-3" />
                  {it.type}
                </div>

                <h3 className="font-display text-2xl text-patina-deep mb-3 leading-tight group-hover:text-vermilion transition-colors">
                  {it.name}
                </h3>

                <p className="text-foreground/70 leading-relaxed text-sm mb-5 flex-1">
                  {it.desc}
                </p>

                <div className="pt-4 border-t border-border/70 space-y-1.5">
                  <div className="flex items-start gap-2 text-xs">
                    <MapPin className="w-3 h-3 text-patina mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{it.origin}</span>
                  </div>
                  <div className="text-xs font-serif-vn italic text-gold-deep pl-5">
                    {it.era}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUISINE */}
      <section className="py-20 px-6 bg-patina-deep text-background">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            Hương vị quê hương
          </span>
          <h2 className="font-display text-5xl mt-4 mb-10">
            Ẩm thực <span className="italic text-gradient-bronze">đặc sắc</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.cuisine.map((d) => (
              <span
                key={d}
                className="px-5 py-2.5 border border-gold/40 text-background/90 hover:bg-gold hover:text-patina-deep transition-colors cursor-default"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER REGIONS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-vermilion">
              Khám phá tiếp
            </span>
            <h2 className="font-display text-4xl mt-4 text-patina-deep">
              Hai miền còn lại
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {otherRegions.map((r) => (
              <Link
                key={r.slug}
                to={`/mien/${r.slug}`}
                className="group relative bg-card border border-border p-8 hover:shadow-bronze transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-4 right-6 font-display text-7xl text-gold-deep/15 group-hover:text-gold/40 transition-colors duration-700">
                  {r.code}
                </div>
                <div className="text-xs tracking-[0.3em] uppercase text-vermilion mb-2">
                  Tầng III
                </div>
                <h3 className="font-display text-3xl text-patina-deep mb-1 group-hover:text-vermilion transition-colors">
                  {r.name}
                </h3>
                <p className="font-serif-vn italic text-muted-foreground">{r.sub}</p>
                <div className="mt-6 text-xs tracking-[0.3em] uppercase text-gold-deep group-hover:text-gold flex items-center gap-2">
                  Khám phá <span aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RegionDetail;