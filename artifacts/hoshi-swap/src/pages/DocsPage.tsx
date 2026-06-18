import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Shield, Globe, Zap, Wallet, Send, Download, RefreshCw, BarChart2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/image_1781790579759.png";
import walletCreate from "@assets/image_1781793303548.png";
import dashboardImg from "@assets/image_1781793319894.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: Shield,
    title: "Non-Custodial Security",
    desc: "Your private keys never leave your device. HOSHI Swap gives you full ownership of your crypto — no third party can access or freeze your funds. You are the sole controller of your wallet.",
  },
  {
    icon: Globe,
    title: "Multi-Chain Support",
    desc: "Manage assets across 100+ blockchains from a single wallet — Ethereum, Solana, BNB Chain, Bitcoin, Polygon, Arbitrum, Optimism, and many more. One wallet, every chain.",
  },
  {
    icon: Zap,
    title: "Built for Web3",
    desc: "Full support for DeFi protocols, NFT collections, and decentralized applications. Interact with dApps directly from the HOSHI wallet using WalletConnect integration.",
  },
  {
    icon: BarChart2,
    title: "Live Market Data",
    desc: "Real-time price charts, 24h volume, market cap, and token analytics built directly into the wallet. No need for a separate app — everything you need in one place.",
  },
  {
    icon: RefreshCw,
    title: "In-Wallet Swap",
    desc: "Swap tokens instantly across chains with best-rate aggregation. HOSHI finds the optimal route so you always get the most out of every trade.",
  },
  {
    icon: Star,
    title: "NFT Portfolio",
    desc: "View, manage, and showcase your NFT collection from within the wallet. All your digital assets — coins and collectibles — in one unified dashboard.",
  },
];

const walletActions = [
  { icon: Wallet, label: "Create Wallet", desc: "Set up a brand-new self-custody wallet in under 60 seconds. Name your wallet, set a strong password, and your keys are generated locally on your device." },
  { icon: Download, label: "Import Wallet", desc: "Already have a wallet? Import it using your 12 or 24-word seed phrase. HOSHI supports standard BIP-39 mnemonics from any compatible wallet." },
  { icon: Send, label: "Send & Receive", desc: "Send crypto to any address across supported chains. Share your QR code to receive funds instantly. Gas fees are shown transparently before confirming." },
];

