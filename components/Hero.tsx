import React from 'react';
import { Button } from './Button';
import { ArrowLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] h-[75vh] md:h-[85vh] flex items-end md:items-center justify-start overflow-hidden">
      
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
          <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* LIGHTER Overlay - Adjusted for better text contrast without being too dark */}
        <div className="absolute inset-0 bg-stone-950/30"></div>
        
        {/* Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-24 md:pb-0 pt-32 md:pt-24">
        <div className="max-w-4xl">
          
          <h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg">
            עיצוב פנים.<br />
            <span className="text-bronze-100">מתחיל מלמטה.</span>
          </h1>
          
          <div className="reveal delay-200 text-lg md:text-2xl text-stone-100 max-w-2xl mb-12 font-sans font-light leading-relaxed drop-shadow-md">
             <p className="border-r-4 border-bronze-500 pr-6">
               התקנת פרקטים ושטיחים בגימור אדריכלי.<br/>
               <span className="text-white font-normal">אנחנו דואגים לכל פרט, מהתשתית ועד הפנל האחרון. שקט, דיוק ואסתטיקה.</span>
             </p>
          </div>

          <div className="reveal delay-300 flex flex-col sm:flex-row gap-5 items-start">
            <Button variant="light" href="https://wa.me/972543962871?text=היי ג'ריקו, אשמח לתאם פגישה בנושא חיפוי רצפה" className="hover:scale-105 transition-transform duration-300 shadow-xl px-10 w-full sm:w-auto">
              <span className="font-bold">תיאום פגישה אישית</span>
              <ArrowLeft className="mr-2 h-5 w-5" strokeWidth={2} />
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  );
};