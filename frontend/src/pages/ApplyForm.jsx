import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ApplyForm = () => {
  const { id } = useParams(); // jobId from /career/:id/apply
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ STOP page refresh
    setLoading(true);

    try {
      const data = new FormData();
      data.append("jobId", id);
      data.append("jobTitle", "Applied via Careers Page");
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("coverLetter", formData.coverLetter);
      data.append("resume", resume);

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/applications/apply`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Application submitted successfully");
      navigate("/careers");
    } catch (err) {
      console.error(err);
      alert("Failed to submit application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-10 pt-32 pb-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Apply Now</h1>

      {/* ✅ FORM SUBMIT HANDLER */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Upload Resume</label>
          <input
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            className="w-full border p-3 rounded-lg mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Why are you interested? (Optional)</label>
          <textarea
            name="coverLetter"
            rows="4"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mt-2"
          />
        </div>

        {/* ✅ REAL SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
