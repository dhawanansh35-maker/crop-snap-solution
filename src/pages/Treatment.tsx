import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Leaf, ShoppingCart, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Treatment = () => {
  const navigate = useNavigate();

  // Mock treatment data
  const treatment = {
    disease: "Tomato Late Blight",
    recommendedProduct: {
      name: "Copper Fungicide (Bordeaux Mixture)",
      application: "Spray every 7-10 days",
      dosage: "2-3 kg per 100 liters of water",
      timing: "Apply in early morning or late evening",
      price: "$24.99",
    },
    suppliers: [
      {
        name: "GreenFields Agro Supply",
        distance: "2.3 km",
        phone: "+1 (555) 123-4567",
        inStock: true,
      },
      {
        name: "FarmPro Store",
        distance: "5.1 km",
        phone: "+1 (555) 234-5678",
        inStock: true,
      },
      {
        name: "AgriMart Central",
        distance: "8.7 km",
        phone: "+1 (555) 345-6789",
        inStock: false,
      },
    ],
    preventionTips: [
      "Remove and destroy infected plant material immediately",
      "Improve air circulation around plants",
      "Avoid overhead watering",
      "Apply preventive fungicide before rain periods",
      "Rotate crops annually to different locations",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/diagnosis")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">CropSense</span>
          </div>
          <div className="w-20" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Treatment Plan
          </h1>
          <p className="text-muted-foreground">
            For <strong>{treatment.disease}</strong>
          </p>
        </div>

        {/* Recommended Product */}
        <Card className="p-6 mb-6 border-primary/30 bg-primary/5">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm text-primary font-medium mb-1">Recommended Treatment</div>
              <h3 className="text-xl font-bold text-foreground">
                {treatment.recommendedProduct.name}
              </h3>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2 text-sm">
              <span className="text-primary font-medium min-w-24">Application:</span>
              <span className="text-muted-foreground">{treatment.recommendedProduct.application}</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span className="text-primary font-medium min-w-24">Dosage:</span>
              <span className="text-muted-foreground">{treatment.recommendedProduct.dosage}</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span className="text-primary font-medium min-w-24">Best Time:</span>
              <span className="text-muted-foreground">{treatment.recommendedProduct.timing}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-primary/20">
            <div className="text-2xl font-bold text-primary">
              {treatment.recommendedProduct.price}
            </div>
            <Badge className="bg-success text-white">In Stock Nearby</Badge>
          </div>
        </Card>

        {/* Local Suppliers */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Certified Suppliers Near You
          </h3>

          <div className="space-y-3">
            {treatment.suppliers.map((supplier, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {supplier.name}
                    </h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {supplier.distance} away
                    </p>
                  </div>
                  {supplier.inStock ? (
                    <Badge className="bg-success/10 text-success border-success/20">
                      In Stock
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Out of Stock</Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    disabled={!supplier.inStock}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Order Now
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`tel:${supplier.phone}`)}
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Prevention Tips */}
        <Card className="p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">
            🛡️ Prevention & Additional Care
          </h3>
          <ul className="space-y-2">
            {treatment.preventionTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => navigate("/scan")}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
          >
            <Leaf className="mr-2 h-5 w-5" />
            Scan Another Plant
          </Button>

          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
            className="w-full"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
