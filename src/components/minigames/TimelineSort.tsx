import { useMemo, useState } from "react";
import { Check, RotateCcw, ArrowUp, ArrowDown, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/contexts/LanguageContext";
import { useAutoTranslate } from "@/hooks/useAutoTranslate";
import { cn } from "@/lib/utils";

type Event = { year: number; vi: string; en: string };

const POOL: Event[] = [
  { year: -2879, vi: "Vua Hùng lập nhà nước Văn Lang", en: "Hùng Kings found Văn Lang" },
  { year: 40, vi: "Khởi nghĩa Hai Bà Trưng", en: "Trưng Sisters' uprising" },
  { year: 938, vi: "Ngô Quyền đại thắng Bạch Đằng", en: "Ngô Quyền wins at Bạch Đằng" },
  { year: 1010, vi: "Lý Thái Tổ dời đô về Thăng Long", en: "Capital moved to Thăng Long" },
  { year: 1076, vi: "Lập Quốc Tử Giám", en: "Quốc Tử Giám founded" },
  { year: 1288, vi: "Trận Bạch Đằng lần ba đại phá Nguyên Mông", en: "Third Bạch Đằng defeats Mongols" },
  { year: 1428, vi: "Lê Lợi lập nhà Hậu Lê", en: "Lê Lợi founds the Later Lê" },
  { year: 1789, vi: "Quang Trung đại phá quân Thanh ở Đống Đa", en: "Quang Trung routs Qing at Đống Đa" },
  { year: 1802, vi: "Nguyễn Ánh lập nhà Nguyễn, định đô ở Huế", en: "Nguyễn dynasty founded, capital at Huế" },
  { year: 1945, vi: "Tuyên ngôn Độc lập khai sinh nước Việt Nam DCCH", en: "Declaration of Independence" },
];

const shuffle = <T,>(a: T[]) => {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
};

const ROUND = 5;

export const TimelineSort = () => {
  const t = useT();
  const [seed, setSeed] = useState(0);
  const picked = useMemo(() => shuffle(POOL).slice(0, ROUND), [seed]);
  const [order, setOrder] = useState<Event[]>(() => shuffle(picked));
  const [checked, setChecked] = useState(false);

  const solution = useMemo(() => [...picked].sort((a, b) => a.year - b.year), [picked]);
  const texts = useMemo(() => order.map((e) => e.vi), [order]);
  const tr = useAutoTranslate(texts);

  const move = (i: number, dir: -1 | 1) => {
    if (checked) return;
    const j = i + dir;
    if (j < 0 || j >= order.length) return;
    const next = [...order];
    [next[i], next[j]] = [next[j], next[i]];
    setOrder(next);
  };

  const correctCount = order.filter((e, i) => e.year === solution[i].year).length;
  const allCorrect = correctCount === order.length;

  const restart = () => {
    setSeed((s) => s + 1);
    setChecked(false);
    setTimeout(() => setOrder(shuffle(POOL).slice(0, ROUND)), 0);
  };

  return (
    <div>
      <p className="text-foreground/70 text-center mb-8 max-w-xl mx-auto text-sm">
        {t(
          "Sắp xếp các sự kiện theo đúng trình tự thời gian (cổ nhất ở trên).",
          "Arrange the events in chronological order (oldest on top).",
        )}
      </p>

      <ol className="space-y-3">
        {order.map((e, i) => {
          const label = tr[i] ?? e.vi;
          const isRight = checked && e.year === solution[i].year;
          const isWrong = checked && e.year !== solution[i].year;
          return (
            <li
              key={`${e.year}-${i}`}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-md border bg-background transition-colors",
                !checked && "border-gold/25",
                isRight && "border-patina bg-patina/10",
                isWrong && "border-vermilion/60 bg-vermilion/5",
              )}
            >
              <span className="font-display text-sm text-gold-deep w-5 shrink-0">{i + 1}.</span>
              <span className="flex-1 leading-relaxed text-sm md:text-base">{label}</span>
              {checked ? (
                <span className="text-xs tracking-[0.15em] text-muted-foreground">{e.year > 0 ? e.year : `${-e.year} TCN`}</span>
              ) : (
                <div className="flex gap-1">
                  <button
                    onClick={() => move(i, -1)}
                    disabled={i === 0}
                    className="p-1.5 rounded border border-gold/20 hover:bg-gold/10 disabled:opacity-30"
                    aria-label="Up"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => move(i, 1)}
                    disabled={i === order.length - 1}
                    className="p-1.5 rounded border border-gold/20 hover:bg-gold/10 disabled:opacity-30"
                    aria-label="Down"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        {checked ? (
          <>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-gold" />
              <span className="font-display text-2xl text-patina-deep">
                {correctCount}/{order.length}
              </span>
              <span className="text-sm text-foreground/70">
                {allCorrect
                  ? t("Hoàn hảo!", "Perfect!")
                  : t("vị trí đúng", "correctly placed")}
              </span>
            </div>
            <Button onClick={restart} variant="default" size="sm" className="gap-2">
              <RotateCcw className="w-4 h-4" /> {t("Chơi lại", "Play again")}
            </Button>
          </>
        ) : (
          <Button onClick={() => setChecked(true)} className="ml-auto gap-2" size="sm">
            <Check className="w-4 h-4" /> {t("Kiểm tra", "Check")}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TimelineSort;