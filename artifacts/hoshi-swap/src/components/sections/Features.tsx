import { motion } from "framer-motion";
import { ShieldCheck, Network, Zap } from "lucide-react";
import mockup1 from "@assets/Gemini_Generated_Image_4hdqw54hdqw54hdq-Photoroom_1781803287002.png";
import mockup2 from "@assets/Gemini_Generated_Image_owedajowedajowed-Photoroom_1781803287003.png";
import mockup3 from "@assets/Gemini_Generated_Image_487dk7487dk7487d-Photoroom_1781803287003.png";

const slides = [
  {
    bg: "#0a0a0a",
    accent: "#F97316",
    textColor: "#ffffff",
    mutedColor: "rgba(255,255,255,0.55)",
    icon: ShieldCheck,
    tag: "Security First",
    label: "01 / 03",
    headline: ["Your keys.", "Your wallet.", "Always."],
    description:
      "You own your keys, always. Complete sovereignty over your assets without third-party interference. No one can freeze, access, or confiscate your funds.",
    mockup: mockup1,
  },
  {
    bg: "#F97316",
    accent: "#0a0a0a",
    textColor: "#0a0a0a",
    mutedColor: "rgba(0,0,0,0.55)",
    icon: Network,
    tag: "100+ Chains",
    label: "02 / 03",
    headline: ["One wallet.", "Every chain.", "Zero limits."],
    description:
      "Seamlessly manage ETH, BTC, SOL and 100+ more across different networks in one unified interface. Swap between chains in seconds.",
    mockup: mockup2,
  },
  {
    bg: "#0a0a0a",
    accent: "#F97316",
    textColor: "#ffffff",
    mutedColor: "rgba(255,255,255,0.55)",
    icon: Zap,
    tag: "Web3 Ready",
    label: "03 / 03",
    headline: ["DeFi. NFTs.", "dApps. All", "in one place."],
    description:
      "Connect to dApps, trade on DEXs, collect NFTs, and participate in DeFi with zero friction. The full Web3 experience in your pocket.",
    mockup: mockup3,
  },
];

function Slide({ slide, index }: { slide: typeof slides[0]; index: number }) {
  return (
    <section
      id={index === 0 ? "features" : undefined}
      className="sticky top-0 h-screen flex items-center overflow-hidden"
      style={{ zIndex: index + 1, background: slide.bg }}
    >
      {/* Subtle texture / glow for black slides */}
      {slide.bg === "#0a0a0a" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="relative z-10 w-full container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase w-fit"
            style={{
              background: `${slide.accent}22`,
              color: slide.accent,
              border: `1px solid ${slide.accent}55`,
            }}
          >
            <slide.icon className="w-3.5 h-3.5" />
            {slide.tag}
          </div>

          {/* Headline */}
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.05]"
            style={{ color: slide.textColor }}
          >
            {slide.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Description */}
          <p
            className="text-base md:text-lg leading-relaxed max-w-sm"
            style={{ color: slide.mutedColor }}
          >
            {slide.description}
          </p>
        </motion.div>

        {/* Right — mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex items-center justify-center"
        >
          <img
            src={slide.mockup}
            alt={slide.tag}
            className="w-full max-w-[460px] drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Slide counter bottom-left */}
      <div
        className="absolute bottom-8 left-8 text-xs font-mono tracking-widest opacity-40"
        style={{ color: slide.textColor }}
      >
        {slide.label}
      </div>

      {/* Dot indicators right edge */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: "8px",
              height: i === index ? "28px" : "8px",
              background:
                i === index ? slide.accent : `${slide.textColor}30`,
            }}
          />
        ))}
      </div>

      {/* Scroll hint on last slide */}
      {index === slides.length - 1 && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-px h-8 rounded-full"
            style={{ background: `${slide.textColor}30` }}
          />
        </motion.div>
      )}
    </section>
  );
}

export default function Features() {
  return (
    <div>
      {slides.map((slide, i) => (
        <Slide key={i} slide={slide} index={i} />
      ))}
    </div>
  );
}
