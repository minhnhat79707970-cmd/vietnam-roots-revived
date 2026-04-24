import { DrumOrnament } from "./DrumOrnament";
import tetImg from "@/assets/festivals/tet.jpg";
import hungVuongImg from "@/assets/festivals/hung-vuong.jpg";
import hoiLimImg from "@/assets/festivals/hoi-lim.jpg";
import phatDanImg from "@/assets/festivals/phat-dan.jpg";
import trungThuImg from "@/assets/festivals/trung-thu.jpg";
import hoiGiongImg from "@/assets/festivals/hoi-giong.jpg";

const festivals = [
  { date: "01/01 ÂL", name: "Tết Nguyên Đán", place: "Toàn quốc", desc: "Tết cổ truyền — sum họp gia đình, bánh chưng xanh, cành đào hồng.", img: tetImg },
  { date: "10/03 ÂL", name: "Giỗ Tổ Hùng Vương", place: "Đền Hùng, Phú Thọ", desc: "Quốc giỗ — 'Dù ai đi ngược về xuôi, nhớ ngày giỗ Tổ mồng mười tháng ba.'", img: hungVuongImg },
  { date: "13/01 ÂL", name: "Hội Lim", place: "Bắc Ninh", desc: "Hội xuân Quan họ — liền anh liền chị hát đối trên đồi Lim, thuyền rồng.", img: hoiLimImg },
  { date: "15/04 ÂL", name: "Lễ hội Phật Đản", place: "Toàn quốc", desc: "Tưởng niệm ngày Đức Phật đản sinh, thả đèn hoa đăng trên sông.", img: phatDanImg },
  { date: "15/08 ÂL", name: "Tết Trung Thu", place: "Toàn quốc", desc: "Tết của trẻ em — đèn lồng, múa lân, bánh nướng bánh dẻo dưới trăng rằm.", img: trungThuImg },
  { date: "9-12/04 ÂL", name: "Hội Gióng", place: "Sóc Sơn — Phù Đổng", desc: "Tưởng niệm Thánh Gióng đánh giặc Ân — di sản văn hoá phi vật thể UNESCO.", img: hoiGiongImg },
];

export const Festivals = () => {
  return (
    <section className="relative py-32 px-6 paper-texture">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-vermilion font-medium">
            Tầng IV · Lễ hội & phong tục
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-6 text-gradient-patina">
            Mùa hội <span className="italic">quê hương</span>
          </h2>
          <DrumOrnament className="text-gold w-48 h-5 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((f) => (
            <article
              key={f.name}
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
