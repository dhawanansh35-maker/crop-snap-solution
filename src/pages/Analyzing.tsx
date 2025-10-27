import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Loader2 } from "lucide-react";

const Analyzing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate AI processing time (2.5 seconds)
    const timer = setTimeout(() => {
      navigate("/diagnosis");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background flex items-center justify-center">
      <div className="text-center px-4">
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div className="w-32 h-32 mx-auto border-4 border-primary/20 rounded-full animate-spin">
            <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 bg-primary rounded-full" />
          </div>
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Leaf className="h-10 w-10 text-primary animate-pulse" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-3">
          Analyzing Your Plant
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Our AI is examining the image and comparing it with thousands of disease patterns...
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-primary">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="font-medium">Processing with deep learning model</span>
        </div>
      </div>
    </div>
  );
};

export default Analyzing;
