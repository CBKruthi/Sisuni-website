// const mongoose = require("mongoose");

// const JobSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     roleOverview: { type: String, required: true },
//     responsibilities: { type: [String], required: true },
//     qualifications: { type: [String], required: true },
//     requiredSkills: { type: [String], required: true },
//     benefits: { type: [String], default: [] }
// }, { timestamps: true });

// module.exports = mongoose.model("Job", JobSchema);


const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: String,
  type: String,
  overview: String,
  responsibilities: String,
  requirements: String,
  benefits: String
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);
