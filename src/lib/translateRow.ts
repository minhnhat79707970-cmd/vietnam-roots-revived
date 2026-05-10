import { translateMany } from "./translate";

// Bộ trường KHÔNG dịch (giữ nguyên - khoá kỹ thuật, slug, năm, ảnh...).
const SKIP_KEYS = new Set([
  "slug",
  "id",
  "img",
  "img_key",
  "imgKey",
  "year",
  "url",
  "uri",
  "href",
  "image",
  "code",
  "accent_class",
  "accentClass",
  "display_order",
  "displayOrder",
  "created_at",
  "updated_at",
  "createdAt",
  "updatedAt",
  "unesco",
  "unescoType",
  "unesco_type",
  "source",
]);

const shouldTranslate = (key: string, val: unknown): val is string =>
  typeof val === "string" &&
  val.trim().length > 0 &&
  !SKIP_KEYS.has(key) &&
  // bỏ qua URL
  !/^https?:\/\//i.test(val);

/** Đệ quy thu thập các chuỗi cần dịch trong object/array. Trả về mảng tham chiếu để cập nhật. */
type StringRef = { parent: any; key: string | number; original: string };

const collect = (node: any, parentKey: string, refs: StringRef[]) => {
  if (node == null) return;
  if (Array.isArray(node)) {
    node.forEach((v, i) => {
      if (typeof v === "string") {
        if (shouldTranslate(parentKey, v)) refs.push({ parent: node, key: i, original: v });
      } else if (typeof v === "object") {
        collect(v, parentKey, refs);
      }
    });
    return;
  }
  if (typeof node === "object") {
    for (const k of Object.keys(node)) {
      const v = node[k];
      if (typeof v === "string") {
        if (shouldTranslate(k, v)) refs.push({ parent: node, key: k, original: v });
      } else if (typeof v === "object" && v !== null) {
        collect(v, k, refs);
      }
    }
  }
};

/** Dịch sâu mọi chuỗi văn bản trong một dữ liệu (đã clone). Trả về object đã dịch. */
export const translateDeep = async <T>(data: T, target: string): Promise<T> => {
  if (target === "vi" || data == null) return data;
  // clone an toàn
  const clone: T = JSON.parse(JSON.stringify(data));
  const refs: StringRef[] = [];
  collect(clone as any, "root", refs);
  if (refs.length === 0) return clone;

  // Khử trùng lặp để tiết kiệm chi phí AI
  const uniqueMap = new Map<string, number>();
  const uniqueTexts: string[] = [];
  refs.forEach((r) => {
    if (!uniqueMap.has(r.original)) {
      uniqueMap.set(r.original, uniqueTexts.length);
      uniqueTexts.push(r.original);
    }
  });

  const translated = await translateMany(uniqueTexts, target);

  refs.forEach((r) => {
    const idx = uniqueMap.get(r.original)!;
    r.parent[r.key] = translated[idx] ?? r.original;
  });

  return clone;
};