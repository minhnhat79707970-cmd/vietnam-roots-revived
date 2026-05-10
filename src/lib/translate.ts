import { supabase } from "@/integrations/supabase/client";

const CACHE_PREFIX = "honviet.tr.";

const hash = (s: string): string => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
};

const cacheKey = (text: string, target: string) => `${CACHE_PREFIX}${target}.${hash(text)}`;

const readCache = (text: string, target: string): string | null => {
  try {
    return localStorage.getItem(cacheKey(text, target));
  } catch {
    return null;
  }
};

const writeCache = (text: string, target: string, translated: string) => {
  try {
    localStorage.setItem(cacheKey(text, target), translated);
  } catch {/* quota: ignore */}
};

/** Dịch một mảng chuỗi. Trả về mảng cùng độ dài với bản dịch. Có cache localStorage. */
export const translateMany = async (
  texts: string[],
  target: string = "en",
): Promise<string[]> => {
  if (target === "vi") return texts;
  const result: string[] = new Array(texts.length);
  const missingIdx: number[] = [];
  const missingTexts: string[] = [];

  texts.forEach((t, i) => {
    if (!t || typeof t !== "string") {
      result[i] = t;
      return;
    }
    const cached = readCache(t, target);
    if (cached !== null) {
      result[i] = cached;
    } else {
      missingIdx.push(i);
      missingTexts.push(t);
    }
  });

  if (missingTexts.length === 0) return result;

  // Chia batch nhỏ để tránh prompt quá dài
  const CHUNK = 60;
  for (let start = 0; start < missingTexts.length; start += CHUNK) {
    const slice = missingTexts.slice(start, start + CHUNK);
    const { data, error } = await supabase.functions.invoke("translate", {
      body: { texts: slice, target },
    });
    if (error) {
      // Trả nguyên bản nếu lỗi
      for (let k = 0; k < slice.length; k++) {
        result[missingIdx[start + k]] = slice[k];
      }
      continue;
    }
    const translations: string[] = (data?.translations as string[]) ?? slice;
    for (let k = 0; k < slice.length; k++) {
      const tr = translations[k] ?? slice[k];
      result[missingIdx[start + k]] = tr;
      writeCache(slice[k], target, tr);
    }
  }

  return result;
};