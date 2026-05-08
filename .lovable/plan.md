## Mục tiêu

Chuyển dữ liệu di sản và vùng miền từ file tĩnh (`src/data/heritages.ts`, `src/data/regions.ts`) sang **Lovable Cloud** (database thật), đồng thời lưu các phản hồi/góp ý người dùng (hiện chưa được lưu) vào database.

## Phạm vi triển khai

### 1. Kích hoạt Lovable Cloud
Bật Cloud để có sẵn Postgres + Auth + Storage + Edge Functions, không cần tài khoản ngoài.

### 2. Thiết kế schema

```text
regions
  id (uuid, pk)
  slug (text, unique)        -- "bac", "trung", "nam"
  name, subtitle, description
  geography, history
  cuisine (jsonb), landmarks (jsonb)
  physical_heritage (jsonb), abstract_heritage (jsonb)
  created_at, updated_at

heritages
  id (uuid, pk)
  slug (text, unique)
  title, subtitle, region, year (int)
  unesco_type, origin
  img (text)
  long_desc (jsonb)          -- mảng đoạn văn
  characteristics (jsonb)    -- [{label, value}]
  history (jsonb)            -- [{era, note}]
  preservation (text)
  extended (jsonb)           -- [{heading, body}]  ← gồm dữ liệu Hội Gióng phần 1/2
  references (jsonb)         -- [{title, source, year, url}]
  display_order (int)
  created_at, updated_at

heritage_feedback
  id, heritage_slug, name (nullable), email (nullable),
  rating (int 1-5), message (text), created_at

site_feedback
  id, name (nullable), email (nullable),
  rating, message, created_at
```

### 3. RLS (Row Level Security)
- `regions`, `heritages`: **public SELECT** (nội dung công khai), không cho INSERT/UPDATE/DELETE từ client.
- `heritage_feedback`, `site_feedback`: **public INSERT** (ai cũng góp ý được), **không cho SELECT công khai** (tránh lộ email người gửi). Sau này admin xem qua Cloud dashboard.

### 4. Seed dữ liệu
Tạo migration seed insert toàn bộ dữ liệu hiện có trong `heritages.ts` và `regions.ts` vào DB.

### 5. Tầng truy cập dữ liệu phía frontend
- Tạo `src/integrations/heritages.ts` và `src/integrations/regions.ts` với các hàm `fetchHeritages()`, `fetchHeritageBySlug()`, `fetchRegions()`, `fetchRegionBySlug()` dùng Supabase client.
- Dùng **TanStack Query** (đã có sẵn `QueryClientProvider`) để cache:
  - `useHeritages()`, `useHeritage(slug)`
  - `useRegions()`, `useRegion(slug)`
- Thêm skeleton loading cho `HeritageGrid`, `Regions`, `HeritageDetail`, `RegionDetail`.

### 6. Cập nhật components
- `HeritageGrid.tsx`, `Regions.tsx`, `Festivals.tsx`: đọc qua hook thay vì import trực tiếp từ `data/`.
- `HeritageDetail.tsx`, `RegionDetail.tsx`: dùng hook + skeleton + giữ nguyên bộ lọc Hội Gióng.
- `HeritageFeedback.tsx`, `SiteFeedback.tsx`: submit insert vào DB và hiện toast xác nhận.

### 7. Dọn dẹp
Giữ `src/data/*.ts` làm fallback type definitions (export type), nhưng không còn được component import dữ liệu từ đó.

## Lưu ý kỹ thuật
- Không cần auth cho lượt xem — chỉ public read.
- Toàn bộ field jsonb để giữ nguyên cấu trúc lồng nhau hiện tại, tránh vỡ UI.
- Slug là khóa định danh chính cho route `/di-san/:slug` và `/mien/:slug`.
- Migration tạo bảng + RLS policies + seed data trong cùng một lần.

## Ngoài phạm vi (có thể làm sau)
- Trang admin để CRUD nội dung di sản.
- Upload ảnh vào Storage thay vì URL Unsplash.
- Đăng nhập người dùng để lưu di sản yêu thích.
