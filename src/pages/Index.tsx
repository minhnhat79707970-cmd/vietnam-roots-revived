import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { HeritageGrid } from "@/components/HeritageGrid";
import { Regions } from "@/components/Regions";
import { Festivals } from "@/components/Festivals";
import { SiteFeedback } from "@/components/SiteFeedback";
import { Footer } from "@/components/Footer";
import { SectionNav } from "@/components/SectionNav";
import { SEO } from "@/components/SEO";

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
      <Timeline />
      <HeritageGrid />
      <Regions />
      <Festivals />
      <SiteFeedback />
      <Footer />
    </main>
  );
};

export default Index;
