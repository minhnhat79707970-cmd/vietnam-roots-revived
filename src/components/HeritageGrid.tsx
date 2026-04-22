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
    origin: "Thế kỷ XIII — XIX",
    history: [
      { era: "Thế kỷ XIII", note: "Manh nha dưới triều Trần với các loại nhã nhạc, đại nhạc dùng trong tế lễ." },
      { era: "Thế kỷ XV", note: "Triều Lê hệ thống hoá thành Nhã nhạc cung đình, phân chia Đường thượng chi nhạc và Đường hạ chi nhạc." },
      { era: "1802 — 1945", note: "Đạt đỉnh cao dưới triều Nguyễn tại kinh đô Huế: dùng trong tế Giao, tế Miếu, đại triều, thường triều và yến tiệc." },
      { era: "2003", note: "UNESCO ghi danh là Kiệt tác Di sản truyền khẩu và phi vật thể của nhân loại — di sản đầu tiên của Việt Nam." },
    ],
  },
  {
    img: congChieng,
    title: "Không gian văn hoá Cồng Chiêng",
    year: "UNESCO 2005",
    region: "Tây Nguyên",
    desc: "Tiếng cồng chiêng vang vọng giữa đại ngàn — linh hồn của các dân tộc Ê Đê, Ba Na, Gia Rai.",
    span: "md:col-span-2",
    origin: "Hơn 3.500 năm",
    history: [
      { era: "Thời tiền sử", note: "Cồng chiêng có nguồn gốc từ truyền thống văn hoá Đông Sơn cổ đại — hậu duệ trực tiếp của trống đồng." },
      { era: "Hàng nghìn năm", note: "Gắn với 17 dân tộc bản địa Tây Nguyên: Ê Đê, Ba Na, Gia Rai, Mnông, Xơ Đăng… trong mọi nghi lễ vòng đời." },
      { era: "2005", note: "UNESCO công nhận là Kiệt tác Di sản truyền khẩu và phi vật thể của nhân loại." },
    ],
  },
  {
    img: quanHo,
    title: "Dân ca Quan họ Bắc Ninh",
    year: "UNESCO 2009",
    region: "Kinh Bắc",
    desc: "Liền anh liền chị đối đáp giao duyên qua những câu hát mượt mà bên hồ sen mùa hội Lim.",
    span: "",
    origin: "Thế kỷ XIII",
    history: [
      { era: "Thế kỷ XIII", note: "Hình thành ở vùng Kinh Bắc cổ — 49 làng Quan họ gốc tại Bắc Ninh và Bắc Giang." },
      { era: "Thế kỷ XVIII — XIX", note: "Phát triển rực rỡ với hệ thống hơn 200 làn điệu cổ; tục kết chạ, kết bạn Quan họ thành nét văn hoá đặc sắc." },
      { era: "2009", note: "UNESCO ghi danh là Di sản văn hoá phi vật thể đại diện của nhân loại." },
    ],
  },
  {
    img: caTru,
    title: "Ca trù",
    year: "UNESCO 2009",
    region: "Đồng bằng Bắc Bộ",
    desc: "Nghệ thuật hát thơ tinh tế với phách, đàn đáy và trống chầu — di sản cần bảo vệ khẩn cấp.",
    span: "",
    origin: "Thế kỷ XI",
    history: [
      { era: "Thế kỷ XI", note: "Xuất hiện dưới triều Lý với tên gọi 'hát ả đào', diễn xướng trong cung đình và đền miếu." },
      { era: "Thế kỷ XV — XIX", note: "Phát triển thành nghệ thuật bác học của giới nho sĩ; gắn với thể thơ hát nói của Nguyễn Công Trứ, Cao Bá Quát." },
      { era: "Đầu thế kỷ XX", note: "Suy tàn theo các ca quán; nhiều giáo phường tan rã sau 1945." },
      { era: "2009", note: "UNESCO ghi danh vào Danh sách di sản văn hoá phi vật thể cần bảo vệ khẩn cấp." },
    ],
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

        <div className="space-y-12">
          {items.map((item, idx) => (
            <article
              key={item.title}
              className={`group grid md:grid-cols-12 gap-8 items-stretch ${
                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Hình ảnh */}
              <div className="md:col-span-5 relative overflow-hidden aspect-[4/5] bg-patina">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-[var(--ease-bronze)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-patina-deep/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold bg-patina-deep/70 backdrop-blur-sm px-3 py-1.5">
                    {item.year}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-background/80 bg-patina-deep/70 backdrop-blur-sm px-3 py-1.5">
                    {item.region}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase text-gold-light/90">
                  Khởi nguyên · {item.origin}
                </div>
              </div>

              {/* Nội dung & lịch sử */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-3">
                  Di sản số 0{idx + 1}
                </div>
                <h3 className="font-display text-4xl md:text-5xl text-background mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-background/70 leading-relaxed mb-8 max-w-xl">
                  {item.desc}
                </p>

                {/* Dòng thời gian lịch sử */}
                <div className="relative pl-6 border-l border-gold/30 space-y-5">
                  <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-gold" />
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold/80 -mt-1 mb-2">
                    Lịch sử hình thành
                  </div>
                  {item.history.map((h, i) => (
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
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other heritage chips */}
        <div className="mt-24 pt-16 border-t border-gold/15">
          <div className="text-center text-xs tracking-[0.3em] uppercase text-gold/70 mb-6">
            Và nhiều di sản khác đã được UNESCO ghi danh
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              { name: "Hội Gióng (đền Phù Đổng & đền Sóc)", year: "2010" },
              { name: "Hát Xoan Phú Thọ", year: "2011 / 2017" },
              { name: "Tín ngưỡng thờ Hùng Vương", year: "2012" },
              { name: "Đờn ca tài tử Nam Bộ", year: "2013" },
              { name: "Dân ca Ví, Giặm Nghệ Tĩnh", year: "2014" },
              { name: "Nghi lễ kéo co", year: "2015" },
              { name: "Tín ngưỡng thờ Mẫu Tam phủ", year: "2016" },
              { name: "Bài Chòi Trung Bộ", year: "2017" },
              { name: "Thực hành Then Tày, Nùng, Thái", year: "2019" },
              { name: "Nghệ thuật Xòe Thái", year: "2021" },
              { name: "Nghệ thuật làm gốm Chăm", year: "2022" },
            ].map((h) => (
              <span
                key={h.name}
                className="group text-sm px-4 py-2 border border-gold/30 text-background/80 hover:border-gold hover:text-gold transition-colors cursor-pointer flex items-center gap-2"
              >
                {h.name}
                <span className="text-[10px] tracking-widest text-gold/60 group-hover:text-gold">
                  · {h.year}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
