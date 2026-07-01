import { ReactNode, useEffect, useRef, useState } from "react";

type Variant = "fade" | "slide-up" | "slide-left" | "slide-right" | "zoom";
type Speed = "slow" | "normal" | "fast";

const SPEED_MS: Record<Speed, number> = {
  slow: 1400,
  normal: 900,
  fast: 550,
};

const HIDDEN_TRANSFORM: Record<Variant, string> = {
  fade: "none",
  "slide-up": "translate3d(0, 56px, 0)",
  "slide-left": "translate3d(56px, 0, 0)",
  "slide-right": "translate3d(-56px, 0, 0)",
  zoom: "scale(0.96)",
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  speed?: Speed;
  /** Rebuild-on-leave lets the section re-animate when re-entered from the other side */
  once?: boolean;
  className?: string;
  id?: string;
  delay?: number;
}

/**
 * Contextual scroll transition wrapper.
 * - Fades / slides / zooms a section when it enters the viewport.
 * - Controlled speed via `speed` prop (slow | normal | fast).
 * - Fully respects `prefers-reduced-motion`.
 */
export const SectionTransition = ({
  children,
  variant = "slide-up",
  speed = "normal",
  once = true,
  className,
  id,
  delay = 0,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduce(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      setInView(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce, once]);

  const duration = SPEED_MS[speed];

  const style: React.CSSProperties = reduce
    ? { opacity: 1, transform: "none" }
    : {
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : HIDDEN_TRANSFORM[variant],
        filter: inView ? "blur(0)" : "blur(6px)",
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter ${Math.round(duration * 0.7)}ms ease ${delay}ms`,
        willChange: "opacity, transform, filter",
      };

  return (
    <div ref={ref} id={id} className={className} style={style}>
      {children}
    </div>
  );
};

export default SectionTransition;