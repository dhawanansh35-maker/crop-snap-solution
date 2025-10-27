// Simple registration API - works without database
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, password, farmerId, location } = req.body;
    
    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    // Simulate saving user (without actual database)
    console.log('User registered:', { name, email, farmerId, location });
    
    // Return success response
    return res.status(201).json({
      success: true,
      message: 'Farmer registered successfully!',
      user: {
        id: Math.random().toString(36).substr(2, 9), // temporary ID
        name,
        email,
        farmerId, 
        location,
        joinedDate: new Date().toISOString()
      }
    });
    
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: 'Server error: ' + error.message 
    });
  }
}