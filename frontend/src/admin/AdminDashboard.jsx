import { useState, useEffect } from "react";
import axios from "axios";

// MUST start with VITE_  ❗
const API = import.meta.env.VITE_BACKEND_URL + "/jobs";

export default function AdminDashboard() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "",
    overview: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Move loadJobs INSIDE component
  const loadJobs = async () => {
    try {
      const res = await axios.get(API);
      setJobs(res.data);
    } catch (err) {
      console.error("Error loading jobs:", err);
    }
  };

  // ✅ Now useEffect works
  useEffect(() => {
    loadJobs();
  }, []);

  const handleAddJob = async () => {
    if (!form.title) {
      alert("Job Title required!");
      return;
    }

    try {
      if (editingJob !== null) {
        const id = jobs[editingJob]._id;
        await axios.put(`${API}/${id}`, form);
      } else {
        await axios.post(API, form);
      }

      setForm({
        title: "",
        location: "",
        type: "",
        overview: "",
        responsibilities: "",
        requirements: "",
        benefits: "",
      });

      setEditingJob(null);
      loadJobs();
    } catch (error) {
      console.error(error);
      alert("Failed to save job");
    }
  };

  const handleEdit = (index) => {
    setForm(jobs[index]);
    setEditingJob(index);
  };

  const handleDelete = async (index) => {
    try {
      const id = jobs[index]._id;
      await axios.delete(`${API}/${id}`);
      loadJobs();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-10 pt-20">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

      {/* ADD JOB FORM */}
      <div className="bg-white p-5 shadow rounded mb-6">
        <h2 className="text-lg font-semibold mb-4">
          {editingJob !== null ? "Edit Job" : "Add New Job"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="title"
            placeholder="Job Title"
            className="border p-2"
            value={form.title}
            onChange={handleChange}
          />
          <input
            name="location"
            placeholder="Location"
            className="border p-2"
            value={form.location}
            onChange={handleChange}
          />
          <input
            name="type"
            placeholder="Job Type"
            className="border p-2"
            value={form.type}
            onChange={handleChange}
          />
        </div>

        <textarea name="overview" placeholder="overview" className="border p-2 w-full mt-3" rows="2" value={form.overview} onChange={handleChange} />

        <textarea name="responsibilities" placeholder="responsibilities" className="border p-2 w-full mt-3" rows="2" value={form.responsibilities} onChange={handleChange} />

        <textarea name="requirements" placeholder="requirements" className="border p-2 w-full mt-3" rows="2" value={form.requirements} onChange={handleChange} />

        <textarea name="benefits" placeholder="benefits" className="border p-2 w-full mt-3" rows="2" value={form.benefits} onChange={handleChange} />

        <button onClick={handleAddJob} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
          {editingJob !== null ? "Update Job" : "Add Job"}
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-3">Added Jobs</h2>
      {jobs.length === 0 && <p>No jobs added yet.</p>}

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={job._id} className="border p-4 rounded bg-white shadow">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.location} • {job.type}</p>

            <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded mr-2"
              onClick={() => alert(JSON.stringify(job, null, 2))}
            >
              View
            </button>

            <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>

            <button className="bg-red-600 text-white px-3 py-1 rounded"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
