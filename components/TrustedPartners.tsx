
import React from 'react';

export const TrustedPartners: React.FC = () => {
  // Using text representation for logos to maintain high-end minimal look
  // In production, these would be SVG logos of Hezi Bank, Via Arkadia, etc.
  const partners = [
    "HeziBank",
    "Via Arkadia",
    "Mody",
    "Avney Tal",
    "Alony"
  ];

  return (
    <section className="bg-stone-900 border-b border-white/10 py-8 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          
          <div className="text-stone-500 text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
            Trusted by Leaders
          </div>

          {/* Logos Container */}
          <div className="w-full relative">
            {/* CHANGED: Removed overflow-x-auto. Added flex-wrap + justify-center for mobile visibility. */}
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-x-8 gap-y-4 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((partner, idx) => (
                <span 
                  key={idx} 
                  className="text-stone-400 font-serif text-base md:text-xl font-medium cursor-default hover:text-white transition-colors shrink-0"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
