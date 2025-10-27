import React, { useState, useEffect } from 'react';
import { mockBackend } from '../api/mockBackend';

const Dashboard = () => {
  const [scans, setScans] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const profileData = await mockBackend.getProfile();
    setProfile(profileData.profile);
    setScans([
      { id: 1, crop: 'Wheat', disease: 'Rust', date: '2024-03-15', status: 'Treated' },
      { id: 2, crop: 'Rice', disease: 'Blight', date: '2024-03-10', status: 'Monitoring' },
      { id: 3, crop: 'Tomato', disease: 'Early Blight', date: '2024-03-08', status: 'Treated' }
    ]);
  };

  const addNewScan = async () => {
    const crops = ['Wheat', 'Rice', 'Tomato', 'Cotton', 'Corn'];
    const diseases = ['Rust', 'Blight', 'Mildew', 'No Disease', 'Leaf Spot'];
    
    const newScan = {
      id: scans.length + 1,
      crop: crops[Math.floor(Math.random() * crops.length)],
      disease: diseases[Math.floor(Math.random() * diseases.length)],
      date: new Date().toLocaleDateString(),
      status: 'Completed'
    };
    
    setScans([newScan, ...scans]);
    
    await mockBackend.saveScan({
      imageUrl: `scan-${Date.now()}.jpg`,
      cropType: newScan.crop,
      location: profile?.location || 'My Farm',
      disease: newScan.disease,
      solution: 'Treatment recommendations provided'
    });
    
    alert(`✅ New scan completed!\nCrop: ${newScan.crop}\nStatus: ${newScan.disease}`);
  };

  if (!profile) return <div className="text-center p-4">Loading farmer dashboard...</div>;

  return (
    <div className="p-6 border-2 border-gray-200 rounded-lg bg-white shadow-lg">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">👨‍🌾 Farmer Dashboard</h3>
      
      {/* Farmer Info */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-lg text-blue-800">Welcome, {profile.name}! 🌟</h4>
        <p className="text-gray-600">Farmer ID: {profile.farmerId} | Location: {profile.location}</p>
        <p className="text-sm text-gray-500">Farm Size: {profile.farmSize} | Member since: {profile.joinDate}</p>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg border text-center">
          <p className="text-sm text-gray-600">Total Scans</p>
          <p className="text-2xl font-bold text-blue-700">{scans.length}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg border text-center">
          <p className="text-sm text-gray-600">Farm Size</p>
          <p className="text-2xl font-bold text-green-700">{profile.farmSize}</p>
        </div>
      </div>
      
      {/* Action Button */}
      <div className="text-center mb-6">
        <button 
          onClick={addNewScan}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow transition-all"
        >
          📸 Simulate New Crop Scan
        </button>
        <p className="text-sm text-gray-600 mt-2">Click to simulate AI crop disease detection</p>
      </div>
      
      {/* Recent Scans */}
      <div className="bg-gray-50 rounded-lg border p-4">
        <h4 className="font-bold text-lg mb-3 text-center text-gray-800">Recent Crop Scans</h4>
        <div className="space-y-3">
          {scans.map(scan => (
            <div key={scan.id} className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">{scan.crop}</p>
                  <p className="text-sm text-gray-600">Disease: {scan.disease}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{scan.date}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    scan.status === 'Treated' ? 'bg-green-100 text-green-800' : 
                    scan.status === 'Monitoring' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {scan.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;