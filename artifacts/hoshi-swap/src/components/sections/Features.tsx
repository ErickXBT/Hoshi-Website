import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ShieldCheck, Network, Zap } from "lucide-react";
import mockup1 from "@assets/Gemini_Generated_Image_4hdqw54hdqw54hdq-Photoroom_1781803287002.png";
import mockup2 from "@assets/Gemini_Generated_Image_owedajowedajowed-Photoroom_1781803287003.png";
import mockup3 from "@assets/Gemini_Generated_Image_487dk7487dk7487d-Photoroom_1781803287003.png";

const slides = [
  {
    bg: "#0a0a0a",
    accent: "#F97316",
    textColor: "#ffffff",
    mutedColor: "rgba(255,255,255,0.6)",
    icon: ShieldCheck,
    tag: "Security First",
    title: "Non-Custodial",
    headline: "Your keys.\nYour wallet.\nAlways.",
    description:
      "You own your keys, always. Complete sovereignty over your assets without third-party interference. No one can freeze, access, or confiscate your funds.",
    mockup: mockup1,
  },
  {
    bg: "#F97316",
    accent: "#0a0a0a",
    textColor: "#0a0a0a",
    mutedColor: "rgba(0,0,0,0.6)",
    icon: Network,
    tag: "100+ Chains",
    title: "Multi-Chain",
    headline: "One wallet.\nEvery chain.\nZero limits.",
    description:
      "Seamlessly manage ETH, BTC, SOL and 100+ more across different networks in one unified interface. Swap between chains in seconds.",
    mockup: mockup2,
  },
  {
    bg: "#0a0a0a",
    accent: "#F97316",
    textColor: "#ffffff",
    mutedColor: "rgba(255,255,255,0.6)",
    icon: Zap,
    tag: "Web3 Ready",
    title: "Built for Web3",
    headline: "DeFi. NFTs.\ndApps. All\nin one place.",
    description:
      "Connect to dApps, trade on DEXs, collect NFTs, and participate in DeFi with zero friction. The full Web3 experience in your pocket.",
    mockup: mockup3,
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = v < 0.34 ? 0 : v < 0.67 ? 1 : 2;
    if (next !== active) {
      setPrev(active);
      setActive(next);
    }
  });

  const slide = slides[active];

  return (
    <div
      id="features"
      ref={sectionRef}
      style={{ height: "300vh", position: "relative" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Animated background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{ background: slide.bg }}
          />
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {slides.map((s, i) => (
            <div
              key={i}
              className="w-2 rounded-full transition-all duration-500"
              style={{
                height: i === active ? "2rem" : "0.5rem",
                background: i === active ? slide.accent : "rgba(128,128,128,0.4)",
              }}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div
          className="absolute left-8 bottom-8 z-20 text-xs font-mono tracking-widest uppercase opacity-50"
          style={{ color: slide.textColor }}
        >
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full grid lg:grid-cols-2 items-center container mx-auto px-6 lg:px-12 gap-8">

          {/* Left — text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${active}`}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {/* Tag */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase w-fit"
                style={{
                  background: `${slide.accent}22`,
                  color: slide.accent,
                  border: `1px solid ${slide.accent}44`,
                }}
              >
                <slide.icon className="w-3.5 h-3.5" />
                {slide.tag}
              </div>

              {/* Headline */}
              <h2
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.0] whitespace-pre-line"
                style={{ color: slide.textColor }}
              >
                {slide.headline}
              </h2>

              {/* Description */}
              <p
                className="text-lg leading-relaxed max-w-md"
                style={{ color: slide.mutedColor }}
              >
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Right — mockup */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`mockup-${active}`}
              initial={{ opacity: 0, x: 80, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.92 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center"
            >
              <img
                src={slide.mockup}
                alt={slide.title}
                className="w-full max-w-[480px] drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
