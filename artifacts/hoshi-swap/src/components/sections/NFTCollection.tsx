import { motion } from "framer-motion";
import nft1 from "@assets/image_1781790584000.png";
import nft2 from "@assets/image_1781790586722.png";
import nft3 from "@assets/image_1781790592629.png";
import nft4 from "@assets/image_1781790595265.png";

const nfts = [
  { img: nft1, name: "HOSHI #001" },
  { img: nft2, name: "HOSHI #002" },
  { img: nft3, name: "HOSHI #003" },
  { img: nft4, name: "HOSHI #004" }
];

export default function NFTCollection() {
  return (
    <section id="nfts" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            HOSHI <span className="text-primary">NFT Collection</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Exclusive collection for HOSHI community members. Unlock premium features and early access to drops.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {nfts.map((nft, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 group-hover:shadow-[inset_0_0_30px_rgba(249,115,22,0.8)] transition-all duration-300 z-10 pointer-events-none rounded-2xl" />
              <img 
                src={nft.img} 
                alt={nft.name} 
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                <p className="font-bold text-lg text-white">{nft.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
