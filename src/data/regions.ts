export type RegionSlug = "bac" | "trung" | "nam";

export interface HeritagePoint {
  name: string;
  era: string;
  desc: string;
  category: "Di tích" | "Thiên nhiên" | "Phi vật thể" | "Lễ hội" | "Ẩm thực";
}

export interface RegionDetailData {
  slug: RegionSlug;
  code: string;
  name: string;
  sub: string;
  tagline: string;
  intro: string;
  geography: string;
  history: { era: string; note: string }[];
  heritages: HeritagePoint[];
  cuisine: string[];
  accentClass: string; // text accent
  intangible: IntangibleHeritage[];
  intangibleNote: string;
  landmarks: Landmark[];
  landmarksNote: string;
  tangible: TangibleHeritage[];
  tangibleNote: string;
}

export interface IntangibleHeritage {
  name: string;
  type: string; // Loại hình: Âm nhạc, Tín ngưỡng, Lễ hội, Nghề thủ công…
  origin: string; // Nơi/Vùng phát tích cụ thể
  era: string;
  unesco?: string; // Năm UNESCO ghi danh nếu có
  desc: string;
}

export interface Landmark {
  name: string;
  province: string; // Tỉnh / thành
  type: string; // Danh thắng, Đô thị, Núi, Biển đảo, Sông hồ…
  highlight: string; // Câu mô tả ngắn gọn
}

export interface TangibleHeritage {
  name: string;
  location: string;
  era: string;
  type: "Kiến trúc" | "Khảo cổ" | "Di tích lịch sử" | "Đô thị cổ" | "Cảnh quan";
  unesco?: string;
  desc: string;
}

