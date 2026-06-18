import { motion } from "framer-motion";
import { Wallet, Plus, ArrowLeftRight } from "lucide-react";
import sendMockup from "@assets/Gemini_Generated_Image_9q9ydn9q9ydn9q9y-Photoroom_1781790869769.png";
import receiveMockup from "@assets/Gemini_Generated_Image_lfaxqvlfaxqvlfax-Photoroom_1781790869769.png";

const steps = [
  {
    icon: <Wallet className="h-6 w-6 text-primary" />,
    title: "Create Wallet",
    description: "Generate your secure non-custodial wallet in seconds. No KYC, no email, just pure cryptographic security."
  },
  {
    icon: <Plus className="h-6 w-6 text-primary" />,
    title: "Add Your Assets",
    description: "Fund your wallet easily with crypto from exchanges, or use our fiat on-ramps to buy directly."
  },
  {
    icon: <ArrowLeftRight className="h-6 w-6 text-primary" />,
    title: "Send and Receive",
    description: "Transact globally with near-instant finality and minimal fees across supported networks."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Getting started with HOSHI is incredibly simple. Welcome to Web3 without the headache.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className="flex gap-6 relative"
              >
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-[1.3rem] top-14 bottom-[-2.5rem] w-px bg-border" />
                )}
                
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-card shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[600px] flex items-center justify-center hidden md:flex"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full mix-blend-screen" />
            
            <motion.img 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={sendMockup} 
              alt="Send Crypto" 
              className="absolute z-20 w-[280px] -left-4 md:left-4 drop-shadow-2xl"
            />
            <motion.img 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              src={receiveMockup} 
              alt="Receive Crypto" 
              className="absolute z-10 w-[260px] right-0 md:-right-4 top-10 drop-shadow-2xl opacity-80 scale-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
