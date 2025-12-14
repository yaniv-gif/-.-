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
              אין קיצורי דרך.<br/>
              <span className="text-bronze-600 italic">רק דיוק מוחלט.</span>
            </h2>

            <div className="space-y-6 font-sans text-lg font-light leading-relaxed text-stone-600">
              <p>
                שמי ג'ריקו אספינוזה. אחרי שנים של עבודה בפרויקטים המורכבים ביותר, למדתי דבר אחד פשוט: <strong>רצפה היא הבמה של הבית.</strong> אם הבסיס לא מושלם, הבית לא מושלם.
              </p>
              <p>
                אני לא מאמין ב"בערך" או ב"יהיה בסדר". אני מביא איתי משמעת עבודה קפדנית, כבוד לחומר הגלם, ושיטות התקנה בינלאומיות שלא משאירות מקום לטעויות.
              </p>
              <p className="text-stone-900 font-medium border-r-4 border-bronze-500 pr-6 mt-8 py-2 bg-stone-50/50">
                כשאתם בוחרים בי, אתם בוחרים בשקט תעשייתי, בבית נקי בסוף יום עבודה, ובתוצאה שתחזיק מעמד שנים קדימה.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6 pt-8 border-t border-stone-100">
               <div>
                  <span className="font-serif text-2xl text-stone-900 block leading-none mb-2">ג'ריקו אספינוזה</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-bronze-600 font-bold">• Master Installer</span>
                  </div>
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