// Save crop scan results
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { imageUrl, cropType, location, disease, solution } = req.body;
    
    // Validate required fields
    if (!imageUrl || !cropType) {
      return res.status(400).json({ 
        success: false, 
        message: 'Image and crop type are required' 
      });
    }

    // Simulate saving scan data
    console.log('Crop scan saved:', { cropType, disease, location });
    
    // Return success with scan results
    return res.status(201).json({
      success: true,
      message: 'Crop analysis saved successfully!',
      scan: {
        id: 'scan_' + Date.now(),
        imageUrl,
        cropType,
        location,
        disease: disease || 'No disease detected',
        solution: solution || 'Use organic pesticides',
        timestamp: new Date().toISOString(),
        status: 'completed'
      }
    });
    
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
}