import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/Gemini_Generated_Image_unlrl5unlrl5unlr-Photoroom_1781790777135.png";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Welcome to the future of self-custody
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6"
          >
            Hoshi Swap<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Self Custody</span><br />
            Crypto Wallet.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            Take full control of your digital assets with the most powerful non-custodial, multi-chain crypto wallet built for the modern Web3 era.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Button 
              size="lg" 
              asChild 
              className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all"
            >
              <a href="https://hoshiswap.xyz/" target="_blank" rel="noreferrer" data-testid="button-hero-create-wallet">
                CREATE WALLET <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="h-14 px-8 text-lg rounded-full border-border hover:bg-secondary transition-all"
            >
              <a href="#features" data-testid="button-hero-explore">
                Explore Features
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full mix-blend-screen" />
          <motion.img 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src={heroImg} 
            alt="HOSHI Wallet Interface" 
            className="relative z-10 w-full max-w-[600px] mx-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
