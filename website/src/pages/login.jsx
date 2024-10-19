import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import "../styles/login.css";

function Register() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    username: "",
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
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log("Registration response:", response.data);
      toast.success("Registration successful!"); 
      setFormData({ username: "", email: "", password: "" }); // Clear form
    } catch (error) {
      console.error("Error registering:", error.response.data);
      toast.error(error.response.data.message || "Error occurred during registration."); // Show error toast
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
        <button type="submit">Register</button>
      </form>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </div>
  );
}

export default Register;
