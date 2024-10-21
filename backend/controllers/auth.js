const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ username, email, password : hashedPassword});

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
    if (!user) {
      return res.status(401).json({ message: 'user not exits' });
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token upon successful login
    const token = generateToken(user._id);
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token, 
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
};


exports.forgotPass = async (req, res) => {
  const { email } = req.body;

  try {
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: 'Email not found' });
      }

      // Generate a reset token
      const resetToken = crypto.randomBytes(32).toString('hex');
      user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
      user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 min time for link expiration 
      await user.save();

      const resetlink = `http://localhost:5000/forgotPassword/reset/${resetToken}`;
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          port: 465,
          secure: true,
          auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
          },
      });

      const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Password Reset Request',
          text: `You requested a password reset. Click the link below to reset your password:\n\n${resetlink}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Password reset link sent to your email' });

  } catch (error) {
      console.error("Email error:", error); // Log error
      res.status(500).json({ message: 'Server error, please try again' });
  }
};

// Reset password logic 
exports.resetPass = async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;

  try {
      const hashPass = crypto.createHash('sha256').update(token).digest('hex');
      const user = await User.findOne({
          resetPasswordToken: hashPass,
          resetPasswordExpire: { $gt: Date.now() },
      });
      if (!user) {
          return res.status(400).json({ message: 'Invalid or expired link' });
      }

      console.log("Actual password: ",password);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      console.log("user after updating the password",{
          _id: user._id,
          username: user.username,
          email: user.email,
          password: user.password
      });
      
      await user.save();

      res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
      console.error("Reset Password error:", error);
      res.status(500).json({ message: 'Server error, please try again' });
  }
};
