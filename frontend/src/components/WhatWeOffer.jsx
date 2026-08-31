

// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
 
// const WhatWeOffer = () => {
//   const navigate = useNavigate();
//   const [hasScrolled, setHasScrolled] = useState(false);
 
//   const [hoverIndex, setHoverIndex] = useState(null);
 
//   const sectionRef = useRef(null);
 
//   useEffect(() => {
//     setTimeout(() => {
//       setShowArrow(true);
//       setIsRotating(true);
//     }, 500);
//   }, []);
 
//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
 
//         if (isVisible && !hasScrolled) {
//           setHasScrolled(true);
//           setIsRotating(true);
//           setShowArrow(true);
 
//           setTimeout(() => setShowArrow(false), 1500);
//           setTimeout(() => setIsRotating(false), 1000);
//         }
//       }
//     };
 
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
 
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasScrolled]);
 
//   const services = [
//     {
//       title: "WEBSITES",
//       tagline: "Beautiful. Fast. Purpose-Driven.",
//       description:
//         "We build websites that not only look stunning but perform seamless across devices. Our focus is on:",
//       features: [
//         "Pixel-perfect UI",
//         "High-performance builds",
//         "SEO-friendly structure",
//         "Smooth animations + interactions",
//       ],
//       bgImage:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//     },
//     {
//       title: "APPLICATIONS",
//       tagline: "Smart, intuitive apps that solve real problems.",
//       description:
//         "We design and develop web & mobile applications tailored to your business needs—simple to use, scalable to grow. We deliver:",
//       features: [
//         "User-centric UX",
//         "Clean, maintainable code",
//         "Feature-rich interfaces",
//         "Future-ready architecture",
//       ],
//       bgImage:
//         "https://images.unsplash.com/photo-1551650975-87deedd944c3",
//     },
//     {
//       title: "DESIGN SUPPORT",
//       tagline: "Your on-demand design partner.",
//       description:
//         "We help brands elevate every digital touchpoint with consistent, modern, and meaningful design. Our design support includes:",
//       features: [
//         "UI/UX design",
//         "Brand identity",
//         "Component libraries",
//         "Product design",
//       ],
//       bgImage:
//         "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
//     },
//     {
//       title: "TESTING",
//       tagline: "Quality assurance you can trust.",
//       description:
//         "We ensure your products work flawlessly through rigorous testing. Our services cover:",
//       features: [
//         "Automated testing",
//         "Manual QA processes",
//         "Performance optimization",
//         "Bug tracking & resolution",
//       ],
//       bgImage:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475",
//     },
//   ];
 
//   const handleNavigation = () => navigate("/services");
 
//   return (
//     <div className="pt-[90px] px-6">
// <div className="w-full bg-white">
//       {/* TOP SECTION */}
      
// {/* <div className="relative w-full bg-[#0F2E2E] rounded-3xl px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-20 mt-10 max-w-7xl mx-auto shadow-lg transition-all duration-500">
// <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 min-h-[350px]">
// <div className="flex-1">
// <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#A7F3D0] mb-4 leading-tight">
//               What we offer
// </h2>
// <p className="text-[#A7F3D0] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-xl">
//               We provide clients with <br />
//               Tech Solutions developed with <br />
// <span className="font-semibold">Skill & Passion</span>
// </p>
// </div>
 
       

// </div>
// </div> */}
// <div
//   className="relative w-full bg-[#0F2E2E] rounded-3xl px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-20 mt-10 max-w-7xl mx-auto shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(167,243,208,0.25)] hover:border hover:border-[#A7F3D0]/30"
// >
//   <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 min-h-[350px]">
//     <div className="flex-1">
//       <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#A7F3D0] mb-4 leading-tight">
//         What we offer
//       </h2>
//       <p className="text-[#A7F3D0] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-xl">
//         We provide clients with <br />
//         Tech Solutions developed with <br />
//         <span className="font-semibold">Skill & Passion</span>
//       </p>
//     </div>
//   </div>
// </div>

 
//       {/* SERVICE SECTIONS */}
// <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
// <div className="max-w-7xl mx-auto space-y-20">
//           {services.map((service, index) => (
// <div
//               key={index}
//               className={`w-full md:flex md:gap-8 transition-all duration-700 ease-out ${
//                 hoverIndex === index
//                   ? "translate-x-6 opacity-100 scale-[1.02]"
//                   : hoverIndex !== null
//                   ? "-translate-x-10 opacity-40"
//                   : "opacity-100"
//               }`}
//               onMouseEnter={() => setHoverIndex(index)}
//               onMouseLeave={() => setHoverIndex(null)}
// >
//               {/* LEFT CARD */}
// <div className="flex-1 bg-gray-700 rounded-[40px] p-10 min-h-[350px] flex flex-col justify-center shadow-xl">
// <p className="text-white text-xl mb-6">{service.description}</p>
// <ul className="space-y-3">
//                   {service.features.map((feature, i) => (
// <li key={i} className="flex items-start text-white text-lg">
// <span className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></span>
//                       {feature}
// </li>
//                   ))}
// </ul>
// </div>
 
//               {/* RIGHT IMAGE CARD */}
// <div
//                 className="flex-1 rounded-[40px] p-10 min-h-[350px] flex flex-col justify-center text-center md:text-left relative overflow-hidden shadow-xl"
//                 style={{
//                   backgroundImage: `url(${service.bgImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
// >
// <div className="absolute inset-0 bg-black/40"></div>
// <div className="relative z-10">
// <h3 className="text-5xl font-bold text-white mb-4">
//                     {service.title}
// </h3>
// <p className="text-white text-2xl font-medium">
//                     {service.tagline}
// </p>
// </div>
// </div>
// </div>
//           ))}
// </div>
// </div>
// </div>
// </div>
//   );
// };
 
