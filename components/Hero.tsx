import React from 'react';
import { Button } from './Button';
import { ArrowLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-end md:items-center justify-start overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover transform scale-105"
        >
          {/* Restored the original outdoor/deck video */}
          <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Darker Overlay for text contrast and mood */}
        <div className="absolute inset-0 bg-stone-950/50"></div>
        
        {/* Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-0 pt-32 md:pt-24">
        <div className="max-w-4xl">
          <div className="reveal mb-6 inline-flex items-center gap-4">
            <span className="bg-bronze-500 text-white px-3 py-1 text-xs md:text-sm font-bold tracking-[0.2em] uppercase rounded-sm border border-bronze-400/30 backdrop-blur-sm">
              מומחה לחיפוי רצפה
            </span>
          </div>
          
          <h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            ההבדל בין רצפה<br />
            <span className="text-bronze-100">ליצירת מופת.</span>
          </h1>
          
          <div className="reveal delay-200 text-lg md:text-2xl text-stone-200 max-w-2xl mb-12 font-sans font-light leading-relaxed">
             <p className="border-r-4 border-bronze-500 pr-6">
               התקנת פרקטים ושטיחים בסטנדרט שטרם הכרתם.<br/>
               <span className="text-white font-normal">דיוק כירורגי. עמידה בזמנים. אפס תקלות.</span>
             </p>
          </div>

          <div className="reveal delay-300 flex flex-col sm:flex-row gap-5 items-start">
            <Button variant="light" href="https://wa.me/972500000000?text=היי ג'ריקו, אשמח להצעת מחיר" className="hover:scale-105 transition-transform duration-300">
              <span className="font-bold">תיאום פגישת ייעוץ</span>
              <ArrowLeft className="mr-2 h-5 w-5" strokeWidth={2} />
            </Button>
            
            <div className="hidden md:flex flex-col justify-center h-full px-4">
               <span className="text-stone-300 text-sm font-light tracking-wide">זמינות מיידית באזור השרון והמרכז</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};