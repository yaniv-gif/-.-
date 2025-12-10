
import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "התקנות פרקט",
    subtitle: "פרקט ופישבון",
    description: "מומחיות בפרקט פישבון, תלת-שכבתי ולמינציה. ביצוע פילוס מדויק והדבקה מלאה לפי הוראות יצרן.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop",
    waMessage: "היי, אשמח לקבל פרטים על התקנת פרקט"
  },
  {
    id: "02",
    title: "שטיחים מקיר לקיר",
    subtitle: "השיטה האמריקאית",
    description: "הדבקות ומתיחת שטיחים בשיטה האמריקאית. שימוש במותחן כוח למניעת גלים וקבלת גימור מתוח ויוקרתי.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7bab58d?q=80&w=800&auto=format&fit=crop",
    waMessage: "היי, אשמח לקבל פרטים על שטיחים מקיר לקיר"
  },
  {
    id: "03",
    title: "תיקון ושחזור",
    subtitle: "מומחיות בשיקום",
    description: "כל סוגי תיקוני הפרקטים והשטיחים. החלפת לוחות פגומים, מתיחה מחדש לשטיחים רופפים, וטיפול בנזקי מים.",
    image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=800&auto=format&fit=crop",
    waMessage: "היי, יש לי צורך בתיקון פרקט/שטיח"
  },
  {
    id: "04",
    title: "דקים וחוץ",
    subtitle: "חידוש דקים",
    description: "חידוש והתקנת דקים (איפאה, אורן, סינטטי). קרצוף, ליטוש ושימון להחזרת המראה המקורי והגנה מפני השמש.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop",
    waMessage: "היי, אשמח לקבל פרטים על חידוש דק"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        
        {/* Header - Aligned for impact */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 reveal">
          <div>
            <span className="text-bronze-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              השירותים<br/>
              <span className="text-stone-400">שלנו.</span>
            </h2>
          </div>
          <div className="hidden md:block text-left border-l-2 border-bronze-200 pl-6">
            <p className="text-stone-500 font-sans text-sm max-w-xs leading-relaxed">
              פתרונות מלאים לחיפוי הרצפה.<br/> 
              מפרקט פישבון יוקרתי ועד דקים חיצוניים.
            </p>
          </div>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <a 
              key={service.id} 
              href={`https://wa.me/972500000000?text=${encodeURIComponent(service.waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[550px] overflow-hidden cursor-pointer block bg-stone-900 reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Image - B&W to Color on Hover */}
              <div className="absolute inset-0 transition-all duration-700 ease-out group-hover:scale-105">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Colored Tint Overlay (Fades out on hover to reveal true color) */}
                <div className="absolute inset-0 bg-bronze-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>

              {/* Architectural Number (Watermark) */}
              <span className="absolute top-4 left-6 text-8xl font-serif font-bold text-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-500 select-none z-0" 
                style={{ WebkitTextStroke: '1px #fff' }}>
                {service.id}
              </span>

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-0.5 bg-bronze-500 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>

                  <span className="text-bronze-300 text-xs font-bold tracking-[0.2em] uppercase mb-2 block opacity-80">
                    {service.subtitle}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 leading-none text-stone-100 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out">
                    <p className="text-stone-300 font-sans font-light text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-r border-white/20 pr-4">
                      {service.description}
                    </p>
                    
                    {/* Action Button */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 px-4 py-2 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all duration-300">
                      <span>התייעץ בוואטסאפ</span>
                      <MessageCircle className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Idle State "More" Indicator */}
                  <div className="group-hover:opacity-0 transition-opacity duration-300 absolute bottom-0 left-0">
                     <ArrowLeft className="w-5 h-5 text-stone-500" />
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
