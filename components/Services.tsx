import React from 'react';
import { ArrowLeft } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "התקנות פרקט",
    subtitle: "Parquet & Herringbone",
    description: "מומחיות בפרקט פישבון (Fishbone), תלת-שכבתי ולמינציה. ביצוע פילוס מדויק והדבקה מלאה לפי הוראות יצרן.",
    // Image: Specific Herringbone Pattern
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "שטיחים מקיר לקיר",
    subtitle: "American/Dutch Method",
    description: "הדבקות ומתיחת שטיחים בשיטה אמריקאית הולנדית. שימוש ב-Power Stretcher למניעת גלים וקבלת גימור מתוח ויוקרתי.",
    // Image: High end wool texture
    image: "https://images.unsplash.com/photo-1505691938895-1758d7bab58d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "תיקון ושחזור",
    subtitle: "Repair & Restore",
    description: "כל סוגי תיקוני הפרקטים והשטיחים. החלפת לוחות פגומים, מתיחה מחדש לשטיחים רופפים, וטיפול בנזקי מים.",
    // Image: Craftsman tools
    image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "דקים וחוץ",
    subtitle: "Decks Renovation",
    description: "חידוש והתקנת דקים (איפאה, אורן, סינטטי). קרצוף, ליטוש ושימון להחזרת המראה המקורי והגנה מפני השמש.",
    // Image: Sunny outdoor deck
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
            השירותים<br/>
            <span className="text-stone-400">שלנו.</span>
          </h2>
          <div className="hidden md:block text-left">
            <p className="text-stone-500 font-sans text-sm max-w-xs">
              פתרונות מלאים לחיפוי הרצפה בבית ובחוץ.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="reveal group relative h-[450px] overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/60 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent opacity-90"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-4xl font-serif text-white/10 absolute top-6 left-6 font-bold">{service.id}</span>
                
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-bronze-400 text-xs font-bold tracking-widest uppercase mb-2 block">{service.subtitle}</span>
                  <h3 className="text-2xl font-serif mb-3 leading-tight group-hover:text-bronze-200 transition-colors">{service.title}</h3>
                  <p className="text-stone-300 font-sans font-light text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-white/30 pb-1 w-fit group-hover:border-bronze-500 transition-colors">
                    לפרטים <ArrowLeft className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};