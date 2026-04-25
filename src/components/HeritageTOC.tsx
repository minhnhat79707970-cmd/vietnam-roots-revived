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
      <nav className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30 max-w-[200px]">
        <div className="text-[10px] tracking-[0.3em] uppercase text-patina/60 mb-4 pl-3">
          Mục lục
        </div>
        <ul className="space-y-2 border-l border-gold/20 pl-3">
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`block text-xs tracking-wider transition-colors leading-snug py-1 -ml-[13px] pl-3 border-l-2 ${
                    isActive
                      ? "text-gold-deep border-gold font-medium"
                      : "text-patina/60 border-transparent hover:text-patina-deep hover:border-gold/40"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile: nút nổi mở danh sách */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở mục lục"
          className="w-12 h-12 rounded-full bg-patina-deep text-gold border border-gold/40 shadow-lg flex items-center justify-center hover:bg-patina transition-colors"
        >
          <List className="w-5 h-5" />
        </button>
        {open && (
          <div className="absolute bottom-14 right-0 w-64 bg-background border border-gold/30 shadow-xl p-5">
            <div className="text-[10px] tracking-[0.3em] uppercase text-patina/60 mb-3">
              Mục lục
            </div>
            <ul className="space-y-2">
              {items.map((item) => {
                const isActive = item.id === active;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                      className={`block text-sm py-1.5 transition-colors ${
                        isActive
                          ? "text-gold-deep font-medium"
                          : "text-patina-deep hover:text-gold-deep"
                      }`}
                    >
                      · {item.label}
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