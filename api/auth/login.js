// Simple login API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;
    
    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    // Simulate user verification
    console.log('User login attempt:', email);
    
    // For demo - always return success with mock user
    return res.status(200).json({
      success: true,
      message: 'Login successful!',
      user: {
        id: 'user123',
        name: 'Demo Farmer',
        email: email,
        farmerId: 'FARM2024',
        location: 'Demo Village'
      },
      token: 'demo-token-' + Date.now()
    });
    
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
}