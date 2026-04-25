import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
}

interface HeritageTOCProps {
  items: TOCItem[];
}

export const HeritageTOC = ({ items }: HeritageTOCProps) => {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const offset = 120;
      let current = items[0]?.id ?? "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = item.id;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Desktop: dạng dọc cố định bên trái */}
      <nav className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30 max-w-[240px]">
        <div className="relative bg-gradient-to-br from-background/95 to-secondary/40 backdrop-blur-md border border-gold/40 shadow-bronze p-5 rounded-sm">
          {/* Góc trang trí */}
          <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-gold" />
          <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-gold" />
          <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-gold" />
          <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-gold" />

          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gold/30">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <div className="font-serif-vn italic text-base text-gold-deep tracking-wide">
              Mục lục
            </div>
          </div>
          <ul className="space-y-1">
            {items.map((item, idx) => {
              const isActive = item.id === active;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`group flex items-baseline gap-2 transition-all leading-snug py-1.5 px-2 rounded-sm ${
                      isActive
                        ? "bg-gold/15 text-gold-deep"
                        : "text-patina-deep/70 hover:text-gold-deep hover:bg-gold/5"
                    }`}
                  >
                    <span
                      className={`font-display text-xs tabular-nums transition-colors ${
                        isActive ? "text-gold-deep" : "text-patina/40 group-hover:text-gold"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-serif-vn text-[15px] leading-tight transition-all ${
                        isActive ? "italic font-semibold" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile: nút nổi mở danh sách */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở mục lục"
          className="w-14 h-14 rounded-full bg-patina-deep text-gold border-2 border-gold shadow-bronze flex items-center justify-center hover:bg-patina transition-colors relative"
        >
          <List className="w-6 h-6" />
          <span className="absolute inset-0 rounded-full border border-gold/40 animate-ripple" />
        </button>
        {open && (
          <div className="absolute bottom-16 right-0 w-72 bg-background border border-gold/40 shadow-bronze p-5 rounded-sm">
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-gold" />
            <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-gold" />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-gold" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-gold" />
            <div className="font-serif-vn italic text-lg text-gold-deep mb-3 pb-2 border-b border-gold/30">
              Mục lục
            </div>
            <ul className="space-y-1">
              {items.map((item, idx) => {
                const isActive = item.id === active;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                      className={`flex items-baseline gap-2 py-1.5 px-2 rounded-sm transition-colors ${
                        isActive
                          ? "bg-gold/15 text-gold-deep"
                          : "text-patina-deep hover:bg-gold/5 hover:text-gold-deep"
                      }`}
                    >
                      <span className="font-display text-xs text-gold/70 tabular-nums">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className={`font-serif-vn text-base ${isActive ? "italic font-semibold" : ""}`}>
                        {item.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};