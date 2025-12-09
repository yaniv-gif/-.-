import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-stone-50/90 backdrop-blur-md py-4 shadow-sm border-b border-stone-200' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <div className="flex flex-col">
          <span className={`font-serif text-xl md:text-2xl tracking-wide transition-colors duration-500 ${isScrolled ? 'text-stone-900 font-bold' : 'text-white font-medium'}`}>
            ג'ריקו אספינוזה
          </span>
          <span className={`text-[0.6rem] uppercase tracking-[0.3em] transition-colors duration-500 ${isScrolled ? 'text-bronze-600' : 'text-stone-200'}`}>
            מומחה לחיפוי רצפה
          </span>
        </div>

        {/* CTA */}
        <a 
          href="https://wa.me/972500000000" 
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-3 border rounded-sm px-6 py-2 transition-all duration-300 ${
            isScrolled 
              ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' 
              : 'border-white/30 bg-white/10 text-white hover:bg-white hover:text-stone-900 backdrop-blur-sm'
          }`}
        >
          <span className="hidden md:inline text-xs font-bold tracking-widest uppercase transition-colors">
            תיאום ייעוץ
          </span>
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
        </a>
      </div>
    </nav>
  );
};