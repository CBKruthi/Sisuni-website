const mailer = require("../utils/nodemailer");

module.exports.sendEmail = async (req, res) => {
  console.log("✅ UPDATED CONTACTUS CONTROLLER HIT");
  console.log("Incoming body:", req.body);

  const { from_name, from_email, subject, message } = req.body;

  if (!from_name || !from_email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required.",
    });
  }

  const mailOptions = {
    from: `"Website Contact" <${process.env.MAIL_USER}>`,
    to: "hr@sisunitech.com",
    replyTo: from_email,
    subject: `New Contact Form: ${subject || "General Inquiry"}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${from_name}</p>
      <p><strong>Email:</strong> ${from_email}</p>
      <p><strong>Reason:</strong> ${subject}</p>
      <hr />
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    await mailer.sendMail(mailOptions);
    return res.status(200).json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("Mail error:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
};
