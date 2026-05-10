import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "vi" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (l: Language) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "honviet.lang";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("vi");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "vi" || saved === "en") {
      setLanguageState(saved);
    } else {
      const browser = navigator.language?.toLowerCase() ?? "";
      if (!browser.startsWith("vi")) setLanguageState("en");
    }
  }, []);

  const setLanguage = (l: Language) => {
    setLanguageState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggle = () => setLanguage(language === "vi" ? "en" : "vi");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

/** Helper trả về chuỗi theo ngôn ngữ hiện tại — dùng cho các nhãn UI cố định. */
export const useT = () => {
  const { language } = useLanguage();
  return (vi: string, en: string) => (language === "en" ? en : vi);
};