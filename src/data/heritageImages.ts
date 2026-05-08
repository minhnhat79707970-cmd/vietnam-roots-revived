// Map từ img_key (lưu trong DB) -> asset đã import sẵn.
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

export const heritageImages: Record<string, string> = {
  "quan-ho": quanHo,
  "ca-tru": caTru,
  "nha-nhac": nhaNhac,
  "cong-chieng": congChieng,
  "hoi-giong": hoiGiong,
  "hat-xoan": hatXoan,
  "hung-vuong": hungVuong,
  "don-ca-tai-tu": donCa,
  "vi-giam": viGiam,
  "keo-co": keoCo,
  "tho-mau": thoMau,
  "bai-choi": baiChoi,
  then: then,
  "xoe-thai": xoeThai,
  "gom-cham": gomCham,
};

export const getHeritageImage = (key: string): string =>
  heritageImages[key] ?? heritageImages["nha-nhac"];