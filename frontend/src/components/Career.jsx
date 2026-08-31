
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 120);
  }, []);

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div
      className="w-full bg-white px-6 md:px-12 lg:px-20"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* GRID — EXACT FIGMA LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* CAREERS MAIN CARD */}
          <div
            className={`md:col-span-10 bg-[#031E1E] rounded-[40px] px-10 flex items-center transition-all duration-500 ease-out
              ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ height: "110px" }}
          >
            <h2 className="text-white text-xl md:text-2xl font-semibold">
              CAREERS
            </h2>
          </div>

          {/* ICON CARD (RIGHT SMALL) */}
          <div
            className={`md:col-span-2 bg-[#031E1E] rounded-[40px] flex items-center justify-center transition-all duration-500 ease-out
              ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ height: "110px" }}
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M3 12h18M3 17h18"
              />
            </svg>
          </div>

          {/* TITLE CARD */}
          <div
            className={`md:col-span-12 bg-[#989898] rounded-[40px] px-10 py-16 flex items-center transition-all duration-500 ease-out
              ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ minHeight: "280px" }}
          >
            <h1 className="text-white text-5xl md:text-6xl font-semibold leading-tight">
              Code the Future
              <br />
              with Us
            </h1>
          </div>

          {/* DESCRIPTION BLOCK — SMALLER HEIGHT */}
          <div
            className={`md:col-span-8 bg-[#989898] rounded-[40px] p-10 transition-all duration-500 ease-out
              ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ minHeight: "200px" }}
          >
            <p className="text-white text-base md:text-lg leading-relaxed">
              We're a team of learners, creators, and problem-solvers.
              Whether you're an engineer, designer, or strategist—there's a place
              for your talent at Sisuni Tech.
              <br /><br />
              Let's build something amazing together.
            </p>
          </div>

          {/* LIGHT BLUE ARROW CARD — SMALLER WIDTH & HEIGHT */}
          <div
          onClick={() => handleNavigation("/careers")}
            className={`md:col-span-4 bg-[#C6FFF6] rounded-[40px] flex items-center justify-center transition-all duration-500 ease-out
              ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              hover:cursor-pointer hover:scale-[1.04] hover:shadow-xl`}
            style={{ height: "200px" }}
          >
            <svg
              className="w-14 h-14 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H9m10.5 0v10.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
