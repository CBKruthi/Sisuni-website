const mongoose =require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
      required: true
    },

    jobTitle: {
      type: String,
      required: true
    },

    fullName: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    portfolio: {
      type: String
    },

    experience: {
      type: String
    },

    coverLetter: {
      type: String
    },

    resumeUrl: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["Applied", "Shortlisted", "Rejected"],
      default: "Applied"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
