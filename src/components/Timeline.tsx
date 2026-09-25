import { DrumOrnament } from "./DrumOrnament";
import { SectionTransition } from "./SectionTransition";
import { useT } from "@/contexts/LanguageContext";
import { useAutoTranslate } from "@/hooks/useAutoTranslate";
import { useMemo, useState } from "react";
import { timelineEvents } from "@/data/timelineEvents";
import { TimelineEraDialog } from "./TimelineEraDialog";

const eras = [
  {
    period: "~500.000 — 2879 TCN",
    name: "Thời tiền sử",
    rulers: "Văn hoá Sơn Vi · Hoà Bình · Bắc Sơn · Phùng Nguyên",
    description:
      "Con người đã sinh sống trên dải đất này từ thời đồ đá cũ. Từ hang động Tràng An đến nền nông nghiệp sơ khai của văn hoá Hoà Bình, cư dân dần chuyển sang trồng lúa, làm gốm, mở đường cho các nền văn hoá đồ đồng.",
    legacy: "Rìu đá Bắc Sơn · Hang Con Moong · Gốm Phùng Nguyên",
  },
  {
    period: "2879 TCN — 258 TCN",
    name: "Văn Lang — Âu Lạc",
    rulers: "Vua Hùng · An Dương Vương",
    description:
      "Buổi bình minh dựng nước. Văn hoá Đông Sơn rực rỡ với trống đồng, lưỡi cày, mũi tên đồng. Tín ngưỡng thờ trời, thờ Tổ tiên hình thành.",
    legacy: "Trống đồng · Bánh chưng bánh giầy · Truyền thuyết Lạc Long Quân",
  },
  {
    period: "111 TCN — 938",
    name: "Bắc thuộc & khởi nghĩa",
    rulers: "Hai Bà Trưng · Bà Triệu · Lý Bí",
    description:
      "Một nghìn năm gìn giữ tiếng Việt, áo Việt, hồn Việt giữa cơn sóng đồng hoá. Những cuộc khởi nghĩa nuôi mầm độc lập.",
    legacy: "Đền Hai Bà · Tinh thần bất khuất · Chữ Nôm phôi thai",
  },
  {
    period: "939 — 1009",
    name: "Ngô · Đinh · Tiền Lê",
    rulers: "Ngô Quyền · Đinh Tiên Hoàng · Lê Đại Hành",
    description:
      "Bạch Đằng dậy sóng — chấm dứt nghìn năm Bắc thuộc. Hoa Lư thành kinh đô, đất nước có vua, có niên hiệu, có quốc hiệu Đại Cồ Việt.",
    legacy: "Cố đô Hoa Lư · Cọc Bạch Đằng",
  },
  {
    period: "1010 — 1225",
    name: "Triều Lý",
    rulers: "Lý Công Uẩn → Lý Chiêu Hoàng",
    description:
      "Dời đô về Thăng Long. Phật giáo cực thịnh, chùa Một Cột, Văn Miếu Quốc Tử Giám — trường đại học đầu tiên của nước Việt.",
    legacy: "Chùa Một Cột · Văn Miếu · Chiếu dời đô",
  },
  {
    period: "1225 — 1400",
    name: "Triều Trần",
    rulers: "Trần Thái Tông · Trần Nhân Tông",
    description:
      "Ba lần đại thắng quân Nguyên Mông. Hội nghị Diên Hồng vang vọng tiếng 'quyết đánh'. Thiền phái Trúc Lâm — đỉnh cao tâm linh Việt.",
    legacy: "Hịch tướng sĩ · Phật hoàng Trúc Lâm",
  },
  {
    period: "1428 — 1789",
    name: "Hậu Lê — Tây Sơn",
    rulers: "Lê Lợi · Nguyễn Huệ",
    description:
      "Bình Ngô đại cáo — bản tuyên ngôn độc lập thứ hai. Quang Trung thần tốc đại phá quân Thanh, áo vải cờ đào lưu danh sử sách.",
    legacy: "Lam Sơn · Đống Đa · Luật Hồng Đức",
  },
  {
    period: "1802 — 1945",
    name: "Triều Nguyễn",
    rulers: "Gia Long → Bảo Đại",
    description:
      "Triều đại cuối cùng. Cố đô Huế với Đại Nội nguy nga, Nhã nhạc cung đình — di sản thế giới. Mở mang bờ cõi đến mũi Cà Mau.",
    legacy: "Quần thể Huế · Nhã nhạc · Áo dài",
  },
  {
    period: "1945 — 1975",
    name: "Độc lập & thống nhất",
    rulers: "Hồ Chí Minh · Võ Nguyên Giáp",
    description:
      "Cách mạng Tháng Tám khai sinh nước Việt Nam Dân chủ Cộng hoà. Ba mươi năm kháng chiến qua Điện Biên Phủ đến mùa xuân 1975, non sông thu về một mối.",
    legacy: "Tuyên ngôn độc lập · Điện Biên Phủ · Dinh Độc Lập",
  },
  {
    period: "1976 — nay",
    name: "Đổi mới & hội nhập",
    rulers: "Cộng hoà XHCN Việt Nam",
    description:
      "Từ Đại hội VI (1986), công cuộc Đổi mới đưa đất nước thoát khỏi khủng hoảng, gia nhập ASEAN, WTO, trở thành nền kinh tế năng động với nhiều di sản được UNESCO vinh danh.",
    legacy: "Đổi mới 1986 · ASEAN 1995 · WTO 2007",
  },
];

