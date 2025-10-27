// Simple test API
export default function handler(req, res) {
  res.status(200).json({ 
    message: "🎉 Backend is working!",
    timestamp: new Date().toISOString(),
    success: true
  });
}