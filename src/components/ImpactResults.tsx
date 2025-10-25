import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, CheckCircle2, Leaf } from "lucide-react";

export function ImpactResults() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
              Analysis Complete
            </Badge>
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold">
              Impact Analysis Results
            </h2>
          </div>

          {/* Main metrics */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-accent text-white shadow-glow">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm font-medium">NDVI Change</span>
                  <TrendingUp className="h-5 w-5 text-white/90" />
                </div>
                <div className="text-4xl font-['Space_Grotesk'] font-bold">+12.4%</div>
                <p className="text-white/70 text-sm">Significant vegetation improvement</p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-accent/50">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm font-medium">Impact Score</span>
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div className="text-4xl font-['Space_Grotesk'] font-bold text-accent">78/100</div>
                <p className="text-muted-foreground text-sm">Eligible for rewards</p>
              </div>
            </Card>
          </div>

          {/* Detailed metrics */}
          <Card className="p-6 bg-card">
            <h3 className="font-['Space_Grotesk'] font-semibold text-lg mb-4">Detailed Metrics</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                <span className="text-sm text-muted-foreground">Vegetation Gain</span>
                <span className="font-semibold text-accent">+9.8%</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                <span className="text-sm text-muted-foreground">Confidence</span>
                <span className="font-semibold text-accent">86%</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                <span className="text-sm text-muted-foreground">Area Analyzed</span>
                <span className="font-semibold">0.42 km²</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                <span className="text-sm text-muted-foreground">CO₂ Offset Est.</span>
                <span className="font-semibold">~128 tons</span>
              </div>
            </div>
          </Card>

          {/* Verification status */}
          <Card className="p-6 bg-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="font-['Space_Grotesk'] font-semibold">Verification Passed</h3>
                <p className="text-sm text-muted-foreground">
                  Your environmental impact has been verified using Sentinel-2 satellite imagery. 
                  The data shows significant positive change in vegetation health over the analyzed period.
                </p>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="flex-1 bg-gradient-accent hover:opacity-90 shadow-glow"
            >
              <Award className="h-5 w-5 mr-2" />
              Mint Impact NFT
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Leaf className="h-5 w-5 mr-2" />
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
