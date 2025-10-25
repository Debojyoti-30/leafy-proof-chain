import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Scan, TrendingUp, Award, Download, Leaf } from "lucide-react";
import { useState } from "react";

const Verify = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedArea, setSelectedArea] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
              Satellite Analysis
            </Badge>
            <Badge variant="outline" className="border-primary/50">
              AI Powered
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold">
            Verify Environmental Impact
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Draw your project area on the map and analyze vegetation changes using Sentinel-2 satellite data
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Interface */}
          <Card className="lg:col-span-2 p-6 bg-card shadow-eco">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-['Space_Grotesk'] font-semibold">Project Area</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedArea(!selectedArea)}
                  className="text-xs"
                >
                  {selectedArea ? "Clear" : "Draw Polygon"}
                </Button>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-lg border-2 border-dashed border-border relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--accent)/0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(var(--primary)/0.1),transparent_50%)]" />
                
                {!selectedArea ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <MapPin className="h-16 w-16 text-accent mx-auto animate-pulse" />
                      <div>
                        <p className="font-medium text-foreground">Click "Draw Polygon" to start</p>
                        <p className="text-sm text-muted-foreground">Select your project area on the map</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Simulated polygon */}
                      <div className="w-64 h-48 border-4 border-accent bg-accent/10 rounded-lg transform rotate-6 animate-fade-in" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-card p-3 rounded-lg shadow-eco border border-border">
                          <p className="text-sm font-medium">Area: 0.42 km²</p>
                          <p className="text-xs text-muted-foreground">Forest region</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Controls */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  Zoom In
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Zoom Out
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Reset View
                </Button>
              </div>
            </div>
          </Card>

          {/* Analysis Controls */}
          <Card className="p-6 bg-card space-y-6 h-fit">
            <div className="space-y-4">
              <h3 className="font-['Space_Grotesk'] font-semibold text-lg">Analysis Parameters</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    Before Date (T0)
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:ring-2 focus:ring-accent transition-all"
                    defaultValue="2023-01-15"
                  />
                  <p className="text-xs text-muted-foreground">Initial state of the project</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    After Date (T1)
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:ring-2 focus:ring-accent transition-all"
                    defaultValue="2025-10-20"
                  />
                  <p className="text-xs text-muted-foreground">Current state after intervention</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Area Selected</span>
                <span className="font-semibold text-accent">{selectedArea ? "0.42 km²" : "None"}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Time Range</span>
                <span className="font-semibold">33 months</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Estimated Cost</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
            </div>

            {/* Action Button */}
            <Button 
              onClick={handleAnalyze}
              disabled={isAnalyzing || !selectedArea}
              className="w-full bg-gradient-accent hover:opacity-90 shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <Scan className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing Satellite Data...
                </>
              ) : (
                <>
                  <Scan className="h-4 w-4 mr-2" />
                  Run Analysis
                </>
              )}
            </Button>

            {isAnalyzing && (
              <div className="space-y-2 animate-fade-in">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-accent animate-[slide-in-right_2s_ease-in-out_infinite]" style={{ width: "60%" }} />
                </div>
                <p className="text-xs text-center text-muted-foreground">Processing Sentinel-2 imagery...</p>
              </div>
            )}
          </Card>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="mt-12 space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
              <Badge className="bg-green-500/10 text-green-600 dark:text-green-400">
                ✓ Analysis Complete
              </Badge>
              <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold">
                Impact Analysis Results
              </h2>
            </div>

            {/* Main Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-accent text-white shadow-glow hover:shadow-eco transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm font-medium">NDVI Change</span>
                    <TrendingUp className="h-6 w-6 text-white/90 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-['Space_Grotesk'] font-bold">+12.4%</div>
                  <p className="text-white/70 text-sm">Significant vegetation improvement detected</p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-2 border-accent/50 hover:border-accent transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm font-medium">Impact Score</span>
                    <Award className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-['Space_Grotesk'] font-bold text-accent">78/100</div>
                  <p className="text-muted-foreground text-sm">Eligible for rewards program</p>
                </div>
              </Card>

              <Card className="p-6 bg-card hover:shadow-eco transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm font-medium">Confidence</span>
                    <Leaf className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-['Space_Grotesk'] font-bold">86%</div>
                  <p className="text-muted-foreground text-sm">High confidence verification</p>
                </div>
              </Card>
            </div>

            {/* Detailed Metrics */}
            <Card className="p-8 bg-card">
              <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-6">Detailed Environmental Metrics</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Vegetation Gain</div>
                  <div className="text-2xl font-semibold text-accent">+9.8%</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Area Covered</div>
                  <div className="text-2xl font-semibold">0.42 km²</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">CO₂ Offset Est.</div>
                  <div className="text-2xl font-semibold">~128 tons</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Cloud Coverage</div>
                  <div className="text-2xl font-semibold">12%</div>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Button size="lg" className="flex-1 bg-gradient-accent hover:opacity-90 shadow-glow">
                <Award className="h-5 w-5 mr-2" />
                Mint Impact NFT
              </Button>
              <Button size="lg" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="h-5 w-5 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Verify;
