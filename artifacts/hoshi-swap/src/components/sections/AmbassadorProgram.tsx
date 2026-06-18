import { motion } from "framer-motion";
import banner from "@assets/image_1781790629168.png";

export default function AmbassadorProgram() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Join the HOSHI <span className="text-primary">Ambassador Program</span>
          </motion.h2>
        </div>

        <motion.a
          href="https://bit.ly/Hoshi-Ambassador"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="block relative rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border border-border/50 hover:border-primary/50 transition-all"
        >
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay z-10 pointer-events-none" />
          <img 
            src={banner} 
            alt="HOSHI Ambassador Program" 
            className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm">
            <span className="bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.6)]">
              APPLY NOW
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
