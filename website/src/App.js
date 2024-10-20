import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
<<<<<<< HEAD
import Register from './pages/Register';
import HRHomepage from './pages/HR_HomePage';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
=======
import Register from './pages/register';
import Forgot from './pages/forgotpassword';
>>>>>>> e6ab594cb28997d771115de70fc303e412dcb05c

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path='/hr-homepage' element={<HRHomepage/>} />
        <Route path="/HomePage"element={<HomePage/>}/>
=======
        <Route path='/forgotPassword' element={<Forgot />} />
>>>>>>> e6ab594cb28997d771115de70fc303e412dcb05c
      </Routes>
    </Router>
  );
}

export default App;
