import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/LandingPage';  
import Login from './pages/login';
import Register from './pages/Register';
import Forgot from './pages/forgotpassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/forgotPassword' element={<Forgot />} />
      </Routes>
    </Router>
  );
}

export default App;
