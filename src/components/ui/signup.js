import React, { useState } from 'react';
import { mockBackend } from '../api/mockBackend';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    farmerId: '',
    location: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Signup data:', formData);
    
    const result = await mockBackend.register(formData);
    
    if (result.success) {
      alert('✅ Farmer registered successfully!');
      console.log('User:', result.user);
    } else {
      alert('❌ Registration failed');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Farmer Registration</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          style={{ width: '100%', margin: '10px 0', padding: '8px' }}
        />
        <input 
          type="email" 
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          style={{ width: '100%', margin: '10px 0', padding: '8px' }}
        />
        <input 
          type="password" 
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          style={{ width: '100%', margin: '10px 0', padding: '8px' }}
        />
        <input 
          type="text" 
          placeholder="Farmer ID"
          value={formData.farmerId}
          onChange={(e) => setFormData({...formData, farmerId: e.target.value})}
          style={{ width: '100%', margin: '10px 0', padding: '8px' }}
        />
        <input 
          type="text" 
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
          style={{ width: '100%', margin: '10px 0', padding: '8px' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px', background: 'green', color: 'white' }}>
          Register as Farmer
        </button>
      </form>
    </div>
  );
};

export default Signup;