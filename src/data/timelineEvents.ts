import dongSon from "@/assets/dong-son-drum.jpg";
import hungVuong from "@/assets/hung-vuong.jpg";
import coLoa from "@/assets/landmarks/co-loa.jpg";
import temple from "@/assets/heritage-temple.jpg";
import halong from "@/assets/landmarks/halong-bay.jpg";
import trangAn from "@/assets/landmarks/trang-an.jpg";
import tamCoc from "@/assets/landmarks/tam-coc.jpg";
import hoangThanh from "@/assets/landmarks/hoang-thanh-thang-long.jpg";
import chuaMotCot from "@/assets/landmarks/chua-mot-cot.jpg";
import vanMieu from "@/assets/landmarks/van-mieu.jpg";
import chuaHuong from "@/assets/landmarks/chua-huong.jpg";
import thanhNhaHo from "@/assets/landmarks/thanh-nha-ho.jpg";
import viGiam from "@/assets/vi-giam.jpg";
import hue from "@/assets/landmarks/hue-citadel.jpg";
import nhaNhac from "@/assets/nha-nhac.jpg";
import caMau from "@/assets/landmarks/ca-mau.jpg";
import sonDoong from "@/assets/landmarks/son-doong.jpg";
import gomCham from "@/assets/gom-cham.jpg";
import haGiang from "@/assets/landmarks/ha-giang.jpg";
import conDao from "@/assets/landmarks/con-dao.jpg";
import cuChi from "@/assets/landmarks/cu-chi.jpg";
import dinhDocLap from "@/assets/landmarks/dinh-doc-lap.jpg";
import saigon from "@/assets/landmarks/saigon.jpg";
import hanoi from "@/assets/landmarks/hanoi-old-quarter.jpg";
import halongB from "@/assets/landmarks/halong-bay.jpg";

export type TimelineEvent = {
  year: string;
  title: string;
  image: string;
  story: string;
};

