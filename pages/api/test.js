export default function handler(req, res) {
  res.status(200).json({ 
    message: "🎉 Backend is working with Vite!",
    timestamp: new Date().toISOString(),
    success: true
  });
}