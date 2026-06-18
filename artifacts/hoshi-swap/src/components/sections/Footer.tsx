import { SiX, SiTelegram } from "react-icons/si";
import logo from "@assets/image_1781790579759.png";

export default function Footer() {
  return (
    <footer id="community" className="bg-background pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="HOSHI Swap Logo" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-bold tracking-tight">HOSHI Swap</span>
            </div>
            <p className="text-muted-foreground">Self Custody Crypto Wallet</p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://x.com/usehoshi" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300"
              data-testid="link-twitter"
            >
              <SiX className="w-5 h-5" />
            </a>
            <a 
              href="http://t.me/hoshiswap" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300"
              data-testid="link-telegram"
            >
              <SiTelegram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 HOSHI Swap. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
