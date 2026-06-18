import { motion } from "framer-motion";
import { ShieldCheck, Network, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Non-Custodial",
    description: "You own your keys, always. Complete sovereignty over your assets without third-party interference."
  },
  {
    icon: <Network className="h-10 w-10 text-primary" />,
    title: "Multi-Chain",
    description: "Seamlessly manage ETH, BTC, SOL and 100+ more across different networks in one unified interface."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Built for Web3",
    description: "Connect to dApps, trade on DEXs, collect NFTs, and participate in DeFi with zero friction."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-card/30 relative border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Engineered for <span className="text-primary">Power</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Everything you need to navigate the decentralized web, packed into one blazing-fast application.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-10"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors h-full overflow-hidden group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
