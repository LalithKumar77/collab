import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import "../styles/login.css";
import { Link } from 'react-router-dom';

function Login() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log("Login response:", response.data);

      // On successful login
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome back!',
        background: 'linear-gradient(145deg, #43e97b, #38f9d7)', // Gradient background
        color: '#fff', // White text
        confirmButtonColor: '#43e97b', // Button color
        confirmButtonText: 'Great!', // Custom button text
        iconColor: '#fff', // White icon color
        customClass: {
          popup: 'styled-popup', // Add custom classes if needed
        },
        backdrop: `rgba(0, 0, 0, 0.7)` // Darker backdrop
      });

      // Handle successful login (e.g., redirect to dashboard)
      // Example: window.location.href = '/dashboard';
    } catch (error) {
      console.error("Error logging in:", error.response.data);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: error.response.data.message || "Error occurred during login.",
        background: 'linear-gradient(145deg, #ff512f, #dd2476)', // Gradient background
        color: '#fff', // White text
        confirmButtonColor: '#ff512f', // Button color
        confirmButtonText: 'Try Again', // Custom button text
        iconColor: '#fff', // White icon color
        customClass: {
          popup: 'styled-popup', // Add custom classes if needed
        },
        backdrop: `rgba(0, 0, 0, 0.7)` // Darker backdrop
      });
    }
  };

  return (
    <div className="log">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <p className="fp"><Link to="/forgotPassword">Forgot Password </Link></p>
        <button type="submit">Login</button>
        <p className="rg">Don't have an account? <Link to="/register">Register</Link></p> {/* Link to Register page */}
      </form>
    </div>
  );
}

export default Login;
