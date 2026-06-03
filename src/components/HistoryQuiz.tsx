import { useMemo, useState } from "react";
import { Sparkles, RotateCcw, Check, X as XIcon, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DrumOrnament } from "./DrumOrnament";
import { useT } from "@/contexts/LanguageContext";
import { useAutoTranslate } from "@/hooks/useAutoTranslate";
import { cn } from "@/lib/utils";

type Question = {
  q: string;
  options: string[];
  answer: number; // index
  explain: string;
};

const QUESTIONS: Question[] = [
  {
    q: "Ai là người lập ra nhà nước Văn Lang — nhà nước đầu tiên của người Việt?",
    options: ["An Dương Vương", "Vua Hùng", "Lý Công Uẩn", "Ngô Quyền"],
    answer: 1,
    explain:
      "Theo truyền thuyết, các Vua Hùng đã lập ra nhà nước Văn Lang vào khoảng năm 2879 TCN.",
  },
  {
    q: "Trận đánh nào năm 938 chấm dứt hơn một nghìn năm Bắc thuộc?",
    options: ["Bạch Đằng", "Như Nguyệt", "Chi Lăng", "Đống Đa"],
    answer: 0,
    explain:
      "Ngô Quyền dùng kế cọc gỗ trên sông Bạch Đằng đánh tan quân Nam Hán năm 938, mở ra kỷ nguyên độc lập.",
  },
  {
    q: "Vị vua nào dời đô từ Hoa Lư về Thăng Long năm 1010?",
    options: ["Lý Thái Tổ", "Lý Thánh Tông", "Trần Thái Tông", "Lê Thái Tổ"],
    answer: 0,
    explain:
      "Lý Công Uẩn (Lý Thái Tổ) ban Chiếu dời đô năm 1010, đặt nền móng cho kinh thành Thăng Long.",
  },
  {
    q: "Triều đại nào ba lần đánh thắng quân Nguyên Mông?",
    options: ["Nhà Lý", "Nhà Trần", "Nhà Hồ", "Nhà Lê sơ"],
    answer: 1,
    explain:
      "Nhà Trần với Trần Hưng Đạo cùng quân dân Đại Việt đã ba lần đại phá quân Nguyên Mông (1258, 1285, 1288).",
  },
  {
    q: "Hội nghị Diên Hồng do vua nào triệu tập?",
    options: ["Trần Thái Tông", "Trần Nhân Tông", "Trần Thánh Tông", "Trần Anh Tông"],
    answer: 2,
    explain:
      "Năm 1284, Thượng hoàng Trần Thánh Tông triệu các bô lão về điện Diên Hồng hỏi kế đánh giặc Nguyên.",
  },
  {
    q: "'Bình Ngô đại cáo' do ai soạn thảo?",
    options: ["Nguyễn Trãi", "Lê Lợi", "Nguyễn Bỉnh Khiêm", "Phan Bội Châu"],
    answer: 0,
    explain:
      "Nguyễn Trãi thừa lệnh Lê Lợi viết Bình Ngô đại cáo năm 1428 — bản tuyên ngôn độc lập thứ hai của dân tộc.",
  },
  {
    q: "Trận Đống Đa mùa xuân Kỷ Dậu 1789 gắn liền với vị anh hùng nào?",
    options: ["Nguyễn Huệ", "Nguyễn Ánh", "Lê Lợi", "Trần Hưng Đạo"],
    answer: 0,
    explain:
      "Quang Trung — Nguyễn Huệ thần tốc tiến quân ra Bắc, đại phá 29 vạn quân Thanh tại Ngọc Hồi — Đống Đa.",
  },
  {
    q: "Văn Miếu — Quốc Tử Giám được xây dựng dưới triều đại nào?",
    options: ["Nhà Lý", "Nhà Trần", "Nhà Lê", "Nhà Nguyễn"],
    answer: 0,
    explain:
      "Văn Miếu được lập năm 1070 thời Lý Thánh Tông; Quốc Tử Giám lập năm 1076 — trường đại học đầu tiên của Đại Việt.",
  },
  {
    q: "Cố đô nào là kinh đô của triều Nguyễn (1802 — 1945)?",
    options: ["Hoa Lư", "Thăng Long", "Huế", "Gia Định"],
    answer: 2,
    explain:
      "Huế là kinh đô triều Nguyễn, nơi còn lưu giữ Đại Nội, lăng tẩm và Nhã nhạc cung đình — di sản UNESCO.",
  },
  {
    q: "Di sản nào sau đây KHÔNG phải di sản phi vật thể được UNESCO ghi danh?",
    options: ["Nhã nhạc cung đình Huế", "Ca trù", "Vịnh Hạ Long", "Đờn ca tài tử Nam Bộ"],
    answer: 2,
    explain:
      "Vịnh Hạ Long là di sản thiên nhiên thế giới, không phải di sản văn hoá phi vật thể.",
  },
  {
    q: "Hai Bà Trưng khởi nghĩa chống ách đô hộ của triều đại nào?",
    options: ["Nhà Hán", "Nhà Đường", "Nhà Tống", "Nhà Minh"],
    answer: 0,
    explain:
      "Năm 40, Hai Bà Trưng phất cờ khởi nghĩa chống nhà Đông Hán, lập nên nền độc lập ngắn ngủi nhưng rực rỡ.",
  },
  {
    q: "Tác phẩm 'Hịch tướng sĩ' do ai viết?",
    options: ["Lý Thường Kiệt", "Trần Hưng Đạo", "Nguyễn Trãi", "Ngô Sĩ Liên"],
    answer: 1,
    explain:
      "Hưng Đạo Vương Trần Quốc Tuấn viết Hịch tướng sĩ để cổ vũ tinh thần quyết chiến trước quân Nguyên Mông.",
  },
];

