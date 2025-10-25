import { Card } from "@/components/ui/card";
import { Database, Lock, Zap, Globe, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Satellite Data",
    description: "Access real-time Sentinel-2 imagery to track vegetation changes over time"
  },
  {
    icon: TrendingUp,
    title: "NDVI Analysis",
    description: "AI-powered vegetation health metrics with confidence scoring"
  },
  {
    icon: Shield,
    title: "Blockchain Verified",
    description: "Immutable proof of impact stored on Celo's eco-friendly blockchain"
  },
  {
    icon: Zap,
    title: "Instant Rewards",
    description: "Automatic cUSD payouts for verified environmental improvements"
  },
  {
    icon: Globe,
    title: "Public Explorer",
    description: "Transparent global map of all verified environmental projects"
  },
  {
    icon: Lock,
    title: "IPFS Storage",
    description: "Decentralized storage ensures your impact data lives forever"
  }
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to prove, verify, and monetize environmental impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-eco transition-all duration-300 group border-border hover:border-accent/50"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gradient-accent group-hover:shadow-glow transition-all">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-['Space_Grotesk'] font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
