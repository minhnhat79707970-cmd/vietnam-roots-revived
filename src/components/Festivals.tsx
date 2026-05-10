import { DrumOrnament } from "./DrumOrnament";
import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, MapPin, Sparkles, Compass } from "lucide-react";
import { useT } from "@/contexts/LanguageContext";
import { useAutoTranslate } from "@/hooks/useAutoTranslate";
import tetImg from "@/assets/festivals/tet.jpg";
import hungVuongImg from "@/assets/festivals/hung-vuong.jpg";
import hoiLimImg from "@/assets/festivals/hoi-lim.jpg";
import phatDanImg from "@/assets/festivals/phat-dan.jpg";
import trungThuImg from "@/assets/festivals/trung-thu.jpg";
import hoiGiongImg from "@/assets/festivals/hoi-giong.jpg";

type Region = "Bắc" | "Trung" | "Nam" | "Toàn quốc";

interface Festival {
  date: string;
  name: string;
  place: string;
  region: Region;
  desc: string;
  img: string;
  meaning: string;
  schedule: { time: string; activity: string }[];
  locations: string[];
}

const festivals: Festival[] = [
  {
    date: "01/01 ÂL",
    name: "Tết Nguyên Đán",
    place: "Toàn quốc",
    region: "Toàn quốc",
    desc: "Tết cổ truyền — sum họp gia đình, bánh chưng xanh, cành đào hồng.",
    img: tetImg,
    meaning:
      "Tết Nguyên Đán là dịp lễ thiêng liêng nhất trong năm của người Việt — đánh dấu sự khởi đầu của một chu kỳ mới, tưởng nhớ tổ tiên, gắn kết gia đình và cộng đồng. Mỗi nghi thức từ cúng giao thừa, hái lộc đến mừng tuổi đều mang ý nghĩa cầu mong an khang, thịnh vượng.",
    schedule: [
      { time: "23 tháng Chạp", activity: "Cúng ông Công ông Táo, dọn dẹp nhà cửa." },
      { time: "29-30 tháng Chạp", activity: "Gói bánh chưng, bày mâm ngũ quả, tất niên." },
      { time: "Đêm Giao thừa", activity: "Cúng giao thừa, đón thời khắc chuyển năm, hái lộc." },
      { time: "Mùng 1-3 Tết", activity: "Mừng tuổi, chúc Tết, đi lễ chùa đầu năm." },
    ],
    locations: [
      "Miền Bắc: chợ hoa Hàng Lược (Hà Nội), làng đào Nhật Tân, làng quất Tứ Liên.",
      "Miền Trung: chợ hoa Huế, đường hoa Bạch Đằng (Đà Nẵng).",
      "Miền Nam: đường hoa Nguyễn Huệ (TP.HCM), chợ hoa Bến Bình Đông.",
    ],
  },
  {
    date: "10/03 ÂL",
    name: "Giỗ Tổ Hùng Vương",
    place: "Đền Hùng, Phú Thọ",
    region: "Bắc",
    desc: "Quốc giỗ — 'Dù ai đi ngược về xuôi, nhớ ngày giỗ Tổ mồng mười tháng ba.'",
    img: hungVuongImg,
    meaning:
      "Là quốc lễ tưởng nhớ các Vua Hùng — những vị vua đầu tiên đã có công dựng nước Văn Lang. Lễ hội thể hiện đạo lý 'uống nước nhớ nguồn', là biểu tượng của tinh thần đoàn kết và cội nguồn dân tộc Việt Nam. Tín ngưỡng thờ cúng Hùng Vương đã được UNESCO công nhận là di sản văn hóa phi vật thể.",
    schedule: [
      { time: "Mùng 6/3 ÂL", activity: "Lễ giỗ Đức Quốc Tổ Lạc Long Quân." },
      { time: "Mùng 7/3 ÂL", activity: "Lễ dâng hương tưởng niệm Tổ Mẫu Âu Cơ." },
      { time: "Mùng 8-9/3 ÂL", activity: "Hội thi gói bánh chưng, giã bánh giầy, hát Xoan." },
      { time: "Mùng 10/3 ÂL", activity: "Đại lễ dâng hương các Vua Hùng tại Đền Thượng." },
    ],
    locations: [
      "Khu di tích lịch sử Đền Hùng — núi Nghĩa Lĩnh, xã Hy Cương, Việt Trì, Phú Thọ.",
      "Đền thờ Vua Hùng tại TP.HCM (Thảo Cầm Viên), Cần Thơ và nhiều địa phương khác.",
    ],
  },
  {
    date: "13/01 ÂL",
    name: "Hội Lim",
    place: "Bắc Ninh",
    region: "Bắc",
    desc: "Hội xuân Quan họ — liền anh liền chị hát đối trên đồi Lim, thuyền rồng.",
    img: hoiLimImg,
    meaning:
      "Hội Lim là lễ hội tiêu biểu của vùng Kinh Bắc, tôn vinh nghệ thuật Quan họ — di sản văn hóa phi vật thể của nhân loại. Hội thể hiện nét tinh tế, lịch lãm trong giao tiếp, tình yêu nam nữ và sự gắn kết cộng đồng làng quê Bắc Bộ.",
    schedule: [
      { time: "12/1 ÂL", activity: "Lễ rước, tế thần ở đình các làng quanh đồi Lim." },
      { time: "13/1 ÂL", activity: "Chính hội — hát Quan họ trên đồi, dưới thuyền rồng hồ làng." },
      { time: "13-14/1 ÂL", activity: "Trò chơi dân gian: đấu vật, đu tiên, dệt cửi, thi cờ người." },
    ],
    locations: [
      "Đồi Lim — thị trấn Lim, huyện Tiên Du, Bắc Ninh.",
      "Các làng Quan họ gốc: Lũng Giang, Lũng Sơn, Duệ Đông.",
    ],
  },
  {
    date: "15/04 ÂL",
    name: "Lễ hội Phật Đản",
    place: "Toàn quốc",
    region: "Toàn quốc",
    desc: "Tưởng niệm ngày Đức Phật đản sinh, thả đèn hoa đăng trên sông.",
    img: phatDanImg,
    meaning:
      "Đại lễ Phật Đản (Vesak) kỷ niệm ngày Đức Phật Thích Ca Mâu Ni đản sinh. Lễ hội mang thông điệp về từ bi, trí tuệ và hòa bình — là dịp Phật tử và cộng đồng cùng hướng về những giá trị nhân văn cao đẹp.",
    schedule: [
      { time: "8/4 ÂL", activity: "Khai mạc tuần lễ Phật Đản, trang trí xe hoa." },
      { time: "14/4 ÂL", activity: "Diễu hành xe hoa qua các tuyến phố lớn." },
      { time: "15/4 ÂL", activity: "Đại lễ tắm Phật, thả hoa đăng cầu quốc thái dân an." },
    ],
    locations: [
      "Miền Bắc: chùa Quán Sứ, chùa Bái Đính, chùa Tam Chúc.",
      "Miền Trung: chùa Từ Đàm, chùa Thiên Mụ (Huế) — trung tâm lớn nhất cả nước.",
      "Miền Nam: Việt Nam Quốc Tự, chùa Vĩnh Nghiêm (TP.HCM).",
    ],
  },
  {
    date: "15/08 ÂL",
    name: "Tết Trung Thu",
    place: "Toàn quốc",
    region: "Toàn quốc",
    desc: "Tết của trẻ em — đèn lồng, múa lân, bánh nướng bánh dẻo dưới trăng rằm.",
    img: trungThuImg,
    meaning:
      "Tết Trung Thu là tết đoàn viên và tết của thiếu nhi. Truyền thuyết Chú Cuội, chị Hằng cùng ánh trăng rằm tháng Tám gắn liền với tuổi thơ bao thế hệ người Việt, thể hiện ước mong sum vầy và hạnh phúc gia đình.",
    schedule: [
      { time: "Đầu tháng 8 ÂL", activity: "Làm đèn ông sao, đèn kéo quân, bày mâm cỗ trông trăng." },
      { time: "14/8 ÂL", activity: "Múa lân sư rồng khắp phố phường." },
      { time: "Đêm rằm 15/8", activity: "Phá cỗ, rước đèn, kể chuyện chị Hằng — chú Cuội." },
    ],
    locations: [
      "Phố Hàng Mã — Hà Nội: tâm điểm đèn lồng truyền thống.",
      "Phố cổ Hội An: đêm rằm thả đèn hoa đăng trên sông Hoài.",
      "Phố lồng đèn Lương Nhữ Học — quận 5, TP.HCM.",
    ],
  },
  {
    date: "9-12/04 ÂL",
    name: "Hội Gióng",
    place: "Sóc Sơn — Phù Đổng",
    region: "Bắc",
    desc: "Tưởng niệm Thánh Gióng đánh giặc Ân — di sản văn hoá phi vật thể UNESCO.",
    img: hoiGiongImg,
    meaning:
      "Hội Gióng tái hiện chiến công của Thánh Gióng — một trong Tứ Bất Tử của tín ngưỡng dân gian Việt Nam. Lễ hội biểu trưng cho tinh thần chống ngoại xâm, sức mạnh phi thường của dân tộc và khát vọng hòa bình. Được UNESCO ghi danh năm 2010.",
    schedule: [
      { time: "6/4 ÂL", activity: "Lễ rước nước, bao sái tượng Thánh." },
      { time: "8/4 ÂL", activity: "Lễ rước cờ, rước cỗ chay từ các thôn về đền Thượng." },
      { time: "9/4 ÂL", activity: "Chính hội — diễn xướng trận đánh, múa cờ lệnh." },
      { time: "12/4 ÂL", activity: "Lễ rước văn, tạ ơn và kết thúc hội." },
    ],
    locations: [
      "Đền Sóc — xã Phù Linh, huyện Sóc Sơn, Hà Nội.",
      "Đền Phù Đổng — xã Phù Đổng, huyện Gia Lâm, Hà Nội (quê hương Thánh Gióng).",
    ],
  },
];

