// server/utils/mailer.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // Hostinger SMTP
  port: 465,
  secure: true,
  auth: {
    user: process.env.COMPANY_EMAIL, // company email
    pass: process.env.COMPANY_PASSWORD,            // actual password (keep safe)
  },
});

module.exports = transporter;
