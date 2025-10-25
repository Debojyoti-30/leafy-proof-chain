import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Leaf, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Leaf className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 blur-md opacity-50 group-hover:opacity-100 transition-opacity bg-accent rounded-full" />
          </div>
          <span className="font-['Space_Grotesk'] text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            VeriLeaf
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/verify" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Verify Impact
          </Link>
          <Link to="/nfts" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            My NFTs
          </Link>
          <Link to="/explorer" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Explorer
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button className="hidden md:flex gap-2 bg-gradient-accent hover:opacity-90 transition-opacity shadow-eco">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
}
