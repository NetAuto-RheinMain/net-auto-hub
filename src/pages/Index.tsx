import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FoundersSection } from "@/components/home/FoundersSection";
import { AboutSection } from "@/components/home/AboutSection";
import { UpcomingEventSection } from "@/components/home/UpcomingEventSection";
import { CallForPapersSection } from "@/components/home/CallForPapersSection";
import { SponsorsSection } from "@/components/home/SponsorsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FoundersSection />
      <AboutSection />
      <UpcomingEventSection />
      <CallForPapersSection />
      <SponsorsSection />
    </Layout>
  );
};

export default Index;
