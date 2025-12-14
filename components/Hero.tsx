import React from 'react';
import { Button } from './Button';
import { ArrowLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-end md:items-center justify-start overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover"
        >
          {/* Deck/Outdoor brighter video if possible, using existing asset for now but lighter overlay */}
          <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Lighter Overlay for approachable feel */}
        <div className="absolute inset-0 bg-stone-900/40"></div>
        
        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-0 pt-32 md:pt-24">
        <div className="max-w-4xl">
          <div className="reveal mb-6 inline-flex items-center gap-4">
            <span className="bg-bronze-600/90 text-white px-4 py-1 text-sm font-bold tracking-widest uppercase rounded-sm">
              פרקטים • דקים • פרגולות
            </span>
          </div>
          
          <h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            פרקטים ודקים.<br />
            <span className="text-stone-200">עבודה כמו שצריך.</span>
          </h1>
          
          <div className="reveal delay-200 text-lg md:text-xl text-stone-100 max-w-xl mb-10 font-sans font-normal leading-relaxed">
             <p className="mb-2">התקנה מדויקת, מחיר ידוע מראש ושמירה על הניקיון.</p>
             <p>בלי הפתעות, בלי "תוספות" ברגע האחרון, ובלי עיגול פינות.</p>
          </div>

          <div className="reveal delay-300 flex flex-col sm:flex-row gap-4 items-start">
            <Button variant="light" href="https://wa.me/972500000000?text=היי ג'ריקו, אשמח להצעת מחיר">
              <span>קבל הצעת מחיר בוואטסאפ</span>
              <ArrowLeft className="mr-2 h-4 w-4" strokeWidth={2} />
            </Button>
            <div className="hidden md:flex items-center gap-2 px-6 py-4 bg-black/20 rounded-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-white text-sm font-medium">זמין לעבודה באזור המרכז</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};