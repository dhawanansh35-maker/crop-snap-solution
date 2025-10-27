import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Scan from './pages/Scan';
import Analyzing from './pages/Analyzing';
import Diagnosis from './pages/Diagnosis';
import Treatment from './pages/Treatment';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/analyzing" element={<Analyzing />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;