import { DrumOrnament, SunStar } from "./DrumOrnament";

export const Footer = () => {
  return (
    <footer className="relative bg-patina-deep text-background py-20 px-6 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 opacity-10">
        <SunStar className="w-full h-full text-gold animate-spin-slow" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <DrumOrnament className="text-gold w-48 h-5 mx-auto mb-8" />

        <blockquote className="font-display text-3xl md:text-5xl italic text-background/90 leading-tight max-w-3xl mx-auto">
          "Dân ta phải biết sử ta,
          <br />
          cho tường gốc tích nước nhà Việt Nam."
        </blockquote>
        <cite className="block mt-6 text-gold text-sm tracking-[0.3em] uppercase not-italic">
          — Hồ Chí Minh
        </cite>

        <DrumOrnament className="text-gold w-48 h-5 mx-auto my-12" />

        <div className="grid md:grid-cols-3 gap-8 text-left text-sm text-background/60 max-w-3xl mx-auto">
          <div>
            <div className="text-gold uppercase tracking-widest text-xs mb-3">Khám phá</div>
            <ul className="space-y-2">
              <li><a href="#timeline" className="hover:text-gold transition-colors">Lịch sử</a></li>
              <li><a href="#heritage" className="hover:text-gold transition-colors">Di sản phi vật thể</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Bản đồ vùng miền</a></li>
            </ul>
          </div>
          <div>
            <div className="text-gold uppercase tracking-widest text-xs mb-3">Tham gia</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold transition-colors">Đóng góp tư liệu</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Ủng hộ bảo tồn</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Tình nguyện viên</a></li>
            </ul>
          </div>
          <div>
            <div className="text-gold uppercase tracking-widest text-xs mb-3">Liên hệ</div>
            <ul className="space-y-2">
              <li>contact@hồnviệt.vn</li>
              <li>Hà Nội · Huế · Sài Gòn</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10 text-xs text-background/40 tracking-widest uppercase">
          © {new Date().getFullYear()} Hồn Việt · Bảo tàng số di sản Việt Nam
        </div>
      </div>
    </footer>
  );
};
