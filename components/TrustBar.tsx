import React from 'react';
import { Star, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-stone-200 py-6 md:py-8 shadow-sm relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center text-center">
          
          {/* Item 1: Reviews */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex text-yellow-500 gap-0.5">
               <Star className="w-4 h-4 fill-current" />
               <Star className="w-4 h-4 fill-current" />
               <Star className="w-4 h-4 fill-current" />
               <Star className="w-4 h-4 fill-current" />
               <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-stone-900 font-bold text-sm md:text-base">שירות מצטיין</span>
            <span className="text-stone-500 text-xs">מבוסס על המלצות לקוחות</span>
          </div>

          {/* Item 2: Warranty */}
          <div className="flex flex-col items-center gap-2 border-r border-stone-100 md:border-none">
            <ShieldCheck className="w-6 h-6 text-bronze-600" strokeWidth={1.5} />
            <span className="text-stone-900 font-bold text-sm md:text-base">5 שנות אחריות</span>
            <span className="text-stone-500 text-xs">על ההתקנה והעבודה</span>
          </div>

          {/* Item 3: Time */}
          <div className="flex flex-col items-center gap-2 md:border-r border-stone-100 md:border-none pt-4 md:pt-0 border-t md:border-t-0">
             <Clock className="w-6 h-6 text-bronze-600" strokeWidth={1.5} />
             <span className="text-stone-900 font-bold text-sm md:text-base">עמידה בזמנים</span>
             <span className="text-stone-500 text-xs">תאריך התחלה וסיום ברורים</span>
          </div>

          {/* Item 4: Cleanliness */}
          <div className="flex flex-col items-center gap-2 border-r border-stone-100 md:border-none pt-4 md:pt-0 border-t md:border-t-0">
             <ThumbsUp className="w-6 h-6 text-bronze-600" strokeWidth={1.5} />
             <span className="text-stone-900 font-bold text-sm md:text-base">עבודה נקייה</span>
             <span className="text-stone-500 text-xs">מתחייבים להשארת שטח נקי</span>
          </div>

        </div>
      </div>
    </section>
  );
};