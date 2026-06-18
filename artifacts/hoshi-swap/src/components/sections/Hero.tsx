import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.mp4"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm text-white/80 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Welcome to the future of self-custody
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-6 text-white"
          >
            Hoshi Swap<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Self Custody
            </span><br />
            Crypto Wallet.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl"
          >
            Take full control of your digital assets with the most powerful non-custodial, multi-chain crypto wallet built for the modern Web3 era.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white font-bold rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_45px_rgba(249,115,22,0.7)] transition-all"
            >
              <a href="https://hoshiswap.xyz/" target="_blank" rel="noreferrer" data-testid="button-hero-create-wallet">
                CREATE WALLET <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-14 px-8 text-lg rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur transition-all"
            >
              <a href="#features" data-testid="button-hero-explore">
                Explore Features
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
