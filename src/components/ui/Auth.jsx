import React, { useState } from 'react';
import { mockBackend } from '../api/mockBackend';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const handleAuth = async (formData) => {
    if (isLogin) {
      const result = await mockBackend.login(formData.email, formData.password);
      if (result.success) {
        setUser(result.user);
        localStorage.setItem('user', JSON.stringify(result.user));
        alert(`Welcome back, ${result.user.name}!`);
      }
    } else {
      const result = await mockBackend.register(formData);
      if (result.success) {
        setUser(result.user);
        alert(`Account created for ${result.user.name}!`);
      }
    }
  };

  if (user) {
    return (
      <div className="p-4 bg-green-100 border border-green-400 rounded">
        <p>Logged in as: <strong>{user.name}</strong></p>
        <button onClick={() => setUser(null)} className="text-sm text-blue-600">
          Logout
        </button>
      </div>
    );
  }

  return (
  <div className="p-4 bg-blue-50 border border-blue-200 rounded">
      <h3 className="font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        handleAuth(Object.fromEntries(formData));
      }}>
        {!isLogin && <input name="name" placeholder="Full Name" className="border p-2 w-full mb-2" />}
        <input name="email" type="email" placeholder="Email" className="border p-2 w-full mb-2" />
        <input name="password" type="password" placeholder="Password" className="border p-2 w-full mb-2" />
        {!isLogin && <input name="farmerId" placeholder="Farmer ID" className="border p-2 w-full mb-2" />}
        {!isLogin && <input name="location" placeholder="Location" className="border p-2 w-full mb-2" />}
        
        <button type="submit" className="bg-blue-600 text-white p-2 w-full">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className="text-sm text-blue-600 mt-2">
        {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
      </button>
    </div>
  );
};

export default Auth;