/** Sự kiện chi tiết theo từng thời kỳ (thứ tự khớp mảng `eras` trong Timeline). Nguồn tham khảo: Wikipedia "Lịch sử Việt Nam". */
export const timelineEvents: TimelineEvent[][] = [
  [
    { year: "~500.000 năm trước", title: "Dấu vết người cổ ở núi Đọ", image: sonDoong,
      story: "Công cụ đá ghè đẽo thô sơ ở núi Đọ (Thanh Hoá) cho thấy người tối cổ đã sống trên đất Việt từ thời đồ đá cũ. Các di chỉ hang Thẩm Khuyên, Thẩm Hai (Lạng Sơn) còn lưu răng người vượn." },
    { year: "~20.000 – 8.000 năm trước", title: "Văn hoá Hoà Bình – Bắc Sơn", image: trangAn,
      story: "Cư dân sống trong hang động đá vôi, săn bắt, hái lượm và bắt đầu trồng trọt sơ khai. Tên 'Hoabinhian' được giới khảo cổ quốc tế dùng cho cả Đông Nam Á. Hang Con Moong và Tràng An lưu giữ nhiều tầng văn hoá liên tục." },
    { year: "~2000 TCN", title: "Văn hoá Phùng Nguyên", image: gomCham,
      story: "Ở vùng trung du Phú Thọ, người xưa làm gốm hoa văn tinh xảo, biết trồng lúa nước và bắt đầu luyện đồng — tiền đề trực tiếp của văn hoá Đông Sơn và nhà nước Văn Lang." },
  ],
  [
    { year: "~2879 TCN", title: "Vua Hùng lập nước Văn Lang", image: hungVuong,
      story: "Theo truyền thuyết, Lạc Long Quân và Âu Cơ sinh bọc trăm trứng; người con trưởng lên ngôi Hùng Vương, đóng đô ở Phong Châu (Phú Thọ), đặt quốc hiệu Văn Lang. Ngày Giỗ Tổ 10/3 âm lịch nay là quốc lễ, và Tín ngưỡng thờ cúng Hùng Vương được UNESCO ghi danh năm 2012." },
    { year: "~700 TCN", title: "Văn hoá Đông Sơn và trống đồng", image: dongSon,
      story: "Cư dân Lạc Việt đúc những chiếc trống đồng như Ngọc Lũ, Hoàng Hạ với mặt trời ở tâm, chim Lạc bay quanh, cảnh giã gạo, đua thuyền. Trống vừa là nhạc khí, vừa là biểu tượng quyền lực và tín ngưỡng nông nghiệp lúa nước." },
    { year: "257 TCN", title: "An Dương Vương xây thành Cổ Loa", image: coLoa,
      story: "Thục Phán hợp nhất Âu Việt và Lạc Việt thành Âu Lạc, dựng thành Cổ Loa hình xoáy ốc với ba vòng thành. Gắn với nơi đây là truyền thuyết nỏ thần móng rùa và bi kịch Mỵ Châu – Trọng Thuỷ." },
  ],
  [
    { year: "40", title: "Khởi nghĩa Hai Bà Trưng", image: temple,
      story: "Trưng Trắc cùng em Trưng Nhị phất cờ ở Hát Môn, đánh đuổi thái thú Tô Định, lấy lại 65 thành trì. Trưng Trắc xưng vương, đóng đô ở Mê Linh — người phụ nữ đầu tiên lãnh đạo dân tộc giành độc lập." },
    { year: "248", title: "Bà Triệu cưỡi voi ra trận", image: temple,
      story: "Triệu Thị Trinh ở Thanh Hoá khởi binh với lời thề: “Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông…”. Hình ảnh bà mặc giáp vàng cưỡi voi trở thành biểu tượng khí phách người Việt." },
    { year: "544", title: "Lý Bí lập nước Vạn Xuân", image: temple,
      story: "Sau khi đánh đuổi quân Lương, Lý Bí xưng Lý Nam Đế, đặt quốc hiệu Vạn Xuân — mong đất nước muôn mùa xuân — và dựng chùa Khai Quốc, tiền thân của chùa Trấn Quốc ngày nay." },
  ],
  [
    { year: "938", title: "Chiến thắng Bạch Đằng", image: halong,
      story: "Ngô Quyền cho đóng cọc gỗ bịt sắt dưới lòng sông Bạch Đằng. Khi triều lên, dụ thuyền Nam Hán vào; triều rút, thuyền giặc mắc cọc vỡ tan. Trận đánh khép lại hơn một nghìn năm Bắc thuộc." },
    { year: "968", title: "Đinh Bộ Lĩnh dẹp loạn 12 sứ quân", image: trangAn,
      story: "Cậu bé cờ lau tập trận ở Hoa Lư lớn lên thống nhất đất nước, lên ngôi Đinh Tiên Hoàng, đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư giữa núi đá vôi hiểm trở — nay thuộc Quần thể danh thắng Tràng An." },
    { year: "981", title: "Lê Hoàn phá Tống", image: tamCoc,
      story: "Được tướng sĩ khoác áo long bào, Lê Hoàn lên ngôi và đánh tan quân Tống ở Chi Lăng, Bạch Đằng. Năm 987, ông tổ chức lễ cày tịch điền đầu tiên, khẳng định vai trò nông nghiệp." },
  ],
  [
    { year: "1010", title: "Chiếu dời đô về Thăng Long", image: hoangThanh,
      story: "Lý Công Uẩn thấy thành Đại La “ở giữa khu vực trời đất, được thế rồng cuộn hổ ngồi” nên dời đô. Tương truyền khi thuyền cập bến, rồng vàng bay lên — kinh đô được đặt tên Thăng Long." },
    { year: "1049", title: "Dựng chùa Một Cột", image: chuaMotCot,
      story: "Vua Lý Thái Tông mộng thấy Quan Âm ngồi toà sen dắt vua lên đài. Theo lời sư Thiền Tuệ, vua cho dựng ngôi chùa trên một cột đá giữa hồ, hình bông sen vươn lên mặt nước." },
    { year: "1070 – 1076", title: "Văn Miếu – Quốc Tử Giám", image: vanMieu,
      story: "Năm 1070 dựng Văn Miếu thờ Khổng Tử; năm 1076 lập Quốc Tử Giám — trường đại học đầu tiên. Cũng thời này, Lý Thường Kiệt đánh Tống với bài thơ thần “Nam quốc sơn hà”." },
  ],
  [
    { year: "1258 · 1285 · 1288", title: "Ba lần thắng Nguyên Mông", image: halong,
      story: "Đội quân từng chinh phục nửa thế giới ba lần bại trận ở Đại Việt. Trần Hưng Đạo viết Hịch tướng sĩ, tái dùng kế cọc Bạch Đằng năm 1288, bắt sống Ô Mã Nhi." },
    { year: "1284", title: "Hội nghị Diên Hồng", image: temple,
      story: "Thượng hoàng Trần Thánh Tông mời các bô lão cả nước về hỏi kế. Muôn người đồng thanh hô “Đánh!” — biểu tượng của ý chí toàn dân và tinh thần dân chủ sơ khai." },
    { year: "1299", title: "Phật hoàng lập Thiền phái Trúc Lâm", image: chuaHuong,
      story: "Trần Nhân Tông nhường ngôi, lên núi Yên Tử tu hành, sáng lập Thiền phái Trúc Lâm mang đậm tinh thần nhập thế: “Cư trần lạc đạo”." },
  ],
  [
    { year: "1428", title: "Bình Ngô đại cáo", image: thanhNhaHo,
      story: "Sau 10 năm khởi nghĩa Lam Sơn, Lê Lợi đánh tan quân Minh. Nguyễn Trãi viết Bình Ngô đại cáo: “Như nước Đại Việt ta từ trước, vốn xưng nền văn hiến đã lâu…”. Tích trả gươm hồ Hoàn Kiếm ra đời từ đây." },
    { year: "1484", title: "Dựng bia Tiến sĩ", image: viGiam,
      story: "Vua Lê Thánh Tông cho khắc tên người đỗ tiến sĩ lên bia đá đặt trên lưng rùa ở Văn Miếu. 82 tấm bia còn lại nay là Di sản tư liệu thế giới." },
    { year: "1789", title: "Quang Trung đại phá quân Thanh", image: hoangThanh,
      story: "Nguyễn Huệ lên ngôi ở Phú Xuân rồi hành quân thần tốc ra Bắc. Chỉ trong 5 ngày Tết Kỷ Dậu, quân Tây Sơn quét sạch 29 vạn quân Thanh, gò Đống Đa còn ghi dấu chiến công." },
  ],
  [
    { year: "1802", title: "Gia Long định đô Phú Xuân", image: hue,
      story: "Nguyễn Ánh thống nhất đất nước, đóng đô ở Huế và năm 1804 đặt quốc hiệu Việt Nam. Kinh thành Huế xây theo thuyết phong thuỷ, dựa núi Ngự Bình, soi bóng sông Hương." },
    { year: "1836 – 1837", title: "Cửu Đỉnh và Nhã nhạc", image: nhaNhac,
      story: "Vua Minh Mạng cho đúc chín đỉnh đồng khắc 162 cảnh sắc non sông. Nhã nhạc cung đình được chuẩn hoá — năm 2003 trở thành Kiệt tác di sản phi vật thể đầu tiên của Việt Nam." },
    { year: "1945", title: "Bảo Đại thoái vị", image: caMau,
      story: "Ngày 30/8/1945, tại Ngọ Môn, vua Bảo Đại trao ấn kiếm, nói: “Trẫm muốn làm dân một nước tự do hơn làm vua một nước nô lệ”, khép lại chế độ quân chủ gần 1.000 năm." },
  ],
];
