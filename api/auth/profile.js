// Get user profile data
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Simulate user profile data
    const userProfile = {
      id: 'user123',
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      farmerId: 'FARM2024001',
      location: 'Punjab, India',
      farmSize: '5 acres',
      crops: ['Wheat', 'Rice', 'Cotton'],
      joinDate: '2024-01-15',
      totalScans: 12,
      recentScans: [
        {
          id: 'scan1',
          crop: 'Wheat',
          disease: 'Rust',
          date: '2024-03-15',
          status: 'treated'
        },
        {
          id: 'scan2', 
          crop: 'Rice',
          disease: 'Blight',
          date: '2024-03-10',
          status: 'monitoring'
        }
      ]
    };

    return res.status(200).json({
      success: true,
      profile: userProfile
    });
    
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
}