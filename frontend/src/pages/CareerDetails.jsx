import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // FETCH JOBS FROM BACKEND
  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "http://localhost:3001/jobs"
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Failed to load jobs"
        );
      }

      setJobs(data);

    } catch (error) {
      console.error("Career fetch error:", error);

      setError(
        error.message || "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchJobs();
  }, []);


  // LOADING
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">

        <div className="flex flex-col items-center gap-4">

          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-orange-500"></div>

          <p className="text-lg text-slate-500">
            Loading opportunities...
          </p>

        </div>

      </div>
    );
  }


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">


      {/* ================= HERO ================= */}

      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-orange-50 px-5 py-20 text-center md:py-28">

        <div className="mx-auto max-w-5xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Careers at Sisuni Tech
          </p>


          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">

            Build the Future with

            <span className="block text-orange-500">
              Sisuni Tech
            </span>

          </h1>


          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">

            Join a team passionate about technology,
            innovation, and building meaningful digital
            solutions that solve real-world problems.

          </p>


          {/* HERO STATS */}

          <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">


            {/* OPEN POSITIONS */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <h2 className="text-3xl font-bold text-orange-500">
                {jobs.length}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Open Positions
              </p>

            </div>


            {/* TEAM */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <h2 className="text-3xl font-bold text-orange-500">
                Growing
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Team
              </p>

            </div>


            {/* TECHNOLOGY */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

              <h2 className="text-3xl font-bold text-orange-500">
                Tech
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Driven
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= OPEN POSITIONS ================= */}

      <section className="mx-auto max-w-7xl px-5 py-20">


        <div className="text-center">

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Open Positions
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-500">

            Explore opportunities where you can learn,
            innovate, and make a meaningful impact.

          </p>

        </div>



        {/* ERROR */}

        {error && (

          <div className="mx-auto mt-10 max-w-xl rounded-xl border border-red-200 bg-red-50 p-5 text-center">

            <h3 className="font-semibold text-red-600">
              Unable to load jobs
            </h3>

            <p className="mt-2 text-sm text-red-500">
              {error}
            </p>

            <button
              onClick={fetchJobs}
              className="mt-4 rounded-lg bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Try Again
            </button>

          </div>

        )}



        {/* NO JOBS */}

        {!error && jobs.length === 0 && (

          <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

            <div className="text-5xl">
              💼
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              No positions available
            </h3>

            <p className="mt-3 leading-relaxed text-slate-500">

              We currently do not have any open positions.
              Please check back later for future opportunities.

            </p>

          </div>

        )}



        {/* JOBS GRID */}

        {!error && jobs.length > 0 && (

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            {jobs.map((job) => (

              <div
                key={job._id}
                className="flex min-h-[400px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              >


                {/* JOB HEADER */}

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {job.title}
                    </h3>


                    {job.type && (

                      <p className="mt-2 text-sm font-semibold text-orange-500">
                        {job.type}
                      </p>

                    )}

                  </div>


                  <span className="whitespace-nowrap rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">

                    Open

                  </span>

                </div>



                {/* OVERVIEW */}

                {job.overview && (

                  <p className="my-6 line-clamp-4 leading-relaxed text-slate-500">

                    {job.overview}

                  </p>

                )}



                {/* LOCATION */}

                {job.location && (

                  <div className="mb-5 flex items-center gap-2 text-sm text-slate-600">

                    <span>
                      📍
                    </span>

                    {job.location}

                  </div>

                )}



                {/* REQUIREMENTS */}

                {job.requirements && (

                  <div className="mb-6">

                    <p className="mb-2 text-sm font-semibold text-slate-700">
                      Requirements
                    </p>

                    <p className="text-sm leading-relaxed text-slate-500">

                      {Array.isArray(job.requirements)
                        ? job.requirements.slice(0, 3).join(", ")
                        : job.requirements}

                    </p>

                  </div>

                )}



                {/* APPLY BUTTON */}

                <button
                  onClick={() =>
                    navigate(`/career/:id/apply`)
                  }
                  className="mt-auto w-full rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition duration-200 hover:bg-orange-600 hover:shadow-lg active:scale-[0.98]"
                >

                  Apply Now →

                </button>


              </div>

            ))}


          </div>

        )}

      </section>



      {/* ================= WHY SISUNI TECH ================= */}

      <section className="border-t border-slate-200 bg-white px-5 py-20">

        <div className="mx-auto max-w-7xl">


          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Our Culture
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Why Sisuni Tech?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">

              We believe great technology is built by
              curious people working together to solve
              meaningful problems.

            </p>

          </div>



          <div className="mt-14 grid gap-6 md:grid-cols-3">


            <div className="rounded-2xl border border-slate-200 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
                🚀
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Growth
              </h3>

              <p className="mt-3 leading-relaxed text-slate-500">

                Work on challenging technology problems
                and continuously develop your technical
                and professional skills.

              </p>

            </div>



            <div className="rounded-2xl border border-slate-200 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
                💡
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Innovation
              </h3>

              <p className="mt-3 leading-relaxed text-slate-500">

                Experiment with new ideas, technologies,
                and approaches to create impactful
                digital solutions.

              </p>

            </div>



            <div className="rounded-2xl border border-slate-200 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
                🤝
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Collaboration
              </h3>

              <p className="mt-3 leading-relaxed text-slate-500">

                Collaborate with passionate people,
                share knowledge, and build great
                technology together.

              </p>

            </div>


          </div>

        </div>

      </section>



      {/* ================= CTA ================= */}

      <section className="bg-slate-900 px-5 py-20 text-center">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Don't see the right role?
          </h2>

          <p className="mt-5 text-slate-400">

            We are always interested in meeting talented
            people who are passionate about technology
            and innovation.

          </p>

          <a
            href="mailto:careers@sisunitech.com"
            className="mt-8 inline-block rounded-lg bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg"
          >

            Contact Our Team

          </a>

        </div>

      </section>

    </div>
  );
};

export default Careers;