import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/Register';
import HRHomepage from './pages/HR_HomePage';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/hr-homepage' element={<HRHomepage/>} />
        <Route path="/HomePage"element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