const chains = [
  "Ethereum", "Solana", "BNB Chain", "Bitcoin", "Polygon", "Arbitrum", "Optimism", "Avalanche", "Base", "Fantom", "Tron", "Cosmos", "Near", "Aptos", "Sui",
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="link-docs-back">
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </Link>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2">
              <img src={logo} alt="HOSHI" className="w-7 h-7 object-contain" />
              <span className="font-bold text-sm">HOSHI Swap — Documentation</span>
            </div>
          </div>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <a href="https://hoshiswap.xyz/" target="_blank" rel="noreferrer" data-testid="button-docs-create-wallet">
              Launch App
            </a>
          </Button>
        </div>
      </div>

      <div className="pt-24 pb-24">
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-border/50 pb-20 mb-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 text-center relative z-10 pt-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Official Project Documentation
            </motion.div>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
            >
              HOSHI Swap <span className="text-primary">Docs</span>
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Everything you need to know about the HOSHI non-custodial, multi-chain crypto wallet — features, how it works, supported networks, and how to get started.
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-6 space-y-24">

          {/* What is HOSHI */}
          <section>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">What is HOSHI Swap?</h2>
              <div className="w-12 h-1 bg-primary rounded mb-8" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <p className="text-muted-foreground leading-relaxed mb-5 text-base">
                  HOSHI Swap is a <strong className="text-foreground">self-custody, multi-chain crypto wallet</strong> designed for the next generation of Web3 users. Unlike centralized exchanges, HOSHI never holds your private keys — you do. Your assets remain under your full control at all times.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5 text-base">
                  The wallet supports over 100 blockchains including Ethereum, Solana, Bitcoin, BNB Chain, and more — all from a single, unified interface. Whether you're trading DeFi tokens, managing NFTs, tracking the market, or sending crypto to a friend, HOSHI has you covered.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base">
                  HOSHI is built for everyone — from first-time crypto users to seasoned DeFi veterans. Its clean, intuitive interface makes it easy to get started while offering the depth and power that advanced users demand.
                </p>
              </motion.div>
              <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-[0_0_40px_rgba(249,115,22,0.08)]">
                  <img src={walletCreate} alt="HOSHI Wallet — Create Screen" className="w-full object-cover" />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-3">HOSHI Wallet — Create or import your wallet at hoshiswap.xyz</p>
              </motion.div>
            </div>
          </section>

          {/* Dashboard Walkthrough */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Inside the Wallet Dashboard</h2>
              <div className="w-12 h-1 bg-primary rounded mb-8" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 md:order-1">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-[0_0_40px_rgba(249,115,22,0.08)]">
                  <img src={dashboardImg} alt="HOSHI Wallet Dashboard" className="w-full object-cover" />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-3">HOSHI Web Dashboard — hoshiswap.xyz/dashboard</p>
              </motion.div>
              <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 md:order-2 space-y-4">
                {[
                  { label: "Total Balance", desc: "See your entire portfolio value in USD, consolidated across all chains and wallets in real time." },
                  { label: "Multi-Chain Addresses", desc: "View and copy your EVM and Solana addresses side-by-side. Manage multiple wallets from a single account." },
                  { label: "Asset List", desc: "Full breakdown of every token you hold — price, 24h change, and balance for each asset across all chains." },
                  { label: "Quick Actions", desc: "Receive, Send, and Swap buttons on the main screen — no digging through menus." },
                  { label: "Sidebar Navigation", desc: "Access Portfolio, Market, Swap, History, NFTs, News, Polymarket, Affiliate, and Settings from the left sidebar." },
                ].map((item, i) => (
                  <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm mb-1">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Key Features</h2>
              <div className="w-12 h-1 bg-primary rounded mb-8" />
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Getting Started */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Getting Started</h2>
              <div className="w-12 h-1 bg-primary rounded mb-8" />
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {walletActions.map((action, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <action.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold">{action.label}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{action.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-8 p-6 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur"
            >
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-foreground">How to create your wallet:</strong> Go to{" "}
                <a href="https://hoshiswap.xyz/" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2 hover:text-orange-400">hoshiswap.xyz</a>
                {" "}→ click <strong className="text-foreground">CREATE</strong> tab → enter a wallet name and a strong password (min 6 characters) → confirm your password → click <strong className="text-foreground">GENERATE WALLET</strong>. Your seed phrase will be shown — save it somewhere safe offline. Anyone with your seed phrase can access your funds.
              </p>
            </motion.div>
          </section>

          {/* Supported Chains */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Supported Networks</h2>
              <div className="w-12 h-1 bg-primary rounded mb-8" />
              <p className="text-muted-foreground mb-8 max-w-2xl">HOSHI supports 100+ blockchains. Here are some of the major networks available out of the box:</p>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {chains.map((chain, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default"
                >
                  {chain}
                </motion.span>
              ))}
              <motion.span
                custom={chains.length}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary"
              >
                + 85 more
              </motion.span>
            </div>
          </section>

          {/* Security */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Security & Self-Custody</h2>
              <div className="w-12 h-1 bg-primary rounded mb-8" />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Your Keys, Your Crypto", desc: "HOSHI is a non-custodial wallet. Your private keys are generated and stored locally on your device — never on HOSHI servers. No one, including the HOSHI team, can access your funds." },
                { title: "Seed Phrase Backup", desc: "When you create a wallet, you receive a 12 or 24-word recovery phrase. This is the only way to restore your wallet. Write it down and store it offline in a safe location — never share it with anyone." },
                { title: "Password Encryption", desc: "Your wallet data is encrypted with your chosen password on your device. Always choose a strong, unique password and never reuse passwords from other accounts." },
                { title: "Open & Transparent", desc: "HOSHI is built on open standards (BIP-39, BIP-44). Your wallet is compatible with any standard seed phrase and can be imported into other compatible wallets at any time." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur hover:border-primary/20 transition-all"
                >
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center py-16 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <img src={logo} alt="HOSHI" className="w-16 h-16 object-contain mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to take control?</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">Create your HOSHI wallet today — free, instant, and fully self-custodial.</p>
              <Button asChild size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all">
                <a href="https://hoshiswap.xyz/" target="_blank" rel="noreferrer" data-testid="button-docs-cta">
                  CREATE WALLET
                </a>
              </Button>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
