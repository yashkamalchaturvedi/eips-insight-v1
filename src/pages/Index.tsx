
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, BarChart, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl">
                <span className="text-primary">EIPs</span>Insight
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/explorer" className="text-foreground hover:text-primary transition-colors">
                Explorer
              </Link>
              <Button asChild>
                <Link to="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Button asChild className="md:hidden">
              <Link to="/dashboard">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Making Ethereum Proposals
              <span className="text-primary"> Accessible</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              EIPs Insight provides tools for exploring, analyzing, and contributing to Ethereum Improvement Proposals in a more intuitive way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/dashboard">
                  Explore Dashboard
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/explorer">
                  Browse Proposals
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proposal Explorer</h3>
                <p className="text-muted-foreground">
                  Search and filter through all EIPs, ERCs, and RIPs with advanced filtering options.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visual Analytics</h3>
                <p className="text-muted-foreground">
                  Interactive dashboards with data visualizations showing proposal trends and activity.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Contributor Insights</h3>
                <p className="text-muted-foreground">
                  Explore top contributors, review activities, and track community engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">
              Dive into the world of Ethereum Improvement Proposals with our powerful tools.
            </p>
            <Button size="lg" asChild>
              <Link to="/dashboard">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-background border-t border-border py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-xl">
                <span className="text-primary">EIPs</span>Insight
              </span>
              <p className="text-sm text-muted-foreground mt-1">
                Making Ethereum proposals more accessible.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/ethereum/EIPs" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
