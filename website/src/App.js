import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/Register';
import Forgot from './pages/forgotpassword';
import LandingPage from './pages/LandingPage';
import HRHomepage from './pages/HR_HomePage';
import Homepage from "./pages/HomePage"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path='/contact' element={<HRHomepage />} />
        <Route path='/forgotPassword' element={<Forgot />} />
      </Routes>
    </Router>
  );
}

export default App;
