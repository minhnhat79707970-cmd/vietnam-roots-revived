import quanHo from "@/assets/quan-ho.jpg";
import caTru from "@/assets/ca-tru.jpg";
import nhaNhac from "@/assets/nha-nhac.jpg";
import congChieng from "@/assets/cong-chieng.jpg";
import hoiGiong from "@/assets/hoi-giong.jpg";
import hatXoan from "@/assets/hat-xoan.jpg";
import hungVuong from "@/assets/hung-vuong.jpg";
import donCa from "@/assets/don-ca-tai-tu.jpg";
import viGiam from "@/assets/vi-giam.jpg";
import keoCo from "@/assets/keo-co.jpg";
import thoMau from "@/assets/tho-mau.jpg";
import baiChoi from "@/assets/bai-choi.jpg";
import then from "@/assets/then.jpg";
import xoeThai from "@/assets/xoe-thai.jpg";
import gomCham from "@/assets/gom-cham.jpg";

export interface HistoryEra {
  era: string;
  note: string;
}

export interface ExtendedSection {
  heading: string;
  body: string;
}

export interface Reference {
  title: string;
  source: string;
  url?: string;
  year?: string;
}

export interface HeritageDetail {
  slug: string;
  img: string;
  title: string;
  subtitle: string;
  year: string;
  unescoType: "Đại diện" | "Cần bảo vệ khẩn cấp" | "Kiệt tác";
  region: string;
  origin: string;
  shortDesc: string;
  longDesc: string[];
  history: HistoryEra[];
  characteristics: { label: string; value: string }[];
  preservation: string;
  extended?: ExtendedSection[];
  references?: Reference[];
}

