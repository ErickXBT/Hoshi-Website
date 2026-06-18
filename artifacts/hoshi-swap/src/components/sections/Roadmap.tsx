import { motion } from "framer-motion";

const phases = [
  {
    title: "Phase 1: Foundation",
    active: true,
    items: ["Build Social", "Build Community", "Wallet Launch Beta Testing", "Token Launch"]
  },
  {
    title: "Phase 2: Growth",
    active: false,
    items: ["Community expansion", "Partnerships", "Ecosystem integrations", "Liquidity building"]
  },
  {
    title: "Phase 3: Ecosystem",
    active: false,
    items: ["DeFi integrations", "NFT marketplace", "Staking features", "Cross-chain swaps"]
  },
  {
    title: "Phase 4: Dominance",
    active: false,
    items: ["Global adoption", "Institutional partnerships", "Full DEX", "Governance launch"]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            The Path to <span className="text-primary">Dominance</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[68px] left-0 right-0 h-px bg-border/60" />
          <div className="lg:hidden absolute left-[27px] top-0 bottom-0 w-px bg-border/60" />

          <div className="grid lg:grid-cols-4 gap-6">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex flex-col items-center"
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 mb-6 ${
                    phase.active
                      ? "border-primary bg-background shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                      : "border-border/60 bg-card/80"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      phase.active ? "bg-primary animate-pulse" : "bg-border"
                    }`}
                  />
                </div>

                <div
                  className={`w-full rounded-2xl p-6 text-center border backdrop-blur-md transition-all duration-300 ${
                    phase.active
                      ? "bg-white/5 border-primary/40 shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                  style={{ backdropFilter: "blur(12px)" }}
                >
                  <h3
                    className={`text-base font-bold mb-4 ${
                      phase.active ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
