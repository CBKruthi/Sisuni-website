import { useEffect, useState } from "react";

export default function Projects() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200);
  }, []);

  return (
    <div className="w-full flex justify-center py-20 px-4">
      <section
        className={`
          relative w-full max-w-6xl 
          h-[360px] sm:h-[420px] md:h-[500px] lg:h-[560px] 
          flex items-center justify-center 
          bg-[#1D002E] text-white rounded-3xl overflow-hidden shadow-xl
          transition-all duration-700 ease-out
          ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          hover:scale-[1.02] cursor-pointer
        `}
        style={{
          backgroundImage: "url('/your-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Purple overlay */}
        <div className="absolute inset-0 bg-[#1D002E]/80"></div>

        {/* Center text */}
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#D9B5FF] text-center">
          Sarveka
        </h1>

        {/* Bottom-left text */}
        <p className="absolute bottom-5 left-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#D9B5FF] opacity-80">
          Project in Progress
        </p>
      </section>
    </div>
  );
}


