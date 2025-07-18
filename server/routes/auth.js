const express = require('express');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// ✅ Send OTP
router.post('/send-otp', async (req, res) => {
  const { name, email, password } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const hashedPassword = await bcrypt.hash(password, 10);
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

  let user = await User.findOne({ email });

  if (user) {
    return res.status(409).json({ message: 'User already exists' });
  }

  // Temp save user with OTP
  user = new User({ name, email, password: hashedPassword, otp, otpExpires });
  await user.save();

  // Send OTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // in .env
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is ${otp}. It expires in 10 minutes.`
  });

  res.status(200).json({ message: 'OTP sent to email' });
});

// ✅ Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpires < new Date()) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  // Clear OTP
  user.otp = null;
  user.otpExpires = null;
  await user.save();

  // Success
  return res.status(200).json({ message: 'Signup successful' }); // 🔁 Frontend will handle redirection
});


// ✅ Final Login Route (Backend)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '2h' });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
        isAdmin: user.email === "admin@sisuni.tech",
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
