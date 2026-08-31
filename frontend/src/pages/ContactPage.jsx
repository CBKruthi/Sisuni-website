// import { motion } from "framer-motion";
// import { useRef, useState, Suspense, lazy } from "react";
// import {
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Linkedin,
//   Instagram,
//   Facebook,
//   Twitter,
//   Youtube,
// } from "lucide-react";

// // const Footer = lazy(() => import("../Components/Footer"));

// const ContactPage = () => {
//   const form = useRef();
//   const [status, setStatus] = useState("");
//   const [isSending, setIsSending] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSending(true);
//     setStatus("Sending...");

//     setTimeout(() => {
//       setIsSending(false);
//       setStatus("✅ Message sent successfully!");
//       form.current.reset();
//     }, 1500);
//   };

//   return (
//     <>
//       <section className="min-h-screen bg-white py-24 px-6 md:px-16">
//         {/* Header Section */}
//         <motion.div
//           className="text-center max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Get in Touch</h2>
//           <p className="mt-4 text-gray-600 text-lg">
//             We’d love to hear from you. Whether you have a question or a project — let’s talk.
//           </p>
//         </motion.div>

//         {/* Content Layout */}
//         <div className="mt-16 grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">

//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             className="space-y-8"
//           >
//             <div className="space-y-4">
//               <p className="text-lg font-semibold text-gray-900">Contact Details</p>
//               <div className="flex items-center gap-3 text-gray-700">
//                 <Mail size={22} />
//                 <span>hr@sisunitech.com</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-700">
//                 <Phone size={22} />
//                 <span>+91 99000 13991</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-700">
//                 <MapPin size={22} />
//                 <span>Bangalore, India (Remote — Global Team)</span>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div>
//               <p className="text-lg font-semibold text-gray-900 mb-4">Follow Us</p>
//               <div className="flex gap-6 items-center">
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                   <Linkedin size={26} className="text-gray-700 hover:scale-110 transition" />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                   <Instagram size={26} className="text-gray-700 hover:scale-110 transition" />
//                 </a>
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                   <Facebook size={26} className="text-gray-700 hover:scale-110 transition" />
//                 </a>
//                 <a href="https://x.com" target="_blank" rel="noopener noreferrer">
//                   <Twitter size={26} className="text-gray-700 hover:scale-110 transition" />
//                 </a>
//                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
//                   <Youtube size={26} className="text-gray-700 hover:scale-110 transition" />
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Form Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm"
//           >
//             <form ref={form} onSubmit={sendEmail} className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 font-medium">Full Name</label>
//                 <input
//                   type="text"
//                   name="from_name"
//                   placeholder="Enter your name"
//                   required
//                   className="w-full mt-2 p-3 rounded-xl bg-white border border-gray-300 focus:border-black outline-none transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium">Email Address</label>
//                 <input
//                   type="email"
//                   name="from_email"
//                   placeholder="Enter your email"
//                   required
//                   className="w-full mt-2 p-3 rounded-xl bg-white border border-gray-300 focus:border-black outline-none transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium">Reason</label>
//                 <select
//                   name="subject"
//                   className="w-full mt-2 p-3 rounded-xl bg-white border border-gray-300 focus:border-black outline-none transition"
//                 >
//                   <option>Business Inquiry</option>
//                   <option>Career Opportunity</option>
//                   <option>Support</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium">Message</label>
//                 <textarea
//                   name="message"
//                   rows="5"
//                   placeholder="Write your message..."
//                   required
//                   className="w-full mt-2 p-3 rounded-xl bg-white border border-gray-300 focus:border-black outline-none transition"
//                 ></textarea>
//               </div>

//               {/* Button */}
//               <motion.button
//                 type="submit"
//                 disabled={isSending}
//                 whileHover={!isSending ? { scale: 1.05 } : {}}
//                 whileTap={!isSending ? { scale: 0.95 } : {}}
//                 className={`w-full py-3 rounded-xl font-semibold transition shadow-md ${
//                   isSending
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-black text-white hover:bg-gray-800"
//                 }`}
//               >
//                 {isSending ? "Sending..." : "Send Message"}
//               </motion.button>

//               {status && (
//                 <p className="text-center text-green-600 font-medium">{status}</p>
//               )}
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       {/* <Suspense fallback={<div>Loading...</div>}>
//         <Footer />
//       </Suspense> */}
//     </>
//   );
// };

// export default ContactPage;

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import axios from "axios";
const API = import.meta.env.VITE_BACKEND_URL + "/contactus";
 
