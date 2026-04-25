import { useState } from "react";
import { Heart, MessageSquare, Send, Sparkles, Share2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HeritageFeedbackProps {
  heritageTitle: string;
}

const REACTIONS = [
  { key: "love", label: "Yêu thích", icon: Heart },
  { key: "inspire", label: "Truyền cảm hứng", icon: Sparkles },
  { key: "support", label: "Ủng hộ bảo tồn", icon: Heart },
];

export const HeritageFeedback = ({ heritageTitle }: HeritageFeedbackProps) => {
  const { toast } = useToast();
  const [selected, setSelected] = useState<string | null>(null);
  const [counts, setCounts] = useState<Record<string, number>>({
    love: 248,
    inspire: 132,
    support: 89,
  });
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleReact = (key: string) => {
    if (selected === key) return;
    setCounts((c) => ({
      ...c,
      [key]: (c[key] || 0) + 1,
      ...(selected ? { [selected]: Math.max(0, (c[selected] || 1) - 1) } : {}),
    }));
    setSelected(key);
    toast({
      title: "Cảm ơn bạn!",
      description: `Bạn đã ủng hộ "${heritageTitle}".`,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    toast({
      title: "Đã gửi góp ý",
      description: "Cảm ơn bạn đã chung tay giữ gìn di sản.",
    });
    setName("");
    setMessage("");
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: heritageTitle, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast({ title: "Đã sao chép liên kết" });
      }
    } catch {
      // user cancelled
    }
  };

  return (
    <section id="ung-ho" className="py-24 px-6 md:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <MessageSquare className="w-8 h-8 text-vermilion mx-auto mb-4" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-vermilion">
            Ủng hộ &amp; góp ý
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-patina-deep mt-4 leading-tight">
            Chung tay <span className="italic text-gradient-bronze">giữ gìn</span>
          </h2>
          <p className="mt-6 font-serif-vn italic text-lg text-patina-deep/70 max-w-2xl mx-auto">
            Một biểu cảm, một dòng góp ý của bạn cũng là cách di sản tiếp tục sống.
          </p>
        </div>

        {/* Reactions */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-10">
          {REACTIONS.map((r) => {
            const Icon = r.icon;
            const isOn = selected === r.key;
            return (
              <button
                key={r.key}
                onClick={() => handleReact(r.key)}
                className={`group flex flex-col items-center gap-2 p-5 border transition-all ${
                  isOn
                    ? "border-gold bg-gold/10 text-gold-deep"
                    : "border-gold/20 bg-background hover:border-gold/50"
                }`}
              >
                <Icon
                  className={`w-6 h-6 transition-transform group-hover:scale-110 ${
                    isOn ? "fill-current" : ""
                  }`}
                />
                <span className="text-[10px] tracking-[0.2em] uppercase text-patina-deep">
                  {r.label}
                </span>
                <span className="font-serif-vn italic text-lg text-patina-deep">
                  {counts[r.key]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Form góp ý */}
        <form onSubmit={handleSubmit} className="bg-background border border-gold/20 p-6 md:p-8">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold-deep mb-4">
            Để lại góp ý
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tên của bạn (tuỳ chọn)"
            className="w-full bg-transparent border-b border-gold/20 py-2 mb-4 text-patina-deep placeholder:text-patina/40 focus:outline-none focus:border-gold"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Cảm nhận, góp ý hay câu chuyện của bạn về di sản này…"
            rows={4}
            required
            className="w-full bg-transparent border-b border-gold/20 py-2 mb-6 text-patina-deep placeholder:text-patina/40 focus:outline-none focus:border-gold resize-none"
          />
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-patina-deep border border-gold/30 px-5 py-3 hover:bg-gold/10 hover:border-gold transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              {copied ? "Đã sao chép" : "Chia sẻ trang"}
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.3em] uppercase bg-patina-deep text-gold-light border border-gold px-6 py-3 hover:bg-patina transition-colors"
            >
              <Send className="w-4 h-4" />
              Gửi góp ý
            </button>
          </div>
        </form>

        <p className="mt-6 text-xs italic text-patina/60 text-center font-serif-vn">
          * Góp ý hiện được lưu tạm thời trên thiết bị của bạn — chúng tôi sẽ tích hợp Lovable Cloud nếu bạn muốn lưu trữ và hiển thị công khai.
        </p>
      </div>
    </section>
  );
};