export const heritages: HeritageDetail[] = [
  {
    slug: "nha-nhac-cung-dinh-hue",
    img: nhaNhac,
    title: "Nhã nhạc cung đình Huế",
    subtitle: "Âm nhạc của các bậc vương giả",
    year: "2003",
    unescoType: "Kiệt tác",
    region: "Cố đô Huế",
    origin: "Thế kỷ XIII — XIX",
    shortDesc: "Âm nhạc nghi lễ của các vua chúa triều Nguyễn — sự hoà quyện tinh tế giữa nhạc khí, vũ đạo và nghi thức cung đình.",
    longDesc: [
      "Nhã nhạc — nghĩa đen là 'âm nhạc tao nhã' — là loại hình âm nhạc bác học bậc nhất của Việt Nam, từng vang lên trong các lễ tế Giao, tế Miếu, đại triều, thường triều và yến tiệc của triều Nguyễn tại kinh đô Huế suốt hơn một thế kỷ rưỡi.",
      "Hệ thống Nhã nhạc gồm hàng chục dàn nhạc khác nhau: Đại nhạc, Tiểu nhạc, Nhã nhạc, Huyền nhạc, Ti trúc tế nhạc... mỗi dàn có chức năng và biên chế riêng, sử dụng từ trống đại cổ, kèn bóp, đàn tỳ bà, đàn nguyệt, đàn nhị, sáo trúc cho đến biên chung, biên khánh.",
      "Cùng với âm nhạc là hệ thống vũ điệu cung đình hơn mười điệu múa lớn — Bát Dật, Lục Cúng Hoa Đăng, Trình Tường Tập Khánh, Tứ Linh, Phiến Vũ — tạo nên một tổng thể nghệ thuật trình diễn vương giả.",
      "Khác với Ca trù vốn phát sinh từ dân gian rồi mới vào cung đình, Nhã nhạc đi theo chiều ngược lại: được hình thành và quy phạm hoá từ trong cung, sau đó lan toả ra dân gian. UNESCO đánh giá Nhã nhạc là loại hình âm nhạc duy nhất của Việt Nam đạt tới tầm vóc quốc gia trong các thể loại nhạc cổ truyền.",
    ],
    history: [
      { era: "Thế kỷ XIII", note: "Manh nha dưới triều Trần với các loại nhã nhạc, đại nhạc dùng trong tế lễ — chịu ảnh hưởng từ nhạc lễ Trung Hoa nhưng đã được Việt hoá." },
      { era: "Triều Lý (1010 — 1225)", note: "Nhã nhạc xuất hiện từ những năm đầu triều Lý, dùng trong các dịp Đại triều, Thường triều, Tế Giao, Tế Miếu — đặt nền móng cho âm nhạc nghi lễ cung đình Việt Nam." },
      { era: "Thế kỷ XV", note: "Triều Lê hệ thống hoá thành Nhã nhạc cung đình, phân chia Đường thượng chi nhạc và Đường hạ chi nhạc, định lệ rõ ràng cho tế lễ và đại triều." },
      { era: "1802 — 1945", note: "Đạt đỉnh cao dưới triều Nguyễn tại kinh đô Huế, đặc biệt từ nửa đầu thế kỷ XIX dưới triều Gia Long. Cái tên 'Nhã nhạc' chính thức gắn liền với cung đình Huế và phát triển theo quy phạm chuẩn mực của nhà nước quân chủ." },
      { era: "1945 — 1975", note: "Suy tàn theo sự kết thúc của triều Nguyễn; nhiều nhạc công lưu lạc, nhiều bản nhạc và vũ điệu thất truyền." },
      { era: "1995", note: "Nhạc sĩ Tôn Thất Tiết dẫn đầu Câu lạc bộ Phú Xuân và nhóm Ca trù Hà Nội sang biểu diễn lần đầu tại Pháp và Thuỵ Sỹ theo lời mời của Nhà Văn hoá Thế giới Pháp — bước đầu giới thiệu Nhã nhạc ra quốc tế." },
      { era: "1996 — 2002", note: "Trung tâm Bảo tồn Di tích Cố đô Huế phục dựng các dàn nhạc, sưu tầm bản nhạc, đào tạo lớp nhạc công kế tục cho hồ sơ trình UNESCO." },
      { era: "07/11/2003", note: "UNESCO chính thức vinh danh Nhã nhạc cung đình Huế là Kiệt tác Di sản văn hoá phi vật thể và truyền khẩu của nhân loại — di sản phi vật thể đầu tiên của Việt Nam được thế giới công nhận." },
      { era: "2004", note: "Theo lời mời của UNESCO, đoàn nghệ sĩ Nhã nhạc lưu diễn 2 tuần qua Montreuil, Arras, Lyon, Marseille (Pháp), Munich, Aachen (Đức) và Brussels (Bỉ); biểu diễn tại trụ sở UNESCO ở Paris và nhận giấy chứng nhận di sản thế giới." },
      { era: "2007 & 2017", note: "Hai lần biểu diễn cho Nhật hoàng Akihito: lần đầu trong Hoàng cung Nhật khi tháp tùng đoàn Chủ tịch nước Nguyễn Minh Triết, lần hai khi Nhật hoàng và Hoàng hậu Michiko thăm Cố đô Huế." },
      { era: "2023", note: "Kỷ niệm 20 năm Nhã nhạc được UNESCO vinh danh; Thừa Thiên Huế tổ chức Festival Huế 16 — 18/6 và ra mắt Quỹ Bảo tồn Di sản Huế." },
    ],
    characteristics: [
      { label: "Số lượng dàn nhạc", value: "Hơn 10 dàn chính" },
      { label: "Nhạc khí chính", value: "Trống đại cổ, kèn, sáo, đàn tỳ bà, nhị, nguyệt" },
      { label: "Vũ điệu cung đình", value: "Hơn 10 điệu múa lớn" },
      { label: "Không gian diễn xướng", value: "Thế Miếu, Đại Nội, Đàn Nam Giao" },
      { label: "Năm UNESCO ghi danh", value: "07/11/2003 — Kiệt tác đầu tiên của VN" },
      { label: "Tiết mục kinh điển", value: "Tam luân cửu chuyển, 10 bản ngự, Phú lục địch, Nam ai Nam bằng" },
    ],
    preservation: "Nhà hát Nghệ thuật truyền thống cung đình Huế (do NSND Bạch Hạc làm Giám đốc) bảo tồn nguyên bản các tiết mục kinh điển — Tam luân cửu chuyển, 10 bản ngự, Phú lục địch, Nam ai Nam bằng. Biểu diễn thường xuyên tại Duyệt Thị Đường (Đại Nội Huế) và Học viện Âm nhạc Huế. Quỹ Bảo tồn Di sản Huế (2023) tăng cường nguồn lực bảo tồn và đào tạo thế hệ kế thừa.",
    extended: [
      { heading: "Cấu trúc nghi lễ", body: "Mỗi buổi tế lễ cung đình tuân thủ trình tự nghiêm ngặt: Khải nhạc khai lễ — Thượng hương — Hiến tửu (ba tuần rượu) — Đọc chúc văn — Tống thần. Nhạc và múa được thiết kế chính xác cho từng giai đoạn, không thể đảo lộn." },
      { heading: "Hệ thống nhạc khí", body: "Sử dụng hơn 30 loại nhạc khí chia làm tám nhóm 'bát âm': kim (chuông), thạch (khánh), thổ (huân), cách (trống), ti (đàn dây), trúc (sáo, tiêu), bào (sênh, sáo bầu), mộc (mõ). Đây là hệ thống bát âm phong phú nhất Đông Nam Á còn lưu giữ." },
      { heading: "Vai trò xã hội", body: "Nhã nhạc không chỉ là âm nhạc giải trí mà là công cụ chính trị — khẳng định 'thiên mệnh' của vua, gắn kết triều đình với trời đất, tổ tiên. Mỗi nốt nhạc, mỗi điệu múa đều mang ý nghĩa biểu tượng vũ trụ quan Nho giáo." },
      { heading: "Cầu nối ngoại giao văn hoá", body: "Sau khi được UNESCO vinh danh năm 2003, Nhã nhạc trở thành 'đại sứ văn hoá' của Việt Nam: lưu diễn tại Pháp, Đức, Bỉ (2004); hai lần biểu diễn cho Nhật hoàng Akihito (2007 tại Hoàng cung Nhật, 2017 tại Cố đô Huế); thường xuyên xuất hiện trong các chuyến thăm cấp cao, khẳng định vị thế của di sản Việt Nam trên trường quốc tế." },
      { heading: "Hành trình 20 năm di sản thế giới", body: "Năm 2023 đánh dấu chặng đường hai thập kỷ Nhã nhạc được UNESCO ghi danh. Thừa Thiên Huế tổ chức Festival Huế 16 — 18/6/2023 và ra mắt Quỹ Bảo tồn Di sản Huế. Theo ông Phan Thanh Hải — Giám đốc Sở Văn hoá và Thể thao tỉnh — định hướng tiếp theo là đầu tư đồng bộ cả môi trường diễn xướng lẫn công tác đào tạo, để nghệ nhân hôm nay đạt được trình độ mà cha ông từng có." },
    ],
    references: [
      { title: "Nhã nhạc — Music of the Vietnamese Court", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/nha-nhac-vietnamese-court-music-00074", year: "2008" },
      { title: "Âm nhạc cung đình Việt Nam — Nhã nhạc triều Nguyễn", source: "Tô Ngọc Thanh, NXB Âm nhạc", year: "2003" },
      { title: "Trung tâm Bảo tồn Di tích Cố đô Huế", source: "hueworldheritage.org.vn", url: "https://hueworldheritage.org.vn/" },
      { title: "Hành trình 20 năm di sản văn hoá thế giới của Nhã nhạc cung đình Huế", source: "Xuân Sơn — Tạp chí Thông tin Đối ngoại (TTĐN), nguồn baoquocte.vn", url: "https://ttdn.vn/hoi-nhap-va-phat-trien/van-hoa-xa-hoi/hanh-trinh-20-nam-di-san-van-hoa-the-gioi-cua-nha-nhac-cung-dinh-hue-93196", year: "2023" },
    ],
  },
  {
    slug: "khong-gian-cong-chieng",
    img: congChieng,
    title: "Không gian văn hoá Cồng Chiêng Tây Nguyên",
    subtitle: "Tiếng vọng của đại ngàn",
    year: "2005",
    unescoType: "Kiệt tác",
    region: "Tây Nguyên",
    origin: "Hơn 3.500 năm",
    shortDesc: "Tiếng cồng chiêng vang vọng giữa đại ngàn — linh hồn của các dân tộc Ê Đê, Ba Na, Gia Rai.",
    longDesc: [
      "Không gian văn hoá Cồng Chiêng Tây Nguyên trải dài trên 5 tỉnh: Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông và Lâm Đồng, gắn bó mật thiết với đời sống của 17 dân tộc bản địa.",
      "Cồng chiêng là hậu duệ trực tiếp của trống đồng Đông Sơn — kế thừa kỹ thuật đúc đồng cổ đại nhưng được hoàn thiện thành hệ thống nhạc khí phức tạp với nhiều bộ chiêng: chiêng Aráp, chiêng Knăh, chiêng Pơm Pơm, chiêng Pôm Pát...",
      "Tiếng cồng chiêng hiện diện trong mọi nghi lễ vòng đời: lễ thổi tai, lễ trưởng thành, lễ cưới, lễ bỏ mả, lễ mừng lúa mới, lễ đâm trâu — kết nối con người với Yang (thần linh) và tổ tiên.",
    ],
    history: [
      { era: "Thời tiền sử", note: "Cồng chiêng có nguồn gốc từ truyền thống văn hoá Đông Sơn cổ đại — hậu duệ trực tiếp của trống đồng, được truyền vào Tây Nguyên qua nhiều thiên niên kỷ." },
      { era: "Hàng nghìn năm", note: "Gắn với 17 dân tộc bản địa Tây Nguyên: Ê Đê, Ba Na, Gia Rai, Mnông, Xơ Đăng, Cơ Tu, Mạ, Mường... mỗi dân tộc có hệ thống chiêng và bài chiêng riêng." },
      { era: "Thế kỷ XX", note: "Bị mai một nghiêm trọng do chiến tranh, đứt gãy thế hệ truyền nghề và làn sóng bán chiêng đồng thời kỳ kinh tế khó khăn." },
      { era: "2005", note: "UNESCO công nhận là Kiệt tác Di sản truyền khẩu và phi vật thể của nhân loại." },
      { era: "2008 — nay", note: "Chương trình hành động quốc gia về bảo tồn cồng chiêng: mở lớp truyền dạy, phục hồi lễ hội, ngừng xuất khẩu chiêng đồng cổ." },
    ],
    characteristics: [
      { label: "Phạm vi", value: "5 tỉnh Tây Nguyên" },
      { label: "Dân tộc tham gia", value: "17 dân tộc bản địa" },
      { label: "Bộ chiêng", value: "Chiêng Aráp, Knăh, Pơm Pơm…" },
      { label: "Nghi lễ tiêu biểu", value: "Lễ bỏ mả, mừng lúa mới, đâm trâu" },
    ],
    preservation: "Tỉnh Đắk Lắk, Gia Lai duy trì hơn 2.000 đội chiêng. Tổ chức Festival Cồng Chiêng quốc tế định kỳ tại Pleiku.",
    extended: [
      { heading: "Bộ chiêng và biên chế", body: "Mỗi dân tộc có biên chế chiêng riêng: người Ê Đê có bộ chiêng Knăh 9 chiếc, người Ba Na bộ chiêng Aráp 10 chiếc, người Mnông bộ chiêng 6 chiếc. Mỗi chiêng có tên riêng và vai trò riêng — chiêng mẹ, chiêng bố, chiêng con." },
      { heading: "Kỹ thuật trình diễn", body: "Chiêng được đánh bằng dùi gỗ bọc da hoặc bằng tay trần. Người đánh đi vòng quanh không gian lễ hội, phối hợp với nhau theo thứ tự nghiêm ngặt. Một bài chiêng có thể kéo dài từ vài phút đến nhiều giờ." },
      { heading: "Quan niệm tâm linh", body: "Người Tây Nguyên tin mỗi chiếc chiêng có một vị thần (Yang) trú ngụ. Tiếng chiêng là cầu nối giữa con người và Yang, giữa người sống và người chết. Lễ bỏ mả (Pơ thi) là dịp tiếng chiêng vang lên trọn vẹn nhất." },
    ],
    references: [
      { title: "Space of Gong Culture in the Central Highlands", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/space-of-gong-culture-in-the-central-highlands-of-viet-nam-00120", year: "2008" },
      { title: "Cồng chiêng Tây Nguyên — Giá trị và bản sắc", source: "Linh Nga Niê Kdăm, NXB Văn hoá Dân tộc", year: "2007" },
      { title: "Festival Cồng chiêng Quốc tế", source: "Sở VHTT&DL Gia Lai" },
    ],
  },
  {
    slug: "dan-ca-quan-ho",
    img: quanHo,
    title: "Dân ca Quan họ Bắc Ninh",
    subtitle: "Liền anh liền chị giao duyên",
    year: "2009",
    unescoType: "Đại diện",
    region: "Kinh Bắc",
    origin: "Thế kỷ XIII",
    shortDesc: "Liền anh liền chị đối đáp giao duyên qua những câu hát mượt mà bên hồ sen mùa hội Lim.",
    longDesc: [
      "Dân ca Quan họ Bắc Ninh là loại hình diễn xướng dân gian độc đáo, ra đời ở vùng Kinh Bắc cổ — nay là Bắc Ninh và Bắc Giang. Đặc trưng bởi lối hát đối đáp giữa các 'liền anh' và 'liền chị' theo từng cặp đôi.",
      "Hệ thống Quan họ có hơn 200 làn điệu cổ — La rằng, Đường bạn Kim Loan, Cây gạo, Ngồi tựa mạn thuyền, Người ở đừng về... — mỗi làn điệu có lối luyến láy riêng, thể hiện qua giọng vang, rền, nền, nẩy.",
      "Tục kết chạ giữa các làng Quan họ tạo nên mạng lưới văn hoá độc đáo: bạn Quan họ không bao giờ kết hôn, giữ trọn tình bạn tinh thần qua nhiều đời.",
    ],
    history: [
      { era: "Thế kỷ XIII", note: "Hình thành ở vùng Kinh Bắc cổ — 49 làng Quan họ gốc tại Bắc Ninh và Bắc Giang." },
      { era: "Thế kỷ XVIII — XIX", note: "Phát triển rực rỡ với hệ thống hơn 200 làn điệu cổ; tục kết chạ, kết bạn Quan họ thành nét văn hoá đặc sắc." },
      { era: "Đầu thế kỷ XX", note: "Quan họ vào ca trù, hát mới; hội Lim trở thành ngày hội lớn nhất vùng Kinh Bắc, thu hút hàng vạn người." },
      { era: "1960 — 1990", note: "Đoàn Dân ca Quan họ Bắc Ninh thành lập, đưa Quan họ lên sân khấu chuyên nghiệp." },
      { era: "2009", note: "UNESCO ghi danh là Di sản văn hoá phi vật thể đại diện của nhân loại." },
    ],
    characteristics: [
      { label: "Làng Quan họ gốc", value: "49 làng cổ" },
      { label: "Làn điệu", value: "Hơn 200 làn điệu" },
      { label: "Lễ hội tiêu biểu", value: "Hội Lim (13 tháng Giêng)" },
      { label: "Trang phục", value: "Áo tứ thân, nón quai thao, khăn mỏ quạ" },
    ],
    preservation: "Hơn 369 câu lạc bộ Quan họ tại Bắc Ninh, Bắc Giang. Đưa Quan họ vào trường học. Nghệ nhân ưu tú và nghệ nhân nhân dân được hỗ trợ truyền dạy.",
    extended: [
      { heading: "Bốn kỹ thuật hát đặc trưng", body: "Quan họ có bốn yêu cầu kỹ thuật bậc thầy: Vang (giọng vang xa), Rền (rung và ngân dài), Nền (giữ hơi đều), Nẩy (luyến láy giữa các nốt). Đây là tiêu chuẩn để công nhận liền anh, liền chị thực thụ." },
      { heading: "Tục kết chạ", body: "Hai làng kết chạ trở thành 'anh em', con cháu hai làng không kết hôn với nhau. Hằng năm, các bọn Quan họ kết bạn qua lại hát giao lưu, ăn uống, ngủ lại nhà bạn — duy trì tình bạn tinh thần qua nhiều đời." },
      { heading: "Trình tự một canh hát", body: "Một canh Quan họ cổ truyền gồm ba chặng: Hát giọng cổ (mở đầu trang nghiêm) — Hát giọng vặt (vui tươi, tự do) — Hát giã bạn (chia tay, lưu luyến). Câu 'Người ở đừng về' là câu giã bạn nổi tiếng nhất." },
    ],
    references: [
      { title: "Quan Họ Bắc Ninh folk songs", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/quan-ho-bac-ninh-folk-songs-00183", year: "2009" },
      { title: "Văn hoá Quan họ Bắc Ninh — 49 làng và bí mật của một di sản", source: "Trần Linh Quý, NXB Văn hoá Thông tin", year: "2010" },
      { title: "Sở Văn hoá Thể thao và Du lịch Bắc Ninh", source: "svhttdl.bacninh.gov.vn" },
    ],
  },
  {
    slug: "ca-tru",
    img: caTru,
    title: "Ca trù",
    subtitle: "Nghệ thuật hát thơ bác học",
    year: "2009",
    unescoType: "Cần bảo vệ khẩn cấp",
    region: "Đồng bằng Bắc Bộ",
    origin: "Thế kỷ XI",
    shortDesc: "Nghệ thuật hát thơ tinh tế với phách, đàn đáy và trống chầu — di sản cần bảo vệ khẩn cấp.",
    longDesc: [
      "Ca trù — còn gọi là hát ả đào, hát cô đầu, hát nhà tơ — là một loại hình nghệ thuật biểu diễn thính phòng độc đáo, kết hợp giữa thơ ca, âm nhạc và nghi thức diễn xướng.",
      "Một chầu hát Ca trù truyền thống gồm ba thành phần: ca nương vừa hát vừa gõ phách, kép đàn chơi đàn đáy và quan viên đánh trống chầu — vừa thưởng thức vừa khen chê tài nghệ.",
      "Ca trù gắn với thể thơ hát nói — một thể thơ tự do bác học, được Nguyễn Công Trứ, Cao Bá Quát, Nguyễn Khuyến, Tản Đà... đưa lên đỉnh cao văn học.",
    ],
    history: [
      { era: "Thế kỷ XI", note: "Xuất hiện dưới triều Lý với tên gọi 'hát ả đào', diễn xướng trong cung đình và đền miếu." },
      { era: "Thế kỷ XV — XIX", note: "Phát triển thành nghệ thuật bác học của giới nho sĩ; gắn với thể thơ hát nói của Nguyễn Công Trứ, Cao Bá Quát." },
      { era: "Đầu thế kỷ XX", note: "Suy tàn theo các ca quán; nhiều giáo phường tan rã sau 1945. Bị xem là 'tệ nạn' trong một thời gian dài." },
      { era: "1990 — nay", note: "Phục hồi nhờ các nghệ nhân lão thành như Quách Thị Hồ, Nguyễn Thị Chúc, Phó Thị Kim Đức truyền dạy." },
      { era: "2009", note: "UNESCO ghi danh vào Danh sách di sản văn hoá phi vật thể cần bảo vệ khẩn cấp." },
    ],
    characteristics: [
      { label: "Thành phần", value: "Ca nương, kép đàn, quan viên" },
      { label: "Nhạc khí", value: "Phách, đàn đáy, trống chầu" },
      { label: "Thể thơ chính", value: "Hát nói" },
      { label: "Số làn điệu", value: "Khoảng 56 thể cách" },
    ],
    preservation: "15 tỉnh thành có Ca trù; hơn 30 câu lạc bộ và giáo phường đang hoạt động tại Hà Nội, Hải Dương, Hải Phòng, Bắc Ninh, Hà Tĩnh, Nghệ An.",
    extended: [
      { heading: "Ba thành tố nghệ thuật", body: "Ca nương vừa hát vừa giữ phách bằng hai lá phách gỗ — đòi hỏi vừa hát vừa đếm nhịp chính xác. Kép đàn chơi đàn đáy ba dây cổ — loại đàn chỉ Việt Nam có. Quan viên đánh trống chầu để khen, chê — không chỉ thưởng thức mà còn đánh giá tài nghệ." },
      { heading: "56 thể cách", body: "Ca trù có khoảng 56 thể cách (làn điệu) khác nhau, từ Bắc phản, Mưỡu, Hát nói, Tỳ bà hành đến Gửi thư, Hãm, Hát giai. Mỗi thể có cấu trúc nhịp phách và lối đàn riêng — đòi hỏi nhiều năm khổ luyện mới thuộc trọn vẹn." },
      { heading: "Mối liên hệ với văn học", body: "Thể thơ hát nói gắn với Ca trù đã trở thành thể thơ bác học của giới sĩ phu Việt Nam. Nguyễn Công Trứ với 'Bài ca ngất ngưởng', Cao Bá Quát, Dương Khuê với 'Hồng hồng Tuyết Tuyết', Tản Đà — tất cả đều viết hát nói cho Ca trù." },
    ],
    references: [
      { title: "Ca trù singing", source: "UNESCO ICH (Urgent Safeguarding)", url: "https://ich.unesco.org/en/USL/ca-tru-singing-00309", year: "2009" },
      { title: "Đặc khảo về Ca trù Việt Nam", source: "Nguyễn Xuân Diện, NXB Khoa học Xã hội", year: "2007" },
      { title: "Câu lạc bộ Ca trù Thăng Long", source: "catruthanglong.com" },
    ],
  },
  {
    slug: "hoi-giong",
    img: hoiGiong,
    title: "Hội Gióng đền Phù Đổng và đền Sóc",
    subtitle: "Sử thi sống của người Việt",
    year: "2010",
    unescoType: "Đại diện",
    region: "Hà Nội",
    origin: "Thế kỷ XI",
    shortDesc: "Tái hiện huyền thoại Thánh Gióng — anh hùng đánh giặc Ân, biểu tượng tinh thần thượng võ Việt Nam.",
    longDesc: [
      "Hội Gióng là lễ hội tưởng niệm và tái hiện chiến công của Thánh Gióng — vị anh hùng huyền thoại đánh tan giặc Ân, được suy tôn là một trong Tứ bất tử của tín ngưỡng dân gian Việt Nam.",
      "Hai trung tâm chính: đền Phù Đổng (Gia Lâm — nơi Thánh Gióng sinh ra, hội mở mùng 9 tháng 4 âm lịch) và đền Sóc (Sóc Sơn — nơi Thánh Gióng bay về trời, hội mở mùng 6 tháng Giêng).",
      "Lễ hội tổ chức như một sử thi sống: rước nước, rước cờ, đánh trận giả, múa hổ, múa trống — với hàng trăm 'ông Hiệu' và 'cô tướng' tham gia trong các vai diễn nghi lễ.",
    ],
    history: [
      { era: "Truyền thuyết", note: "Câu chuyện Thánh Gióng được ghi trong 'Lĩnh Nam chích quái' (thế kỷ XV), gắn với vua Hùng thứ 6." },
      { era: "Thế kỷ XI", note: "Lý Thái Tổ phong Phù Đổng Thiên Vương, dựng đền thờ tại làng Phù Đổng — khởi đầu lễ hội chính thức." },
      { era: "Các triều đại sau", note: "Trần, Lê, Nguyễn đều tôn tạo, ban sắc phong; lễ hội trở thành một trong những lễ hội lớn nhất Bắc Bộ." },
      { era: "2010", note: "UNESCO ghi danh là Di sản văn hoá phi vật thể đại diện của nhân loại." },
    ],
    characteristics: [
      { label: "Hai trung tâm", value: "Đền Phù Đổng & đền Sóc" },
      { label: "Thời gian", value: "Mùng 6 tháng Giêng & mùng 9 tháng 4 âm lịch" },
      { label: "Vai diễn", value: "Ông Hiệu, cô tướng, phù giá" },
      { label: "Quy mô", value: "Hàng trăm diễn viên nghi lễ" },
    ],
    preservation: "Cộng đồng làng Phù Đổng và 8 xã quanh đền Sóc duy trì truyền dạy các vai nghi lễ cha truyền con nối.",
    extended: [
      { heading: "Hai trung tâm hai mùa hội", body: "Hội đền Sóc (Sóc Sơn) mở mùng 6 tháng Giêng — tái hiện cảnh Thánh Gióng bay về trời, có lễ rước giò hoa tre và voi chiến. Hội đền Phù Đổng (Gia Lâm) mở mùng 9 tháng 4 — tái hiện cảnh đánh giặc, với trận chiến giả ngoạn mục giữa quân Gióng và quân Ân." },
      { heading: "Vai diễn nghi lễ", body: "Hệ thống vai diễn cha truyền con nối: 4 ông Hiệu (Hiệu Cờ, Hiệu Trống, Hiệu Chiêng, Hiệu Trung quân), 28 cô tướng đại diện 28 đạo quân Ân, đoàn phù giá, đoàn rước nước. Mỗi vai phải tập luyện hàng tháng và phải sống thanh tịnh trong lễ hội." },
      { heading: "Biểu tượng văn hoá", body: "Hội Gióng được xem là 'Sử thi sống' — mỗi năm một lần dân làng cùng nhau diễn lại huyền thoại dựng nước, giữ nước. Đây là cách trao truyền lịch sử và tinh thần thượng võ qua hành động chứ không qua sách vở." },
    ],
    references: [
      { title: "Giong festival of Phu Dong and Soc temples", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/giong-festival-of-phu-dong-and-soc-temples-00443", year: "2010" },
      { title: "Hội Gióng — Một sử thi nghi lễ", source: "Cao Huy Đỉnh, NXB Khoa học Xã hội", year: "1969" },
      { title: "Cục Di sản Văn hoá", source: "dsvh.gov.vn" },
    ],
  },
  {
    slug: "hat-xoan",
    img: hatXoan,
    title: "Hát Xoan Phú Thọ",
    subtitle: "Tiếng hát trước cửa đình",
    year: "2011 / 2017",
    unescoType: "Đại diện",
    region: "Phú Thọ",
    origin: "Thời Hùng Vương",
    shortDesc: "Loại hình hát thờ Vua Hùng tại các đình làng Phú Thọ — hát cửa đình, hát đám, hát hội.",
    longDesc: [
      "Hát Xoan — còn gọi là Khúc môn đình (hát trước cửa đình) — là loại hình diễn xướng nghi lễ gắn với tín ngưỡng thờ Vua Hùng tại vùng đất Tổ Phú Thọ.",
      "Một canh hát Xoan đầy đủ gồm 14 quả cách, chia làm ba phần: hát thờ (nghi lễ), hát quả cách (trình diễn) và hát hội (giao duyên). Phường Xoan có đào và kép, hát theo lối lĩnh xướng — hoà giọng — đối đáp.",
      "Bốn phường Xoan gốc: An Thái, Thét, Phù Đức, Kim Đới — đều thuộc xã Kim Đức và Phượng Lâu, thành phố Việt Trì.",
    ],
    history: [
      { era: "Thời Hùng Vương", note: "Truyền thuyết ghi rằng Hát Xoan ra đời từ thời Vua Hùng — gắn với Hoàng hậu Lan Xuân và các thôn nữ vùng đất Tổ." },
      { era: "Thế kỷ XV — XIX", note: "Hát Xoan phát triển ổn định, được trình diễn tại các đình làng vùng trung du Phú Thọ trong dịp xuân về." },
      { era: "Thế kỷ XX", note: "Suy giảm nghiêm trọng — đến đầu những năm 2000 chỉ còn vài nghệ nhân lão thành biết đầy đủ 14 quả cách." },
      { era: "2011", note: "UNESCO ghi vào Danh sách di sản văn hoá phi vật thể cần bảo vệ khẩn cấp." },
      { era: "2017", note: "Sau 6 năm phục hồi mạnh mẽ, được chuyển sang Danh sách di sản đại diện của nhân loại — trường hợp hi hữu." },
    ],
    characteristics: [
      { label: "Phường Xoan gốc", value: "An Thái, Thét, Phù Đức, Kim Đới" },
      { label: "Cấu trúc canh hát", value: "14 quả cách" },
      { label: "Ba phần chính", value: "Hát thờ — hát quả cách — hát hội" },
      { label: "Tín ngưỡng gắn với", value: "Thờ Vua Hùng" },
    ],
    preservation: "Bốn phường Xoan gốc được phục hồi đầy đủ; đưa Hát Xoan vào hơn 100 trường học tại Phú Thọ.",
    extended: [
      { heading: "Mười bốn quả cách", body: "Một canh Xoan cổ gồm 14 quả cách diễn xướng theo trình tự bắt buộc: Giáo trống — Giáo pháo — Thơ nhang — Đóng đám (4 quả mở đầu hát thờ); 9 quả cách trình diễn nghi thức; cuối cùng là Bợm gái và Mó cá thuộc phần hát hội giao duyên." },
      { heading: "Bốn phường Xoan gốc", body: "Phường An Thái, Thét, Phù Đức, Kim Đới — đều thuộc xã Kim Đức và Phượng Lâu (TP Việt Trì). Mỗi phường có một ông Trùm (chủ phường), kép đàn, đào hát và một bộ trống phách riêng — duy trì cha truyền con nối." },
      { heading: "Trường hợp đặc biệt của UNESCO", body: "Hát Xoan là di sản đầu tiên trên thế giới được UNESCO chuyển từ Danh sách 'Cần bảo vệ khẩn cấp' (2011) sang Danh sách 'Đại diện' (2017) sau chỉ 6 năm — minh chứng cho hiệu quả phục hồi vượt bậc của cộng đồng và chính quyền Phú Thọ." },
    ],
    references: [
      { title: "Xoan singing of Phu Tho province", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/xoan-singing-of-phu-tho-province-viet-nam-01260", year: "2017" },
      { title: "Hát Xoan — Di sản văn hoá thế giới", source: "Nguyễn Khắc Xương, NXB Văn hoá Dân tộc", year: "2012" },
      { title: "Sở VHTT&DL Phú Thọ", source: "svhttdl.phutho.gov.vn" },
    ],
  },
  {
    slug: "tin-nguong-tho-hung-vuong",
    img: hungVuong,
    title: "Tín ngưỡng thờ cúng Hùng Vương",
    subtitle: "Cội nguồn dân tộc Việt",
    year: "2012",
    unescoType: "Đại diện",
    region: "Phú Thọ — toàn quốc",
    origin: "Hàng nghìn năm",
    shortDesc: "'Dù ai đi ngược về xuôi — Nhớ ngày Giỗ Tổ mùng mười tháng ba'.",
    longDesc: [
      "Tín ngưỡng thờ cúng Hùng Vương là biểu hiện sâu sắc nhất của ý thức cội nguồn 'con Lạc cháu Hồng' trong tâm thức Việt Nam — không chỉ ở Phú Thọ mà toàn quốc.",
      "Trung tâm là Khu di tích lịch sử Đền Hùng (xã Hy Cương, thành phố Việt Trì) với quần thể đền Hạ, đền Trung, đền Thượng và lăng Hùng Vương trên núi Nghĩa Lĩnh.",
      "Lễ Giỗ Tổ mùng 10 tháng 3 âm lịch là quốc lễ — với phần lễ trang nghiêm (rước kiệu, dâng hương) và phần hội phong phú (hát Xoan, đánh trống đồng, thi giã bánh giầy).",
    ],
    history: [
      { era: "Hàng nghìn năm", note: "Tín ngưỡng thờ Vua Hùng — các vua tổ của nhà nước Văn Lang — được hình thành từ thời tiền sử, gắn với núi Nghĩa Lĩnh." },
      { era: "Thế kỷ XV", note: "Triều Lê chính thức công nhận Hùng Vương là quốc tổ; ban sắc phong, định lệ tế lễ." },
      { era: "1917", note: "Triều Nguyễn ấn định ngày mùng 10 tháng 3 âm lịch là Giỗ Tổ Hùng Vương." },
      { era: "2007", note: "Quốc hội Việt Nam quy định ngày Giỗ Tổ là quốc lễ, người lao động được nghỉ." },
      { era: "2012", note: "UNESCO ghi danh là Di sản văn hoá phi vật thể đại diện của nhân loại." },
    ],
    characteristics: [
      { label: "Trung tâm", value: "Khu di tích Đền Hùng — Phú Thọ" },
      { label: "Quốc lễ", value: "Mùng 10 tháng 3 âm lịch" },
      { label: "Số đền thờ trên cả nước", value: "Hơn 1.400 đền" },
      { label: "Lễ vật truyền thống", value: "Bánh chưng, bánh giầy" },
    ],
    preservation: "Nhà nước đầu tư trùng tu Khu di tích Đền Hùng; tổ chức Giỗ Tổ quy mô lớn hằng năm với sự tham dự của lãnh đạo cao cấp và hàng triệu lượt khách.",
    extended: [
      { heading: "Quần thể Đền Hùng", body: "Khu di tích trải dài trên núi Nghĩa Lĩnh (175m) gồm: Đền Hạ (nơi Âu Cơ sinh bọc trăm trứng), Đền Trung (nơi vua Hùng họp bàn việc nước), Đền Thượng (nơi tế trời đất), Lăng Hùng Vương thứ 6, Đền Giếng (giếng Ngọc nơi hai công chúa Tiên Dung — Ngọc Hoa soi gương)." },
      { heading: "Mạng lưới đền thờ", body: "Hơn 1.400 di tích thờ Hùng Vương trải khắp 63 tỉnh thành — từ Đền Hùng (TP.HCM) đến các đình làng xa xôi. Đây là tín ngưỡng có mạng lưới rộng nhất, chứng minh ý thức 'một nguồn gốc' của người Việt khắp ba miền." },
      { heading: "Lễ vật tổ tiên", body: "Bánh chưng và bánh giầy — gắn với truyền thuyết Lang Liêu — là lễ vật bắt buộc. Bánh chưng vuông tượng trưng cho Đất, bánh giầy tròn tượng trưng cho Trời. Đây là biểu tượng vũ trụ quan 'Trời tròn — Đất vuông' của người Việt cổ." },
    ],
    references: [
      { title: "Worship of Hùng Kings in Phú Thọ", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/worship-of-hung-kings-in-phu-tho-00735", year: "2012" },
      { title: "Tín ngưỡng thờ cúng Hùng Vương ở Việt Nam", source: "Ngô Đức Thịnh, NXB Văn hoá Thông tin", year: "2013" },
      { title: "Khu Di tích lịch sử Đền Hùng", source: "denhung.org.vn" },
    ],
  },
  {
    slug: "don-ca-tai-tu",
    img: donCa,
    title: "Đờn ca tài tử Nam Bộ",
    subtitle: "Nhã nhạc của miền sông nước",
    year: "2013",
    unescoType: "Đại diện",
    region: "21 tỉnh Nam Bộ",
    origin: "Cuối thế kỷ XIX",
    shortDesc: "Loại hình âm nhạc thính phòng đặc trưng Nam Bộ — thoát thai từ Nhã nhạc Huế và dân ca Nam Trung Bộ.",
    longDesc: [
      "Đờn ca tài tử ra đời cuối thế kỷ XIX, do các nhạc sư cung đình Huế theo phong trào Cần Vương vào Nam, mang theo Nhã nhạc và kết hợp với dân ca địa phương.",
      "'Tài tử' không có nghĩa nghiệp dư mà chỉ những người chơi nhạc 'tài hoa' — không vì tiền, chơi vì đam mê. Đặc trưng bởi tính ngẫu hứng cao, mỗi nhạc công thêm hoa lá riêng vào bản gốc.",
      "Hệ thống bản nhạc gồm 20 bản tổ chia thành 4 điệu: Bắc, Hạ, Nam, Oán — từ đó phát triển thành hàng trăm bản con. Chính từ Đờn ca tài tử mà sân khấu Cải lương ra đời đầu thế kỷ XX.",
    ],
    history: [
      { era: "Cuối thế kỷ XIX", note: "Hình thành ở Nam Bộ từ sự kết hợp giữa Nhã nhạc Huế (do các quan lại, nhạc công vào Nam) và dân ca địa phương." },
      { era: "Đầu thế kỷ XX", note: "Định hình hệ thống 20 bản tổ; lan rộng khắp 21 tỉnh thành Nam Bộ. Sinh ra Cải lương từ lối 'ca ra bộ'." },
      { era: "1930 — 1975", note: "Phát triển mạnh tại Sài Gòn, Mỹ Tho, Cần Thơ, Bạc Liêu — gắn với tên tuổi nhạc sư Cao Văn Lầu (tác giả Dạ cổ hoài lang)." },
      { era: "2013", note: "UNESCO ghi danh là Di sản văn hoá phi vật thể đại diện của nhân loại." },
    ],
    characteristics: [
      { label: "Phạm vi", value: "21 tỉnh Nam Bộ" },
      { label: "Bản tổ", value: "20 bản chia 4 điệu Bắc — Hạ — Nam — Oán" },
      { label: "Nhạc khí", value: "Đàn kìm, đàn tranh, đàn cò, đàn bầu, ghi-ta phím lõm" },
      { label: "Liên quan", value: "Khởi nguồn của Cải lương" },
    ],
    preservation: "Hơn 2.500 câu lạc bộ Đờn ca tài tử trên cả Nam Bộ. Festival Đờn ca tài tử quốc gia được tổ chức luân phiên giữa các tỉnh.",
    extended: [
      { heading: "Hai mươi bản tổ", body: "Toàn bộ Đờn ca tài tử dựa trên 20 bản tổ chia 4 điệu: 6 bản Bắc (vui tươi), 3 bản Nam (trang nghiêm), 4 bản Oán (buồn thương) và 7 bản Hạ (nghi lễ). Người chơi phải thuộc trọn 20 bản này trước khi được công nhận là 'tài tử' chính danh." },
      { heading: "Đặc điểm 'tài tử'", body: "Khác với chuyên nghiệp, các 'tài tử' chơi nhạc vì đam mê — không nhận tiền công, không trình diễn trên sân khấu lớn. Họ tụ họp tại nhà nhau, dưới gốc cây hoặc trên thuyền — tạo nên không khí 'thính phòng' đậm chất Nam Bộ." },
      { heading: "Khởi nguồn của Cải lương", body: "Năm 1916, từ lối 'ca ra bộ' (vừa ca vừa diễn động tác minh hoạ) trên sân khấu Đờn ca tài tử, sân khấu Cải lương ra đời tại Mỹ Tho. Bài 'Dạ cổ hoài lang' (1919) của Cao Văn Lầu trở thành nền tảng của bản 'Vọng cổ' — linh hồn Cải lương." },
    ],
    references: [
      { title: "Art of Đờn ca tài tử music and song", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/art-of-don-ca-tai-tu-music-and-song-in-southern-viet-nam-00601", year: "2013" },
      { title: "Đờn ca tài tử Nam Bộ — 100 năm hình thành và phát triển", source: "Trần Văn Khê, NXB Trẻ", year: "2014" },
      { title: "Festival Đờn ca tài tử Quốc gia", source: "Bộ VHTT&DL" },
    ],
  },
  {
    slug: "vi-giam-nghe-tinh",
    img: viGiam,
    title: "Dân ca Ví, Giặm Nghệ Tĩnh",
    subtitle: "Tiếng hát từ ruộng đồng xứ Nghệ",
    year: "2014",
    unescoType: "Đại diện",
    region: "Nghệ An — Hà Tĩnh",
    origin: "Hàng trăm năm",
    shortDesc: "Hai làn điệu Ví và Giặm gắn liền với lao động — đi cấy, đi cày, dệt vải, chèo thuyền — của người dân xứ Nghệ.",
    longDesc: [
      "Ví và Giặm là hai thể hát dân gian gắn bó mật thiết với đời sống lao động và sinh hoạt của cư dân hai tỉnh Nghệ An và Hà Tĩnh.",
      "Hát Ví thường mượt mà, da diết, dùng trong lao động đồng áng (Ví phường vải, Ví đò đưa, Ví trèo non, Ví phường cấy). Hát Giặm có nhịp điệu rõ ràng, dễ hát, thường dùng kể chuyện và đối đáp.",
      "Đặc trưng nổi bật: hát mộc (không nhạc đệm), giàu chất tự sự, gắn với phương ngữ Nghệ Tĩnh đậm đà. Ngôn ngữ thơ ca thấm sâu vào tâm hồn người Việt qua các tác phẩm của Nguyễn Du, Hồ Xuân Hương — đều xuất xứ vùng này.",
    ],
    history: [
      { era: "Hàng trăm năm", note: "Hình thành tự nhiên trong quá trình lao động sản xuất của cư dân Nghệ Tĩnh — ban đầu là những câu hát đối đáp khi cấy lúa, kéo lưới, chèo đò." },
      { era: "Thế kỷ XVIII — XIX", note: "Phát triển thành hệ thống làn điệu phong phú — gắn với phong trào hát phường vải, phường cấy, phường củi của vùng quê." },
      { era: "2014", note: "UNESCO ghi danh là Di sản văn hoá phi vật thể đại diện của nhân loại." },
    ],
    characteristics: [
      { label: "Hai thể loại chính", value: "Ví và Giặm" },
      { label: "Số làn điệu Ví", value: "Hơn 15 loại (Ví phường vải, đò đưa…)" },
      { label: "Đặc trưng", value: "Hát mộc, không nhạc đệm" },
      { label: "Phạm vi", value: "Nghệ An và Hà Tĩnh" },
    ],
    preservation: "Hơn 100 câu lạc bộ tại Nghệ An và Hà Tĩnh; đưa vào chương trình giáo dục địa phương.",
    extended: [
      { heading: "Hát Ví theo phường nghề", body: "Mỗi nghề có làn Ví riêng: Ví phường vải (dệt vải), Ví phường cấy (cấy lúa), Ví phường nón (làm nón), Ví đò đưa (chèo đò), Ví trèo non (đi rừng), Ví phường củi (đốn củi). Lời hát phản ánh chính công việc và tâm tình người lao động." },
      { heading: "Hát Giặm có cấu trúc rõ ràng", body: "Khác với Ví tự do, Giặm có nhịp 5 chữ cố định, mỗi câu thường có 5 từ. Có Giặm kể (kể chuyện), Giặm vè (châm biếm), Giặm nam nữ (đối đáp giao duyên). Giặm dễ thuộc nên trở thành phương tiện truyền thông dân gian hữu hiệu." },
      { heading: "Văn hoá xứ Nghệ trong dân ca", body: "Ngôn ngữ Ví, Giặm sử dụng phương ngữ Nghệ Tĩnh đặc trưng — 'mô', 'tê', 'răng', 'rứa', 'chi'. Lời ca thấm đẫm triết lý sống cần kiệm, chung thuỷ, hiếu thảo — phản ánh tâm hồn người dân vùng đất khắc nghiệt nhưng giàu nghị lực." },
    ],
    references: [
      { title: "Ví and Giặm folk songs of Nghệ Tĩnh", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/vi-and-giam-folk-songs-of-nghe-tinh-01008", year: "2014" },
      { title: "Dân ca Ví, Giặm Nghệ Tĩnh", source: "Ninh Viết Giao, NXB Nghệ An", year: "2012" },
      { title: "Trung tâm Bảo tồn Dân ca xứ Nghệ", source: "Sở VHTT Nghệ An" },
    ],
  },
  {
    slug: "nghi-le-keo-co",
    img: keoCo,
    title: "Nghi lễ và trò chơi kéo co",
    subtitle: "Sức mạnh cộng đồng",
    year: "2015",
    unescoType: "Đại diện",
    region: "Việt Nam — Hàn Quốc — Campuchia — Philippines",
    origin: "Truyền thống nông nghiệp lúa nước",
    shortDesc: "Di sản đa quốc gia — biểu tượng sức mạnh cộng đồng, cầu mưa thuận gió hoà của cư dân nông nghiệp.",
    longDesc: [
      "Đây là di sản đa quốc gia được UNESCO ghi danh chung cho 4 nước: Việt Nam, Hàn Quốc, Campuchia và Philippines — phản ánh đặc trưng văn hoá nông nghiệp lúa nước Đông Á và Đông Nam Á.",
      "Tại Việt Nam, nghi lễ kéo co tồn tại ở 4 tỉnh: Lào Cai (kéo co của người Tày, Giáy), Vĩnh Phúc (làng Hữu Chấp), Bắc Ninh (làng Hữu Chấp), Hà Nội (đền Trấn Vũ — kéo co ngồi).",
      "Khác với trò chơi thông thường, kéo co ở đây mang tính nghi lễ — gắn với cầu mưa, cầu mùa màng tốt tươi, biểu trưng cuộc đấu giữa âm và dương.",
    ],
    history: [
      { era: "Truyền thống cổ", note: "Có nguồn gốc từ nghi lễ nông nghiệp cổ — cầu mưa, cầu mùa của cư dân lúa nước." },
      { era: "Các thế kỷ", note: "Duy trì liên tục tại các làng cổ vùng đồng bằng Bắc Bộ và miền núi phía Bắc." },
      { era: "2015", note: "UNESCO ghi danh là di sản đa quốc gia — chung cho Việt Nam, Hàn Quốc, Campuchia, Philippines." },
    ],
    characteristics: [
      { label: "Quốc gia tham gia", value: "Việt Nam, Hàn Quốc, Campuchia, Philippines" },
      { label: "Tỉnh thành VN", value: "Lào Cai, Vĩnh Phúc, Bắc Ninh, Hà Nội" },
      { label: "Hình thức đặc biệt", value: "Kéo co ngồi (đền Trấn Vũ — Hà Nội)" },
      { label: "Ý nghĩa", value: "Cầu mưa, cầu mùa" },
    ],
    preservation: "Cộng đồng địa phương duy trì nghi lễ trong các lễ hội đầu xuân; tổ chức giao lưu định kỳ với 3 quốc gia còn lại.",
    extended: [
      { heading: "Kéo co ngồi đền Trấn Vũ", body: "Hình thức độc đáo nhất Việt Nam tại đền Trấn Vũ (Long Biên, Hà Nội): các trai làng ngồi bệt, hai chân kẹp vào nhau, dùng dây song luồn qua một lỗ trên cột gỗ rồi kéo. Nghi lễ có từ thế kỷ XVII, gắn với việc thờ Huyền Thiên Trấn Vũ." },
      { heading: "Kéo co của người Tày, Giáy", body: "Tại Lào Cai, người Tày và Giáy dùng dây mây dài tới 30m, nam nữ chia hai phe, kéo trong nghi lễ cầu mưa đầu năm. Bên thắng tượng trưng cho mùa được dự đoán — nếu nam thắng là năm khô hạn, nữ thắng là năm mưa thuận." },
      { heading: "Di sản đa quốc gia", body: "Đây là một trong số ít di sản UNESCO ghi danh đa quốc gia (multinational) — đòi hỏi 4 nước cùng nộp hồ sơ chung và cam kết bảo tồn. Việc này phản ánh sự chia sẻ văn hoá lúa nước giữa các dân tộc Đông Á và Đông Nam Á." },
    ],
    references: [
      { title: "Tugging rituals and games", source: "UNESCO ICH (Multinational)", url: "https://ich.unesco.org/en/RL/tugging-rituals-and-games-01080", year: "2015" },
      { title: "Nghi lễ kéo co ở Việt Nam", source: "Viện Văn hoá Nghệ thuật Quốc gia Việt Nam", year: "2015" },
      { title: "Cục Di sản Văn hoá", source: "dsvh.gov.vn" },
    ],
  },
  {
    slug: "tho-mau-tam-phu",
    img: thoMau,
    title: "Tín ngưỡng thờ Mẫu Tam phủ",
    subtitle: "Đạo Mẫu của người Việt",
    year: "2016",
    unescoType: "Đại diện",
    region: "Đồng bằng và trung du Bắc Bộ",
    origin: "Thế kỷ XVI",
    shortDesc: "Tín ngưỡng bản địa thờ ba miền vũ trụ — Thiên phủ, Địa phủ, Thoải phủ — qua nghi lễ hầu đồng đầy màu sắc.",
    longDesc: [
      "Tín ngưỡng thờ Mẫu Tam phủ — còn gọi là Đạo Mẫu — là tín ngưỡng bản địa độc đáo của người Việt, thờ Mẫu (Mẹ) là đấng sáng tạo và che chở.",
      "Hệ thống Tam phủ gồm: Thiên phủ (trời — Mẫu Liễu Hạnh), Địa phủ (đất), Thoải phủ (nước). Sau mở rộng thành Tứ phủ với thêm Nhạc phủ (rừng núi).",
      "Nghi lễ trung tâm là Hầu đồng — thanh đồng (người được Thánh nhập) hoá thân vào 36 giá đồng, mỗi giá là một vị Thánh khác nhau với trang phục, vũ điệu và bài hát chầu văn riêng biệt.",
    ],
    history: [
      { era: "Thế kỷ XVI", note: "Hình thành xung quanh huyền thoại Mẫu Liễu Hạnh — một trong Tứ bất tử của tín ngưỡng dân gian Việt Nam." },
      { era: "Thế kỷ XVII — XIX", note: "Phát triển mạnh thành hệ thống Tam phủ, Tứ phủ với hơn 100 đền, phủ, điện thờ trên khắp Bắc Bộ." },
      { era: "1954 — 1986", note: "Bị cấm vì coi là 'mê tín dị đoan'; nhiều đền phủ bị đóng cửa, hầu đồng phải hoạt động ngầm." },
      { era: "1990 — nay", note: "Phục hồi mạnh mẽ; chầu văn được công nhận là âm nhạc nghệ thuật." },
      { era: "2016", note: "UNESCO ghi danh là Di sản văn hoá phi vật thể đại diện của nhân loại." },
    ],
    characteristics: [
      { label: "Hệ thống Tam phủ", value: "Thiên — Địa — Thoải" },
      { label: "Số giá đồng", value: "36 giá chính" },
      { label: "Âm nhạc nghi lễ", value: "Chầu văn" },
      { label: "Trung tâm", value: "Phủ Dầy (Nam Định), Phủ Tây Hồ (Hà Nội)" },
    ],
    preservation: "Hàng nghìn thanh đồng và cung văn duy trì nghi lễ trên khắp miền Bắc và lan rộng vào miền Nam.",
    extended: [
      { heading: "Ba mươi sáu giá đồng", body: "Mỗi giá đồng là một vị Thánh: Quan lớn (5 vị), Chầu Bà (12 vị), Ông Hoàng (10 vị), Cô (12 vị), Cậu (10 vị). Khi 'thăng đồng', thanh đồng thay trang phục tương ứng — áo đỏ Quan Đệ nhất, áo xanh Chầu Đệ nhị, áo vàng Ông Hoàng Mười..." },
      { heading: "Hát chầu văn", body: "Âm nhạc nghi lễ đặc trưng do dàn cung văn (3-5 người) trình diễn với nhạc khí: đàn nguyệt, trống cái, phách, cảnh, sáo. Mỗi giá đồng có một làn điệu riêng — bồng mạc, sa mạc, cờn, dọc, xá — với lời ca ca ngợi vị Thánh đó." },
      { heading: "Vai trò xã hội của Đạo Mẫu", body: "Đạo Mẫu đề cao vai trò người phụ nữ — Mẫu là đấng tối cao. Đây là tín ngưỡng hiếm hoi trên thế giới đặt nữ thần ở vị trí trung tâm. Phủ Dầy (Nam Định) là 'thủ đô' của Đạo Mẫu, gắn với Mẫu Liễu Hạnh." },
    ],
    references: [
      { title: "Practices related to the Viet beliefs in the Mother Goddesses of Three Realms", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/practices-related-to-the-viet-beliefs-in-the-mother-goddesses-of-three-realms-01064", year: "2016" },
      { title: "Đạo Mẫu Việt Nam (2 tập)", source: "Ngô Đức Thịnh, NXB Tôn giáo", year: "2009" },
      { title: "Hội Di sản Văn hoá Việt Nam", source: "vietnamheritage.org.vn" },
    ],
  },
  {
    slug: "bai-choi",
    img: baiChoi,
    title: "Nghệ thuật Bài Chòi Trung Bộ",
    subtitle: "Trò chơi và sân khấu hợp nhất",
    year: "2017",
    unescoType: "Đại diện",
    region: "9 tỉnh Trung Bộ",
    origin: "Thế kỷ XVI — XVII",
    shortDesc: "Sự kết hợp độc đáo giữa trò chơi bài lá, âm nhạc, hát đối và kịch dân gian miền Trung.",
    longDesc: [
      "Bài Chòi là loại hình nghệ thuật tổng hợp đặc trưng 9 tỉnh ven biển miền Trung — từ Quảng Bình đến Khánh Hoà — nổi bật ở Quảng Nam, Quảng Ngãi, Bình Định, Phú Yên.",
      "Hai hình thức chính: Hô bài chòi (trò chơi cộng đồng — người chơi ngồi trong các chòi tre, người 'hô bài' hát các câu thai để xướng tên quân bài) và Bài chòi sân khấu (kịch hát dân gian phát triển từ trò chơi).",
      "Một hội Bài chòi có 9 hoặc 11 chòi tre dựng quanh sân, chính giữa là chòi cái. Người 'anh hiệu' vừa rút bài vừa hát những câu thai mộc mạc, hài hước.",
    ],
    history: [
      { era: "Thế kỷ XVI — XVII", note: "Hình thành ở vùng đất Đàng Trong dưới thời chúa Nguyễn — bắt nguồn từ trò chơi giữ chòi canh thú dữ trên nương." },
      { era: "Thế kỷ XIX — XX", note: "Phát triển thành sân khấu Bài chòi với các vở kịch dân gian; lan rộng ra 9 tỉnh miền Trung." },
      { era: "2017", note: "UNESCO ghi danh là Di sản văn hoá phi vật thể đại diện của nhân loại." },
    ],
    characteristics: [
      { label: "Phạm vi", value: "9 tỉnh từ Quảng Bình đến Khánh Hoà" },
      { label: "Hai hình thức", value: "Hô bài chòi & Bài chòi sân khấu" },
      { label: "Số chòi", value: "9 hoặc 11 chòi tre" },
      { label: "Bộ bài", value: "30 quân — chia 3 pho" },
    ],
    preservation: "Tổ chức định kỳ tại Hội An, Bình Định trong các dịp Tết và lễ hội. Nhiều câu lạc bộ Bài chòi tại các tỉnh miền Trung.",
    extended: [
      { heading: "Bộ bài 30 quân", body: "Bài chòi dùng bộ bài riêng 30 quân, chia thành 3 pho mỗi pho 10 quân: pho Văn (Nhứt Trò, Nhì Bí, Tam Quăng...), pho Vạn (Nhứt Gối, Nhì Nghèo, Tam Trò...), pho Sách (Nhứt Nọc, Nhì Nghèo, Ông Ầm...). Mỗi quân có một câu thai (câu đố hát) riêng." },
      { heading: "Vai trò anh Hiệu", body: "Người dẫn trò gọi là 'anh Hiệu' — vừa rút bài vừa hát câu thai bằng giọng kéo dài, hài hước, châm biếm. Anh Hiệu giỏi có thể ngẫu hứng thêm thắt câu thai theo tình hình cuộc chơi, tạo nên không khí sôi động." },
      { heading: "Từ trò chơi sang sân khấu", body: "Thế kỷ XX, các vở Bài chòi sân khấu ra đời với cốt truyện hoàn chỉnh — Thoại Khanh Châu Tuấn, Lâm Sanh Xuân Nương — tạo nên loại hình kịch hát mới. Hội An (Quảng Nam) là nơi bảo tồn cả hai hình thức trò chơi và sân khấu Bài chòi tốt nhất." },
    ],
    references: [
      { title: "Art of Bài Chòi card game and singing of Central Vietnam", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/the-art-of-bai-choi-card-game-and-singing-of-central-viet-nam-01222", year: "2017" },
      { title: "Bài Chòi — Di sản dân gian miền Trung", source: "Viện Âm nhạc Việt Nam", year: "2016" },
      { title: "Trung tâm Bảo tồn Di sản Hội An", source: "hoianheritage.net" },
    ],
  },
  {
    slug: "thuc-hanh-then",
    img: then,
    title: "Thực hành Then của người Tày, Nùng, Thái",
    subtitle: "Cầu nối giữa người và Then",
    year: "2019",
    unescoType: "Đại diện",
    region: "11 tỉnh miền núi phía Bắc",
    origin: "Hàng trăm năm",
    shortDesc: "Nghi lễ tâm linh kết hợp hát Then và đàn tính — cầu nối giữa con người và thế giới Then thiêng liêng.",
    longDesc: [
      "Thực hành Then là nghi lễ tâm linh quan trọng nhất của ba dân tộc Tày, Nùng, Thái — phản ánh thế giới quan, vũ trụ quan và đạo lý sống của các tộc người miền núi phía Bắc.",
      "Then trong tiếng Tày — Nùng có nghĩa là 'Trời'. Người làm Then (thầy Then) là cầu nối giữa cộng đồng và các vị Then thiêng liêng — qua các cuộc hành trình tâm linh được tái hiện bằng hát và đàn.",
      "Nhạc khí trung tâm là đàn tính (tính tẩu) — đàn 2 hoặc 3 dây bầu nậm — kết hợp với chùm xóc nhạc đeo cổ chân tạo tiết tấu đặc trưng.",
    ],
    history: [
      { era: "Hàng trăm năm", note: "Hình thành trong cộng đồng Tày, Nùng, Thái ở miền núi phía Bắc — gắn với tín ngưỡng đa thần và tục thờ Then." },
      { era: "Thế kỷ XX", note: "Bị suy giảm trong giai đoạn xoá bỏ 'mê tín'; đàn tính và làn điệu Then được tách ra biểu diễn nghệ thuật." },
      { era: "2019", note: "UNESCO ghi danh thực hành Then của người Tày, Nùng, Thái là Di sản văn hoá phi vật thể đại diện của nhân loại." },
    ],
    characteristics: [
      { label: "Dân tộc thực hành", value: "Tày, Nùng, Thái" },
      { label: "Nhạc khí trung tâm", value: "Đàn tính (tính tẩu)" },
      { label: "Loại Then", value: "Then kỳ yên, Then chữa bệnh, Then cấp sắc" },
      { label: "Phạm vi", value: "11 tỉnh miền núi phía Bắc" },
    ],
    preservation: "Hơn 800 thầy Then đang hành nghề; đưa hát Then vào các trường nghệ thuật và trường phổ thông tại Cao Bằng, Lạng Sơn, Tuyên Quang.",
    extended: [
      { heading: "Đàn tính — linh hồn của Then", body: "Đàn tính (tính tẩu) làm từ quả bầu khô, cần đàn gỗ dâu, 2 hoặc 3 dây tơ. Tiếng đàn trầm ấm, có khả năng tạo ra những giai điệu lặp đi lặp lại như tiếng tụng — đưa thầy Then vào trạng thái xuất thần để 'lên đường' tới các cõi Then." },
      { heading: "Hành trình tâm linh trong Then", body: "Một cuộc Then là cuộc hành trình tưởng tượng của thầy Then dẫn 'đoàn quân Then' đi qua nhiều cõi: cõi trần, cõi âm, cõi Then. Hành trình được kể bằng hát — qua sông, leo núi, vượt rừng, đến gặp các vị Then để xin lộc, chữa bệnh, cấp sắc." },
      { heading: "Then khao và Then cấp sắc", body: "Hai nghi lễ quan trọng nhất: Then khao (cầu phúc đầu năm cho gia đình) và Then cấp sắc (lễ tấn phong cho thầy Then mới — kéo dài 3 ngày 3 đêm với hàng chục bài hát Then liên tiếp)." },
    ],
    references: [
      { title: "Practices of Then by Tày, Nùng and Thái groups", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/practices-of-then-by-tay-nung-and-thai-ethnic-groups-in-viet-nam-01379", year: "2019" },
      { title: "Then Tày — Nghi lễ và nghệ thuật", source: "Nguyễn Thị Yên, NXB Văn hoá Dân tộc", year: "2010" },
      { title: "Bảo tàng Văn hoá các Dân tộc Việt Nam", source: "baotangvhcdt.vn" },
    ],
  },
  {
    slug: "xoe-thai",
    img: xoeThai,
    title: "Nghệ thuật Xòe Thái",
    subtitle: "Vòng tay đoàn kết Tây Bắc",
    year: "2021",
    unescoType: "Đại diện",
    region: "Tây Bắc",
    origin: "Hàng trăm năm",
    shortDesc: "Điệu múa vòng tròn nắm tay quanh đống lửa của người Thái — biểu tượng đoàn kết cộng đồng.",
    longDesc: [
      "Xòe — nghĩa là 'múa' trong tiếng Thái — là loại hình nghệ thuật trình diễn đặc trưng của dân tộc Thái ở 4 tỉnh: Yên Bái, Lai Châu, Điện Biên, Sơn La.",
      "Có 6 điệu xòe cổ là 'xòe Thái nguyên gốc': Khắm khen (nắm tay), Khắm khăn mời lảu (cầm khăn mời rượu), Phá xí (bốn người tụ lại), Đổn hôn (tiến lùi), Nhôm khăn (tung khăn), Ỏm lọm tốp mư (đi vòng vỗ tay).",
      "Xòe diễn ra trong mọi sự kiện cộng đồng: cưới hỏi, mừng nhà mới, Tết, lễ hội — quanh đống lửa, mọi người nắm tay nhau thành vòng tròn không phân biệt giới tính, tuổi tác, địa vị.",
    ],
    history: [
      { era: "Hàng trăm năm", note: "Hình thành cùng với quá trình định cư của người Thái ở Tây Bắc — phản ánh đời sống nông nghiệp và tín ngưỡng đa thần." },
      { era: "Thế kỷ XX", note: "Phát triển thành nhiều biến thể; ngoài 6 điệu cổ còn hơn 30 điệu xòe phái sinh được sân khấu hoá." },
      { era: "2021", note: "UNESCO ghi danh nghệ thuật Xòe Thái là Di sản văn hoá phi vật thể đại diện của nhân loại." },
    ],
    characteristics: [
      { label: "Số điệu xòe cổ", value: "6 điệu" },
      { label: "Phạm vi", value: "Yên Bái, Lai Châu, Điện Biên, Sơn La" },
      { label: "Nhạc khí", value: "Trống, chiêng, khèn bè, pí, tính tẩu" },
      { label: "Đặc trưng", value: "Múa vòng tròn nắm tay quanh lửa" },
    ],
    preservation: "Hơn 1.500 đội xòe ở 4 tỉnh Tây Bắc; xòe được biểu diễn thường xuyên tại Mù Cang Chải, Mường Lò, Điện Biên Phủ.",
    extended: [
      { heading: "Sáu điệu xòe cổ", body: "Khắm khen (nắm tay đoàn kết), Khắm khăn mời lảu (cầm khăn mời rượu — biểu tượng hiếu khách), Phá xí (bốn người tụ lại — sức mạnh tập thể), Đổn hôn (tiến lùi — vũ điệu sinh sôi), Nhôm khăn (tung khăn — niềm vui), Ỏm lọm tốp mư (đi vòng vỗ tay)." },
      { heading: "Xòe trong đời sống", body: "Xòe diễn ra trong mọi sự kiện cộng đồng người Thái — từ cưới hỏi, mừng nhà mới, mừng được mùa, đến lễ Xíp xí (rằm tháng 7), Tết Then. Quy mô có thể từ vài chục đến hàng nghìn người cùng nắm tay quanh đống lửa lớn." },
      { heading: "Mường Lò — cái nôi của Xòe", body: "Vùng Mường Lò (thị xã Nghĩa Lộ, Yên Bái) được xem là cái nôi của nghệ thuật Xòe Thái. Festival Xòe Mường Lò được tổ chức định kỳ với hàng nghìn nghệ nhân tham gia, tạo vòng xòe khổng lồ ghi vào sách kỷ lục." },
    ],
    references: [
      { title: "Art of Xòe dance of the Thái people", source: "UNESCO ICH", url: "https://ich.unesco.org/en/RL/art-of-xoe-dance-of-the-thai-people-in-viet-nam-01670", year: "2021" },
      { title: "Xoè Thái — Di sản văn hoá Tây Bắc", source: "Hoàng Lương, NXB Văn hoá Dân tộc", year: "2018" },
      { title: "Sở VHTT&DL Yên Bái", source: "svhttdl.yenbai.gov.vn" },
    ],
  },
  {
    slug: "gom-cham",
    img: gomCham,
    title: "Nghệ thuật làm gốm của người Chăm",
    subtitle: "Gốm không bàn xoay",
    year: "2022",
    unescoType: "Cần bảo vệ khẩn cấp",
    region: "Ninh Thuận — Bình Thuận",
    origin: "Hàng nghìn năm",
    shortDesc: "Kỹ thuật làm gốm cổ xưa không dùng bàn xoay — di sản chỉ còn ở hai làng Bàu Trúc và Bình Đức.",
    longDesc: [
      "Nghệ thuật làm gốm Chăm là một trong những kỹ thuật làm gốm cổ xưa nhất còn tồn tại ở Đông Nam Á — nay chỉ còn ở hai làng Bàu Trúc (Ninh Thuận) và Bình Đức (Bình Thuận).",
      "Đặc trưng độc đáo: không dùng bàn xoay. Người thợ — gần như đều là phụ nữ — đi vòng quanh khối đất, dùng tay và các dụng cụ đơn giản (vòng tre, vỏ sò, miếng vải) để tạo hình.",
      "Gốm Chăm nung lộ thiên không lò, dùng rơm, củi, phân bò khô — cho ra màu đỏ nâu đặc trưng với những vệt cháy ngẫu nhiên tạo nét nghệ thuật riêng.",
    ],
    history: [
      { era: "Hàng nghìn năm", note: "Có nguồn gốc từ nền văn hoá Sa Huỳnh và vương quốc Chăm Pa cổ — kỹ thuật được truyền từ mẹ sang con gái suốt nhiều thế hệ." },
      { era: "Thế kỷ XX", note: "Suy giảm nghiêm trọng do đồ nhựa, đồ kim loại thay thế gốm trong sinh hoạt hàng ngày; chỉ còn 2 làng còn giữ nghề." },
      { era: "2022", note: "UNESCO ghi vào Danh sách di sản văn hoá phi vật thể cần bảo vệ khẩn cấp." },
    ],
    characteristics: [
      { label: "Hai làng còn nghề", value: "Bàu Trúc & Bình Đức" },
      { label: "Đặc trưng", value: "Không dùng bàn xoay" },
      { label: "Người làm", value: "Chủ yếu là phụ nữ" },
      { label: "Cách nung", value: "Lộ thiên — rơm, củi, phân bò" },
    ],
    preservation: "Phát triển Bàu Trúc thành làng nghề du lịch; mở lớp truyền dạy cho thế hệ trẻ; sản phẩm xuất khẩu sang nhiều nước.",
    extended: [
      { heading: "Kỹ thuật 'người đi quanh đất'", body: "Không dùng bàn xoay — người thợ đặt khối đất giữa, tự mình đi vòng quanh, dùng vòng tre, vỏ sò, miếng vải ướt để vuốt và tạo hình. Kỹ thuật này có từ thời tiền sử, là một trong những phương pháp làm gốm cổ xưa nhất còn tồn tại trên thế giới." },
      { heading: "Đất sét và pha trộn", body: "Đất sét được lấy từ đồng ruộng quanh làng Bàu Trúc, trộn với cát mịn từ sông Quao theo tỷ lệ bí truyền. Đất phải được nhào kỹ bằng chân, ủ qua đêm trước khi tạo hình — đảm bảo độ dẻo và không nứt khi nung." },
      { heading: "Nung lộ thiên", body: "Sản phẩm được phơi khô 5-7 ngày, sau đó xếp thành đống ngoài trời, phủ rơm, củi và phân bò khô rồi đốt. Lửa cháy 4-6 giờ ở nhiệt độ 700-900°C tạo nên màu đỏ nâu đặc trưng và những vệt cháy ngẫu nhiên — không sản phẩm nào giống sản phẩm nào." },
    ],
    references: [
      { title: "Art of pottery-making of Chăm people", source: "UNESCO ICH (Urgent Safeguarding)", url: "https://ich.unesco.org/en/USL/art-of-pottery-making-of-cham-people-01831", year: "2022" },
      { title: "Gốm Chăm Bàu Trúc — Nghề và đời", source: "Sakaya, NXB Văn hoá Dân tộc", year: "2008" },
      { title: "Sở VHTT&DL Ninh Thuận", source: "svhttdl.ninhthuan.gov.vn" },
    ],
  },
];

export const getHeritageBySlug = (slug: string) => heritages.find((h) => h.slug === slug);