// export default WhatWeOffer;

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import companyVideo from "../assets/company-video.mp4.mp4";
 
const WhatWeOffer = () => {
  const navigate = useNavigate();
  const [hasScrolled, setHasScrolled] = useState(false);
 
  const [hoverIndex, setHoverIndex] = useState(null);
 
  const sectionRef = useRef(null);
 
  useEffect(() => {
    setTimeout(() => {
      setShowArrow(true);
      setIsRotating(true);
    }, 500);
  }, []);
 
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
 
        if (isVisible && !hasScrolled) {
          setHasScrolled(true);
          setIsRotating(true);
          setShowArrow(true);
 
          setTimeout(() => setShowArrow(false), 1500);
          setTimeout(() => setIsRotating(false), 1000);
        }
      }
    };
 
    window.addEventListener("scroll", handleScroll);
    handleScroll();
 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);
 
  const services = [
    {
      title: "WEBSITES",
      tagline: "Beautiful. Fast. Purpose-Driven.",
      description:
        "We build websites that not only look stunning but perform seamless across devices. Our focus is on:",
      features: [
        "Pixel-perfect UI",
        "High-performance builds",
        "SEO-friendly structure",
        "Smooth animations + interactions",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "APPLICATIONS",
      tagline: "Smart, intuitive apps that solve real problems.",
      description:
        "We design and develop web & mobile applications tailored to your business needs—simple to use, scalable to grow. We deliver:",
      features: [
        "User-centric UX",
        "Clean, maintainable code",
        "Feature-rich interfaces",
        "Future-ready architecture",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    },
    {
      title: "DESIGN SUPPORT",
      tagline: "Your on-demand design partner.",
      description:
        "We help brands elevate every digital touchpoint with consistent, modern, and meaningful design. Our design support includes:",
      features: [
        "UI/UX design",
        "Brand identity",
        "Component libraries",
        "Product design",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    },
    {
      title: "TESTING",
      tagline: "Quality assurance you can trust.",
      description:
        "We ensure your products work flawlessly through rigorous testing. Our services cover:",
      features: [
        "Automated testing",
        "Manual QA processes",
        "Performance optimization",
        "Bug tracking & resolution",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];
 
  const handleNavigation = () => navigate("/services");
 
  return (
    <div className="pt-[90px] px-6">
<div className="w-full bg-white">
      {/* TOP SECTION */}
     
<div className="relative w-full bg-[#0F2E2E] rounded-3xl px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-20 mt-10 max-w-7xl mx-auto shadow-lg transition-all duration-500">
<div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 min-h-[350px]">
<div className="flex-1">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#A7F3D0] mb-4 leading-tight">
              What we offer
</h2>
<p className="text-[#A7F3D0] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-xl">
              We provide clients with <br />
              Tech Solutions developed with <br />
<span className="font-semibold">Skill & Passion</span>
</p>
</div>
 
          {/* Rotating Circle */}
 
{/* 1 Right Side - YouTube Video
<div className="relative w-full md:w-1/2 flex items-center justify-center">
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
    <iframe
      src="https://www.youtube.com/embed/L14eKZbtd7w?autoplay=0&mute=0"
      title="What We Offer Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
</div> */}
 
{/* 2 Right Side - YouTube Video */}
{/* <div className="relative w-full md:w-1/2 flex items-center justify-center">
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
    <iframe
      src="https://www.youtube.com/embed/L14eKZbtd7w?autoplay=0&mute=0"
      title="What We Offer Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
</div> */}
 
{/* Right Side - YouTube Video */}
{/* <div className="relative w-full md:w-1/2 flex items-center justify-center">
  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
    <iframe
      src="https://www.youtube.com/embed/L14eKZbtd7w?autoplay=0&mute=0&rel=0"
      title="What We Offer Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
</div> */}
<div className="relative w-full md:w-1/2 flex items-center justify-center">
  <video
    src={companyVideo}
    className="w-full aspect-video rounded-2xl shadow-xl"
    controls
    controlsList="nodownload noremoteplayback"
    disablePictureInPicture
  />
</div>
 
 
</div>
</div>
 
      {/* SERVICE SECTIONS */}
<div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
<div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
<div
              key={index}
              className={`w-full md:flex md:gap-8 transition-all duration-700 ease-out ${
                hoverIndex === index
                  ? "translate-x-6 opacity-100 scale-[1.02]"
                  : hoverIndex !== null
                  ? "-translate-x-10 opacity-40"
                  : "opacity-100"
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
>
              {/* LEFT CARD */}
<div className="flex-1 bg-gray-700 rounded-[40px] p-10 min-h-[350px] flex flex-col justify-center shadow-xl">
<p className="text-white text-xl mb-6">{service.description}</p>
<ul className="space-y-3">
                  {service.features.map((feature, i) => (
<li key={i} className="flex items-start text-white text-lg">
<span className="w-2 h-2 rounded-full bg-white mr-3 mt-2"></span>
                      {feature}
</li>
                  ))}
</ul>
</div>
 
              {/* RIGHT IMAGE CARD */}
<div
                className="flex-1 rounded-[40px] p-10 min-h-[350px] flex flex-col justify-center text-center md:text-left relative overflow-hidden shadow-xl"
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
>
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative z-10">
<h3 className="text-5xl font-bold text-white mb-4">
                    {service.title}
</h3>
<p className="text-white text-2xl font-medium">
                    {service.tagline}
</p>
</div>
</div>
</div>
          ))}
</div>
</div>
</div>
</div>
  );
};
 
export default WhatWeOffer;
 