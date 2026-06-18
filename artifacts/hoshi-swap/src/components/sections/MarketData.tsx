import { motion } from "framer-motion";
import chartMockup from "@assets/Gemini_Generated_Image_b3t6a8b3t6a8b3t6-Photoroom_1781790869770.png";

export default function MarketData() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Market Intel,<br />
                <span className="text-primary">built directly in.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Never miss a trading opportunity. Access institutional-grade market data, interactive price charts, and token analytics without ever leaving your wallet.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Live Pricing", value: "Real-time updates across 50+ DEXs" },
                { label: "Deep Liquidity", value: "Smart routing for best execution" },
                { label: "Token Analytics", value: "Volume, market cap & holders" },
                { label: "Price Alerts", value: "Custom push notifications" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-card/50 border border-border/50 p-5 rounded-2xl">
                  <h4 className="font-bold text-lg mb-1 text-primary">{stat.label}</h4>
                  <p className="text-sm text-muted-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full mix-blend-screen" />
            <motion.img 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              src={chartMockup} 
              alt="HOSHI Market Charts" 
              className="relative z-10 w-full max-w-[450px] mx-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
