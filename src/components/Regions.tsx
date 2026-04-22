import templeImg from "@/assets/heritage-temple.jpg";
import { SunStar } from "./DrumOrnament";

const regions = [
  {
    code: "I",
    name: "Miền Bắc",
    sub: "Cái nôi văn hoá Việt",
    items: ["Văn Miếu — Quốc Tử Giám", "Hoàng thành Thăng Long", "Vịnh Hạ Long", "Tràng An — Hoa Lư", "Sa Pa — ruộng bậc thang"],
  },
  {
    code: "II",
    name: "Miền Trung",
    sub: "Đất kinh kỳ — Chăm Pa",
    items: ["Cố đô Huế", "Phố cổ Hội An", "Thánh địa Mỹ Sơn", "Phong Nha — Kẻ Bàng", "Tháp Chăm Po Nagar"],
  },
  {
    code: "III",
    name: "Miền Nam",
    sub: "Văn hoá sông nước",
    items: ["Địa đạo Củ Chi", "Chợ nổi Cái Răng", "Đờn ca tài tử", "Lễ hội Bà Chúa Xứ", "Mũi Cà Mau"],
  },
];

export const Regions = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={templeImg} alt="" aria-hidden className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-vermilion font-medium">
            Tầng III · Bản đồ di sản
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-6 text-gradient-patina">
            Ba miền <span className="italic">một dải</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {regions.map((r) => (
            <div
              key={r.name}
              className="group relative bg-card border border-border p-8 hover:shadow-bronze transition-all duration-700"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
