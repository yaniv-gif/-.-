
import React, { useState } from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "התקנות פרקט",
    subtitle: "פרקט ופישבון",
    description: "מומחיות בפרקט פישבון, תלת-שכבתי ולמינציה. ביצוע פילוס מדויק והדבקה מלאה.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, אשמח לקבל פרטים על התקנת פרקט"
  },
  {
    id: "02",
    title: "שטיחים",
    subtitle: "השיטה האמריקאית",
    description: "מתיחת שטיחים מקיר לקיר בשיטה האמריקאית. גימור מתוח ויוקרתי ללא גלים.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7bab58d?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, אשמח לקבל פרטים על שטיחים מקיר לקיר"
  },
  {
    id: "03",
    title: "תיקון ושחזור",
    subtitle: "מומחיות בשיקום",
    description: "החלפת לוחות פגומים, מתיחה מחדש לשטיחים רופפים, וטיפול בנזקי מים.",
    image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, יש לי צורך בתיקון פרקט/שטיח"
  },
  {
    id: "04",
    title: "דקים וחוץ",
    subtitle: "חידוש דקים",
    description: "חידוש והתקנת דקים (איפאה, אורן). ליטוש ושימון להחזרת המראה המקורי.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, אשמח לקבל פרטים על חידוש דק"
  }
];

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-stone-50 text-stone-900 overflow-hidden">
      <div className="container mx-auto px-6 h-full">
        
        {/* Header - Now Dark Text on Light Background */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
          <div>
            <span className="text-bronze-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              השירותים<br/>
              <span className="text-stone-400">שלנו.</span>
            </h2>
          </div>
          <p className="hidden md:block text-stone-500 font-sans text-sm max-w-xs leading-relaxed text-left border-l-2 border-bronze-200 pl-6">
            החליקו על השירותים לפירוט.<br/> 
            לחיצה תוביל לייעוץ מיידי בוואטסאפ.
          </p>
        </div>

        {/* Desktop: Horizontal Accordion | Mobile: Vertical Stack */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-1 h-auto md:h-[550px] w-full reveal delay-100">
          {services.map((service) => (
            <a 
              key={service.id}
              href={`https://wa.me/972500000000?text=${encodeURIComponent(service.waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group
                ${activeId === service.id ? 'md:flex-[3]' : 'md:flex-1'}
                h-[250px] md:h-full w-full md:w-auto
                bg-stone-200
                border-b-4 md:border-b-0 md:border-l-4 border-white
              `}
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={`w-full h-full object-cover transition-all duration-700 
                    ${activeId === service.id ? 'grayscale-0 scale-110' : 'grayscale scale-100 opacity-60'}
                    group-hover:opacity-100
                  `}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${activeId === service.id ? 'opacity-80' : 'opacity-90'}`}></div>
              </div>

              {/* Architectural Number */}
              <span className="absolute top-4 right-4 md:top-6 md:right-6 text-4xl md:text-6xl font-serif font-bold text-transparent opacity-30 select-none z-10" 
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.7)' }}>
                {service.id}
              </span>

              {/* Vertical Text (When Inactive on Desktop) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 pointer-events-none
                ${activeId === service.id ? 'opacity-0' : 'opacity-100'}
                hidden md:flex
              `}>
                <h3 className="text-3xl font-serif text-white tracking-widest whitespace-nowrap rotate-90 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              {/* Mobile Title (Always Visible) */}
              <div className="absolute inset-0 flex items-center justify-center md:hidden pointer-events-none">
                 <h3 className="text-2xl font-serif text-white tracking-widest drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              {/* Expanded Content */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end z-20 transition-all duration-500
                 ${activeId === service.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-100 md:opacity-0 hidden md:flex'}
              `}>
                <span className="text-bronze-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                    {service.subtitle}
                </span>
                <h3 className="text-3xl font-serif text-white mb-4 hidden md:block">
                  {service.title}
                </h3>
                <p className={`text-stone-200 font-sans font-light text-sm leading-relaxed mb-6 max-w-md transition-opacity duration-500 ${activeId === service.id ? 'opacity-100' : 'opacity-0 md:hidden'}`}>
                  {service.description}
                </p>

                {/* Button */}
                <div className="inline-flex items-center gap-3 bg-white text-stone-900 px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-bronze-500 hover:text-white transition-colors w-fit">
                  <span>התייעץ בוואטסאפ</span>
                  <MessageCircle className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
