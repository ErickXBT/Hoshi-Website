import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@assets/image_1781790579759.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="HOSHI Swap" className="h-10 w-10 object-contain" />
          <span className="font-bold text-xl tracking-tight hidden sm:block text-foreground">HOSHI</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#nfts" className="hover:text-primary transition-colors">NFTs</a>
          <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
          <a href="#community" className="hover:text-primary transition-colors">Community</a>
        </div>

        <Button 
          asChild 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all"
        >
          <a href="https://hoshiswap.xyz/" target="_blank" rel="noreferrer" data-testid="button-nav-create-wallet">
            CREATE WALLET
          </a>
        </Button>
      </div>
    </motion.nav>
  );
}
