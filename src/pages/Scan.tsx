import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Camera, Upload, ArrowLeft, Leaf } from "lucide-react";
import { toast } from "sonner";

const Scan = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) {
      toast.error("Please select an image first");
      return;
    }
    // Store the image for the next screens
    localStorage.setItem("cropImage", selectedImage);
    navigate("/analyzing");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">CropSense</span>
          </div>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Scan Your Plant
          </h1>
          <p className="text-muted-foreground">
            Upload a clear photo of the affected plant area for instant AI diagnosis
          </p>
        </div>

        <Card className="p-8">
          {/* Upload Area */}
          <div className="mb-6">
            <label
              htmlFor="image-upload"
              className={`block w-full aspect-square rounded-lg border-2 border-dashed cursor-pointer transition-all ${
                selectedImage
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50 bg-muted/30"
              }`}
            >
              {selectedImage ? (
                <div className="relative w-full h-full">
                  <img
                    src={selectedImage}
                    alt="Selected plant"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Upload className="h-12 w-12 text-white" />
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Camera className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-center px-4">
                    <p className="font-semibold text-foreground mb-1">
                      Click to upload photo
                    </p>
                    <p className="text-sm text-muted-foreground">
                      JPG, PNG or WEBP (max. 10MB)
                    </p>
                  </div>
                </div>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Tips */}
          <Card className="p-4 mb-6 bg-primary/5 border-primary/20">
            <h3 className="font-semibold text-sm text-foreground mb-2">
              📸 Tips for best results:
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Ensure good lighting on the affected area</li>
              <li>• Get close enough to show clear detail</li>
              <li>• Include the entire affected leaf or fruit</li>
              <li>• Avoid blurry or dark photos</li>
            </ul>
          </Card>

          {/* Action Button */}
          <Button
            onClick={handleAnalyze}
            disabled={!selectedImage}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
          >
            <Leaf className="mr-2 h-5 w-5" />
            Analyze Plant
          </Button>

          {selectedImage && (
            <Button
              onClick={() => setSelectedImage(null)}
              variant="ghost"
              size="sm"
              className="w-full mt-3"
            >
              Clear & Choose Different Photo
            </Button>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Scan;
