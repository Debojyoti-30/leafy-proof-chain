import { Card } from "@/components/ui/card";
import { Map, Scan, Award, Coins } from "lucide-react";

const steps = [
  {
    icon: Map,
    title: "Draw Your Area",
    description: "Select the land area on the map where your environmental project is located",
    number: "01"
  },
  {
    icon: Scan,
    title: "AI Analysis",
    description: "Our AI analyzes satellite data to compute NDVI changes and vegetation growth",
    number: "02"
  },
  {
    icon: Award,
    title: "Mint Impact NFT",
    description: "Get a verified proof-of-impact NFT minted on Celo blockchain",
    number: "03"
  },
  {
    icon: Coins,
    title: "Earn Rewards",
    description: "Receive cUSD stablecoin rewards automatically for positive environmental impact",
    number: "04"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to verify your environmental impact and get rewarded
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative p-6 bg-card hover:shadow-eco transition-all duration-300 group overflow-hidden"
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 text-6xl font-['Space_Grotesk'] font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                {step.number}
              </div>

              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-eco group-hover:shadow-glow transition-shadow">
                  <step.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-['Space_Grotesk'] font-semibold">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
