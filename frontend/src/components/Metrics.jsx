// import React from "react";

// const Metrics = () => {
//   const stats = [
//     {
//       value: "99%",
//       title: "PROJECT PRECISION",
//       description:
//         "We’re committed to delivering every project on time, on budget, and on point—ensuring seamless collaboration and measurable outcomes from day one."
//     },
//     {
//       value: "2x",
//       title: "HIGHER ENGAGEMENT",
//       description:
//         "Our human-centered design approach maximizes user satisfaction and retention, creating digital experiences that truly connect and convert."
//     },
//     {
//       value: "100%",
//       title: "SCALABILITY",
//       description:
//         "Every product we build is future-ready, optimized for performance, and designed to grow effortlessly with your business demands."
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         {/* CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
//           {stats.map((stat, idx) => (
//             <div
//               key={idx}
//               className="bg-[#2f2f2f] text-white rounded-[40px] p-10 md:p-12 shadow-xl flex flex-col gap-4"
//             >
//               {/* Value */}
//               <p className="text-5xl md:text-6xl font-bold text-white">
//                 {stat.value}
//               </p>

//               {/* Title */}
//               <p className="text-sm md:text-base font-semibold tracking-widest text-white/80 uppercase">
//                 {stat.title}
//               </p>

//               {/* Description */}
//               <p className="text-white/70 text-base md:text-lg leading-relaxed">
//                 {stat.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Metrics;

import React from "react";
 
const Metrics = () => {
  const stats = [
    {
      value: "99%",
      title: "PROJECT PRECISION",
      description:
        "We’re committed to delivering every project on time, on budget, and on point—ensuring seamless collaboration and measurable outcomes from day one.",
      bg: "bg-[#F4F9FF]" // Light Blue
    },
    {
      value: "2x",
      title: "HIGHER ENGAGEMENT",
      description:
        "Our human-centered design approach maximizes user satisfaction and retention, creating digital experiences that truly connect and convert.",
      bg: "bg-[#FFF7F4]" // Light Peach
    },
    {
      value: "100%",
      title: "SCALABILITY",
      description:
        "Every product we build is future-ready, optimized for performance, and designed to grow effortlessly with your business demands.",
      bg: "bg-[#F8FFF4]" // Light Green
    }
  ];
 
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`${stat.bg} rounded-[40px] p-10 md:p-12 shadow-xl flex flex-col gap-4 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]`}
            >
              {/* Value */}
              <p className="text-5xl md:text-6xl font-bold text-gray-900">
                {stat.value}
              </p>
 
              {/* Title */}
              <p className="text-sm md:text-base font-semibold tracking-widest text-gray-700 uppercase">
                {stat.title}
              </p>
 
              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Metrics;
