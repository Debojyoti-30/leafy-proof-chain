import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, MapPin, TrendingUp, Download } from "lucide-react";

const mockNFTs = [
  {
    id: "1",
    name: "Forest Restoration #001",
    location: "Amazon Basin, Brazil",
    ndviChange: "+12.4%",
    impactScore: 78,
    mintedDate: "2025-10-15",
    area: "0.42 km²",
    reward: "0.5 cUSD",
    ipfsCid: "QmX7Hd8...xyz",
  },
  {
    id: "2",
    name: "Mangrove Revival #002",
    location: "Sundarbans, India",
    ndviChange: "+18.7%",
    impactScore: 92,
    mintedDate: "2025-09-22",
    area: "0.68 km²",
    reward: "0.8 cUSD",
    ipfsCid: "QmY8Ke9...abc",
  },
  {
    id: "3",
    name: "Savanna Recovery #003",
    location: "Serengeti, Tanzania",
    ndviChange: "+8.3%",
    impactScore: 65,
    mintedDate: "2025-08-10",
    area: "0.31 km²",
    reward: "0.3 cUSD",
    ipfsCid: "QmZ9Lf0...def",
  },
];

const NFTs = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
              <Award className="h-3 w-3 mr-1" />
              My Collection
            </Badge>
            <Badge variant="outline">3 NFTs Minted</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold">
            Impact NFT Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Your verified environmental impact certificates stored permanently on Celo blockchain
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-card hover:shadow-eco transition-all">
            <div className="text-sm text-muted-foreground mb-1">Total NFTs</div>
            <div className="text-3xl font-['Space_Grotesk'] font-bold text-accent">3</div>
          </Card>
          <Card className="p-4 bg-card hover:shadow-eco transition-all">
            <div className="text-sm text-muted-foreground mb-1">Total Rewards</div>
            <div className="text-3xl font-['Space_Grotesk'] font-bold">1.6 cUSD</div>
          </Card>
          <Card className="p-4 bg-card hover:shadow-eco transition-all">
            <div className="text-sm text-muted-foreground mb-1">Avg Impact Score</div>
            <div className="text-3xl font-['Space_Grotesk'] font-bold">78</div>
          </Card>
          <Card className="p-4 bg-card hover:shadow-eco transition-all">
            <div className="text-sm text-muted-foreground mb-1">Total Area</div>
            <div className="text-3xl font-['Space_Grotesk'] font-bold">1.41 km²</div>
          </Card>
        </div>

        {/* NFT Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNFTs.map((nft, index) => (
            <Card 
              key={nft.id} 
              className="overflow-hidden bg-card hover:shadow-glow transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* NFT Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.2),transparent_70%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-24 w-24 text-accent/30 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <Badge className="absolute top-4 right-4 bg-accent text-white">
                  #{nft.id.padStart(3, '0')}
                </Badge>
                {nft.impactScore >= 70 && (
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                    ✓ Rewarded
                  </Badge>
                )}
              </div>

              {/* NFT Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-2 group-hover:text-accent transition-colors">
                    {nft.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{nft.location}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-secondary">
                    <div className="text-xs text-muted-foreground mb-1">NDVI Change</div>
                    <div className="text-lg font-semibold text-accent flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      {nft.ndviChange}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary">
                    <div className="text-xs text-muted-foreground mb-1">Impact Score</div>
                    <div className="text-lg font-semibold">{nft.impactScore}/100</div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2 text-sm pt-2 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Area</span>
                    <span className="font-medium">{nft.area}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Reward</span>
                    <span className="font-medium text-green-600">{nft.reward}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Minted
                    </span>
                    <span className="font-medium">{nft.mintedDate}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View on Celoscan
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State if no NFTs */}
        {mockNFTs.length === 0 && (
          <Card className="p-12 text-center bg-card">
            <Award className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-2">No Impact NFTs Yet</h3>
            <p className="text-muted-foreground mb-6">
              Start by verifying your environmental project to mint your first impact certificate
            </p>
            <Button className="bg-gradient-accent hover:opacity-90 shadow-eco">
              Start Verification
            </Button>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default NFTs;
