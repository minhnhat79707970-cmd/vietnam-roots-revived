import quanHo from "@/assets/quan-ho.jpg";
import caTru from "@/assets/ca-tru.jpg";
import nhaNhac from "@/assets/nha-nhac.jpg";
import congChieng from "@/assets/cong-chieng.jpg";
import { DrumOrnament } from "./DrumOrnament";

const items = [
  {
    img: nhaNhac,
    title: "Nhã nhạc cung đình Huế",
    year: "UNESCO 2003",
    region: "Cố đô Huế",
    desc: "Âm nhạc nghi lễ của các vua chúa triều Nguyễn — sự hoà quyện tinh tế giữa nhạc khí, vũ đạo và nghi thức cung đình.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: congChieng,
    title: "Không gian văn hoá Cồng Chiêng",
    year: "UNESCO 2005",
    region: "Tây Nguyên",
    desc: "Tiếng cồng chiêng vang vọng giữa đại ngàn — linh hồn của các dân tộc Ê Đê, Ba Na, Gia Rai.",
    span: "md:col-span-2",
  },
  {
    img: quanHo,
    title: "Dân ca Quan họ Bắc Ninh",
    year: "UNESCO 2009",
    region: "Kinh Bắc",
    desc: "Liền anh liền chị đối đáp giao duyên qua những câu hát mượt mà bên hồ sen mùa hội Lim.",
    span: "",
  },
  {
    img: caTru,
    title: "Ca trù",
    year: "UNESCO 2009",
    region: "Đồng bằng Bắc Bộ",
    desc: "Nghệ thuật hát thơ tinh tế với phách, đàn đáy và trống chầu — di sản cần bảo vệ khẩn cấp.",
    span: "",
  },
];

export const HeritageGrid = () => {
  return (
    <section id="heritage" className="relative py-32 px-6 bg-patina-deep text-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-gold font-medium">
            Tầng II · Di sản phi vật thể
          </span>
          <h2 className="font-display text-5xl md:text-7xl mt-6">
            Tiếng vọng <span className="italic text-gradient-bronze">ngàn năm</span>
          </h2>
          <p className="text-background/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            Mười lăm di sản văn hoá phi vật thể của Việt Nam đã được UNESCO ghi danh —
            mỗi điệu hát, mỗi tiếng đàn là một mạch nguồn của hồn dân tộc.
          </p>
          <DrumOrnament className="text-gold w-48 h-5 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-4 auto-rows-[280px] gap-4">
          {items.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden bg-patina cursor-pointer ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-[var(--ease-bronze)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-patina-deep via-patina-deep/40 to-transparent" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors duration-700" />

              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold bg-patina-deep/60 backdrop-blur-sm px-2 py-1">
                  {item.year}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-background/70 bg-patina-deep/60 backdrop-blur-sm px-2 py-1">
                  {item.region}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700">
                <h3 className="font-display text-2xl md:text-3xl text-background mb-2">
                  {item.title}
                </h3>
                <p className="text-background/70 text-sm leading-relaxed max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Other heritage chips */}
        <div className="mt-16">
          <div className="text-center text-xs tracking-[0.3em] uppercase text-gold/70 mb-6">
            Và nhiều di sản khác
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Hát Xoan Phú Thọ",
              "Tín ngưỡng thờ Mẫu Tam phủ",
              "Hội Gióng",
              "Đờn ca tài tử Nam Bộ",
              "Dân ca Ví, Giặm Nghệ Tĩnh",
              "Nghi lễ kéo co",
              "Bài Chòi Trung Bộ",
              "Then Tày, Nùng, Thái",
              "Nghệ thuật Xòe Thái",
              "Nghệ thuật làm gốm Chăm",
              "Tín ngưỡng thờ Hùng Vương",
            ].map((h) => (
              <span
                key={h}
                className="text-sm px-4 py-2 border border-gold/30 text-background/80 hover:border-gold hover:text-gold transition-colors cursor-pointer"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