const shuffle = <T,>(arr: T[]) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ROUND_SIZE = 6;

export const HistoryQuiz = () => {
  const t = useT();
  const [seed, setSeed] = useState(0);
  const round = useMemo(() => shuffle(QUESTIONS).slice(0, ROUND_SIZE), [seed]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Gom các chuỗi cần dịch của câu hiện tại
  const current = round[idx];
  const texts = useMemo(
    () => (current ? [current.q, current.explain, ...current.options] : []),
    [current],
  );
  const tr = useAutoTranslate(texts);
  const qText = tr[0] ?? current?.q ?? "";
  const explainText = tr[1] ?? current?.explain ?? "";
  const optionTexts = current ? current.options.map((o, i) => tr[2 + i] ?? o) : [];

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === current.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= round.length) {
      setFinished(true);
      return;
    }
    setIdx(idx + 1);
    setPicked(null);
  };

  const restart = () => {
    setSeed((s) => s + 1);
    setIdx(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  };

  const progressVal = (idx / round.length) * 100;

  return (
    <section
      id="minigame"
      className="relative py-32 px-6 paper-texture overflow-hidden scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-vermilion font-medium">
            {t("Tầng V · Minigame", "Floor V · Minigame")}
          </span>
          <h2 className="font-display text-5xl md:text-6xl mt-6 text-gradient-patina tracking-tight">
            {t("Thử tài", "Test your")}{" "}
            <span className="italic">{t("sử Việt", "Vietnamese history")}</span>
          </h2>
          <DrumOrnament className="text-gold w-48 h-5 mx-auto mt-8" />
          <p className="text-foreground/70 mt-6 max-w-xl mx-auto">
            {t(
              "Bộ câu hỏi trắc nghiệm về bốn nghìn năm dựng nước. Mỗi lượt 6 câu được chọn ngẫu nhiên.",
              "A quiz on four thousand years of Vietnamese history. Each round picks 6 random questions.",
            )}
          </p>
        </div>

        <div className="relative rounded-lg border border-gold/30 bg-card/60 backdrop-blur-sm shadow-sm p-8 md:p-10">
          {!finished ? (
            <>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                <span>
                  {t("Câu", "Question")} {idx + 1}/{round.length}
                </span>
                <span className="flex items-center gap-1.5 text-gold-deep">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t("Điểm", "Score")}: {score}
                </span>
              </div>
              <Progress value={progressVal} className="h-1 mb-8 bg-gold/10" />

              <h3 className="font-display text-2xl md:text-3xl text-patina-deep mb-8 leading-snug">
                {qText}
              </h3>

              <div className="grid gap-3">
                {optionTexts.map((opt, i) => {
                  const isCorrect = i === current.answer;
                  const isPicked = i === picked;
                  const showState = picked !== null;
                  return (
                    <button
                      key={i}
                      onClick={() => pick(i)}
                      disabled={showState}
                      className={cn(
                        "group relative text-left px-5 py-4 rounded-md border transition-all",
                        "flex items-start gap-3",
                        !showState &&
                          "border-gold/20 bg-background hover:border-gold/60 hover:bg-gold/5",
                        showState && isCorrect && "border-patina bg-patina/10 text-patina-deep",
                        showState &&
                          isPicked &&
                          !isCorrect &&
                          "border-vermilion/60 bg-vermilion/5 text-vermilion",
                        showState && !isCorrect && !isPicked && "opacity-50",
                      )}
                    >
                      <span className="font-display text-sm text-gold-deep w-6 shrink-0">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      <span className="flex-1 leading-relaxed">{opt}</span>
                      {showState && isCorrect && (
                        <Check className="w-5 h-5 text-patina shrink-0" />
                      )}
                      {showState && isPicked && !isCorrect && (
                        <XIcon className="w-5 h-5 text-vermilion shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {picked !== null && (
                <div className="mt-8 p-5 rounded-md bg-gold/5 border-l-2 border-gold">
                  <div className="text-xs tracking-[0.15em] uppercase text-gold-deep mb-2">
                    {picked === current.answer
                      ? t("Chính xác", "Correct")
                      : t("Giải thích", "Explanation")}
                  </div>
                  <p className="text-foreground/85 leading-relaxed text-sm">{explainText}</p>
                  <div className="mt-5 flex justify-end">
                    <Button onClick={next} variant="default" size="sm">
                      {idx + 1 >= round.length
                        ? t("Xem kết quả", "See result")
                        : t("Câu tiếp →", "Next →")}
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <Trophy className="w-14 h-14 mx-auto text-gold mb-4" />
              <div className="text-xs tracking-[0.2em] uppercase text-vermilion mb-2">
                {t("Hoàn thành", "Completed")}
              </div>
              <div className="font-display text-5xl text-patina-deep mb-3">
                {score}/{round.length}
              </div>
              <p className="text-foreground/70 mb-8 max-w-md mx-auto">
                {score === round.length
                  ? t(
                      "Tuyệt vời! Bạn xứng danh là một sử gia trẻ tuổi.",
                      "Outstanding — you are a true young historian.",
                    )
                  : score >= round.length / 2
                  ? t(
                      "Khá lắm! Hãy chơi thêm để khám phá những trang sử khác.",
                      "Well done — play again to explore more chapters of history.",
                    )
                  : t(
                      "Hãy đọc lại các tầng Lịch sử và Di sản, rồi quay lại thử thách nhé.",
                      "Revisit the History and Heritage floors, then come back to try again.",
                    )}
              </p>
              <Button onClick={restart} variant="default" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                {t("Chơi lại", "Play again")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HistoryQuiz;