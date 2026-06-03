import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useT } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const sections = [
  { id: "timeline", labelVi: "Lịch sử", labelEn: "History" },
  { id: "heritage", labelVi: "Di sản", labelEn: "Heritage" },
  { id: "regions", labelVi: "Vùng miền", labelEn: "Regions" },
  { id: "festivals", labelVi: "Lễ hội", labelEn: "Festivals" },
  { id: "minigame", labelVi: "Minigame", labelEn: "Minigame" },
  { id: "gop-y", labelVi: "Góp ý", labelEn: "Feedback" },
];

export const SectionNav = () => {
  const t = useT();
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setVisible(y > heroHeight);

      // Determine active section
      const offset = 120;
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = s.id;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navHeight = navRef.current?.offsetHeight ?? 56;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-background/80 backdrop-blur-xl border-b border-gold/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileOpen(false);
            }}
            className="font-display text-lg text-gold-deep hover:text-vermilion transition-colors shrink-0"
          >
            Hồn Việt
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {sections.map((s) => {
              const isActive = s.id === active;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => handleClick(e, s.id)}
                    className={cn(
                      "relative px-3 py-1.5 text-sm tracking-wide rounded-sm transition-colors",
                      isActive
                        ? "text-gold-deep font-medium"
                        : "text-foreground/70 hover:text-foreground hover:bg-gold/5"
                    )}
                  >
                    {t(s.labelVi, s.labelEn)}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-gold-deep hover:bg-gold/10 rounded-sm transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gold/10 px-4 pb-4 pt-2 bg-background/95 backdrop-blur-xl">
            <ul className="space-y-1">
              {sections.map((s) => {
                const isActive = s.id === active;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={(e) => handleClick(e, s.id)}
                      className={cn(
                        "block px-3 py-2 text-sm rounded-sm transition-colors",
                        isActive
                          ? "bg-gold/10 text-gold-deep font-medium"
                          : "text-foreground/70 hover:text-foreground hover:bg-gold/5"
                      )}
                    >
                      {t(s.labelVi, s.labelEn)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
