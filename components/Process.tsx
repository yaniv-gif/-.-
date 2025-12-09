
import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "מדידה ותכנון",
      desc: "אנחנו לא מנחשים. שימוש בלייזר לבדיקת פילוס הרצפה ובדיקת לחות בקירות."
    },
    {
      num: "02",
      title: "הכנת השטח",
      desc: "פינוי הריהוט, ניקוי יסודי, והתקנה של פסי עיגון (Grippers) היקפיים."
    },
    {
      num: "03",
      title: "התקנה ומתיחה",
      desc: "חיתוך מחוץ לבית (ללא אבק) ומתיחה הידראולית לגימור מתוח לחלוטין."
    },
    {
      num: "04",
      title: "White Glove",
      desc: "שאיבה תעשייתית, החזרת הריהוט, ומסירת המפתח כשהחדר מושלם.",
      isHighlight: true
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-serif text-stone-900">התהליך השקט</h2>
            <p className="text-stone-500 mt-2 font-light">איך אנחנו עובדים אצלך בבית</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-6 right-0 left-0 h-px bg-stone-200 -z-10 transform translate-y-1/2"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="reveal bg-white pt-4 md:pt-0" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center font-serif text-lg mb-6 mx-auto relative z-10 ring-8 ring-white transition-colors duration-500 
                  ${step.isHighlight ? 'bg-bronze-600 text-white shadow-lg shadow-bronze-200' : 'bg-stone-900 text-white'}`}
              >
                {step.num}
              </div>
              <div className="text-center px-4">
                <h3 className={`text-lg font-bold font-serif mb-3 ${step.isHighlight ? 'text-bronze-700' : 'text-stone-800'}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
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
