import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark' | 'light';
  fullWidth?: boolean;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  href, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 font-sans tracking-widest-xl group relative overflow-hidden rounded-sm";
  
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-bronze-600 shadow-xl shadow-stone-900/10",
    dark: "bg-bronze-600 text-white hover:bg-bronze-700 shadow-md",
    outline: "border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white",
    light: "bg-white text-stone-900 hover:bg-stone-100 shadow-xl"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};