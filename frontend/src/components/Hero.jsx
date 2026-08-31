// import { motion } from "framer-motion";
// import heroImg from "../assets/hero.png"; // update file name if different

// const HeroSection = () => {
//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src={heroImg}
//           alt="AI Technology Background"
//           className="w-full h-full object-cover object-center"
//         />
//       </div>

//       {/* Soft Overlay */}
//       <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

//       {/* Content */}
//       <motion.div
//         className="relative z-10 max-w-4xl mx-auto text-center px-6"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
//           Where Intelligence Meets Execution
//         </h1>

//         <p className="mt-6 text-lg md:text-2xl text-gray-700">
//           Building Autonomous AI Agents that Think, Learn, and Deliver — Faster Than Humanly Possible.
//         </p>

//         <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//           <motion.button
//             className="px-8 py-3 rounded-xl bg-black text-white font-medium text-lg hover:bg-gray-800 transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Get Started
//           </motion.button>

//           <motion.button
//             className="px-8 py-3 rounded-xl border border-gray-800 text-gray-900 font-medium text-lg hover:bg-gray-200 transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Learn More
//           </motion.button>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png"; 

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="AI Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Subtle Color Tint (light gold + light blue mix for futuristic vibe) */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/40 via-[#005B96]/45 to-[#87CEFA]/35"></div> */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a33]/60 via-[#003f7d]/55 to-[#66b2ff]/40"></div>



      {/* Slight dark fade for readable text but visible background */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
          Innovating Today for the Challenges of Tomorrow
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-100 drop-shadow-md font-light">
          Empowering businesses with intelligent, efficient, and scalable digital solutions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
           <Link to="/contact">
          <motion.button
            className="px-8 py-3 rounded-xl bg-white/90 text-gray-900 font-semibold text-lg hover:bg-white transition backdrop-blur-sm shadow-md"
            whileHover={{ scale: 1.07 }}
          >
            Lets Talk
          </motion.button>
          </Link>
<Link to="/careers">
          <motion.button
            // className="px-8 py-3 rounded-xl border border-white/80 text-white font-medium text-lg hover:bg-white/20 transition shadow-sm"
            // whileHover={{ scale: 1.07 }}
             className="px-8 py-3 rounded-xl bg-white/90 text-gray-900 font-semibold text-lg hover:bg-white transition backdrop-blur-sm shadow-md"
            whileHover={{ scale: 1.07 }}
          >
            Careers
          </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
