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
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2" />
          <div className="lg:hidden absolute left-[27px] top-0 bottom-0 w-1 bg-border" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-6">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-16 lg:pl-0"
              >
                {/* Timeline Dot */}
                <div className={`absolute lg:left-1/2 lg:-translate-x-1/2 left-0 top-1 lg:top-1/2 lg:-translate-y-1/2 w-14 h-14 rounded-full border-4 ${phase.active ? "border-primary bg-background shadow-[0_0_20px_rgba(249,115,22,0.5)]" : "border-border bg-card"} flex items-center justify-center z-10`}>
                  <div className={`w-4 h-4 rounded-full ${phase.active ? "bg-primary animate-pulse" : "bg-border"}`} />
                </div>

                <div className={`lg:pt-20 bg-card/50 lg:bg-transparent rounded-xl p-6 lg:p-0 border border-border/50 lg:border-none lg:text-center mt-2 lg:mt-0 relative z-0 ${phase.active ? "ring-1 ring-primary/30 lg:ring-0" : ""}`}>
                  <h3 className={`text-xl font-bold mb-4 ${phase.active ? "text-primary" : "text-foreground"}`}>
                    {phase.title}
                  </h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start lg:justify-center gap-2">
                        <span className="text-primary lg:hidden mt-1">•</span>
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
