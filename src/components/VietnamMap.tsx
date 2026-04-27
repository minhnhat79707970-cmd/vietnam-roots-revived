import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { regionsData, RegionSlug } from "@/data/regions";

// Import representative imagery per region
import halong from "@/assets/landmarks/halong-bay.jpg";
import sapa from "@/assets/landmarks/sapa-fansipan.jpg";
import trangAn from "@/assets/landmarks/trang-an.jpg";
import hanoi from "@/assets/landmarks/hanoi-old-quarter.jpg";
import quanHo from "@/assets/quan-ho.jpg";
import hoiGiong from "@/assets/hoi-giong.jpg";

import hue from "@/assets/landmarks/hue-citadel.jpg";
import hoiAn from "@/assets/landmarks/hoi-an.jpg";
import sonDoong from "@/assets/landmarks/son-doong.jpg";
import haiVan from "@/assets/landmarks/hai-van-lang-co.jpg";
import nhaNhac from "@/assets/nha-nhac.jpg";
import congChieng from "@/assets/cong-chieng.jpg";

import saigon from "@/assets/landmarks/saigon.jpg";
import caiRang from "@/assets/landmarks/cai-rang.jpg";
import phuQuoc from "@/assets/landmarks/phu-quoc.jpg";
import daLat from "@/assets/landmarks/da-lat.jpg";
import donCa from "@/assets/don-ca-tai-tu.jpg";
import traSu from "@/assets/landmarks/tra-su.jpg";

type Hotspot = {
  id: string;
  region: RegionSlug;
  // percentage coords on the SVG viewBox 100x180
  x: number;
  y: number;
  name: string;
  caption: string;
  image: string;
};

const HOTSPOTS: Hotspot[] = [
  // ===== MIỀN BẮC =====
  { id: "sapa", region: "bac", x: 32, y: 14, name: "Sa Pa — Fansipan", caption: "Nóc nhà Đông Dương · Lào Cai", image: sapa },
  { id: "halong", region: "bac", x: 60, y: 22, name: "Vịnh Hạ Long", caption: "Di sản Thiên nhiên Thế giới · Quảng Ninh", image: halong },
  { id: "hanoi", region: "bac", x: 50, y: 26, name: "Phố cổ Hà Nội", caption: "Trái tim ngàn năm văn hiến", image: hanoi },
  { id: "quanho", region: "bac", x: 55, y: 30, name: "Dân ca Quan họ", caption: "UNESCO 2009 · Bắc Ninh", image: quanHo },
  { id: "trangan", region: "bac", x: 48, y: 35, name: "Tràng An — Hoa Lư", caption: "Di sản hỗn hợp · Ninh Bình", image: trangAn },
  { id: "hoigiong", region: "bac", x: 53, y: 28, name: "Hội Gióng", caption: "Lễ hội phi vật thể · UNESCO 2010", image: hoiGiong },

  // ===== MIỀN TRUNG =====
  { id: "sondoong", region: "trung", x: 45, y: 52, name: "Phong Nha — Sơn Đoòng", caption: "Hang động lớn nhất thế giới · Quảng Bình", image: sonDoong },
  { id: "hue", region: "trung", x: 50, y: 60, name: "Cố đô Huế", caption: "Hoàng thành triều Nguyễn · UNESCO 1993", image: hue },
  { id: "nhanhac", region: "trung", x: 52, y: 63, name: "Nhã nhạc cung đình", caption: "Phi vật thể đầu tiên · UNESCO 2003", image: nhaNhac },
  { id: "haivan", region: "trung", x: 55, y: 66, name: "Đèo Hải Vân — Lăng Cô", caption: "Thiên hạ đệ nhất hùng quan", image: haiVan },
  { id: "hoian", region: "trung", x: 58, y: 70, name: "Phố cổ Hội An", caption: "Thương cảng cổ · UNESCO 1999", image: hoiAn },
  { id: "congchieng", region: "trung", x: 48, y: 84, name: "Cồng Chiêng Tây Nguyên", caption: "Không gian văn hoá · UNESCO 2005", image: congChieng },

  // ===== MIỀN NAM =====
  { id: "dalat", region: "nam", x: 56, y: 100, name: "Đà Lạt", caption: "Thành phố sương mù · Lâm Đồng", image: daLat },
  { id: "saigon", region: "nam", x: 50, y: 118, name: "Sài Gòn — TP.HCM", caption: "Hòn ngọc Viễn Đông", image: saigon },
  { id: "donca", region: "nam", x: 42, y: 130, name: "Đờn ca tài tử", caption: "Phi vật thể · UNESCO 2013", image: donCa },
  { id: "cairang", region: "nam", x: 38, y: 138, name: "Chợ nổi Cái Răng", caption: "Văn hoá sông nước · Cần Thơ", image: caiRang },
  { id: "trasu", region: "nam", x: 30, y: 144, name: "Rừng tràm Trà Sư", caption: "Sinh cảnh ngập nước · An Giang", image: traSu },
  { id: "phuquoc", region: "nam", x: 18, y: 138, name: "Đảo Phú Quốc", caption: "Đảo ngọc vịnh Thái Lan", image: phuQuoc },
];