const regionStyle: Record<Region, string> = {
  "Bắc": "bg-vermilion/15 text-vermilion border-vermilion/40",
  "Trung": "bg-gold/15 text-gold border-gold/40",
  "Nam": "bg-patina/20 text-patina border-patina/40",
  "Toàn quốc": "bg-bronze/15 text-bronze-light border-bronze/40",
};

export const Festivals = () => {
  const [selected, setSelected] = useState<Festival | null>(null);
  const t = useT();

  // Tự dịch toàn bộ chuỗi bên trong "festivals" theo ngôn ngữ hiện tại
  const allTexts = useMemo(() => {
    const arr: string[] = [];
    festivals.forEach((f) => {
      arr.push(f.name, f.place, f.desc, f.meaning);
      f.schedule.forEach((s) => arr.push(s.time, s.activity));
      f.locations.forEach((loc) => arr.push(loc));
    });
    return arr;
  }, []);
  const tr = useAutoTranslate(allTexts);
  const festivalsI18n = useMemo(() => {
    let i = 0;
    return festivals.map((f) => {
      const out = {
        ...f,
        name: tr[i++] ?? f.name,
        place: tr[i++] ?? f.place,
        desc: tr[i++] ?? f.desc,
        meaning: tr[i++] ?? f.meaning,
        schedule: f.schedule.map((s) => ({
          time: tr[i++] ?? s.time,
          activity: tr[i++] ?? s.activity,
        })),
        locations: f.locations.map((loc) => tr[i++] ?? loc),
      };
      return out;
    });
  }, [tr]);

  // Khi đổi ngôn ngữ, cập nhật bản chi tiết đang chọn
  const selectedI18n = selected
    ? festivalsI18n.find((x) => x === selected) ??
      festivalsI18n[festivals.findIndex((x) => x.name === selected.name)] ??
      selected
    : null;

  return (
    <section className="relative py-32 px-6 paper-texture">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-vermilion font-medium">
            {t("Tầng IV · Lễ hội & phong tục", "Floor IV · Festivals & customs")}
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-6 text-gradient-patina">
            {t("Mùa hội", "Seasons of festival")} <span className="italic">{t("quê hương", "of the homeland")}</span>
          </h2>
          <DrumOrnament className="text-gold w-48 h-5 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivalsI18n.map((f, idx) => (
            <article
              key={festivals[idx].name}
              className="group relative bg-card border border-border overflow-hidden hover:border-gold/60 hover:shadow-bronze transition-all duration-700 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-patina-deep/85 via-patina-deep/15 to-transparent" />
                <span
                  className={`absolute top-3 right-3 text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 border backdrop-blur-sm ${regionStyle[f.region]}`}
                >
                  {t("Miền", "Region")} {f.region}
                </span>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-gold-light">
                  <span>{f.date}</span>
                  <span className="font-serif-vn italic normal-case tracking-normal text-sm">{f.place}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl md:text-3xl text-patina-deep mb-3 leading-tight group-hover:text-vermilion transition-colors">
                  {f.name}
                </h3>
                <p className="text-foreground/75 leading-relaxed text-sm flex-1">{f.desc}</p>
                <button
                  onClick={() => setSelected(festivals[idx])}
                  className="mt-5 self-start text-xs tracking-[0.3em] uppercase text-vermilion border-b border-vermilion/40 pb-1 hover:text-gold hover:border-gold transition-colors"
                >
                  {t("Xem thêm", "Read more")} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-gold/30 p-0">
          {selectedI18n && selected && (
            <>
              <div className="relative aspect-[16/8] overflow-hidden">
                <img
                  src={selectedI18n.img}
                  alt={selectedI18n.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span
                  className={`absolute top-4 right-4 text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 border backdrop-blur-sm ${regionStyle[selected.region]}`}
                >
                  {t("Miền", "Region")} {selectedI18n.region}
                </span>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-gold-light mb-2">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {selectedI18n.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {selectedI18n.place}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-4">
                <DialogHeader className="text-left mb-6">
                  <DialogTitle className="font-display text-3xl md:text-4xl text-gradient-patina leading-tight">
                    {selectedI18n.name}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    {t("Chi tiết lễ hội", "Festival details")} {selectedI18n.name}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  <section>
                    <h4 className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-vermilion mb-3">
                      <Sparkles className="w-3.5 h-3.5" /> {t("Ý nghĩa", "Meaning")}
                    </h4>
                    <p className="text-foreground/80 leading-relaxed font-serif-vn">
                      {selectedI18n.meaning}
                    </p>
                  </section>

                  <section>
                    <h4 className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-vermilion mb-4">
                      <Calendar className="w-3.5 h-3.5" /> {t("Lịch trình", "Schedule")}
                    </h4>
                    <ul className="space-y-3">
                      {selectedI18n.schedule.map((s, i) => (
                        <li key={i} className="flex gap-4 border-l-2 border-gold/40 pl-4 py-1">
                          <span className="text-xs tracking-[0.2em] uppercase text-gold min-w-[140px] font-medium">
                            {s.time}
                          </span>
                          <span className="text-foreground/80 text-sm leading-relaxed flex-1">
                            {s.activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-vermilion mb-4">
                      <Compass className="w-3.5 h-3.5" /> {t("Địa điểm diễn ra theo miền", "Locations by region")}
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedI18n.locations.map((loc, i) => (
                        <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                          <MapPin className="w-4 h-4 text-bronze flex-shrink-0 mt-0.5" />
                          <span>{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
