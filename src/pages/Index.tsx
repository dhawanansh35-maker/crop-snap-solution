import { mockBackend } from '../api/mockBackend';
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

      {/* Backend Demo Section - SIMPLIFIED */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 border-2 border-green-500 bg-green-50">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">
            🚀 Backend API Demo
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-8">
            Test backend functionality
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={async () => {
                const result = await mockBackend.getProfile();
                alert(`Backend working! User: ${result.profile.name}`);
              }}
              className="bg-green-600 hover:bg-green-700"
            >
              Test Backend
            </Button>
          </div>
        </Card>
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