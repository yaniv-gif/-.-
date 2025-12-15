import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "אומנות הפרקט",
    subtitle: "Fishbone / Chevron / תלת-שכבתי",
    description: "התקנה אדריכלית של כל סוגי הפרקט. התמחות ביישום פישבון (Fishbone) והדבקה פולימרית מלאה לתחושה אקוסטית מוצקה. דיוק בחיבורים ובחיתוכי 'אפס' למראה רציף ומושלם.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, אשמח לייעץ בנושא התקנת פרקט (רגיל/פישבון)"
  },
  {
    id: "02",
    title: "עולם הטקסטיל",
    subtitle: "שטיחים מקיר לקיר / מתיחה אמריקאית",
    description: "הבאת הרכות למרחב הביתי והעסקי. מומחים בשיטה האמריקאית (מתיחה על גריפרים ללא דבק) והשיטה ההולנדית. גימור מוקפד בחיבורים ובסף הדלת למראה יוקרתי ואחיד.",
    image: "https://images.unsplash.com/photo-1534349762913-961f69056d64?q=80&w=1200&auto=format&fit=crop", 
    waMessage: "היי, אני מתעניין בהתקנת שטיחים מקיר לקיר"
  },
  {
    id: "03",
    title: "דקים ומרחבי חוץ",
    subtitle: "איפאה / טיק / סינטטי / חידוש דקים",
    description: "תכנון וביצוע דקים מעץ טבעי או סינטטי פרימיום. יצירת הרמוניה בין פנים לחוץ. כולל שירותי חידוש דקים (ליטוש ושימון) להחזרת המראה המקורי והגנה לאורך זמן.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, אשמח לפרטים על דקים (התקנה/חידוש)"
  },
  {
    id: "04",
    title: "שימור וחידוש",
    subtitle: "תיקוני פרקט / שחזור נזקי מים",
    description: "טיפול אומנותי בנזקים ללא צורך בהחלפת כל הריצוף. החלפה נקודתית של לוחות פגומים, תיקון שריטות, וטיפול בנזקי מים. החזרת הרצפה למצבה החדש במינימום הפרעה.",
    image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, יש לי תקלה בפרקט ואשמח לייעוץ לתיקון"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="container mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
          <div className="max-w-2xl">
            <span className="text-bronze-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              קולקציית השירותים
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              אומנות החומר.<br/>
              <span className="text-stone-400">מהתכנון ועד הגימור.</span>
            </h2>
          </div>
          
          {/* Soft Invitation CTA (Replaces "Click for Price") */}
          <div className="mt-8 md:mt-0 max-w-sm text-left rtl:text-right border-r-4 border-bronze-200 pr-6">
            <p className="text-stone-600 font-sans text-base leading-relaxed mb-2">
              לא בטוחים מה מתאים לחלל שלכם?
            </p>
            <a 
              href="https://wa.me/972543962871" 
              className="text-stone-900 font-bold hover:text-bronze-600 transition-colors inline-flex items-center gap-2 group"
            >
              <span>אנחנו כאן לייעץ</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 2x2 Boutique Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal delay-100">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              className="group relative bg-white border border-stone-100 rounded-sm overflow-hidden hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500 flex flex-col md:flex-row h-auto md:h-[320px]"
            >
              {/* Image Side */}
              <div className="w-full md:w-2/5 relative overflow-hidden h-64 md:h-full">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-bronze-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                    {service.subtitle}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-bronze-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Micro CTA */}
                <a 
                  href={`https://wa.me/972543962871?text=${encodeURIComponent(service.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-stone-900 text-xs font-bold uppercase tracking-widest hover:text-bronze-600 transition-colors mt-auto"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>לבירור פרטים</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};