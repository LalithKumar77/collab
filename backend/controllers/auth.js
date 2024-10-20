const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Function to generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Registration
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ username, email, password });

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Registration error:", error); 
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
};

// Login 
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      // Generate token upon successful login
      const token = generateToken(user._id);
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token, 
        message: "Login successful",
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error("Login error:", error); 
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
};
