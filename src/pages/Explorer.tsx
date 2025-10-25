import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Users, Globe, MapPin, Award, Search } from "lucide-react";

const topProjects = [
  {
    rank: 1,
    name: "Amazon Reforestation Initiative",
    location: "Brazil",
    impactScore: 94,
    ndviChange: "+22.1%",
    area: "3.2 km²",
    co2Offset: "842 tons",
    owner: "0x742d...89ab",
  },
  {
    rank: 2,
    name: "Mangrove Coast Revival",
    location: "Philippines",
    impactScore: 92,
    ndviChange: "+18.7%",
    area: "2.8 km²",
    co2Offset: "756 tons",
    owner: "0x8c3f...12cd",
  },
  {
    rank: 3,
    name: "Sahel Green Belt",
    location: "Niger",
    impactScore: 89,
    ndviChange: "+16.4%",
    area: "4.1 km²",
    co2Offset: "1,124 tons",
    owner: "0x5d7e...45ef",
  },
  {
    rank: 4,
    name: "Boreal Forest Conservation",
    location: "Canada",
    impactScore: 87,
    ndviChange: "+14.8%",
    area: "5.6 km²",
    co2Offset: "1,893 tons",
    owner: "0x9a2b...78gh",
  },
  {
    rank: 5,
    name: "Mediterranean Restoration",
    location: "Spain",
    impactScore: 85,
    ndviChange: "+13.2%",
    area: "1.9 km²",
    co2Offset: "623 tons",
    owner: "0x1f4c...90ij",
  },
];

const Explorer = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
              <Globe className="h-3 w-3 mr-1" />
              Global Network
            </Badge>
            <Badge variant="outline">1,247 Verified Projects</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold">
            Impact Explorer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover verified environmental projects from around the world
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-card hover:shadow-eco transition-all group">
            <div className="flex items-center justify-between mb-3">
              <Trophy className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
              <Badge variant="outline" className="text-xs">Total</Badge>
            </div>
            <div className="text-3xl font-['Space_Grotesk'] font-bold mb-1">1,247</div>
            <div className="text-sm text-muted-foreground">Verified Projects</div>
          </Card>

          <Card className="p-6 bg-card hover:shadow-eco transition-all group">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
              <Badge variant="outline" className="text-xs">Growth</Badge>
            </div>
            <div className="text-3xl font-['Space_Grotesk'] font-bold mb-1">48M</div>
            <div className="text-sm text-muted-foreground">Trees Tracked</div>
          </Card>

          <Card className="p-6 bg-card hover:shadow-eco transition-all group">
            <div className="flex items-center justify-between mb-3">
              <Users className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
              <Badge variant="outline" className="text-xs">Active</Badge>
            </div>
            <div className="text-3xl font-['Space_Grotesk'] font-bold mb-1">892</div>
            <div className="text-sm text-muted-foreground">Contributors</div>
          </Card>

          <Card className="p-6 bg-card hover:shadow-eco transition-all group">
            <div className="flex items-center justify-between mb-3">
              <Globe className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
              <Badge variant="outline" className="text-xs">Impact</Badge>
            </div>
            <div className="text-3xl font-['Space_Grotesk'] font-bold mb-1">128K</div>
            <div className="text-sm text-muted-foreground">Tons CO₂ Offset</div>
          </Card>
        </div>

        {/* Global Map Placeholder */}
        <Card className="p-6 bg-card mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-['Space_Grotesk'] font-semibold">Global Impact Map</h2>
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search Location
            </Button>
          </div>
          <div className="aspect-[21/9] bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-lg border-2 border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--accent)/0.15),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--primary)/0.1),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.08),transparent_50%)]" />
            
            {/* Simulated pins */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse shadow-glow" />
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse shadow-glow" style={{ animationDelay: "0.5s" }} />
            <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-accent rounded-full animate-pulse shadow-glow" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse shadow-glow" style={{ animationDelay: "1.5s" }} />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <Globe className="h-16 w-16 text-accent/40 mx-auto" />
                <p className="text-sm text-muted-foreground">Interactive map showing all verified projects worldwide</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Leaderboard */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-['Space_Grotesk'] font-semibold">Top Impact Projects</h2>
            <Badge className="bg-accent/10 text-accent">
              This Month
            </Badge>
          </div>

          <div className="space-y-4">
            {topProjects.map((project, index) => (
              <Card 
                key={project.rank} 
                className="p-6 bg-card hover:shadow-eco transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Rank */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-['Space_Grotesk'] font-bold text-xl ${
                      project.rank === 1 ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-glow" :
                      project.rank === 2 ? "bg-gradient-to-br from-gray-300 to-gray-500 text-white" :
                      project.rank === 3 ? "bg-gradient-to-br from-orange-400 to-orange-600 text-white" :
                      "bg-secondary text-foreground"
                    }`}>
                      {project.rank}
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-['Space_Grotesk'] font-semibold group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>{project.location}</span>
                        <span>•</span>
                        <span className="text-xs font-mono">{project.owner}</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:ml-auto">
                    <div className="p-3 rounded-lg bg-secondary text-center">
                      <div className="text-xs text-muted-foreground mb-1">Score</div>
                      <div className="text-lg font-semibold text-accent flex items-center justify-center gap-1">
                        <Award className="h-4 w-4" />
                        {project.impactScore}
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary text-center">
                      <div className="text-xs text-muted-foreground mb-1">NDVI</div>
                      <div className="text-lg font-semibold text-green-600">{project.ndviChange}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary text-center">
                      <div className="text-xs text-muted-foreground mb-1">Area</div>
                      <div className="text-lg font-semibold">{project.area}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary text-center">
                      <div className="text-xs text-muted-foreground mb-1">CO₂</div>
                      <div className="text-lg font-semibold">{project.co2Offset}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center pt-4">
            <Button variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explorer;