export const Timeline = () => {
  const t = useT();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  // Gom tất cả chuỗi cần dịch theo thứ tự cố định để dùng cache hiệu quả
  const allTexts = useMemo(
    () =>
      eras.flatMap((e) => [e.period, e.name, e.rulers, e.description, e.legacy]),
    [],
  );
  const translated = useAutoTranslate(allTexts);
  const erasI18n = useMemo(
    () =>
      eras.map((e, i) => ({
        period: translated[i * 5 + 0] ?? e.period,
        name: translated[i * 5 + 1] ?? e.name,
        rulers: translated[i * 5 + 2] ?? e.rulers,
        description: translated[i * 5 + 3] ?? e.description,
        legacy: translated[i * 5 + 4] ?? e.legacy,
      })),
    [translated],
  );
  return (
    <section id="timeline" className="relative py-32 px-6 paper-texture overflow-hidden scroll-mt-20">
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-vermilion/40" />
      <div className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-gold/30" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs tracking-[0.2em] uppercase text-vermilion font-medium">
            {t("Tầng I · Lịch sử hình thành", "Floor I · Origins of the nation")}
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-6 text-gradient-patina tracking-tight">
            {t("Bốn nghìn năm", "Four thousand years")} <span className="italic">{t("dựng nước", "of nation-building")}</span>
          </h2>
          <DrumOrnament className="text-gold w-48 h-5 mx-auto mt-8" />
        </div>

        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-patina to-transparent md:-translate-x-px" />

          <div className="space-y-20">
            {erasI18n.map((era, i) => (
              <SectionTransition
                key={era.name}
                variant={i % 2 === 0 ? "slide-right" : "slide-left"}
                speed="normal"
                once={false}
              >
              <div
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-patina border-2 border-background" />
                    <div className="absolute inset-0 rounded-full bg-patina-glow/40 animate-ripple" />
                  </div>
                </div>

                <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <div className="text-xs tracking-[0.15em] uppercase text-vermilion mb-2">
                    {era.period}
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl text-patina-deep mb-2 tracking-tight">
                    {era.name}
                  </h3>
                  <div className="text-sm text-muted-foreground italic mb-4 font-serif-vn text-base">
                    {era.rulers}
                  </div>
                </div>

                <div className={`pl-20 md:pl-0 ${i % 2 === 0 ? "md:pl-16" : "md:text-right md:pr-16"}`}>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {era.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                    {era.legacy.split(" · ").map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 border border-patina/30 text-patina rounded-full bg-card"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {timelineEvents[i]?.length ? (
                    <div className={`mt-5 flex items-center gap-3 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                      <div className="flex -space-x-3">
                        {timelineEvents[i].slice(0, 3).map((ev) => (
                          <img key={ev.title} src={ev.image} alt="" loading="lazy"
                            className="w-10 h-10 rounded-full object-cover border-2 border-background" />
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpenIdx(i)}
                        className="text-sm font-medium text-vermilion hover:underline underline-offset-4"
                      >
                        {t(`Xem ${timelineEvents[i].length} sự kiện & câu chuyện →`, `See ${timelineEvents[i].length} events & stories →`)}
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
              </SectionTransition>
            ))}
          </div>
        </div>
      </div>
      {openIdx !== null && (
        <TimelineEraDialog
          open
          onOpenChange={(o) => !o && setOpenIdx(null)}
          eraName={erasI18n[openIdx].name}
          period={erasI18n[openIdx].period}
          events={timelineEvents[openIdx]}
        />
      )}
    </section>
  );
};
