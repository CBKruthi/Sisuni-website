import { useState, useEffect, useRef } from 'react';

const FaqSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const answerRefs = useRef({});

  const faqs = [
    {
      id: 1,
      question: 'HOW DO WE GET STARTED?',
      answer: 'Getting started with us is simple. First, reach out through our contact form or email. We\'ll schedule an initial consultation to understand your project requirements, goals, and timeline. After discussing your needs, we\'ll provide a detailed proposal with project scope, timeline, and pricing. Once approved, we\'ll kick off the project with a discovery phase to ensure we\'re aligned on all aspects.',
    },
    {
      id: 2,
      question: 'DO YOU ONLY WORK WITH CERTAIN INDUSTRIES?',
      answer: 'No, we work across a wide range of industries. Our expertise spans technology, healthcare, finance, e-commerce, education, manufacturing, and more. We believe in adapting our solutions to meet the unique challenges and requirements of each industry, regardless of the sector.',
    },
    {
      id: 3,
      question: 'HOW LONG DOES A PROJECT TYPICALLY TAKE?',
      answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a comprehensive web application could take 3-6 months. We provide detailed timelines during the initial consultation and break down projects into phases with clear milestones. We always aim to deliver quality work within agreed timelines.',
    },
    {
      id: 4,
      question: 'CAN YOU HELP WITH REDESIGNING AN EXISTING WEBSITE OR APP?',
      answer: 'Absolutely! We specialize in redesigning and modernizing existing websites and applications. Whether you need a complete overhaul or incremental improvements, we can help. We\'ll analyze your current platform, identify areas for enhancement, and create a redesign strategy that improves user experience, performance, and functionality while maintaining your brand identity.',
    },
    {
      id: 5,
      question: 'HOW DO YOU HANDLE THE DESIGN PROCESS?',
      answer: 'Our design process is collaborative and user-centered. We start with research and discovery to understand your users and business goals. Then we create wireframes and prototypes for your review. After feedback, we refine the designs and create high-fidelity mockups. Throughout the process, we maintain open communication and incorporate your feedback to ensure the final design meets your vision and user needs.',
    },
    {
      id: 6,
      question: 'DO YOU PROVIDE POST-LAUNCH SUPPORT?',
      answer: 'Yes, we offer comprehensive post-launch support and maintenance services. This includes bug fixes, performance optimization, security updates, feature enhancements, and ongoing technical support. We offer flexible support packages tailored to your needs, whether you need 24/7 monitoring or periodic maintenance. Our goal is to ensure your platform continues to perform optimally after launch.',
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
        <div className="pt-[90px] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1
          className={`text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ letterSpacing: '-0.02em' }}
        >
          Everything you should know about us
        </h1>

        {/* FAQ Questions */}
        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openQuestion === faq.id;
            return (
              <div
                key={faq.id}
                className={`border-b border-gray-200 transition-all duration-700 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                } ${isOpen ? 'bg-gray-150' : 'bg-white hover:bg-gray-50'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full flex justify-between items-center py-6 md:py-8 lg:py-10 text-left focus:outline-none group transition-colors duration-300"
                  onClick={() => toggleQuestion(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="text-black text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide pr-4 group-hover:text-gray-700 transition-colors duration-300 flex-1">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold text-black transition-all duration-500 ease-in-out rounded-full ${
                      isOpen 
                        ? 'rotate-45 scale-110 bg-gray-300' 
                        : 'rotate-0 scale-100 bg-transparent'
                    } group-hover:bg-gray-200`}
                  >
                    +
                  </span>
                </button>
                
                {/* Answer with smooth transition */}
                <div
                  ref={el => answerRefs.current[faq.id] = el}
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    isOpen 
                      ? 'max-h-[1000px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                  style={{
                    transitionProperty: 'max-height, opacity, padding',
                  }}
                >
                  <div className={`pr-12 md:pr-16 transition-all duration-500 ease-in-out ${
                    isOpen ? 'pb-6 md:pb-8 translate-y-0' : 'pb-0 -translate-y-4'
                  }`}>
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default FaqSection;