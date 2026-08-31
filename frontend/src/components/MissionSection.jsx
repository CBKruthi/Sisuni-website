// import React from "react";
// import img1 from "../assets/m1.png";  
// import img3 from "../assets/m3.png";
// import img4 from "../assets/m4.png";
// import img5 from "../assets/m5.png";

// const MissionSection = () => {
//   return (
//     <section id="mission" className="w-full bg-gradient-to-b from-[#eef7ff] to-[#ffffff] py-16 md:py-24">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         {/* ---------- LEFT IMAGE GRID ---------- */}
//         <div className="grid grid-cols-2 gap-4 sm:gap-6">
//           <img src={img1} alt="technology" className="rounded-xl shadow-lg w-full h-[150px] sm:h-[200px] object-cover" />
//           <img src={img5} alt="technology" className="rounded-xl shadow-lg w-full h-[150px] sm:h-[200px] object-cover" />
//           <img src={img3} alt="technology" className="rounded-xl shadow-lg w-full h-[150px] sm:h-[200px] object-cover" />
//           <img src={img4} alt="technology" className="rounded-xl shadow-lg w-full h-[150px] sm:h-[200px] object-cover" />
//         </div>

//         {/* ---------- RIGHT CONTENT ---------- */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
//             Our Mission
//           </h2>

//           <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
//             We are committed to shaping a future where intelligent automation
//             fuels growth, innovation, and seamless digital transformation.
//             Our mission is to empower organizations with scalable, secure,
//             and human-aligned technology solutions that solve complex business
//             challenges with precision and speed.
//           </p>

//           <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
//             Through continuous research, engineering excellence, and a strong
//             customer-centric approach — we transform ideas into robust
//             solutions that accelerate efficiency, unlock insights, and build a
//             smarter tomorrow.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default MissionSection;

import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/m1.png";
import img3 from "../assets/m3.png";
import img4 from "../assets/m4.png";
import img5 from "../assets/m5.png";

const MissionSection = () => {
  return (
    <section
      id="mission"
      className="w-full bg-gradient-to-b from-[#eef7ff] to-[#ffffff] py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ---------- LEFT IMAGE GRID WITH HOVER EFFECT ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:gap-6"
        >
          {[img1, img5, img3, img4].map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt="technology"
              className="rounded-xl shadow-xl w-full h-[150px] sm:h-[200px] object-cover"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
            />
          ))}
        </motion.div>

        {/* ---------- RIGHT CONTENT WITH SCROLL ANIMATION ---------- */}
        <div>
          {/* Heading Animation */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
          >
            Our Mission
          </motion.h2>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed"
          >
            We are committed to shaping a future where intelligent automation
            fuels growth, innovation, and seamless digital transformation.
            Our mission is to empower organizations with scalable, secure,
            and human-aligned technology solutions that solve complex business
            challenges with precision and speed.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed"
          >
            Through continuous research, engineering excellence, and a strong
            customer-centric approach — we transform ideas into robust,
            scalable solutions that accelerate efficiency, unlock insights,
            and build a smarter tomorrow.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;
