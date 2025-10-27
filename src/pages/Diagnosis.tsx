import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Leaf, TrendingUp, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Diagnosis = () => {
  const navigate = useNavigate();
  
  // Mock diagnosis data
  const diagnosis = {
    disease: "Tomato Late Blight",
    confidence: 92,
    severity: "High",
    description: "Late blight is a destructive disease caused by the fungus-like pathogen Phytophthora infestans. It can rapidly destroy entire crops if left untreated.",
    risk: "Without immediate treatment, you could lose 60-100% of your crop within 7-14 days.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">CropSense</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Success Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-4">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium text-success">Analysis Complete</span>
          </div>
        </div>

        {/* Main Diagnosis Card */}
        <Card className="p-6 mb-6 border-destructive/30 bg-destructive/5">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold text-foreground">
                  {diagnosis.disease}
                </h2>
                <Badge variant="destructive">{diagnosis.severity} Risk</Badge>
              </div>
              <div className="mb-3">
                <div className="text-sm text-muted-foreground mb-1">Confidence Level</div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${diagnosis.confidence}%` }}
                    />
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {diagnosis.confidence}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {diagnosis.description}
          </p>

          <Card className="p-4 bg-background border-destructive/20">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm text-foreground mb-1">
                  ⚠️ Immediate Action Required
                </div>
                <p className="text-sm text-muted-foreground">
                  {diagnosis.risk}
                </p>
              </div>
            </div>
          </Card>
        </Card>

        {/* Quick Facts */}
        <Card className="p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Spread:</strong> Rapidly through wind and water, especially in humid conditions
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Symptoms:</strong> Dark brown/black lesions on leaves, stems, and fruits
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Best treated:</strong> Within 24-48 hours of detection
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Button */}
        <Button
          onClick={() => navigate("/treatment")}
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
        >
          View Treatment Plan
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <Button
          onClick={() => navigate("/scan")}
          variant="ghost"
          size="sm"
          className="w-full mt-3"
        >
          Scan Another Plant
        </Button>
      </div>
    </div>
  );
};

export default Diagnosis;
