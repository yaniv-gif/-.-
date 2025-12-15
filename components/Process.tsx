import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "מיפוי ודיאגנוסטיקה",
      desc: "לפני שמניחים לוח אחד, אנחנו מבינים את השטח. מדידות לייזר, בדיקות לחות בקירות (קריטי באקלים הישראלי) ותכנון פריסה שמייצר מינימום פחת וחיתוכים מושלמים."
    },
    {
      num: "02",
      title: "הכנת הקנבס",
      desc: "רצפה יוקרתית חייבת בסיס מושלם. אנחנו מיישמים מדה מתפלסת לאיזון אבסולוטי ותשתית אקוסטית מתקדמת. המטרה: שקט. גם לדריכה, וגם לשכנים מלמטה."
    },
    {
      num: "03",
      title: "התקנה כירורגית",
      desc: "הדבקה פולימרית ירוקה, חיתוכי 'אפס' בחיבור לקיר, ועבודה עם שואבים תעשייתיים שמחוברים למסור. בלי ענני אבק, בלי רעש מיותר. אומנות בשקט."
    },
    {
      num: "04",
      title: "מסירה בלבן",
      desc: "אנחנו לא משאירים אתכם עם פסולת בניין. בסיום: שאיבה יסודית, החזרת הריהוט למקום, והדרכה על שימור העץ. אנחנו משאירים מפתח ויוצאים."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-stone-50 border-y border-stone-200 overflow-hidden relative">
      
      {/* Subtle Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
            <div className="max-w-xl">
                <span className="text-bronze-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">סטנדרט העבודה</span>
                <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                    הפרוטוקול השקט.
                </h2>
                <div className="h-px w-20 bg-stone-900 mt-6 mb-6"></div>
                <p className="text-stone-500 font-light text-lg leading-relaxed">
                  אנחנו לא רק מתקינים רצפה. אנחנו מנהלים פרויקט בתוך הבית שלך, במינימום הפרעה ובמקסימום דיוק.
                </p>
            </div>
        </div>

        {/* Architectural Timeline Grid */}
        <div className="relative">
          
          {/* Timeline Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[2rem] right-0 left-0 h-px bg-gradient-to-l from-transparent via-stone-300 to-transparent w-full" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="group relative flex flex-col items-start reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                
                {/* Number / Node */}
                <div className="relative mb-8 w-full flex items-center">
                    {/* The Dot on the line */}
                    <div className="w-5 h-5 rounded-full bg-stone-50 border-2 border-stone-300 z-10 relative group-hover:border-bronze-500 group-hover:bg-bronze-500 transition-all duration-500 shadow-sm"></div>
                    
                    {/* Large Number Offset */}
                    <span className="absolute -top-12 right-0 text-7xl font-serif text-stone-100 group-hover:text-stone-900/10 transition-colors duration-500 select-none -z-10">
                        {step.num}
                    </span>
                </div>

                {/* Content */}
                <div className="relative z-10 pl-4">
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 group-hover:text-bronze-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed font-light text-sm border-r-2 border-transparent pr-4 group-hover:border-bronze-200 transition-all duration-500">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};