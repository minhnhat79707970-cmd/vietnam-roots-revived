import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translateMany } from "@/lib/translate";

/**
 * Tự động dịch một mảng chuỗi sang ngôn ngữ hiện tại (có cache).
 * Trả về mảng cùng độ dài: bản dịch nếu sẵn sàng, nếu không trả nguyên bản tiếng Việt.
 */
export const useAutoTranslate = (texts: string[]): string[] => {
  const { language } = useLanguage();
  const [translated, setTranslated] = useState<string[]>(texts);

  useEffect(() => {
    let cancelled = false;
    if (language === "vi") {
      setTranslated(texts);
      return;
    }
    translateMany(texts, language).then((res) => {
      if (!cancelled) setTranslated(res);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, texts.join("\u0001")]);

  return translated;
};