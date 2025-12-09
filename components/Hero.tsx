import React from 'react';
import { Button } from './Button';
import { ArrowLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-end md:items-center justify-start overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1620641788427-b9a437bd09a3?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover"
        >
          {/* High-end Woodworking/Polishing Video */}
          <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Cinematic Overlay - Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-0">
        <div className="max-w-4xl">
          <div className="reveal mb-6 inline-flex items-center gap-4">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              פרקט • שטיחים • דקים
            </span>
          </div>
          
          <h1 className="reveal delay-100 text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-white mb-6 leading-[0.9] tracking-tight">
            פרקטים, שטיחים<br />
            <span className="text-bronze-200 italic font-light ml-4">ודקים.</span>
          </h1>
          
          <div className="reveal delay-200 text-lg md:text-xl text-stone-100 max-w-lg mb-12 font-sans font-light leading-relaxed border-r-2 border-bronze-500 pr-6 mr-1">
             <p className="font-medium text-white mb-2">ביצוע מדויק ללא פשרות.</p>
             <p className="mb-2">מומחים בהתקנת פרקט פישבון, מתיחת שטיחים בשיטה אמריקאית וחידוש דקים.</p>
             <p className="text-stone-400 text-base">אנו מקפידים על עבודה נקייה, שקטה ועמידה לאורך שנים.</p>
          </div>

          <div className="reveal delay-300 flex flex-col sm:flex-row gap-4 items-start">
            <Button variant="light" href="https://wa.me/972500000000">
              <span>בדיקת התאמה</span>
              <ArrowLeft className="mr-2 h-4 w-4" strokeWidth={1.5} />
            </Button>
            <div className="hidden md:flex items-center gap-2 px-6 py-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-stone-300 text-sm">זמין לפרויקטים באזור המרכז</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};