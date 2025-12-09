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
              תרבות של שקט.<br/>
              <span className="text-bronze-600 italic">סטנדרט של מומחה.</span>
            </h2>

            <div className="space-y-6 font-sans text-lg font-light leading-relaxed text-stone-600">
              <p>
                השורשים שלי בפיליפינים העניקו לי את הסבלנות האינסופית לפרטים הקטנים ואת הכבוד העמוק למרחב האישי של הלקוח.
              </p>
              <p>
                החיים והעסקים בישראל לימדו אותי שזמן הוא משאב יקר. השילוב הזה יוצר חוויה נדירה בנוף המקומי: עבודה שקטה, אסתטית ומנומסת, עם התחייבות ברזל ללוחות זמנים ולתוצאה.
              </p>
              <p className="text-stone-900 font-medium border-r-4 border-bronze-500 pr-6 mt-8 py-2 bg-stone-50/50">
                כשאתם מפקידים בידיי את מפתחות הבית, אתם מקבלים לא רק רצפה חדשה, אלא שקט נפשי מלא.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4 pt-6 border-t border-stone-100">
               {/* Portrait Placeholder - Professional Male */}
               <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Jericho" className="w-16 h-16 rounded-full grayscale object-cover border-2 border-white shadow-lg" />
               <div>
                  <span className="font-serif text-xl text-stone-900 block leading-none mb-1">ג'ריקו אספינוזה</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-bronze-600 font-bold">מומחה לחיפוי רצפה</span>
               </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative reveal delay-100">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl group">
              {/* Action Shot - Craftsman measuring/working (Distinct from Services image) */}
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000&auto=format&fit=crop" 
                alt="Precision Measurement" 
                className="w-full h-[600px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              />
              
              <div className="absolute bottom-0 left-0 bg-white p-8 border-t-4 border-bronze-500 max-w-xs shadow-lg hidden md:block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-5xl font-serif text-stone-900 font-medium">15+</div>
                <div className="text-xs text-stone-500 uppercase tracking-widest font-bold mt-1">שנות ניסיון בהתקנות יוקרה</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};