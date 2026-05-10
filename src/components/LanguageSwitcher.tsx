import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

type Variant = "hero" | "footer";

export const LanguageSwitcher = ({ variant = "hero" }: { variant?: Variant }) => {
  const { language, setLanguage } = useLanguage();

  const baseClasses =
    variant === "hero"
      ? "border-gold/40 bg-patina-deep/40 text-gold-light hover:bg-gold/10"
      : "border-gold/30 bg-transparent text-background/70 hover:text-gold hover:border-gold/60";

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border ${baseClasses} backdrop-blur-sm px-1.5 py-1 text-xs tracking-widest uppercase font-medium`}
      role="group"
      aria-label="Language switcher"
    >
      <Globe className="w-3.5 h-3.5 ml-1 opacity-70" aria-hidden />
      <button
        type="button"
        onClick={() => setLanguage("vi")}
        aria-pressed={language === "vi"}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          language === "vi" ? "bg-gold text-patina-deep" : "hover:text-gold"
        }`}
      >
        VI
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          language === "en" ? "bg-gold text-patina-deep" : "hover:text-gold"
        }`}
      >
        EN
      </button>
    </div>
  );
};