import { useEffect, useState } from "react";
import { MessageSquare, Send, Star, Trash2 } from "lucide-react";
import { DrumOrnament } from "@/components/DrumOrnament";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useT } from "@/contexts/LanguageContext";

interface Comment {
  id: string;
  name: string;
  rating: number;
  message: string;
  createdAt: number;
}

const STORAGE_KEY = "site-feedback-comments-v1";

const seedComments: Comment[] = [
  {
    id: "seed-1",
    name: "Lan Anh",
    rating: 5,
    message:
      "Trang web được thiết kế rất tinh tế, gợi nhớ đến hồn cốt văn hoá Việt. Phần dòng thời gian và mục lục di sản rất dễ theo dõi.",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
  },
  {
    id: "seed-2",
    name: "Minh Quân",
    rating: 4,
    message:
      "Mình rất thích phần lễ hội có ảnh và lịch trình. Hy vọng sẽ có thêm phần âm thanh dân ca để nghe trực tiếp.",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1,
  },
];

const formatDate = (ts: number) => {
  const d = new Date(ts);
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const SiteFeedback = () => {
  const { toast } = useToast();
  const t = useT();
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  // Hiển thị seed cục bộ + nhận xét vừa gửi (ẩn riêng tư của người khác)
  useEffect(() => {
    setComments(seedComments);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const { error } = await supabase.from("site_feedback").insert({
      name: name.trim() || null,
      rating,
      message: message.trim(),
    });
    if (error) {
      toast({ title: t("Không gửi được", "Failed to send"), description: error.message, variant: "destructive" });
      return;
    }
    const newComment: Comment = {
      id: `c-${Date.now()}`,
      name: name.trim() || t("Khách ẩn danh", "Anonymous"),
      rating,
      message: message.trim(),
      createdAt: Date.now(),
    };
    setComments((prev) => [newComment, ...prev]);
    setName("");
    setMessage("");
    setRating(5);
    toast({
      title: t("Đã gửi nhận xét", "Comment sent"),
      description: t(
        "Cảm ơn bạn đã chung tay giữ gìn di sản.",
        "Thank you for joining us in preserving heritage.",
      ),
    });
  };

  const handleDelete = (id: string) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <section
      id="gop-y"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-secondary border-t border-gold/20 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <MessageSquare className="w-8 h-8 text-vermilion mx-auto mb-4" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-vermilion">
            {t("Nhận xét & góp ý", "Reviews & feedback")}
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-patina-deep mt-4 leading-tight">
            {t("Tiếng nói của", "Voices of the")} <span className="italic text-gradient-bronze">{t("cộng đồng", "community")}</span>
          </h2>
          <DrumOrnament className="text-gold w-48 h-5 mx-auto mt-6" />
          <p className="mt-6 font-serif-vn italic text-lg md:text-xl text-patina-deep/85 max-w-2xl mx-auto">
            {t(
              "Chia sẻ cảm nhận của bạn về di sản văn hoá Việt Nam — mỗi tiếng nói là một viên gạch giữ gìn ký ức dân tộc.",
              "Share your thoughts on Vietnam's cultural heritage — every voice is a brick that preserves the nation's memory.",
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 lg:sticky lg:top-8 self-start bg-background border border-gold/20 p-6 md:p-8 h-fit"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold-deep mb-5">
              {t("Để lại nhận xét", "Leave a comment")}
            </div>

            <input
              type="text"
              aria-label={t("Tên của bạn", "Your name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("Tên của bạn (tuỳ chọn)", "Your name (optional)")}
              className="w-full bg-transparent border-b border-gold/20 py-2 mb-5 text-patina-deep placeholder:text-patina/60 focus:outline-none focus:border-gold"
            />

            {/* Rating sao */}
            <div className="mb-5">
              <div className="text-[10px] tracking-[0.2em] uppercase text-patina/80 mb-2">
                {t("Đánh giá", "Rating")}
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRating(s)}
                    aria-label={`${s} ${t("sao", "stars")}`}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        s <= rating
                          ? "fill-gold text-gold"
                          : "text-patina/50"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              aria-label={t("Nội dung nhận xét", "Comment message")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t(
                "Nhận xét, góp ý hay câu chuyện của bạn về di sản Việt Nam…",
                "Your comments, suggestions or stories about Vietnamese heritage…",
              )}
              rows={5}
              required
              className="w-full bg-transparent border-b border-gold/20 py-2 mb-6 text-patina-deep placeholder:text-patina/60 focus:outline-none focus:border-gold resize-none"
            />

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 text-xs tracking-[0.3em] uppercase bg-patina-deep text-gold-light border border-gold px-6 py-3.5 hover:bg-patina transition-colors"
            >
              <Send className="w-4 h-4" />
              {t("Gửi nhận xét", "Send comment")}
            </button>

            <p className="mt-5 text-[11px] italic text-patina/80 font-serif-vn leading-relaxed">
              {t(
                "* Nhận xét hiện được lưu trên thiết bị của bạn. Có thể tích hợp Lovable Cloud để lưu trữ và hiển thị công khai cho mọi người.",
                "* Comments are stored on your device only. Backend storage can be enabled for public display.",
              )}
            </p>
          </form>

          {/* Danh sách nhận xét */}
          <div className="lg:col-span-3">
            <div className="flex items-baseline justify-between mb-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-patina/80">
                {comments.length} {t("nhận xét", "comments")}
              </div>
            </div>

            {comments.length === 0 ? (
              <div className="bg-background border border-dashed border-gold/30 p-10 text-center">
                <p className="font-serif-vn italic text-lg text-patina/80">
                  {t(
                    "Chưa có nhận xét nào — hãy là người đầu tiên góp tiếng nói.",
                    "No comments yet — be the first to share your voice.",
                  )}
                </p>
              </div>
            ) : (
              <ul className="space-y-5">
                {comments.map((c) => (
                  <li
                    key={c.id}
                    className="group relative bg-background border-l-2 border-gold p-6 hover:bg-accent/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="min-w-0">
                        <div className="font-display text-xl text-patina-deep leading-tight">
                          {c.name}
                        </div>
                        <div className="text-[10px] tracking-[0.2em] uppercase text-patina/50 mt-1">
                          {formatDate(c.createdAt)}
                        </div>
                      </div>
                      <div className="flex shrink-0 gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < c.rating
                                ? "fill-gold text-gold"
                                : "text-patina/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="font-serif-vn text-base md:text-lg text-patina-deep/85 leading-relaxed">
                      {c.message}
                    </p>
                    <button
                      onClick={() => handleDelete(c.id)}
                      aria-label={t("Xoá nhận xét này khỏi thiết bị", "Remove this comment from device")}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity text-patina/60 hover:text-vermilion"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};