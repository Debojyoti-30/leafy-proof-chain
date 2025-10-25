import { Leaf, Github, Twitter, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-['Space_Grotesk'] text-lg font-bold">VeriLeaf</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Verify and monetize environmental impact with satellite data and blockchain.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors flex items-center justify-center">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-['Space_Grotesk'] font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/verify" className="text-muted-foreground hover:text-accent transition-colors">Verify Impact</Link></li>
              <li><Link to="/nfts" className="text-muted-foreground hover:text-accent transition-colors">My NFTs</Link></li>
              <li><Link to="/explorer" className="text-muted-foreground hover:text-accent transition-colors">Explorer</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-['Space_Grotesk'] font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-['Space_Grotesk'] font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 VeriLeaf. Built with 💚 for the planet.</p>
        </div>
      </div>
    </footer>
  );
}