export const regionsData: Record<RegionSlug, RegionDetailData> = {
  bac: {
    slug: "bac",
    code: "I",
    name: "Miền Bắc",
    sub: "Cái nôi văn hoá Việt",
    tagline: "Nơi khởi nguồn của nền văn minh sông Hồng — bốn nghìn năm dựng nước.",
    intro:
      "Miền Bắc là vùng đất tổ của dân tộc Việt, nơi các vua Hùng dựng nước Văn Lang, nơi trống đồng Đông Sơn ngân vang và Thăng Long ngàn năm văn hiến trở thành biểu tượng của quốc gia. Văn hoá Bắc Bộ mang đậm tính cộng đồng làng xã với cây đa — bến nước — sân đình.",
    geography:
      "Bao gồm đồng bằng sông Hồng phì nhiêu, vùng trung du Phú Thọ — Vĩnh Phúc và miền núi phía Bắc với dãy Hoàng Liên Sơn hùng vĩ.",
    history: [
      { era: "≈ 2879 TCN", note: "Truyền thuyết Hùng Vương dựng nước Văn Lang tại Phong Châu (Phú Thọ)." },
      { era: "Thế kỷ III TCN", note: "An Dương Vương lập nước Âu Lạc, xây thành Cổ Loa." },
      { era: "1010", note: "Lý Công Uẩn dời đô từ Hoa Lư về Thăng Long, mở ra kỷ nguyên rực rỡ." },
      { era: "Thế kỷ XV", note: "Triều Lê sơ định đô tại Đông Kinh, Văn Miếu — Quốc Tử Giám trở thành trung tâm Nho học." },
      { era: "1945", note: "Quảng trường Ba Đình — Bác Hồ đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hoà." },
    ],
    heritages: [
      { name: "Hoàng thành Thăng Long", era: "Thế kỷ XI — XIX", desc: "Trung tâm chính trị của Đại Việt suốt 13 thế kỷ. Di sản Văn hoá Thế giới 2010.", category: "Di tích" },
      { name: "Văn Miếu — Quốc Tử Giám", era: "1070", desc: "Trường đại học đầu tiên của Việt Nam, nơi vinh danh 1.307 tiến sĩ qua 82 bia đá.", category: "Di tích" },
      { name: "Vịnh Hạ Long", era: "Hàng triệu năm", desc: "Gần 2.000 hòn đảo đá vôi giữa biển ngọc bích. Di sản Thiên nhiên Thế giới 1994 & 2000.", category: "Thiên nhiên" },
      { name: "Quần thể Tràng An — Hoa Lư", era: "Thế kỷ X", desc: "Kinh đô đầu tiên của nhà nước phong kiến tập quyền. Di sản hỗn hợp UNESCO 2014.", category: "Di tích" },
      { name: "Ruộng bậc thang Sa Pa — Mù Cang Chải", era: "Hàng trăm năm", desc: "Kiệt tác canh tác của người H'Mông, Dao trên sườn núi Hoàng Liên.", category: "Thiên nhiên" },
      { name: "Dân ca Quan họ Bắc Ninh", era: "Thế kỷ XIII", desc: "49 làng Quan họ gốc với hơn 200 làn điệu. UNESCO 2009.", category: "Phi vật thể" },
      { name: "Hội Gióng đền Sóc — Phù Đổng", era: "Hàng nghìn năm", desc: "Tái hiện huyền thoại Thánh Gióng đánh giặc Ân. UNESCO 2010.", category: "Lễ hội" },
      { name: "Tín ngưỡng thờ Mẫu Tam phủ", era: "Thế kỷ XVI", desc: "Tín ngưỡng bản địa với nghi lễ hầu đồng đặc sắc. UNESCO 2016.", category: "Phi vật thể" },
    ],
    cuisine: ["Phở Hà Nội", "Bún chả", "Bánh cuốn Thanh Trì", "Chả cá Lã Vọng", "Cốm làng Vòng"],
    accentClass: "text-patina",
    intangibleNote:
      "Văn hoá phi vật thể Bắc Bộ gắn liền với làng xã đồng bằng sông Hồng, mang đậm tính cộng đồng, nghi lễ nông nghiệp lúa nước và tín ngưỡng dân gian bản địa.",
    intangible: [
      {
        name: "Dân ca Quan họ Bắc Ninh",
        type: "Âm nhạc dân gian",
        origin: "49 làng Quan họ gốc — Bắc Ninh & Bắc Giang",
        era: "Thế kỷ XIII",
        unesco: "2009",
        desc: "Lối hát đối đáp giao duyên giữa liền anh — liền chị với hơn 200 làn điệu cổ và tục kết chạ đặc sắc.",
      },
      {
        name: "Ca trù",
        type: "Nghệ thuật hát thơ bác học",
        origin: "Đồng bằng Bắc Bộ — Hà Nội, Hải Dương, Hải Phòng",
        era: "Thế kỷ XI",
        unesco: "2009 (cần bảo vệ khẩn cấp)",
        desc: "Nghệ thuật hát thơ tinh tế của giới nho sĩ, hoà quyện phách, đàn đáy và trống chầu trong giáo phường.",
      },
      {
        name: "Tín ngưỡng thờ Mẫu Tam phủ",
        type: "Tín ngưỡng bản địa",
        origin: "Phủ Dầy — Nam Định, đền Sòng — Thanh Hoá",
        era: "Thế kỷ XVI",
        unesco: "2016",
        desc: "Tín ngưỡng thờ Mẹ với nghi lễ hầu đồng, hệ thống 36 giá đồng và âm nhạc hát văn đặc sắc.",
      },
      {
        name: "Hội Gióng đền Phù Đổng & đền Sóc",
        type: "Lễ hội truyền thống",
        origin: "Gia Lâm & Sóc Sơn — Hà Nội",
        era: "Hàng nghìn năm",
        unesco: "2010",
        desc: "Tái hiện huyền thoại Thánh Gióng đánh giặc Ân — biểu tượng tinh thần thượng võ Việt.",
      },
      {
        name: "Tín ngưỡng thờ Hùng Vương",
        type: "Tín ngưỡng tổ tiên",
        origin: "Đền Hùng — Phú Thọ",
        era: "Hàng nghìn năm",
        unesco: "2012",
        desc: "Tín ngưỡng thờ Quốc Tổ — biểu trưng cho truyền thống 'uống nước nhớ nguồn' của dân tộc Việt.",
      },
      {
        name: "Hát Xoan Phú Thọ",
        type: "Hát nghi lễ cửa đình",
        origin: "Bốn phường Xoan gốc — Phú Thọ",
        era: "Thời Hùng Vương (truyền thuyết)",
        unesco: "2011 (khẩn cấp) → 2017 (đại diện)",
        desc: "Hát thờ vua Hùng tại các cửa đình mỗi dịp xuân về — di sản đầu tiên được rút khỏi danh sách khẩn cấp.",
      },
      {
        name: "Thực hành Then của người Tày, Nùng, Thái",
        type: "Diễn xướng tâm linh",
        origin: "Vùng núi phía Bắc — Lạng Sơn, Cao Bằng, Tuyên Quang",
        era: "Hàng trăm năm",
        unesco: "2019",
        desc: "Nghi lễ Then với tiếng đàn tính — sợi dây nối giữa con người, tổ tiên và thần linh.",
      },
      {
        name: "Nghệ thuật Xoè Thái",
        type: "Múa cộng đồng",
        origin: "Tây Bắc — Yên Bái, Sơn La, Điện Biên, Lai Châu",
        era: "Hàng trăm năm",
        unesco: "2021",
        desc: "Vòng xoè đoàn kết của người Thái — nơi mọi người nắm tay nhau quanh ngọn lửa hội mường.",
      },
      {
        name: "Nghi lễ kéo co",
        type: "Trò chơi nghi lễ",
        origin: "Hữu Chấp — Bắc Ninh, Trấn Vũ — Hà Nội",
        era: "Hàng trăm năm",
        unesco: "2015 (đa quốc gia)",
        desc: "Trò kéo co cầu mùa, biểu trưng cho sức mạnh cộng đồng và ước vọng mưa thuận gió hoà.",
      },
    ],
  },
  trung: {
    slug: "trung",
    code: "II",
    name: "Miền Trung",
    sub: "Đất kinh kỳ — Chăm Pa",
    tagline: "Dải đất hẹp giữa Trường Sơn và Biển Đông — nơi hội tụ Việt và Chăm.",
    intro:
      "Miền Trung là cây cầu nối hai đầu đất nước, nơi từng tồn tại vương quốc Chăm Pa rực rỡ với những đền tháp Hindu giáo, và là nơi kinh đô triều Nguyễn đặt tại Huế suốt 143 năm. Văn hoá miền Trung mang vẻ trầm mặc, cổ kính và tinh tế của hoàng cung.",
    geography:
      "Trải dài từ Thanh Hoá đến Bình Thuận, hẹp ngang với dãy Trường Sơn ở phía tây và bờ biển dài phía đông; nhiều di sản thế giới tập trung dày đặc.",
    history: [
      { era: "Thế kỷ II — XV", note: "Vương quốc Chăm Pa hưng thịnh, để lại hệ thống đền tháp Mỹ Sơn, Po Nagar." },
      { era: "1306", note: "Huyền Trân công chúa về Chăm, hai châu Ô — Lý sáp nhập Đại Việt." },
      { era: "1558", note: "Nguyễn Hoàng vào trấn thủ Thuận Hoá, mở đầu thời kỳ chúa Nguyễn." },
      { era: "1802 — 1945", note: "Triều Nguyễn định đô tại Huế, xây dựng Hoàng thành và lăng tẩm." },
      { era: "Thế kỷ XVI — XIX", note: "Hội An trở thành thương cảng quốc tế sầm uất bậc nhất Đông Nam Á." },
    ],
    heritages: [
      { name: "Quần thể di tích Cố đô Huế", era: "1802 — 1945", desc: "Hoàng thành, lăng tẩm 13 vua Nguyễn. Di sản Văn hoá Thế giới đầu tiên của Việt Nam (1993).", category: "Di tích" },
      { name: "Phố cổ Hội An", era: "Thế kỷ XVI — XIX", desc: "Thương cảng cổ với kiến trúc Việt — Hoa — Nhật — Pháp giao thoa. UNESCO 1999.", category: "Di tích" },
      { name: "Thánh địa Mỹ Sơn", era: "Thế kỷ IV — XIII", desc: "Trung tâm tôn giáo của vương quốc Chăm Pa với hơn 70 đền tháp. UNESCO 1999.", category: "Di tích" },
      { name: "Phong Nha — Kẻ Bàng", era: "Hơn 400 triệu năm", desc: "Hệ thống hang động karst lớn nhất thế giới, có Sơn Đoòng. UNESCO 2003 & 2015.", category: "Thiên nhiên" },
      { name: "Thành nhà Hồ", era: "1397", desc: "Toà thành đá độc đáo của triều Hồ tại Thanh Hoá. UNESCO 2011.", category: "Di tích" },
      { name: "Nhã nhạc cung đình Huế", era: "Thế kỷ XIII — XIX", desc: "Âm nhạc nghi lễ hoàng gia. UNESCO 2003 — di sản phi vật thể đầu tiên của Việt Nam.", category: "Phi vật thể" },
      { name: "Không gian văn hoá Cồng Chiêng", era: "Hơn 3.500 năm", desc: "Linh hồn các dân tộc Tây Nguyên: Ê Đê, Ba Na, Gia Rai. UNESCO 2005.", category: "Phi vật thể" },
      { name: "Nghệ thuật Bài Chòi Trung Bộ", era: "Thế kỷ XVII", desc: "Trò chơi dân gian kết hợp âm nhạc — thi ca từ Quảng Bình đến Khánh Hoà. UNESCO 2017.", category: "Phi vật thể" },
    ],
    cuisine: ["Bún bò Huế", "Cơm hến", "Mì Quảng", "Cao lầu Hội An", "Bánh xèo Phan Thiết"],
    accentClass: "text-vermilion",
    intangibleNote:
      "Di sản phi vật thể miền Trung mang dấu ấn hoàng cung triều Nguyễn, nghi lễ Chăm Pa cổ và tiếng cồng chiêng đại ngàn Tây Nguyên — sự giao thoa hiếm có giữa cung đình, biển cả và núi rừng.",
    intangible: [
      {
        name: "Nhã nhạc cung đình Huế",
        type: "Âm nhạc cung đình",
        origin: "Cố đô Huế",
        era: "Thế kỷ XIII — XIX",
        unesco: "2003",
        desc: "Âm nhạc nghi lễ của các vua chúa triều Nguyễn — di sản phi vật thể đầu tiên của Việt Nam.",
      },
      {
        name: "Không gian văn hoá Cồng Chiêng Tây Nguyên",
        type: "Âm nhạc nghi lễ",
        origin: "Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng",
        era: "Hơn 3.500 năm",
        unesco: "2005",
        desc: "Linh hồn của 17 dân tộc bản địa Tây Nguyên — Ê Đê, Ba Na, Gia Rai, Mnông, Xơ Đăng…",
      },
      {
        name: "Nghệ thuật Bài Chòi Trung Bộ",
        type: "Trò chơi & diễn xướng dân gian",
        origin: "Quảng Bình → Khánh Hoà",
        era: "Thế kỷ XVII",
        unesco: "2017",
        desc: "Trò chơi đầu xuân kết hợp âm nhạc, thi ca và thẻ bài — sinh hoạt văn hoá đặc trưng dải đất miền Trung.",
      },
      {
        name: "Dân ca Ví, Giặm Nghệ Tĩnh",
        type: "Dân ca lao động",
        origin: "Nghệ An & Hà Tĩnh",
        era: "Hàng trăm năm",
        unesco: "2014",
        desc: "Lối hát mộc mạc cất lên từ ruộng đồng, bến nước, võng đưa — chở nặng giọng nói và tâm hồn xứ Nghệ.",
      },
      {
        name: "Lễ hội Cầu Ngư",
        type: "Lễ hội ngư dân",
        origin: "Các làng chài duyên hải Trung Bộ — Huế, Đà Nẵng, Khánh Hoà",
        era: "Hàng trăm năm",
        desc: "Nghi lễ thờ cá Ông (cá Voi) cầu mưa thuận gió hoà, tôm cá đầy khoang cho ngư dân miền Trung.",
      },
      {
        name: "Lễ hội Katê của người Chăm",
        type: "Lễ hội tôn giáo",
        origin: "Tháp Po Klong Garai, Po Sah Inư — Ninh Thuận, Bình Thuận",
        era: "Hàng nghìn năm",
        desc: "Tết cổ truyền của người Chăm Bà-la-môn — tưởng nhớ thần linh, tổ tiên và các vị vua Chăm.",
      },
      {
        name: "Sử thi Tây Nguyên (Khan, H'amon, H'ri)",
        type: "Văn học truyền khẩu",
        origin: "Buôn làng Ê Đê, Ba Na, Mnông",
        era: "Hàng trăm năm",
        desc: "Những áng sử thi dài hàng vạn câu kể về Đam San, Xinh Nhã… được nghệ nhân hát kể qua nhiều đêm.",
      },
      {
        name: "Nghệ thuật làm gốm Chăm",
        type: "Nghề thủ công truyền thống",
        origin: "Bàu Trúc — Ninh Thuận",
        era: "Hơn 800 năm",
        unesco: "2022 (cần bảo vệ khẩn cấp)",
        desc: "Làng gốm cổ nhất Đông Nam Á còn giữ kỹ thuật làm gốm bằng tay — không bàn xoay, nung lộ thiên.",
      },
    ],
  },
  nam: {
    slug: "nam",
    code: "III",
    name: "Miền Nam",
    sub: "Văn hoá sông nước",
    tagline: "Vùng đất phương Nam phóng khoáng — nơi giao thoa Việt, Hoa, Khmer, Chăm.",
    intro:
      "Miền Nam là vùng đất mới được khai phá từ thế kỷ XVII bởi các chúa Nguyễn và những lưu dân Việt. Đây là nơi giao thoa của bốn dân tộc Việt — Hoa — Khmer — Chăm, hình thành nên nền văn hoá sông nước Nam Bộ phóng khoáng, hào sảng cùng đời sống đô thị Sài Gòn năng động.",
    geography:
      "Gồm Đông Nam Bộ và Đồng bằng sông Cửu Long phù sa màu mỡ, hệ thống sông ngòi chằng chịt với chín nhánh Cửu Long đổ ra biển.",
    history: [
      { era: "Thế kỷ I — VII", note: "Vương quốc Phù Nam phát triển rực rỡ với cảng Óc Eo." },
      { era: "1623", note: "Chúa Nguyễn lập đồn thu thuế tại Prei Nokor (Sài Gòn ngày nay)." },
      { era: "1698", note: "Nguyễn Hữu Cảnh kinh lược, chính thức xác lập chủ quyền Việt tại Gia Định." },
      { era: "1802", note: "Vua Gia Long thống nhất đất nước; Sài Gòn — Gia Định trở thành trung tâm phương Nam." },
      { era: "1859 — 1975", note: "Sài Gòn — Hòn ngọc Viễn Đông, đầu mối giao thương và lịch sử cận đại Việt Nam." },
    ],
    heritages: [
      { name: "Địa đạo Củ Chi", era: "1948 — 1975", desc: "Hệ thống đường hầm dài 250 km — biểu tượng kháng chiến của nhân dân Nam Bộ.", category: "Di tích" },
      { name: "Dinh Độc Lập", era: "1868 / 1966", desc: "Nhân chứng lịch sử của ngày 30/4/1975 — thống nhất đất nước.", category: "Di tích" },
      { name: "Nhà thờ Đức Bà Sài Gòn", era: "1880", desc: "Kiệt tác kiến trúc Roman — Gothic giữa lòng Sài Gòn.", category: "Di tích" },
      { name: "Chợ nổi Cái Răng — Cần Thơ", era: "Thế kỷ XIX", desc: "Nét văn hoá thương hồ độc đáo của miền Tây sông nước.", category: "Thiên nhiên" },
      { name: "Mũi Cà Mau", era: "—", desc: "Điểm cực Nam của Tổ quốc, khu dự trữ sinh quyển thế giới.", category: "Thiên nhiên" },
      { name: "Đờn ca tài tử Nam Bộ", era: "Cuối thế kỷ XIX", desc: "Loại hình âm nhạc thính phòng đặc trưng của 21 tỉnh phương Nam. UNESCO 2013.", category: "Phi vật thể" },
      { name: "Lễ hội Bà Chúa Xứ núi Sam", era: "Thế kỷ XIX", desc: "Lễ hội tâm linh lớn nhất Nam Bộ tại Châu Đốc, An Giang.", category: "Lễ hội" },
      { name: "Nghệ thuật làm gốm Chăm Bàu Trúc", era: "Hơn 800 năm", desc: "Làng gốm cổ nhất Đông Nam Á còn giữ kỹ thuật làm gốm bằng tay không bàn xoay. UNESCO 2022.", category: "Phi vật thể" },
    ],
    cuisine: ["Hủ tiếu Nam Vang", "Cơm tấm Sài Gòn", "Bún mắm", "Lẩu mắm", "Bánh xèo miền Tây"],
    accentClass: "text-gold-deep",
    intangibleNote:
      "Di sản phi vật thể Nam Bộ là kết tinh của dòng chảy bốn dân tộc Việt — Hoa — Khmer — Chăm trên vùng đất mới, mang đậm âm hưởng sông nước, hào sảng và phóng khoáng.",
    intangible: [
      {
        name: "Đờn ca tài tử Nam Bộ",
        type: "Âm nhạc thính phòng",
        origin: "21 tỉnh thành Nam Bộ — TP.HCM, Bạc Liêu, Cần Thơ…",
        era: "Cuối thế kỷ XIX",
        unesco: "2013",
        desc: "Loại hình âm nhạc dân gian ra đời từ nhạc lễ và nhã nhạc Huế, trở thành 'nhạc tài tử' của miền Nam phóng khoáng.",
      },
      {
        name: "Nghệ thuật Cải lương",
        type: "Sân khấu kịch hát",
        origin: "Mỹ Tho — Sài Gòn",
        era: "Đầu thế kỷ XX (1918)",
        desc: "Loại hình sân khấu kết hợp đờn ca tài tử, kịch nói và tuồng — tiếng nói nghệ thuật đặc trưng phương Nam.",
      },
      {
        name: "Lễ hội Vía Bà Chúa Xứ núi Sam",
        type: "Lễ hội tâm linh",
        origin: "Châu Đốc — An Giang",
        era: "Thế kỷ XIX",
        unesco: "2024",
        desc: "Lễ hội tâm linh lớn nhất Nam Bộ, thu hút hàng triệu lượt hành hương mỗi năm — tín ngưỡng Mẫu của miền Tây.",
      },
      {
        name: "Lễ hội Ok Om Bok của người Khmer",
        type: "Lễ hội nông nghiệp",
        origin: "Trà Vinh, Sóc Trăng, Bạc Liêu",
        era: "Hàng trăm năm",
        desc: "Lễ cúng trăng tạ ơn Thần Mặt Trăng cuối mùa mưa, kèm hội đua ghe Ngo rộn ràng trên sông.",
      },
      {
        name: "Nghệ thuật Dù kê của người Khmer Nam Bộ",
        type: "Sân khấu dân gian",
        origin: "Sóc Trăng, Trà Vinh, Kiên Giang",
        era: "Đầu thế kỷ XX",
        desc: "Loại hình ca kịch cổ điển của người Khmer Nam Bộ — kết hợp ca, múa, võ và hoá trang đặc sắc.",
      },
      {
        name: "Lễ hội Nghinh Ông",
        type: "Lễ hội ngư dân",
        origin: "Cần Giờ — TP.HCM, Vũng Tàu, Bến Tre",
        era: "Hàng trăm năm",
        desc: "Tín ngưỡng thờ cá Ông của ngư dân Nam Bộ — nghi lễ rước Ông trên biển cầu mùa cá bội thu.",
      },
      {
        name: "Nghệ thuật Hát Bội (Tuồng) Nam Bộ",
        type: "Sân khấu cổ truyền",
        origin: "Đình làng Nam Bộ — Bình Dương, TP.HCM",
        era: "Thế kỷ XVIII",
        desc: "Hát bội cúng đình — loại hình tuồng cổ được lưu giữ tại các đình thần Nam Bộ qua bao đời.",
      },
      {
        name: "Văn hoá chợ nổi miền Tây",
        type: "Sinh hoạt cộng đồng sông nước",
        origin: "Cái Răng, Cái Bè, Ngã Bảy — ĐBSCL",
        era: "Thế kỷ XIX",
        desc: "Hình thức buôn bán trên ghe thuyền với 'cây bẹo' treo hàng — bản sắc thương hồ độc đáo Nam Bộ.",
      },
    ],
  },
};