import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FRAME_COUNT = 300;
const FRAME_BASE = "/frames/ezgif-frame-";

function padded(n: number) {
  return String(n).padStart(3, "0");
}

export default function HeroScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const img = framesRef.current[index];
    if (!img?.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${FRAME_BASE}${padded(i + 1)}.jpg`;
      img.decoding = "async";
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (i === 0) drawFrame(0);
        if (loaded === FRAME_COUNT) setReady(true);
      };
      images[i] = img;
    }
    framesRef.current = images;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * FRAME_COUNT), FRAME_COUNT - 1);
    if (idx === currentFrameRef.current) return;
    currentFrameRef.current = idx;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(idx));
  });

  const loadPct = Math.round((loadedCount / FRAME_COUNT) * 100);

  return (
    <div ref={sectionRef} style={{ height: "300vh", position: "relative" }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Loading bar */}
        {!ready && (
          <div className="absolute top-0 left-0 right-0 z-50 h-[3px] bg-white/10">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${loadPct}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        )}

        {/* Canvas — full bleed frame animation */}
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover" }}
        />

        {/* Dark gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="max-w-lg"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm text-white/80 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Welcome to the future of self-custody
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6 text-white"
              >
                Hoshi Swap<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                  Self Custody
                </span><br />
                Crypto Wallet.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="text-lg text-white/70 mb-10 leading-relaxed"
              >
                Take full control of your digital assets with the most powerful non-custodial, multi-chain crypto wallet built for the modern Web3 era.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  size="lg"
                  asChild
                  className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white font-bold rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_45px_rgba(249,115,22,0.7)] transition-all"
                >
                  <a href="https://hoshiswap.xyz/" target="_blank" rel="noreferrer">
                    CREATE WALLET <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-14 px-8 text-lg rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur transition-all"
                >
                  <a href="#features">Explore Features</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1">
            <motion.div
              className="w-1 h-2 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