const REGION_FILL: Record<RegionSlug, string> = {
  bac: "hsl(var(--patina) / 0.18)",
  trung: "hsl(var(--vermilion) / 0.18)",
  nam: "hsl(var(--gold) / 0.18)",
};

const REGION_STROKE: Record<RegionSlug, string> = {
  bac: "hsl(var(--patina))",
  trung: "hsl(var(--vermilion))",
  nam: "hsl(var(--gold-deep))",
};

const REGION_LABEL: Record<RegionSlug, string> = {
  bac: "Miền Bắc",
  trung: "Miền Trung",
  nam: "Miền Nam",
};

export const VietnamMap = () => {
  const [active, setActive] = useState<Hotspot | null>(HOTSPOTS[2]);
  const [filter, setFilter] = useState<RegionSlug | "all">("all");

  const visible = useMemo(
    () => (filter === "all" ? HOTSPOTS : HOTSPOTS.filter((h) => h.region === filter)),
    [filter]
  );

  return (
    <section
      id="map"
      className="relative py-32 px-6 overflow-hidden scroll-mt-20 bg-gradient-to-b from-background via-card/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-vermilion font-medium">
            Bản đồ di sản · Tương tác
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-6 text-gradient-patina">
            Dải đất <span className="italic">hình chữ S</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/70 leading-relaxed">
            Di chuyển con trỏ trên bản đồ để khám phá những di sản tiêu biểu của ba miền — từ vịnh Hạ Long
            đến Cồng Chiêng Tây Nguyên và đồng bằng sông Cửu Long.
          </p>

          {/* Filter */}
          <div className="mt-8 inline-flex flex-wrap gap-2 p-1 border border-border bg-card/60 backdrop-blur">
            {(["all", "bac", "trung", "nam"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className={`px-4 py-2 text-xs tracking-[0.25em] uppercase transition-colors ${
                  filter === k
                    ? "bg-foreground text-background"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {k === "all" ? "Toàn quốc" : REGION_LABEL[k]}
              </button>
            ))}
          </div>
        </div>

        {/* Map + Detail panel */}
        <div className="grid lg:grid-cols-[1fr_minmax(0,420px)] gap-10 items-start">
          {/* SVG Map */}
          <div className="relative bg-card/40 border border-border p-4 md:p-8 shadow-bronze">
            <svg
              viewBox="0 0 100 180"
              className="w-full h-auto max-h-[78vh] mx-auto block"
              role="img"
              aria-label="Bản đồ di sản Việt Nam"
            >
              <defs>
                <pattern id="vnGrid" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M 4 0 L 0 0 0 4" fill="none" stroke="hsl(var(--border))" strokeWidth="0.1" />
                </pattern>
              </defs>

              <rect x="0" y="0" width="100" height="180" fill="url(#vnGrid)" opacity="0.4" />

              {/* Stylised Vietnam silhouette split into 3 regions */}
              {/* MIỀN BẮC */}
              <path
                d="M 25 5 L 70 8 L 78 22 L 70 38 L 55 42 L 38 40 L 28 30 Z"
                fill={filter === "all" || filter === "bac" ? REGION_FILL.bac : "hsl(var(--muted) / 0.2)"}
                stroke={REGION_STROKE.bac}
                strokeWidth="0.4"
                className="transition-all duration-500"
              />
              {/* MIỀN TRUNG (narrow strip) */}
              <path
                d="M 38 40 L 55 42 L 70 38 L 62 55 L 58 72 L 55 88 L 50 92 L 45 88 L 42 70 L 40 55 Z"
                fill={filter === "all" || filter === "trung" ? REGION_FILL.trung : "hsl(var(--muted) / 0.2)"}
                stroke={REGION_STROKE.trung}
                strokeWidth="0.4"
                className="transition-all duration-500"
              />
              {/* MIỀN NAM */}
              <path
                d="M 50 92 L 55 88 L 62 95 L 60 110 L 55 125 L 48 138 L 35 148 L 22 145 L 12 138 L 18 122 L 30 105 L 42 95 Z"
                fill={filter === "all" || filter === "nam" ? REGION_FILL.nam : "hsl(var(--muted) / 0.2)"}
                stroke={REGION_STROKE.nam}
                strokeWidth="0.4"
                className="transition-all duration-500"
              />

              {/* Region labels */}
              <text x="50" y="22" textAnchor="middle" fontSize="3.4" fill="hsl(var(--patina-deep))" className="font-display" opacity="0.7">
                BẮC BỘ
              </text>
              <text x="52" y="68" textAnchor="middle" fontSize="3" fill="hsl(var(--vermilion))" className="font-display" opacity="0.7">
                TRUNG BỘ
              </text>
              <text x="38" y="125" textAnchor="middle" fontSize="3.4" fill="hsl(var(--gold-deep))" className="font-display" opacity="0.7">
                NAM BỘ
              </text>

              {/* Hotspots */}
              {visible.map((h) => {
                const isActive = active?.id === h.id;
                return (
                  <g
                    key={h.id}
                    transform={`translate(${h.x}, ${h.y})`}
                    onMouseEnter={() => setActive(h)}
                    onClick={() => setActive(h)}
                    className="cursor-pointer"
                  >
                    {/* pulse */}
                    <circle r="2.6" fill={REGION_STROKE[h.region]} opacity="0.25">
                      <animate
                        attributeName="r"
                        values="2.2;3.6;2.2"
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.35;0;0.35"
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      r={isActive ? 1.8 : 1.2}
                      fill={REGION_STROKE[h.region]}
                      stroke="hsl(var(--background))"
                      strokeWidth="0.3"
                      className="transition-all"
                    />
                    {isActive && (
                      <text
                        x="0"
                        y="-2.6"
                        textAnchor="middle"
                        fontSize="2.2"
                        fill="hsl(var(--foreground))"
                        className="pointer-events-none"
                      >
                        {h.name}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Hoàng Sa / Trường Sa markers */}
              <g opacity="0.55">
                <rect x="82" y="60" width="6" height="4" fill="none" stroke="hsl(var(--border))" strokeWidth="0.2" strokeDasharray="0.5 0.5" />
                <text x="85" y="63" textAnchor="middle" fontSize="1.6" fill="hsl(var(--foreground))">Hoàng Sa</text>
                <rect x="78" y="105" width="8" height="5" fill="none" stroke="hsl(var(--border))" strokeWidth="0.2" strokeDasharray="0.5 0.5" />
                <text x="82" y="108.5" textAnchor="middle" fontSize="1.6" fill="hsl(var(--foreground))">Trường Sa</text>
              </g>
            </svg>
          </div>

          {/* Detail card */}
          <div className="lg:sticky lg:top-24">
            {active ? (
              <article className="bg-card border border-border overflow-hidden shadow-bronze">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div
                    className="text-[10px] tracking-[0.35em] uppercase mb-3"
                    style={{ color: REGION_STROKE[active.region] }}
                  >
                    {REGION_LABEL[active.region]}
                  </div>
                  <h3 className="font-display text-3xl text-patina-deep leading-tight">
                    {active.name}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/70 italic font-serif-vn">
                    {active.caption}
                  </p>

                  <Link
                    to={`/mien/${active.region}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold-deep hover:text-vermilion transition-colors border-t border-border pt-4 w-full"
                  >
                    Xem chi tiết {REGION_LABEL[active.region]} <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ) : (
              <div className="bg-card/50 border border-dashed border-border p-10 text-center text-foreground/50 text-sm">
                Chọn một điểm trên bản đồ để xem di sản.
              </div>
            )}

            {/* Mini legend / stats */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              {(Object.keys(regionsData) as RegionSlug[]).map((slug) => {
                const count = HOTSPOTS.filter((h) => h.region === slug).length;
                return (
                  <button
                    key={slug}
                    onClick={() => setFilter(slug)}
                    className="text-left p-3 border border-border bg-card/40 hover:bg-card transition-colors"
                  >
                    <div
                      className="w-2 h-2 rounded-full mb-2"
                      style={{ background: REGION_STROKE[slug] }}
                    />
                    <div className="text-[10px] tracking-[0.25em] uppercase text-foreground/60">
                      {REGION_LABEL[slug]}
                    </div>
                    <div className="font-display text-2xl text-patina-deep mt-1">{count}</div>
                    <div className="text-[10px] text-foreground/50">điểm di sản</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VietnamMap;