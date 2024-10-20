import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import "../styles/login.css";
import { Link } from 'react-router-dom';

// Register Component
function Register() {
   // State to handle form inputs
   const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "" 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
        background: 'linear-gradient(145deg, #f5576c, #f093fb)', // Gradient background
        color: '#fff', // White text
        confirmButtonColor: '#f5576c', // Button color
        confirmButtonText: 'Try Again', // Custom button text
        iconColor: '#fff', // White icon color
        customClass: {
          popup: 'styled-popup', // Add custom classes if needed
        },
        backdrop: `rgba(0, 0, 0, 0.7)` // Darker backdrop
      });
      return;
    }

    try {
      const { confirmPassword, ...dataToSubmit } = formData;
      const response = await axios.post('http://localhost:5000/register', dataToSubmit);
      console.log("Registration response:", response.data);

      // On successful registration
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'You have successfully registered.',
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
      
      setFormData({ username: "", email: "", password: "", confirmPassword: "" }); 
    } catch (error) {
      console.error("Error registering:", error.response?.data);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: error.response?.data?.message || "Error occurred during registration.",
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
    <div className="reg">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
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
        <div>
          <label>Re-enter Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
       <p className="rg">Already have an account? <Link to="/login">Login</Link> </p>
      </form>
    </div>
  );
}

export default Register;
