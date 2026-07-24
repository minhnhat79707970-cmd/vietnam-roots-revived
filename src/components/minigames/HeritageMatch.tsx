import { useMemo, useState } from "react";
import { RotateCcw, Check, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/contexts/LanguageContext";
import { useAutoTranslate } from "@/hooks/useAutoTranslate";
import { cn } from "@/lib/utils";

type Pair = { heritage: { vi: string; en: string }; region: { vi: string; en: string; key: string } };

const REGIONS = {
  bac: { vi: "Miền Bắc", en: "Northern Vietnam" },
  trung: { vi: "Miền Trung", en: "Central Vietnam" },
  nam: { vi: "Miền Nam", en: "Southern Vietnam" },
};

const POOL: Pair[] = [
  { heritage: { vi: "Ca trù", en: "Ca trù" }, region: { ...REGIONS.bac, key: "bac" } },
  { heritage: { vi: "Hát Xoan", en: "Xoan singing" }, region: { ...REGIONS.bac, key: "bac" } },
  { heritage: { vi: "Quan họ Bắc Ninh", en: "Quan họ folk songs" }, region: { ...REGIONS.bac, key: "bac" } },
  { heritage: { vi: "Hội Gióng", en: "Gióng Festival" }, region: { ...REGIONS.bac, key: "bac" } },
  { heritage: { vi: "Vịnh Hạ Long", en: "Hạ Long Bay" }, region: { ...REGIONS.bac, key: "bac" } },
  { heritage: { vi: "Nhã nhạc cung đình Huế", en: "Huế Royal Court Music" }, region: { ...REGIONS.trung, key: "trung" } },
  { heritage: { vi: "Phố cổ Hội An", en: "Hội An Ancient Town" }, region: { ...REGIONS.trung, key: "trung" } },
  { heritage: { vi: "Thánh địa Mỹ Sơn", en: "Mỹ Sơn Sanctuary" }, region: { ...REGIONS.trung, key: "trung" } },
  { heritage: { vi: "Bài chòi", en: "Bài chòi" }, region: { ...REGIONS.trung, key: "trung" } },
  { heritage: { vi: "Cồng chiêng Tây Nguyên", en: "Central Highlands Gongs" }, region: { ...REGIONS.trung, key: "trung" } },
  { heritage: { vi: "Đờn ca tài tử", en: "Đờn ca tài tử" }, region: { ...REGIONS.nam, key: "nam" } },
  { heritage: { vi: "Nghệ thuật Chăm Pa", en: "Chăm heritage" }, region: { ...REGIONS.trung, key: "trung" } },
];

const shuffle = <T,>(a: T[]) => {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
};

const ROUND = 6;

export const HeritageMatch = () => {
  const t = useT();
  const [seed, setSeed] = useState(0);
  const round = useMemo(() => shuffle(POOL).slice(0, ROUND), [seed]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const texts = useMemo(() => round.map((p) => p.heritage.vi), [round]);
  const tr = useAutoTranslate(texts);

  const setPick = (i: number, key: string) => {
    if (checked) return;
    setAnswers((a) => ({ ...a, [i]: key }));
  };

  const correctCount = round.filter((p, i) => answers[i] === p.region.key).length;
  const allAnswered = round.every((_, i) => answers[i]);

  const restart = () => {
    setSeed((s) => s + 1);
    setAnswers({});
    setChecked(false);
  };

  const regionOptions: { key: keyof typeof REGIONS; label: string }[] = [
    { key: "bac", label: t(REGIONS.bac.vi, REGIONS.bac.en) },
    { key: "trung", label: t(REGIONS.trung.vi, REGIONS.trung.en) },
    { key: "nam", label: t(REGIONS.nam.vi, REGIONS.nam.en) },
  ];

  return (
    <div>
      <p className="text-foreground/70 text-center mb-8 max-w-xl mx-auto text-sm">
        {t(
          "Nối mỗi di sản với vùng miền tương ứng của nó.",
          "Match each heritage to the region where it belongs.",
        )}
      </p>

      <div className="space-y-4">
        {round.map((p, i) => {
          const label = tr[i] ?? p.heritage.vi;
          const picked = answers[i];
          const isRight = checked && picked === p.region.key;
          const isWrong = checked && picked && picked !== p.region.key;
          return (
            <div
              key={`${p.heritage.vi}-${i}`}
              className={cn(
                "p-4 rounded-md border bg-background transition-colors",
                !checked && "border-gold/25",
                isRight && "border-patina bg-patina/10",
                isWrong && "border-vermilion/60 bg-vermilion/5",
              )}
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="font-display text-base md:text-lg text-patina-deep">{label}</span>
                {checked && (
                  <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    {t(p.region.vi, p.region.en)}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {regionOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setPick(i, opt.key)}
                    disabled={checked}
                    className={cn(
                      "text-xs md:text-sm px-3 py-2 rounded border transition-colors",
                      picked === opt.key
                        ? "border-gold bg-gold/15 text-patina-deep"
                        : "border-gold/20 hover:border-gold/50 hover:bg-gold/5",
                      checked && picked === opt.key && opt.key !== p.region.key && "border-vermilion/60 bg-vermilion/10 text-vermilion",
                      checked && opt.key === p.region.key && "border-patina bg-patina/10 text-patina-deep",
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        {checked ? (
          <>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-gold" />
              <span className="font-display text-2xl text-patina-deep">
                {correctCount}/{round.length}
              </span>
            </div>
            <Button onClick={restart} variant="default" size="sm" className="gap-2">
              <RotateCcw className="w-4 h-4" /> {t("Chơi lại", "Play again")}
            </Button>
          </>
        ) : (
          <Button
            onClick={() => setChecked(true)}
            disabled={!allAnswered}
            className="ml-auto gap-2"
            size="sm"
          >
            <Check className="w-4 h-4" /> {t("Kiểm tra", "Check")}
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeritageMatch;