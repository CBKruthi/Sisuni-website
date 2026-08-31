// import React, { useEffect, useState } from "react";
// import {
//   Linkedin,
//   Instagram,
//   Facebook,
//   Twitter,
//   Phone,
//   Mail,
//   MapPin,
// } from "lucide-react";

// const Footer = () => {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const istTime = new Date().toLocaleTimeString("en-US", {
//         timeZone: "Asia/Kolkata",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: false,
//       });
//       setTime(istTime);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <footer className="bg-black text-gray-400 pt-12 pb-6 relative overflow-hidden">

//       {/* Animated Accent Line */}
//       <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400 animate-[pulse_4s_infinite]"></div>

//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Brand */}
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-4">Sisuni Infotech</h2>
//           <p className="text-sm leading-relaxed">
//             Empowering businesses with AI-driven automation, secure platforms,
//             and smart digital engineering.
//           </p>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Services</h3>
//           <ul className="space-y-2 text-sm">
//             {["Websites", "Applications", "Design Support", "Testing"].map(
//               (item) => (
//                 <li
//                   key={item}
//                   className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
//                 >
//                   {item}
//                 </li>
//               )
//             )}
//           </ul>
//         </div>

//         {/* Links */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Connect</h3>
//           <ul className="space-y-3 text-sm">
//             <li className="flex items-center gap-2 hover:text-white transition">
//               <Phone size={16} /> +91 99000 13991
//             </li>
//             <li className="flex items-center gap-2 hover:text-white transition">
//               <Mail size={16} /> hr@sisunitech.com
//             </li>
//             <li className="flex items-center gap-2 hover:text-white transition">
//               <MapPin size={16} /> Bengaluru, India
//             </li>
//           </ul>
//         </div>

//         {/* Socials */}
//         <div>
//           <h3 className="text-white font-semibold mb-4">Follow Us</h3>
//           <div className="flex gap-5">
//             {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
//               <Icon
//                 key={i}
//                 size={22}
//                 className="cursor-pointer hover:text-white transition hover:scale-110"
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800 mt-10 pt-4 px-6 text-xs flex flex-col md:flex-row justify-between items-center gap-4">

//         <span>© {new Date().getFullYear()} Sisuni Infotech. All rights reserved.</span>

//         <span className="text-gray-500">{time} (BLR)</span>

//         <div className="flex items-center gap-2">
//           <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
//           <span>Systems Operational</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Youtube,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const istTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(istTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-gray-400 pt-12 pb-6 relative overflow-hidden">

      {/* Animated Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400 animate-[pulse_4s_infinite]"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Sisuni Infotech</h2>
          <p className="text-sm leading-relaxed">
            Empowering businesses with AI-driven automation, secure platforms,
            and smart digital engineering.
          </p>
        </div>

        {/* Services */}
        <div>
  <h3 className="text-white font-semibold mb-4">Services</h3>
  <ul className="space-y-2 text-sm">
    {["Websites", "Applications", "Design Support", "Testing"].map((item) => (
      <li key={item} className="transition-all duration-300">
        <Link
          to="/services"
          className="hover:text-white hover:translate-x-1 block cursor-pointer"
        >
          {item}
        </Link>
      </li>
    ))}
  </ul>
</div>
        
        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition">
              <Phone size={16} /> +91 99000 13991
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Mail size={16} /> hr@sisunitech.com
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <MapPin size={16} /> Bengaluru, India
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/company/sisuni-technology-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={22}
                className="cursor-pointer hover:text-white transition hover:scale-110"
              />
            </a>

            <a
              href="https://www.youtube.com/@SisuniTechnology"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube
                size={22}
                className="cursor-pointer hover:text-white transition hover:scale-110"
              />
            </a>
{/* 
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                size={22}
                className="cursor-pointer hover:text-white transition hover:scale-110"
              />
            </a> */}

            <a
              href="https://x.com/SisuniTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                size={22}
                className="cursor-pointer hover:text-white transition hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-4 px-6 text-xs flex flex-col md:flex-row justify-between items-center gap-4">

        <span>© {new Date().getFullYear()} Sisuni Infotech. All rights reserved.</span>

        <span className="text-gray-500">{time} (BLR)</span>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          <span>Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
