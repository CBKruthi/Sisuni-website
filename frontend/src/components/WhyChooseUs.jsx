
import { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const sectionRef = useRef(null);
  const hasStarted = useRef(false);
  const animationTimeoutsRef = useRef([]);
  const isInViewRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        isInViewRef.current = isInView;
        
        if (isInView && !hasStarted.current) {
          hasStarted.current = true;
          startAutomaticAnimation();
        } else if (!isInView) {
          hasStarted.current = false;
          clearAllTimeouts();
          setCurrentStage(0);
        }
      }
    };

    const clearAllTimeouts = () => {
      animationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      animationTimeoutsRef.current = [];
    };

    const startAutomaticAnimation = () => {
      clearAllTimeouts();
      
      if (!isInViewRef.current) return;

      // Stage 0: Initial gray card (already visible, wait 2s)
      const timeout1 = setTimeout(() => {
        if (isInViewRef.current) {
          setCurrentStage(1); // Heading with half circle
        }
      }, 2000);
      animationTimeoutsRef.current.push(timeout1);

      // Stage 1: Heading with half circle (after 1.5s from stage 0)
      const timeout2 = setTimeout(() => {
        if (isInViewRef.current) {
          setCurrentStage(2); // Question mark
        }
      }, 3500);
      animationTimeoutsRef.current.push(timeout2);

      // Stage 2: Question mark (after 1.5s from stage 1)
      const timeout3 = setTimeout(() => {
        if (isInViewRef.current) {
          setCurrentStage(3); // Features
        }
      }, 5000);
      animationTimeoutsRef.current.push(timeout3);

      // Stage 3: Features (after 2s from stage 2, then loop back)
      const timeout4 = setTimeout(() => {
        if (isInViewRef.current) {
          setCurrentStage(0); // Back to initial card
          // Restart animation after a brief pause
          setTimeout(() => {
            if (isInViewRef.current) {
              startAutomaticAnimation(); // Loop
            }
          }, 500);
        }
      }, 7000);
      animationTimeoutsRef.current.push(timeout4);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearAllTimeouts();
    };
  }, []);

  const features = [
    { text: 'Global delivery with start-up friendly ', highlight: 'pricing' },
    { text: 'Fast Turnaround ', highlight: 'and Agile Process' },
    { text: '', highlight: 'Visual Identity + Tech', text2: ' combined under one roof' },
    { text: 'Built for ', highlight: 'scalability', text2: ' from day one' }
  ];

  return (
    <div 
      ref={sectionRef}
      className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-[1400px] mx-auto relative" style={{ minHeight: '781px' }}>
        
       
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentStage === 0
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div 
            className="w-full bg-[#6b7280] rounded-[40px] flex items-center justify-center shadow-2xl mx-auto"
            style={{ 
              width: '100%',
              maxWidth: '1400px',
              height: '781px'
            }}
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              Why Choose Us
            </h2>
          </div>
        </div>

        {/* Stage 1: Heading with Half Circle */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentStage === 1
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="w-full h-full flex flex-col justify-center items-center relative px-4">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-black">
                Why Choose Us
              </h1>
              
              {/* Small Gray Half Circle */}
              <div className="absolute -right-8 md:-right-12 lg:-right-16 top-1/2 transform -translate-y-1/2">
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-[#6b7280] rounded-full"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stage 2: Heading with Question Mark */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentStage === 2
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="w-full h-full flex flex-col justify-center items-center px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-black">
              Why Choose Us
              <span className="text-gray-400">?</span>
            </h1>
          </div>
        </div>

        {/* Stage 3: Features List */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentStage === 3
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="w-full h-full flex flex-col justify-center px-4 md:px-8">
            {/* Heading with Question Mark */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-black mb-8 md:mb-12">
              Why Choose Us
              <span className="text-gray-400">?</span>
            </h1>

            {/* Features List */}
            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start"
                  style={{ 
                    animation: currentStage === 3 ? `fadeInUp 0.7s ease-out ${index * 200}ms both` : 'none'
                  }}
                >
                  {/* Diamond Bullet */}
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-black transform rotate-45 mr-4 md:mr-6 mt-2 md:mt-3 flex-shrink-0"></div>
                  
                  {/* Feature Text */}
                  <p className="text-black text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                    {feature.text && <span>{feature.text}</span>}
                    <span className="text-purple-600 font-semibold">{feature.highlight}</span>
                    {feature.text2 && <span>{feature.text2}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;

