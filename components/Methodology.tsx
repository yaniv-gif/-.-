
import React from 'react';
import { VolumeX, Maximize, ShieldCheck } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden relative">
      {/* Decorative Background Text */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none select-none overflow-hidden">
        <span className="text-[20rem] font-serif font-bold text-stone-900 leading-none">The</span>
        <span className="block text-[20rem] font-serif font-bold text-stone-900 leading-none ml-40">Feel</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Editorial Image Side */}
            <div className="w-full lg:w-1/2 reveal">
                <div className="relative">
                    <div className="absolute top-4 -right-4 w-full h-full border border-stone-300 z-0"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1000&auto=format&fit=crop" 
                        alt="Barefoot Luxury" 
                        className="relative z-10 w-full h-[600px] object-cover shadow-2xl grayscale-[10%]"
                    />
                    <div className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur p-6 max-w-xs shadow-lg border-r-4 border-bronze-500">
                        <p className="font-serif text-xl text-stone-900 italic">
                            "יוקרה היא לא מה שרואים. יוקרה היא מה שמרגישים כשדורכים יחפים."
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-12">
                <div className="reveal delay-100">
                    <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 leading-tight">
                        לא רק נראה יוקרתי.<br/>
                        <span className="text-bronze-600 italic">מרגיש יוקרתי.</span>
                    </h2>
                    <p className="text-stone-500 font-light text-lg leading-relaxed max-w-md">
                        ההבדל בין התקנה רגילה להתקנת בוטיק נמדד בחושים. 
                        השקט כשהולכים, הרצף בעין, והיציבות מתחת לרגל.
                    </p>
                </div>

                <div className="space-y-10 reveal delay-200">
                    
                    {/* Feature 1 */}
                    <div className="flex gap-6 group">
                        <div className="shrink-0 w-12 h-12 bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-600 group-hover:bg-bronze-600 group-hover:text-white group-hover:border-bronze-600 transition-all duration-300">
                            {/* Thinner stroke for luxury feel */}
                            <VolumeX strokeWidth={1.25} size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">אקוסטיקה של שקט</h3>
                            <p className="text-stone-500 font-light text-sm leading-relaxed">
                                פרקט שלא חורק ושטיח שבולע רעשים. שימוש ב-Underlay איכותי והדבקה מלאה למניעת "צליל חלול" (Hollow Sound) בהליכה.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-6 group">
                        <div className="shrink-0 w-12 h-12 bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-600 group-hover:bg-bronze-600 group-hover:text-white group-hover:border-bronze-600 transition-all duration-300">
                            <Maximize strokeWidth={1.25} size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">רצף ויזואלי (Flow)</h3>
                            <p className="text-stone-500 font-light text-sm leading-relaxed">
                                תכנון מוקדם המאפשר מעבר בין חדרים ללא ספי אלומיניום מכוערים. חיתוך מדויק סביב משקופים למראה של "רצפה שנוצקה במקום".
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-6 group">
                        <div className="shrink-0 w-12 h-12 bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-600 group-hover:bg-bronze-600 group-hover:text-white group-hover:border-bronze-600 transition-all duration-300">
                            <ShieldCheck strokeWidth={1.25} size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">עמידות לדורות</h3>
                            <p className="text-stone-500 font-light text-sm leading-relaxed">
                                שימוש בדבקים אירופאיים בתקן ירוק או מתיחה מכנית שלא משתחררת. הרצפה תיראה ביום המסירה כמו בעוד 10 שנים.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
