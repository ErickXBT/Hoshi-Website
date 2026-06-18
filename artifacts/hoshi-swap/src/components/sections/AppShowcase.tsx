import { motion } from "framer-motion";
import dashboardMockup from "@assets/Gemini_Generated_Image_jj31ytjj31ytjj31-Photoroom_1781790869770.png";

export default function AppShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-[3rem] mix-blend-screen" />
            <motion.img 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              src={dashboardMockup} 
              alt="HOSHI Dashboard" 
              className="relative z-10 w-full max-w-[450px] mx-auto drop-shadow-[0_0_40px_rgba(249,115,22,0.25)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Your entire portfolio in <span className="text-primary">one view.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience unparalleled visibility into your digital wealth. HOSHI automatically tracks your assets across multiple chains, aggregates your balances, and presents them in a beautiful, intuitive interface.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                "Real-time cross-chain balance aggregation",
                "Advanced portfolio performance metrics",
                "One-tap token swapping & bridging",
                "Customizable tracking & alerts"
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
