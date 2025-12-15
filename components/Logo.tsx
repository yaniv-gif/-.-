import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'vertical';
  className?: string;
  lightMode?: boolean; // true = white text, false = dark text
}

export const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', className = '', lightMode = false }) => {
  const textColor = lightMode ? 'text-white' : 'text-stone-900';
  const iconColor = lightMode ? '#b07d62' : '#b07d62'; // Bronze 500

  return (
    <div className={`flex items-center gap-4 ${variant === 'vertical' ? 'flex-col text-center' : 'flex-row text-right'} ${className}`}>
      
      {/* Geometric Hexagon Knot Icon */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path 
          d="M50 5 L88.97 27.5 V72.5 L50 95 L11.03 72.5 V27.5 L50 5Z" 
          stroke={iconColor} 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="opacity-20"
        />
        <path 
          d="M50 20 L75.98 35 V65 L50 80 L24.02 65 V35 L50 20Z" 
          stroke={iconColor} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M50 20 V50 M50 50 L75.98 65 M50 50 L24.02 65" 
          stroke={iconColor} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M50 5 L50 20 M88.97 27.5 L75.98 35 M88.97 72.5 L75.98 65 M50 95 L50 80 M11.03 72.5 L24.02 65 M11.03 27.5 L24.02 35" 
          stroke={iconColor} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>

      {/* Text Brand */}
      <div className="flex flex-col justify-center h-full">
        <span className={`font-serif text-xl md:text-2xl font-bold leading-none tracking-wide whitespace-nowrap ${textColor}`}>
          ג'ריקו אספינוזה
        </span>
        {/* REMOVED: "Expert" subtitle to reduce visual noise */}
      </div>
    </div>
  );
};