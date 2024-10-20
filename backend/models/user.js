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
<<<<<<< HEAD
    minlength: 4,
=======
    minlength: 3,
>>>>>>> afb07f37a7d5adc3f6dd0de9ff3ca063654a5a4d
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// hashing password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const hash = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, hash);
  next();
});


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;