import { DrumOrnament, SunStar } from "./DrumOrnament";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useT } from "@/contexts/LanguageContext";

export const Footer = () => {
  const t = useT();
  return (
    <footer className="relative bg-patina-deep text-background py-20 px-6 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 opacity-10">
        <SunStar className="w-full h-full text-gold animate-spin-slow" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <DrumOrnament className="text-gold w-48 h-5 mx-auto mb-8" />

        <blockquote className="font-display text-3xl md:text-5xl italic text-background/90 leading-tight max-w-3xl mx-auto">
          {t(
            '"Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam."',
            '"Our people must know our history, to grasp the roots and origins of our nation, Vietnam."',
          )}
        </blockquote>
        <cite className="block mt-6 text-gold text-sm tracking-[0.3em] uppercase not-italic">
          — Hồ Chí Minh
        </cite>

        <DrumOrnament className="text-gold w-48 h-5 mx-auto my-12" />

        <div className="grid md:grid-cols-3 gap-8 text-left text-sm text-background/80 max-w-3xl mx-auto">
          <div>
            <div className="text-gold uppercase tracking-widest text-xs mb-3">{t("Khám phá", "Explore")}</div>
            <ul className="space-y-2">
              <li><a href="#timeline" className="hover:text-gold transition-colors">{t("Lịch sử", "History")}</a></li>
              <li><a href="#heritage" className="hover:text-gold transition-colors">{t("Di sản phi vật thể", "Intangible heritage")}</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">{t("Bản đồ vùng miền", "Regional map")}</a></li>
            </ul>
          </div>
          <div>
            <div className="text-gold uppercase tracking-widest text-xs mb-3">{t("Tham gia", "Get involved")}</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold transition-colors">{t("Đóng góp tư liệu", "Contribute materials")}</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">{t("Ủng hộ bảo tồn", "Support preservation")}</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">{t("Tình nguyện viên", "Volunteer")}</a></li>
            </ul>
          </div>
          <div>
            <div className="text-gold uppercase tracking-widest text-xs mb-3">{t("Liên hệ", "Contact")}</div>
            <ul className="space-y-2">
              <li>contact@hồnviệt.vn</li>
              <li>{t("Hà Nội · Huế · Sài Gòn", "Hà Nội · Huế · Sài Gòn")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <LanguageSwitcher variant="footer" />
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10 text-xs text-background/40 tracking-widest uppercase">
          © {new Date().getFullYear()} Hồn Việt · {t("Bảo tàng số di sản Việt Nam", "Digital museum of Vietnamese heritage")}
        </div>
      </div>
    </footer>
  );
};
