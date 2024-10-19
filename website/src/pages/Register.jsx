import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import "../styles/login.css";

// Register Component
function Register() {
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
      toast.success("Login successful!"); // Show success toast
      // Handle successful login (e.g., redirect to dashboard, etc.)
    } catch (error) {
      console.error("Error logging in:", error.response.data);
      toast.error(error.response.data.message || "Error occurred during login."); // Show error toast
    }
  };

  return (
    <div className="reg">
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
        <button type="submit">Login</button> {/* Change the button text to "Login" */}
      </form>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </div>
  );
}

export default Register;
