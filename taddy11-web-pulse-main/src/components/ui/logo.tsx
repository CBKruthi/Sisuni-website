// import React from 'react';

// interface LogoProps {
//   className?: string;
//   size?: 'sm' | 'md' | 'lg';
//   showText?: boolean;
// }

// const Logo: React.FC<LogoProps> = ({ 
//   className = "", 
//   size = 'md', 
//   showText = true 
// }) => {
//   const sizeClasses = {
//     sm: 'w-6 h-6',
//     md: 'w-8 h-8',
//     lg: 'w-12 h-12'
//   };

//   const textSizeClasses = {
//     sm: 'text-lg',
//     md: 'text-xl',
//     lg: 'text-2xl'
//   };

//   return (
//     <div className={`flex items-center space-x-2 ${className}`}>
//       {/* Logo Image - Replace this with your actual logo */}
//       <div className={`${sizeClasses[size]} bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0`}>
//         {/* Option 1: Use an image (uncomment when you have your logo) */}
//         <img 
//   src="/logo.png" 
//   alt="Sisuni Tech Logo" 
//   className="w-full h-full object-contain"
// />
        
//         {/* Option 2: Current fallback text logo */}
//         <span className="text-white font-bold text-sm">S</span>
//       </div>
      
//       {/* Company Name */}
//       {showText && (
//         <span className={`${textSizeClasses[size]} font-bold text-foreground`}>
//           Sisuni Tech
//         </span>
//       )}
//     </div>
//   );
// };

// export default Logo;


import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
  <div className={`flex items-center space-x-2 ${className}`}>
    <div className={`${sizeClasses[size]} bg-white rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden`}>
      <img
        src="/logo.png"
        alt="Sisuni Tech Logo"
        className="w-full h-full object-contain"
      />
    </div>

    {showText && (
      <span className={`${textSizeClasses[size]} font-bold text-foreground`}>
        Sisuni Tech
      </span>
    )}
  </div>
);

};

export default Logo;
