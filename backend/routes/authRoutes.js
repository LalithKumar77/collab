const express = require('express');
const { registerUser, loginUser , forgotPass, resetPass} = require('../controllers/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgotPassword', forgotPass);

router.get('/forgotPassword/reset/:token', (req, res) => {
    res.status(200).send(`
        <h1>Password Reset</h1>
        <p>You are about to reset your password. Please use the link below:</p>
        <a href="http://localhost:3000/forgotPassword/reset/${req.params.token}">Reset Password</a>
    `);
});

router.post('/forgotPassword/reset/:token',resetPass);
module.exports = router;
