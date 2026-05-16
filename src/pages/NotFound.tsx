import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEO
        title="404 — Không tìm thấy trang · Hồn Việt"
        description="Trang bạn tìm không tồn tại trên Hồn Việt. Quay về trang chủ để tiếp tục khám phá di sản Việt Nam."
        path="/404"
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Không tìm thấy trang</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors"
        >
          <Home className="w-4 h-4" /> Trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
