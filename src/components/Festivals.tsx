import { DrumOrnament } from "./DrumOrnament";

const festivals = [
  { date: "01/01 ÂL", name: "Tết Nguyên Đán", place: "Toàn quốc", desc: "Tết cổ truyền — sum họp gia đình, bánh chưng xanh, cành đào hồng." },
  { date: "10/03 ÂL", name: "Giỗ Tổ Hùng Vương", place: "Đền Hùng, Phú Thọ", desc: "Quốc giỗ — 'Dù ai đi ngược về xuôi, nhớ ngày giỗ Tổ mồng mười tháng ba.'" },
  { date: "13/01 ÂL", name: "Hội Lim", place: "Bắc Ninh", desc: "Hội xuân Quan họ — liền anh liền chị hát đối trên đồi Lim, thuyền rồng." },
  { date: "15/04 ÂL", name: "Lễ hội Phật Đản", place: "Toàn quốc", desc: "Tưởng niệm ngày Đức Phật đản sinh, thả đèn hoa đăng trên sông." },
  { date: "15/08 ÂL", name: "Tết Trung Thu", place: "Toàn quốc", desc: "Tết của trẻ em — đèn lồng, múa lân, bánh nướng bánh dẻo dưới trăng rằm." },
  { date: "9-12/04 ÂL", name: "Hội Gióng", place: "Sóc Sơn — Phù Đổng", desc: "Tưởng niệm Thánh Gióng đánh giặc Ân — di sản văn hoá phi vật thể UNESCO." },
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

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {festivals.map((f) => (
            <div
              key={f.name}
              className="group relative bg-background p-8 md:p-10 hover:bg-card transition-colors duration-500"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="text-xs tracking-[0.3em] uppercase text-vermilion mb-3">
                    {f.date} · {f.place}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-patina-deep mb-3">
                    {f.name}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed">{f.desc}</p>
                </div>
                <div className="font-display text-6xl text-gold/20 group-hover:text-gold/50 transition-colors duration-500 leading-none">
                  ⊛
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
