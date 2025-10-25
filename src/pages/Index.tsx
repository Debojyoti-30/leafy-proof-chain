import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { MapInterface } from "@/components/MapInterface";
import { ImpactResults } from "@/components/ImpactResults";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <MapInterface />
      <ImpactResults />
      <Footer />
    </div>
  );
};

export default Index;
