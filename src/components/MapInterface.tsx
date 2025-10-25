import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Scan } from "lucide-react";
import { useState } from "react";

export function MapInterface() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold">
              Verify Your Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Draw your project area and analyze environmental changes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map placeholder */}
            <Card className="lg:col-span-2 p-4 bg-card">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border-2 border-dashed border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.1),transparent_70%)]" />
                <div className="text-center space-y-3 relative z-10">
                  <MapPin className="h-12 w-12 text-accent mx-auto" />
                  <div>
                    <p className="font-medium text-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Draw polygon to select your project area</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Controls */}
            <Card className="p-6 bg-card space-y-6">
              <div className="space-y-4">
                <h3 className="font-['Space_Grotesk'] font-semibold text-lg">Analysis Parameters</h3>
                
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      Before Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                      defaultValue="2023-01-01"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      After Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                      defaultValue="2025-10-01"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Area Selected</span>
                  <span className="font-medium">0.42 km²</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Time Range</span>
                  <span className="font-medium">33 months</span>
                </div>
              </div>

              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-gradient-accent hover:opacity-90 shadow-eco"
              >
                {isAnalyzing ? (
                  <>
                    <Scan className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Scan className="h-4 w-4 mr-2" />
                    Run Analysis
                  </>
                )}
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
