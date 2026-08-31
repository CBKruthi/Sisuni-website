const Job = require("../models/Job");

// ✅ ADD JOB (Admin)
exports.addJob = async (req, res) => {
  try {
    const {
      title,
      location,
      type,
      overview,
      responsibilities,
      requirements,
      benefits
    } = req.body;

    if (!title || !location || !type) {
      return res.status(400).json({
        error: "Title, location, and type are required",
      });
    }

    const newJob = new Job({
      title,
      location,
      type,
      overview,
      responsibilities,
      requirements,
      benefits,
    });

    await newJob.save();

    return res.status(201).json({
      message: "✅ Job added successfully",
      job: newJob,
    });
  } catch (error) {
    console.error("Add job error:", error);
    return res.status(500).json({ error: "Failed to add job" });
  }
};

// ✅ GET JOBS (Admin + Users)
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    return res.status(200).json(jobs);
  } catch (error) {
    console.error("Get jobs error:", error);
    return res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

// ✅ DELETE JOB (Admin)
exports.deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedJob = await Job.findByIdAndDelete(id);
    if (!deletedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    return res.status(200).json({ message: "✅ Job deleted successfully" });
  } catch (error) {
    console.error("Delete job error:", error);
    return res.status(500).json({ error: "Failed to delete job" });
  }
};

// ✅ UPDATE JOB (Admin)
exports.updateJob = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    return res.status(200).json({
      message: "✅ Job updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    console.error("Update job error:", error);
    return res.status(500).json({ error: "Failed to update job" });
  }
};
