import React from 'react';
import { MapPin, ArrowLeft } from 'lucide-react';

export const VisualProof: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "וילה פרטית, הרצליה פיתוח",
      category: "פרקט פישבון אלון אירופאי",
      // Image: Grand Living Room
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
      // FIX: Changed h-[500px] to h-[350px] md:h-[500px] for mobile optimization
      className: "col-span-1 md:col-span-2 row-span-2 h-[350px] md:h-[500px]"
    },
    {
      id: 2,
      title: "דופלקס, רמת אביב ג'",
      category: "חיפוי מדרגות עץ אלון",
      // Image: Wooden Stairs / High end interior
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
      className: "col-span-1 h-[240px]"
    },
    {
      id: 3,
      title: "פנטהאוז, נווה צדק",
      category: "חידוש דק איפאה",
      // Image: Rooftop Deck
      image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop",
      className: "col-span-1 h-[240px]"
    }
  ];

  // Specific WhatsApp message for Portfolio request
  const portfolioMessage = "היי ג'ריקו, אשמח לראות את תיק העבודות המלא שלך"; 
  const waLink = `https://wa.me/972500000000?text=${encodeURIComponent(portfolioMessage)}`;

  return (
    <section className="py-16 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
          <div>
            <div className="w-12 h-1 bg-bronze-500 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              פרויקטים<br/>
              <span className="text-stone-400">נבחרים.</span>
            </h2>
          </div>
          <p className="text-stone-500 font-sans font-light mt-4 md:mt-0 max-w-sm text-left rtl:text-right">
            גלריה חלקית של עבודות בבתים פרטיים ומשרדים שביקשו סטנדרט אחר.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`relative group overflow-hidden rounded-sm cursor-pointer reveal ${project.className}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors duration-500"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/95 backdrop-blur-sm p-4 border-r-4 border-bronze-500 shadow-xl max-w-fit">
                  <div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-widest font-bold mb-1">
                    <MapPin className="w-3 h-3 text-bronze-500" />
                    {project.title}
                  </div>
                  <div className="text-lg font-serif text-stone-900 font-medium">
                    {project.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal delay-300">
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center gap-3 text-stone-900 font-bold border border-stone-300 px-8 py-4 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 uppercase tracking-widest text-sm"
          >
            <span>לצפייה בתיק העבודות המלא בוואטסאפ</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-xs text-stone-400 font-light tracking-wide">
            קובץ PDF נשלח מיידית
          </p>
        </div>

      </div>
    </section>
  );
};