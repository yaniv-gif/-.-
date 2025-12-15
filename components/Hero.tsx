import React from 'react';
import { Button } from './Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] h-[75vh] md:h-[85vh] flex items-end md:items-center justify-start overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="none"
          poster="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover transform scale-105"
        >
          <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* LIGHTER Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-stone-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/30 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-24 md:pb-0 pt-32 md:pt-24">
        <div className="max-w-4xl">
          
          <div className="reveal delay-100 mb-6 flex items-center gap-2">
            <span className="bg-bronze-600/90 text-white px-3 py-1 text-sm font-bold tracking-wide rounded-sm backdrop-blur-sm">
              אזור המרכז והשרון
            </span>
            <span className="bg-white/10 text-white px-3 py-1 text-sm font-bold tracking-wide rounded-sm backdrop-blur-sm border border-white/20">
              זמינות מיידית
            </span>
          </div>

          <h1 className="reveal delay-200 text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            התקנת פרקט ודקים.<br />
            <span className="text-bronze-200">עבודה נקייה, באחריות ובזמן.</span>
          </h1>
          
          <div className="reveal delay-300 text-lg md:text-xl text-stone-100 max-w-2xl mb-10 font-sans font-light leading-relaxed drop-shadow-md bg-stone-900/40 p-6 rounded-sm border-r-4 border-bronze-500 backdrop-blur-sm">
             <p className="mb-2 font-bold text-white">בלי הפתעות, בלי לכלוך מיותר ובלי אותיות קטנות.</p>
             <p>
               מתמחים בהתקנת פרקט, שטיחים ודקים למשפחות שרוצות שקט נפשי.
               הצעת מחיר מסודרת, הגנה על הריהוט והשארת בית נקי בסיום.
             </p>
          </div>

          <div className="reveal delay-400 flex flex-col sm:flex-row gap-4 items-start">
            <Button 
              onClick={scrollToForm}
              variant="light" 
              className="hover:scale-105 transition-transform duration-300 shadow-xl px-8 w-full sm:w-auto bg-bronze-600 text-white border-none hover:bg-bronze-700"
            >
              <span className="font-bold">לקבלת הצעת מחיר</span>
              <ArrowLeft className="mr-2 h-5 w-5" strokeWidth={2} />
            </Button>
            
            <Button 
              href="https://wa.me/972543962871?text=היי ג'ריקו, אשמח לפרטים על התקנה"
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-stone-900"
            >
              <span>בדיקה מהירה בוואטסאפ</span>
            </Button>
          </div>
          
          <div className="reveal delay-500 mt-8 flex flex-wrap gap-4 text-xs md:text-sm text-stone-300 font-sans">
             <div className="flex items-center gap-1.5">
               <CheckCircle2 className="w-4 h-4 text-bronze-400" />
               <span>אחריות ל-5 שנים</span>
             </div>
             <div className="flex items-center gap-1.5">
               <CheckCircle2 className="w-4 h-4 text-bronze-400" />
               <span>התחייבות לניקיון</span>
             </div>
             <div className="flex items-center gap-1.5">
               <CheckCircle2 className="w-4 h-4 text-bronze-400" />
               <span>עמידה בזמנים</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};