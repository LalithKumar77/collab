const express = require('express');
const { registerUser, loginUser , forgotPass} = require('../controllers/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgotPassword', forgotPass);

module.exports = router;
