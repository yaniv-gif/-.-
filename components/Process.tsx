import React from 'react';
import { Check } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "מדידה ותכנון",
      desc: "מיפוי לייזר של הרצפה ובדיקת לחות בקירות. תכנון פריסה ממוחשב למניעת פחת ולסימטריה מושלמת."
    },
    {
      num: "02",
      title: "הכנת התשתית",
      desc: "לבידוד (Underlay) חיטוי, יישום מדה מתפלסת (במידת הצורך) והתקנת תשתית אקוסטית רעשים מקסימלי."
    },
    {
      num: "03",
      title: "התקנת אומן",
      desc: "חיתוך מדויק, התאמה למשקופים ויישום דבק פולימרי ירוק. עבודה 'שקטה' המכבדת את המרחב הביתי."
    },
    {
      num: "04",
      title: "מסירה בסטנדרט מלונאי",
      desc: "שאיבה יסודית, החזרת הריהוט למקומו, והדרכה על תחזוקה נכונה.",
      isHighlight: true
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-stone-50 border-y border-stone-200 overflow-hidden relative">
      
      {/* Subtle Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 reveal">
            <span className="text-bronze-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">הסטנדרט</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">התהליך השקט</h2>
            <div className="h-px w-24 bg-stone-900 mx-auto"></div>
            <p className="text-stone-500 mt-6 font-light max-w-2xl mx-auto text-lg leading-relaxed">
              אנחנו לא רק מתקינים רצפה. אנחנו מנהלים פרויקט בתוך הבית שלך, <br className="hidden md:block"/> במינימום הפרעה ובמקסימום דיוק.
            </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.75rem] right-0 left-0 h-px bg-stone-300 -z-10 w-full" />
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 right-1/2 w-px bg-stone-200 -z-10 translate-x-1/2" />

          {steps.map((step, idx) => (
            <div key={idx} className="group relative flex flex-col items-center text-center reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
              
              {/* Hexagon Shape Container */}
              <div className="relative mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                {/* Hexagon SVG Background */}
                <svg 
                  width="90" 
                  height="90" 
                  viewBox="0 0 100 100" 
                  className={`drop-shadow-xl transition-all duration-500 ${step.isHighlight ? 'text-stone-900' : 'text-stone-100 group-hover:text-white'}`}
                  fill="currentColor"
                >
                  <polygon points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25" />
                </svg>

                {/* Stroke Outline (Separate for crispness) */}
                <svg 
                  width="90" 
                  height="90" 
                  viewBox="0 0 100 100" 
                  className="absolute inset-0 pointer-events-none"
                  fill="none"
                >
                  <polygon 
                    points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    className={`${step.isHighlight ? 'text-stone-900' : 'text-stone-300 group-hover:text-bronze-500'} transition-colors duration-500`}
                  />
                </svg>

                {/* Number Content */}
                <div className={`absolute inset-0 flex items-center justify-center font-serif text-2xl font-bold ${step.isHighlight ? 'text-white' : 'text-stone-400 group-hover:text-bronze-600'}`}>
                  {step.isHighlight ? <Check size={28} strokeWidth={3} /> : step.num}
                </div>
              </div>

              {/* Text Content */}
              <div className="relative px-2 bg-stone-50 md:bg-transparent py-2 md:py-0 z-10">
                <h3 className={`text-xl font-serif font-bold mb-3 transition-colors duration-300 ${step.isHighlight ? 'text-stone-900' : 'text-stone-800 group-hover:text-bronze-700'}`}>
                  {step.title}
                </h3>
                <p className="text-stone-500 leading-relaxed font-light text-sm">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};