const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
 
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    try{
    const formData = new FormData(form.current);

    const data={
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const response = await axios.post(`${API}/send`, data);

    if(response.status === 200){
      setStatus("✅ Message sent successfully!");
      form.current.reset();
    } 
  }
  catch(error) {
      console.error("Error sending email:", error);

      if(error.response){
        setStatus("❌ Failed to send message. Please try again later.");
      }
      else{
        setStatus("❌ Network error. Please check your connection and try again.");
      }
    }finally{
      setIsSending(false);
    }
  };
 

  return (
    <>
      {/* Background Wrapper */}
      <section className="relative min-h-screen py-24 px-6 md:px-16">
 
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c')",
          }}
        ></div>
 
        {/* Purple Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/70"></div>
 
        {/* CONTENT */}
        <div className="relative z-10">
 
          {/* Header Section */}
          <motion.div
            className="text-center max-w-3xl mx-auto text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-lg opacity-90">
              We’d love to hear from you. Whether you have a question or a project — let’s talk.
            </p>
          </motion.div>
 
          {/* Content Layout */}
          <div className="mt-16 grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
 
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-8 text-black"
            >
              <div className="space-y-4">
                <p className="text-lg font-semibold">Contact Details</p>
 
                <div className="flex items-center gap-3 opacity-90">
                  <Mail size={22} />
                  <span>hr@sisunitech.com</span>
                </div>
 
                <div className="flex items-center gap-3 opacity-90">
                  <Phone size={22} />
                  <span>+91 99000 13991</span>
                </div>
 
                <div className="flex items-center gap-3 opacity-90">
                  <MapPin size={22} />
                  <span>Bangalore, India (Remote — Global Team)</span>
                </div>
              </div>
 
              {/* Social Icons */}
              {/* <div>
                <p className="text-lg font-semibold mb-4">Follow Us</p>
                <div className="flex gap-6 items-center">
                  <Linkedin size={26} className="hover:scale-110 transition opacity-90" />
                  
                  <Twitter size={26} className="hover:scale-110 transition opacity-90" />
                  <Youtube size={26} className="hover:scale-110 transition opacity-90" />
                </div>
              </div> */}
              <div>
  <p className="text-lg font-semibold mb-4">Follow Us</p>
  <div className="flex gap-6 items-center">

    <a 
      href="https://www.linkedin.com/company/sisuni-technology-private-limited/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Linkedin size={26} className="hover:scale-110 transition opacity-90 cursor-pointer" />
    </a>

    <a 
      href="https://x.com/SisuniTech" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Twitter size={26} className="hover:scale-110 transition opacity-90 cursor-pointer" />
    </a>

    <a 
      href="https://www.youtube.com/@SisuniTechnology" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Youtube size={26} className="hover:scale-110 transition opacity-90 cursor-pointer" />
    </a>

  </div>
</div>

            </motion.div>
 
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-lg"
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
               
                {/* Name */}
                <div>
                  <label className="block font-medium text-gray-900">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter your name"
                    required
                    className="w-full mt-2 p-3 rounded-xl bg-white border border-gray-300 focus:border-purple-700 outline-none transition"
                  />
                </div>
 
                {/* Email */}
                <div>
                  <label className="block font-medium text-gray-900">Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Enter your email"
                    required
                    className="w-full mt-2 p-3 rounded-xl bg-white border border-gray-300 focus:border-purple-700 outline-none transition"
                  />
                </div>
 
                {/* Reason */}
                <div>
                  <label className="block font-medium text-gray-900">Reason</label>
                  <select
                    name="subject"
                    className="w-full mt-2 p-3 rounded-xl bg-white border border-gray-300 focus:border-purple-700 outline-none transition"
                  >
                    <option>Business Inquiry</option>
                    <option>Career Opportunity</option>
                    <option>Support</option>
                    <option>Other</option>
                  </select>
                </div>
 
                {/* Message */}
                <div>
                  <label className="block font-medium text-gray-900">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    className="w-full mt-2 p-3 rounded-xl bg-white border border-gray-300 focus:border-purple-700 outline-none transition"
                  ></textarea>
                </div>
 
                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={!isSending ? { scale: 1.05 } : {}}
                  whileTap={!isSending ? { scale: 0.95 } : {}}
                  className={`w-full py-3 rounded-xl font-semibold shadow-md transition ${
                    isSending
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-purple-700 text-white hover:bg-purple-800"
                  }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </motion.button>
 
                {status && (
                  <p className="text-center text-green-700 font-medium mt-2">{status}</p>
                )}
 
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
