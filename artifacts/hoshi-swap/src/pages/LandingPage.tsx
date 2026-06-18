import Navbar from "@/components/sections/Navbar";
import HeroScroll from "@/components/sections/HeroScroll";
import Features from "@/components/sections/Features";
import AppShowcase from "@/components/sections/AppShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import MarketData from "@/components/sections/MarketData";
import NFTCollection from "@/components/sections/NFTCollection";
import AmbassadorProgram from "@/components/sections/AmbassadorProgram";
import Roadmap from "@/components/sections/Roadmap";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main>
        <HeroScroll />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <MarketData />
        <NFTCollection />
        <AmbassadorProgram />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
