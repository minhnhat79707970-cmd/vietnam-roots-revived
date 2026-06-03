import { lazy, Suspense } from "react";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { SectionNav } from "@/components/SectionNav";
import { SEO } from "@/components/SEO";
import {
  TimelineSkeleton,
  HeritageGridSkeleton,
  RegionsSkeleton,
  FestivalsSkeleton,
} from "@/components/skeletons/SectionSkeletons";

// Code-splitting cho các section nặng giúp giảm bundle khởi đầu
const Timeline = lazy(() => import("@/components/Timeline").then(m => ({ default: m.Timeline })));
const HeritageGrid = lazy(() => import("@/components/HeritageGrid").then(m => ({ default: m.HeritageGrid })));
const Regions = lazy(() => import("@/components/Regions").then(m => ({ default: m.Regions })));
const Festivals = lazy(() => import("@/components/Festivals").then(m => ({ default: m.Festivals })));
const HistoryQuiz = lazy(() => import("@/components/HistoryQuiz").then(m => ({ default: m.HistoryQuiz })));
const SiteFeedback = lazy(() => import("@/components/SiteFeedback").then(m => ({ default: m.SiteFeedback })));

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Hồn Việt — Bảo tàng số di sản văn hoá & lịch sử Việt Nam"
        description="Hành trình qua bốn nghìn năm văn hiến: lịch sử các triều đại, 15 di sản phi vật thể UNESCO, lễ hội và bản đồ di sản ba miền Việt Nam."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Hồn Việt",
            url: "https://vietnam-roots-revived.lovable.app/",
            inLanguage: ["vi", "en"],
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hồn Việt",
            url: "https://vietnam-roots-revived.lovable.app/",
            description: "Bảo tàng số di sản văn hoá và lịch sử Việt Nam.",
          },
        ]}
      />
      <SectionNav />
      <Hero />
      <Suspense fallback={<TimelineSkeleton />}>
        <Timeline />
      </Suspense>
      <Suspense fallback={<HeritageGridSkeleton />}>
        <HeritageGrid />
      </Suspense>
      <Suspense fallback={<RegionsSkeleton />}>
        <Regions />
      </Suspense>
      <Suspense fallback={<FestivalsSkeleton />}>
        <Festivals />
      </Suspense>
      <Suspense fallback={null}>
        <HistoryQuiz />
      </Suspense>
      <Suspense fallback={null}>
        <SiteFeedback />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Index;
