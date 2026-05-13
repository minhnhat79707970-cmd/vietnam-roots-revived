import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { HeritageGrid } from "@/components/HeritageGrid";
import { Regions } from "@/components/Regions";
import { Festivals } from "@/components/Festivals";
import { SiteFeedback } from "@/components/SiteFeedback";
import { Footer } from "@/components/Footer";
import { SectionNav } from "@/components/SectionNav";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
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
