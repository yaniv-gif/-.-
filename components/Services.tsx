import React, { useState } from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "התקנות פרקט",
    subtitle: "פישבון, תלת-שכבתי ורגיל",
    description: "הדבקת פרקט רגיל, פישבון (Fishbone) ותלת-שכבתי. ביצוע מוקפד על תשתית מפולסת לתוצאה אקוסטית ואסתטית מושלמת.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי ג'ריקו, אשמח להצעת מחיר להתקנת פרקט"
  },
  {
    id: "02",
    title: "תיקוני פרקט",
    subtitle: "כל סוגי תיקוני פרקטים",
    description: "מומחיות בכל סוגי תיקוני פרקטים: החלפת לוחות פגומים, תיקון נזקי מים, טיפול בשריטות, וחידוש המראה המקורי של הרצפה.",
    image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי ג'ריקו, יש לי צורך בתיקון פרקט"
  },
  {
    id: "03",
    title: "שטיחים מקיר לקיר",
    subtitle: "שיטה אמריקאית והולנדית",
    description: "הדבקות ומתיחת שטיחים בשיטה אמריקאית הולנדית. התאמה מושלמת למרחב ללא גלים, למראה מתוח ויוקרתי.",
    image: "https://images.unsplash.com/photo-1534349762913-961f69056d64?q=80&w=1200&auto=format&fit=crop", 
    waMessage: "היי ג'ריקו, אשמח להצעת מחיר לשטיח מקיר לקיר"
  }
];

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-stone-50 text-stone-900 overflow-hidden">
      <div className="container mx-auto px-6 h-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
          <div>
            <span className="text-bronze-600 font-bold tracking-widest text-xs uppercase mb-3 block">המומחיות שלנו</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight font-bold">
              שירותי<br/>
              <span className="text-stone-500">הבוטיק.</span>
            </h2>
          </div>
          <p className="hidden md:block text-stone-600 font-sans text-base max-w-xs leading-relaxed text-left border-l-4 border-bronze-500 pl-6">
            לחצו על שירות לפרטים נוספים.<br/> 
            וואטסאפ ישיר להצעת מחיר.
          </p>
        </div>

        {/* Desktop: Horizontal Accordion | Mobile: Vertical Stack */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 h-auto md:h-[550px] w-full reveal delay-100">
          {services.map((service) => (
            <a 
              key={service.id}
              href={`https://wa.me/972500000000?text=${encodeURIComponent(service.waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-out group rounded-sm shadow-xl
                ${activeId === service.id ? 'md:flex-[2.5]' : 'md:flex-1'}
                h-[300px] md:h-full w-full md:w-auto
                bg-stone-900 border border-stone-200
              `}
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={`w-full h-full object-cover transition-all duration-1000 
                    ${activeId === service.id ? 'grayscale-0 scale-105 opacity-100' : 'grayscale opacity-60'}
                    group-hover:opacity-100
                  `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent opacity-90"></div>
              </div>

              {/* Vertical Text (When Inactive on Desktop) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none
                ${activeId === service.id ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
                hidden md:flex
              `}>
                <h3 className="text-3xl font-serif font-bold text-white tracking-wide whitespace-nowrap rotate-90 drop-shadow-lg border-b-2 border-bronze-500 pb-2">
                  {service.title}
                </h3>
              </div>

              {/* Expanded Content */}
              <div className={`absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end z-20 transition-all duration-500
                 translate-y-0 opacity-100
                 ${activeId === service.id ? 'md:translate-y-0 md:opacity-100' : 'md:translate-y-8 md:opacity-0'}
              `}>
                <div className="transform transition-transform duration-500 delay-100">
                    <span className="text-bronze-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                        {service.subtitle}
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 block leading-none">
                      {service.title}
                    </h3>
                    
                    <p className={`text-stone-300 font-sans text-base leading-relaxed mb-8 max-w-md`}>
                      {service.description}
                    </p>

                    {/* Button */}
                    <div className="inline-flex items-center gap-3 bg-white text-stone-900 px-6 py-3 text-sm font-bold rounded-sm hover:bg-bronze-500 hover:text-white transition-colors duration-300 w-fit">
                      <span>להצעת מחיר</span>
                      <MessageCircle className="w-4 h-4" />
                    </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};