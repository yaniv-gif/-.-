import React from 'react';
import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Image Side - Friendly & Professional */}
            <div className="w-full lg:w-1/2 reveal order-2 lg:order-1">
                <div className="relative">
                    <div className="absolute top-4 -left-4 w-full h-full bg-stone-100 z-0 rounded-sm"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop" 
                        alt="Quality Work" 
                        className="relative z-10 w-full h-[500px] object-cover shadow-lg rounded-sm"
                    />
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-10 order-1 lg:order-2">
                <div className="reveal">
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 font-bold">
                        סטנדרט של אמינות
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed max-w-md">
                        אנחנו יודעים ששיפוץ יכול להיות כאב ראש. המטרה שלנו היא שתהיו מרוצים לא רק מהתוצאה, אלא גם מהדרך.
                    </p>
                </div>

                <div className="space-y-8 reveal delay-100">
                    
                    {/* Feature 1 */}
                    <div className="flex gap-5">
                        <div className="shrink-0 w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-bronze-600">
                            <ShieldCheck strokeWidth={2} size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-900 mb-2">הצעת מחיר הוגנת וסופית</h3>
                            <p className="text-stone-600 leading-relaxed">
                                מה שסגרנו – זה בדיוק מה שתשלמו. אין "תוספות" מפתיעות במחיר ביום העבודה, ואין אותיות קטנות. הכל על השולחן מראש.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-5">
                        <div className="shrink-0 w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-bronze-600">
                            <Clock strokeWidth={2} size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-900 mb-2">דיוק בזמנים</h3>
                            <p className="text-stone-600 leading-relaxed">
                                אנחנו מכבדים את הזמן שלכם – מתחילים ביום שקבענו, ומסיימים בזמן בדיוק כפי שהתחייבנו.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-5">
                        <div className="shrink-0 w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-bronze-600">
                            <CheckCircle strokeWidth={2} size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-900 mb-2">משאירים נקי</h3>
                            <p className="text-stone-600 leading-relaxed">
                                אנחנו לא משאירים אצלכם אתר בנייה. עובדים מסודר, מפנים את כל הפסולת בסוף כל יום, ומשאירים את השטח נקי לחלוטין בסיום העבודה.
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