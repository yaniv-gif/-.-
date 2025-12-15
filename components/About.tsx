import React from 'react';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-stone-100">
      <div className="container mx-auto px-6">
        
        {/* Editorial Layout: Founder's Profile */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Visual Side: The Portrait (Editorial Style) */}
          <div className="w-full lg:w-5/12 relative reveal">
            <div className="relative z-10">
               {/* Frame Element */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-bronze-200 z-0 hidden md:block"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Jericho Espinoza" 
                className="relative z-10 w-full aspect-[3/4] object-cover shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Caption Tag */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-6 py-3 shadow-lg z-20 border-r-4 border-bronze-500">
                <span className="block font-serif font-bold text-stone-900 text-lg">ג'ריקו אספינוזה</span>
                <span className="block font-sans text-xs text-stone-500 tracking-widest uppercase">מייסד ומנהל מקצועי</span>
              </div>
            </div>
          </div>

          {/* Narrative Side: The Fusion Story */}
          <div className="w-full lg:w-7/12 pt-8 reveal delay-100">
             
             <div className="mb-10">
               <span className="text-bronze-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                האנשים שמאחורי
               </span>
               <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight mb-6">
                 יש דברים שצריך<br/>
                 <span className="text-stone-400">להביא מהבית.</span>
               </h2>
             </div>

            <div className="space-y-6 font-sans text-lg font-light leading-relaxed text-stone-600 pl-0 md:pl-12">
              <p>
                נעים להכיר, ג'ריקו. <br/>
                יש לי "שריטה" קטנה: אני לא מסוגל לעזוב פינה לא מושלמת. הבאתי איתי מהבית תרבות של סבלנות, של עבודה בידיים עדינות ושל כבוד לחומר – תכונות שלפעמים, בואו נודה על האמת, קצת חסרות בנוף המקומי שלנו.
              </p>
              <p>
                אבל את העסק שלי בניתי כאן, מתוך היכרות עמוקה עם הלקוח הישראלי. אני יודע שכשאתם מכניסים בעל מקצוע הביתה, אתם לא מחפשים רק כישרון, אלא <strong>שקט</strong>. אתם רוצים לדעת ששעה זו שעה, שמילה זו מילה, ושבסוף היום הבית נשאר נקי.
              </p>
              <p>
                השילוב הזה? בין הנימוס והרוגע הבינלאומי לבין הסטנדרט הישראלי הבלתי מתפשר – זה הסוד שלנו. אצלי אין "יהיה בסדר". יש בסדר גמור.
              </p>
            </div>

            {/* The Founder's Pledge / Signature */}
            <div className="mt-12 pt-10 border-t border-stone-100 relative">
               <Quote className="absolute top-6 left-0 text-bronze-100 w-16 h-16 -z-10 transform -scale-x-100" />
               <blockquote className="text-2xl font-serif text-stone-800 italic mb-6 leading-relaxed">
                 "בסוף יום, כשאתם דורכים על הרצפה יחפים ומחייכים – זה הניצחון האישי שלי."
               </blockquote>
               
               {/* Faux Signature Representation */}
               <div className="font-serif text-3xl text-bronze-600 font-bold opacity-80" style={{ fontFamily: '"Great Vibes", cursive' }}>
                 Jericho Espinoza
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};