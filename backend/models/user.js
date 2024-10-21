const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: {
    type: String,
  },  
  resetPasswordExpire: {
    type: Date,
  },

});
const User = mongoose.model('User', userSchema);

module.exports = User;