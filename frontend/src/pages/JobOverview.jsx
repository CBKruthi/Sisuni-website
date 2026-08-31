import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobListings } from "../data/jobData";


const JobOverview = () => {
const { id } = useParams();
const navigate = useNavigate();
const job = jobListings.find((item) => item.id == id);


if (!job) return <p className="p-10 text-red-500">Job not found.</p>;


return (
 <div className="px-10 pt-32 pb-16 max-w-4xl mx-auto">
<h1 className="text-4xl font-bold">{job.title}</h1>
<p className="text-gray-600 mt-2">📍 {job.location} | {job.type}</p>


<section className="mt-10 space-y-6">
<div>
<h2 className="text-xl font-semibold">Overview</h2>
<p className="text-gray-700 mt-2">{job.overview}</p>
</div>


<div>
<h2 className="text-xl font-semibold">Responsibilities</h2>
<ul className="mt-2 text-gray-700 space-y-2">
{job.responsibilities.map((res, i) => <li key={i}>• {res}</li>)}
</ul>
</div>


<div>
<h2 className="text-xl font-semibold">Qualifications</h2>
<ul className="mt-2 text-gray-700 space-y-2">
{job.qualifications.map((q, i) => <li key={i}>• {q}</li>)}
</ul>
</div>


<div>
<h2 className="text-xl font-semibold">Skills</h2>
<div className="flex flex-wrap gap-2 mt-2">
{job.skills.map((skill, i) => (
<span key={i} className="px-4 py-2 bg-gray-200 rounded-full text-sm">{skill}</span>
))}
</div>
</div>
</section>


<button
onClick={() => navigate(`/career/${job.id}/apply`)}
className="mt-10 px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800"
>
Apply Now
</button>
</div>
);
};


export default JobOverview;