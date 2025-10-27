import React, { useState } from 'react';
import { mockBackend } from '../api/mockBackend';

const DemoBackend = () => {
  const [results, setResults] = useState([]);

  const testRegistration = async () => {
    const result = await mockBackend.register({
      name: "Test Farmer",
      email: "test@farmer.com",
      password: "123456",
      farmerId: "FARM001",
      location: "Punjab"
    });
    setResults(prev => [...prev, { type: 'Registration', data: result }]);
  };

  const testLogin = async () => {
    const result = await mockBackend.login("test@farmer.com", "123456");
    setResults(prev => [...prev, { type: 'Login', data: result }]);
  };

  const testScan = async () => {
    const result = await mockBackend.saveScan({
      imageUrl: "https://example.com/crop.jpg",
      cropType: "Wheat",
      location: "Field A",
      disease: "Rust",
      solution: "Use fungicide"
    });
    setResults(prev => [...prev, { type: 'Crop Scan', data: result }]);
  };

  const testProfile = async () => {
    const result = await mockBackend.getProfile();
    setResults(prev => [...prev, { type: 'Profile', data: result }]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🚀 Backend API Demo</h1>
      <p>Test all backend functionalities:</p>
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={testRegistration} style={buttonStyle}>Test Registration</button>
        <button onClick={testLogin} style={buttonStyle}>Test Login</button>
        <button onClick={testScan} style={buttonStyle}>Test Crop Scan</button>
        <button onClick={testProfile} style={buttonStyle}>Test Profile</button>
      </div>

      <div>
        <h3>API Results:</h3>
        {results.map((result, index) => (
          <div key={index} style={{ 
            border: '1px solid #ccc', 
            margin: '10px 0', 
            padding: '10px',
            background: result.data.success ? '#e8f5e8' : '#ffe8e8'
          }}>
            <strong>{result.type}:</strong> {result.data.message}
            <pre style={{ fontSize: '12px', overflow: 'auto' }}>
              {JSON.stringify(result.data, null, 2)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: '5px',
  padding: '10px 15px',
  background: '#007acc',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default DemoBackend;