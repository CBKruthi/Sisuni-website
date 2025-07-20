const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();

const { mongoose } = require('./db'); // ✅ MongoDB Connection

// Routes
const applicationRoutes = require('./routes/applications');
// const contactRoutes = require('./routes/contactNoNeed');
const jobRoutes = require('./routes/jobs');
// const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 8089; // Fallback to 8089

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // ✅ Auth route first for security
// app.use('/api/auth', authRoutes);

// // ✅ Resume Upload Directory Setup
// const uploadsDir = path.join(__dirname, 'uploads/resumes');
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
//   console.log(`📁 Created uploads folder: ${uploadsDir}`);
// } else {
//   console.log(`📁 Uploads folder exists`);
// }
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Other Routes
app.use('/api/applications', applicationRoutes);
// app.use('/api/contact', contactRoutes);
app.use('/api/jobs', jobRoutes);

// ✅ Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});


// Example in Express.js
app.get("/api/applications/by-email/:email", async (req, res) => {
  const email = req.params.email;
  const applications = await Application.find({ email });
  if (!applications.length) return res.status(404).json({ message: "No applications found" });
  res.json(applications);
});


// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
