import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Tự động cuộn lên đầu trang mỗi khi đường dẫn thay đổi.
 * Nếu URL có hash (#section), cuộn đến phần tử đó thay vì đầu trang.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;