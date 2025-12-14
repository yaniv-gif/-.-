import React from 'react';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Side */}
          <div className="order-2 lg:order-1 reveal">
             <Quote className="text-bronze-500 w-12 h-12 mb-6 opacity-30" strokeWidth={1} />
             
             <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
              כבוד לחומר.<br/>
              <span className="text-bronze-600 italic">כבוד לבית.</span>
            </h2>

            <div className="space-y-6 font-sans text-lg font-light leading-relaxed text-stone-600">
              <p>
                <strong>נולדתי בפיליפינים</strong>, שם ספגתי מגיל צעיר את ערכי העבודה הקשה, הסבלנות והכבוד לפרטים הקטנים. בישראל אני מביא את אותה מסירות לכל בית שאני נכנס אליו.
              </p>
              <p>
                הגישה שלי פשוטה: רצפה היא הרהיט הכי חשוב בבית. השילוב בין המנטליות של דיוק ורוגע לבין הניסיון המקצועי שצברתי, מבטיח עבודה שקטה ותוצאה מושלמת.
              </p>
              <p className="text-stone-900 font-medium border-r-4 border-bronze-500 pr-6 mt-8 py-2 bg-stone-50/50">
                כשאתם מפקידים בידיי את מפתחות הבית, אתם מקבלים שקט נפשי מלא ותוצאה שתישמר לשנים.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6 pt-8 border-t border-stone-100">
               {/* Note: Small duplicate portrait removed as requested */}
               
               <div>
                  <span className="font-serif text-2xl text-stone-900 block leading-none mb-2">ג'ריקו אספינוזה</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-bronze-600 font-bold">• Master Installer</span>
                  </div>
                  <div className="text-xs text-stone-500 uppercase tracking-widest font-bold mt-1">
                      ניסיון עשיר בהתקנות יוקרה
                  </div>
                  
                  {/* Master Signature Graphic */}
                  <svg width="120" height="40" viewBox="0 0 120 40" className="text-stone-400 mt-2 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5,30 C20,20 30,35 40,25 C50,15 60,30 70,35 C80,40 100,10 115,20" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative reveal delay-100">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl group">
              {/* Action Shot - Craftsman measuring/working */}
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000&auto=format&fit=crop" 
                alt="Precision Measurement" 
                className="w-full h-[600px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-stone-100 -z-10 rounded-full blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
};