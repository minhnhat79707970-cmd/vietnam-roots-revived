import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Award, Sparkles } from "lucide-react";
import { getHeritageBySlug, heritages } from "@/data/heritages";
import { DrumOrnament, SunStar } from "@/components/DrumOrnament";
import { Footer } from "@/components/Footer";
import NotFound from "./NotFound";

const HeritageDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const heritage = slug ? getHeritageBySlug(slug) : undefined;

  if (!heritage) return <NotFound />;

  const idx = heritages.findIndex((h) => h.slug === heritage.slug);
  const prev = heritages[(idx - 1 + heritages.length) % heritages.length];
  const next = heritages[(idx + 1) % heritages.length];

  const badgeColor =
    heritage.unescoType === "Cần bảo vệ khẩn cấp"
      ? "text-vermilion border-vermilion/40 bg-vermilion/10"
      : heritage.unescoType === "Kiệt tác"
      ? "text-gold border-gold/50 bg-gold/10"
      : "text-patina border-patina/40 bg-patina/10";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero — toàn màn hình hình ảnh */}
      <header className="relative h-[88vh] min-h-[600px] overflow-hidden bg-patina-deep">
        <img
          src={heritage.img}
          alt={heritage.title}
          width={1280}
          height={896}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-patina-deep via-patina-deep/40 to-patina-deep/70" />

        {/* Mặt trời trống đồng quay */}
        <SunStar className="absolute top-12 right-8 md:top-20 md:right-20 w-32 h-32 md:w-48 md:h-48 text-gold/30 animate-spin-slow" />

        {/* Nav back */}
        <nav className="absolute top-0 left-0 right-0 z-10 px-6 md:px-12 py-6 flex items-center justify-between">
          <Link
            to="/#heritage"
            className="group inline-flex items-center gap-2 text-background/80 hover:text-gold transition-colors text-xs tracking-[0.3em] uppercase"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Trở về di sản
          </Link>
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold/70">
            Di sản · {String(idx + 1).padStart(2, "0")} / {String(heritages.length).padStart(2, "0")}
          </div>
        </nav>

        {/* Title block */}
        <div className="absolute inset-x-0 bottom-0 px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 border backdrop-blur-sm ${badgeColor}`}>
                UNESCO {heritage.year}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 border border-background/30 text-background/80 backdrop-blur-sm">
                {heritage.unescoType}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 border border-background/30 text-background/80 backdrop-blur-sm flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                {heritage.region}
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-background leading-[0.95] mb-6 max-w-4xl">
              {heritage.title}
            </h1>
            <p className="font-serif-vn italic text-2xl md:text-3xl text-gold-light max-w-2xl">
              {heritage.subtitle}
            </p>
            <DrumOrnament className="text-gold/60 w-56 h-5 mt-8" />
          </div>
        </div>
      </header>

      {/* Mô tả tổng quan + đặc điểm */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          {/* Cột nội dung chính */}
          <div className="md:col-span-7">
            <div className="text-[10px] tracking-[0.4em] uppercase text-patina mb-4">
              Khái quát
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-patina-deep mb-8 leading-tight">
              Hồn cốt của <span className="italic text-gradient-bronze">di sản</span>
            </h2>
            <div className="space-y-6">
              {heritage.longDesc.map((p, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar đặc điểm */}
          <aside className="md:col-span-5">
            <div className="sticky top-8 bg-secondary p-8 border border-gold/20">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-gold-deep mb-6">
                <Sparkles className="w-3 h-3" />
                Đặc trưng nổi bật
              </div>
              <dl className="space-y-5">
                {heritage.characteristics.map((c) => (
                  <div key={c.label} className="border-b border-gold/15 pb-4 last:border-b-0 last:pb-0">
                    <dt className="text-[11px] tracking-[0.2em] uppercase text-patina/70 mb-1.5">
                      {c.label}
                    </dt>
                    <dd className="font-serif-vn text-lg text-patina-deep leading-snug">
                      {c.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 pt-6 border-t border-gold/20">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-deep mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> Khởi nguyên
                </div>
                <div className="font-serif-vn italic text-xl text-patina-deep">
                  {heritage.origin}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Dòng thời gian lịch sử — full bleed patina */}
      <section className="relative py-32 px-6 md:px-12 bg-patina-deep text-background overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
              Mạch nguồn lịch sử
            </span>
            <h2 className="font-display text-5xl md:text-6xl mt-4">
              Hành trình <span className="italic text-gradient-bronze">qua thời gian</span>
            </h2>
            <DrumOrnament className="text-gold w-48 h-5 mx-auto mt-6" />
          </div>

          <div className="relative pl-10 md:pl-16 border-l-2 border-gold/30 space-y-12">
            {heritage.history.map((h, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[46px] md:-left-[70px] top-2 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-gold ring-4 ring-patina-deep" />
                  <div className="hidden md:block w-8 h-px bg-gold/40" />
                </div>
                <div className="font-serif-vn italic text-2xl md:text-3xl text-gold-light mb-3">
                  {h.era}
                </div>
                <p className="text-background/75 leading-relaxed text-base md:text-lg max-w-2xl">
                  {h.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bảo tồn hiện tại */}
      <section className="py-24 px-6 md:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-10 h-10 text-vermilion mx-auto mb-6" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-vermilion">
            Bảo tồn hiện nay
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-patina-deep mt-4 mb-8 leading-tight">
            Tiếp nối <span className="italic text-gradient-bronze">mạch sống</span>
          </h2>
          <p className="font-serif-vn italic text-xl md:text-2xl text-patina-deep/80 leading-relaxed">
            "{heritage.preservation}"
          </p>
        </div>
      </section>

      {/* Điều hướng prev / next */}
      <section className="py-20 px-6 md:px-12 bg-background border-t border-gold/15">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Link
            to={`/di-san/${prev.slug}`}
            className="group relative overflow-hidden bg-patina-deep p-8 border border-gold/20 hover:border-gold transition-colors"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">
              ← Di sản trước
            </div>
            <div className="font-display text-2xl md:text-3xl text-background group-hover:text-gold transition-colors">
              {prev.title}
            </div>
          </Link>
          <Link
            to={`/di-san/${next.slug}`}
            className="group relative overflow-hidden bg-patina-deep p-8 border border-gold/20 hover:border-gold transition-colors text-right"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">
              Di sản tiếp theo →
            </div>
            <div className="font-display text-2xl md:text-3xl text-background group-hover:text-gold transition-colors">
              {next.title}
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeritageDetail;
