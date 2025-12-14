import React, { useState } from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "פרקטים וחיפויים",
    subtitle: "למינציה ועץ",
    description: "התקנת כל סוגי הפרקט (למינציה, עץ, פישבון). הקפדה על פילוס הרצפה, פאנלים ישרים וגימור נקי בקירות.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, אשמח להצעת מחיר לפרקט"
  },
  {
    id: "02",
    title: "דקים ופרגולות",
    subtitle: "עץ וסינטטי",
    description: "בנייה וחידוש של דקים (איפאה, אורן, סינטטי) ופרגולות. התקנה חזקה עם ברגים נסתרים שעומדת בשמש הישראלית.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, אשמח להצעת מחיר לדק/פרגולה"
  },
  {
    id: "03",
    title: "מדרגות עץ",
    subtitle: "חיפוי גרמי מדרגות",
    description: "הופכים מדרגות בטון או שיש למדרגות עץ חמות ונעימות. עבודה מדויקת עם גימור פינות מושלם.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, אשמח להצעת מחיר למדרגות עץ"
  },
  {
    id: "04",
    title: "חידוש ותיקון",
    subtitle: "תחזוקה שוטפת",
    description: "חידוש דקים ישנים (ליטוש ושימון), תיקון פרקטים שנפגעו ממים, והחלפת לוחות פגומים. מחזירים את העץ לחיים.",
    image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=1200&auto=format&fit=crop",
    waMessage: "היי, יש לי צורך בחידוש/תיקון"
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
            <span className="text-bronze-600 font-bold tracking-widest text-xs uppercase mb-3 block">מה אנחנו עושים</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight font-bold">
              השירותים<br/>
              <span className="text-stone-500">שלנו.</span>
            </h2>
          </div>
          <p className="hidden md:block text-stone-600 font-sans text-base max-w-xs leading-relaxed text-left border-l-4 border-bronze-500 pl-6">
            לחצו על שירות לפרטים נוספים.<br/> 
            וואטסאפ ישיר להצעת מחיר.
          </p>
        </div>

        {/* Desktop: Horizontal Accordion | Mobile: Vertical Stack */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 h-auto md:h-[500px] w-full reveal delay-100">
          {services.map((service) => (
            <a 
              key={service.id}
              href={`https://wa.me/972500000000?text=${encodeURIComponent(service.waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-out group rounded-sm shadow-md
                ${activeId === service.id ? 'md:flex-[3]' : 'md:flex-1'}
                h-[280px] md:h-full w-full md:w-auto
                bg-stone-800
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
                    ${activeId === service.id ? 'grayscale-0 scale-105 opacity-100' : 'grayscale opacity-50'}
                    group-hover:opacity-80
                  `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
              </div>

              {/* Vertical Text (When Inactive on Desktop) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none
                ${activeId === service.id ? 'opacity-0' : 'opacity-100'}
                hidden md:flex
              `}>
                <h3 className="text-2xl font-bold text-white tracking-wide whitespace-nowrap rotate-90 drop-shadow-md">
                  {service.title}
                </h3>
              </div>

              {/* Expanded Content */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end z-20 transition-all duration-300
                 translate-y-0 opacity-100
                 ${activeId === service.id ? 'md:translate-y-0 md:opacity-100' : 'md:translate-y-4 md:opacity-0'}
              `}>
                <span className="text-bronze-400 text-xs font-bold tracking-widest uppercase mb-1 block">
                    {service.subtitle}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 block">
                  {service.title}
                </h3>
                
                <p className={`text-stone-200 font-sans text-sm leading-relaxed mb-5 max-w-md transition-opacity duration-300`}>
                  {service.description}
                </p>

                {/* Button */}
                <div className="inline-flex items-center gap-2 bg-bronze-600 text-white px-5 py-2 text-sm font-bold rounded-sm hover:bg-bronze-700 transition-colors w-fit">
                  <span>להצעת מחיר</span>
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