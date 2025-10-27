import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Leaf, Zap, TrendingUp, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
          <Leaf className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary">Instant AI-Powered Diagnosis</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
          Stop Crop Disease<br />
          <span className="text-primary">Before It Spreads</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          No more waiting days for experts. Get instant, AI-powered plant disease diagnosis 
          in seconds. Save up to 35% more yield.
        </p>
        
        <Button 
          onClick={() => navigate("/scan")}
          size="lg"
          className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all"
        >
          <Leaf className="mr-2 h-5 w-5" />
          Start Free Diagnosis
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          No credit card required • Always free for farmers
        </p>
      </header>

      {/* Problem Statement */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 md:p-12 bg-destructive/5 border-destructive/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The $10 Billion Problem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Farmers lose billions every year waiting for experts to diagnose crop diseases. 
            Fast-moving threats like Late Blight can destroy <strong>100% of harvest</strong> in days. 
            Wrong treatments waste money and damage the environment.
          </p>
        </Card>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          How CropSense Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Snap</h3>
            <p className="text-muted-foreground">
              Take a photo of the affected plant with your smartphone
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Diagnose</h3>
            <p className="text-muted-foreground">
              Our AI analyzes the image in seconds with expert-level accuracy
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Act</h3>
            <p className="text-muted-foreground">
              Get treatment plan and connect with local suppliers instantly
            </p>
          </Card>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Real Impact for Farmers
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 border-primary/20 bg-primary/5">
            <TrendingUp className="w-10 h-10 text-primary mb-3" />
            <div className="text-3xl font-bold text-foreground mb-2">35%</div>
            <p className="text-muted-foreground">More yield protected with early treatment</p>
          </Card>

          <Card className="p-6 border-primary/20 bg-primary/5">
            <Zap className="w-10 h-10 text-accent mb-3" />
            <div className="text-3xl font-bold text-foreground mb-2">20%</div>
            <p className="text-muted-foreground">Reduction in unnecessary chemical spending</p>
          </Card>

          <Card className="p-6 border-primary/20 bg-primary/5">
            <Shield className="w-10 h-10 text-success mb-3" />
            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
            <p className="text-muted-foreground">Expert diagnosis available anytime, anywhere</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Protect Your Crops?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of farmers using AI to diagnose and treat crop diseases faster than ever.
        </p>
        <Button 
          onClick={() => navigate("/scan")}
          size="lg"
          className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all"
        >
          <Leaf className="mr-2 h-5 w-5" />
          Get Started Free
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 CropSense. Empowering farmers with AI technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
