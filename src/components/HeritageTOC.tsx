import { useEffect, useRef, useState } from "react";
import { List, ChevronLeft, ChevronRight, GripVertical } from "lucide-react";

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
  const [collapsed, setCollapsed] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef<{ offsetX: number; offsetY: number; moved: boolean } | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Khôi phục vị trí đã lưu
  useEffect(() => {
    try {
      const saved = localStorage.getItem("toc-collapsed-pos");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed?.x === "number" && typeof parsed?.y === "number") {
          setPos(parsed);
        }
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Xử lý kéo nút mục lục thu gọn
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => {
      if (!dragState.current) return;
      const btn = buttonRef.current;
      const w = btn?.offsetWidth ?? 120;
      const h = btn?.offsetHeight ?? 40;
      const x = Math.min(
        Math.max(8, e.clientX - dragState.current.offsetX),
        window.innerWidth - w - 8
      );
      const y = Math.min(
        Math.max(8, e.clientY - dragState.current.offsetY),
        window.innerHeight - h - 8
      );
      dragState.current.moved = true;
      setPos({ x, y });
    };
    const onUp = () => {
      setDragging(false);
      if (pos) {
        try {
          localStorage.setItem("toc-collapsed-pos", JSON.stringify(pos));
        } catch {
          /* ignore */
        }
      }
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, pos]);

  const handleDragStart = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    dragState.current = {
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      moved: false,
    };
    setDragging(true);
  };

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
      <nav
        className={`hidden lg:block fixed z-30 max-w-[240px] ${
          collapsed && pos
            ? ""
            : "left-6 top-1/2 -translate-y-1/2"
        }`}
        style={
          collapsed && pos
            ? { left: `${pos.x}px`, top: `${pos.y}px` }
            : undefined
        }
      >
        {collapsed ? (
          <button
            ref={buttonRef}
            onPointerDown={handleDragStart}
            onClick={(e) => {
              // Chỉ mở mục lục nếu không phải vừa kéo
              if (dragState.current?.moved) {
                e.preventDefault();
                dragState.current.moved = false;
                return;
              }
              setCollapsed(false);
            }}
            aria-label="Mở mục lục (kéo để di chuyển)"
            title="Nhấn để mở • Kéo để di chuyển"
            className={`group relative bg-gradient-to-br from-background/95 to-secondary/40 backdrop-blur-md border border-gold/40 shadow-bronze p-3 rounded-sm flex items-center gap-2 text-gold-deep hover:bg-gold/10 transition-colors touch-none select-none ${
              dragging ? "cursor-grabbing scale-105 shadow-lg" : "cursor-grab"
            }`}
          >
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-gold" />
            <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-gold" />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-gold" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-gold" />
            <GripVertical className="w-3.5 h-3.5 opacity-50" />
            <List className="w-4 h-4" />
            <span className="font-serif-vn italic text-sm">Mục lục</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
        <div className="relative bg-gradient-to-br from-background/95 to-secondary/40 backdrop-blur-md border border-gold/40 shadow-bronze p-5 rounded-sm">
          {/* Góc trang trí */}
          <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-gold" />
          <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-gold" />
          <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-gold" />
          <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-gold" />

          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-gold/30">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <div className="font-serif-vn italic text-base text-gold-deep tracking-wide">
                Mục lục
              </div>
            </div>
            <button
              onClick={() => setCollapsed(true)}
              aria-label="Ẩn mục lục"
              className="text-gold-deep/70 hover:text-gold-deep hover:bg-gold/10 p-1 rounded-sm transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
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
        )}
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