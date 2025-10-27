// Mock backend for Vite React app - SIMULATES REAL APIs
export const mockBackend = {
  // User registration
  register: async (userData) => {
    console.log('Registering user:', userData);
    return {
      success: true,
      message: 'Farmer registered successfully!',
      user: {
        id: Math.random().toString(36).substr(2, 9),
        ...userData,
        joinedDate: new Date().toISOString()
      }
    };
  },

  // User login
  login: async (email, password) => {
    console.log('Login attempt:', email);
    return {
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
    };
  },

  // Save crop scan
  saveScan: async (scanData) => {
    console.log('Saving crop scan:', scanData);
    return {
      success: true,
      message: 'Crop analysis saved successfully!',
      scan: {
        id: 'scan_' + Date.now(),
        ...scanData,
        timestamp: new Date().toISOString(),
        status: 'completed'
      }
    };
  },

  // Get user profile
  getProfile: async () => {
    return {
      success: true,
      profile: {
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
          }
        ]
      }
    };
  }
};