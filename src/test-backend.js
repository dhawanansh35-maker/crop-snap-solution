import { mockBackend } from './api/mockBackend';

// Test the backend
async function testBackend() {
  console.log('🧪 Testing Backend APIs...');
  
  // Test registration
  const registerResult = await mockBackend.register({
    name: "Test Farmer",
    email: "test@farmer.com", 
    password: "123456",
    farmerId: "FARM001",
    location: "Punjab"
  });
  console.log('✅ Registration:', registerResult);
  
  // Test login
  const loginResult = await mockBackend.login("test@farmer.com", "123456");
  console.log('✅ Login:', loginResult);
  
  // Test crop scan
  const scanResult = await mockBackend.saveScan({
    imageUrl: "https://example.com/crop.jpg",
    cropType: "Wheat",
    location: "Field A",
    disease: "Rust",
    solution: "Use fungicide"
  });
  console.log('✅ Crop Scan:', scanResult);
  
  // Test profile
  const profileResult = await mockBackend.getProfile();
  console.log('✅ Profile:', profileResult);
}

testBackend();