import React, { useState } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "וילה הרצליה פיתוח",
    category: "פישבון אלון צרפתי",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 2,
    title: "פנטהאוז נווה צדק",
    category: "חיפוי טקסטיל יוקרתי",
    image: "https://images.unsplash.com/photo-1574872658804-9a8c6cb41398?q=80&w=1600&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 3,
    title: "דופלקס רמת אביב",
    category: "רסטורציה ושימור",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1600&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 4,
    title: "אחוזה בכפר שמריהו",
    category: "דק איפאה ושבילי חוץ",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1600&auto=format&fit=crop",
    year: "2024"
  }
];

export const VisualProof: React.FC = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-24 bg-white border-b border-stone-200">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 lg:min-h-[600px] items-center">
          
          {/* Left Side (in code logic) -> Visually RIGHT side in RTL */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center order-2 lg:order-1 reveal">
            <div className="mb-12">
               <span className="text-bronze-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                תיק עבודות
              </span>
              <h2 className="text-4xl font-serif text-stone-900 leading-tight">
                בתים נבחרים.
              </h2>
              <div className="h-px w-16 bg-stone-900 mt-6"></div>
            </div>

            <div className="space-y-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onMouseEnter={() => setActiveId(project.id)}
                  onClick={() => setActiveId(project.id)}
                  // FIXED: border-r-2 (Right Border) for RTL, pr-6 (Right Padding)
                  className={`group cursor-pointer transition-all duration-500 border-r-2 pr-6 ${activeId === project.id ? 'border-bronze-500' : 'border-stone-100 hover:border-stone-300'}`}
                >
                  <div className={`text-xs font-bold tracking-widest uppercase mb-2 transition-colors duration-300 ${activeId === project.id ? 'text-bronze-600' : 'text-stone-300'}`}>
                    {project.category}
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-300 flex items-center gap-4 ${activeId === project.id ? 'text-stone-900' : 'text-stone-200 group-hover:text-stone-400'}`}>
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-stone-100">
               <a 
                href={`https://wa.me/972543962871?text=${encodeURIComponent("היי, אשמח לראות עוד פרויקטים")}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-bronze-600 transition-colors group"
              >
                <span>לכל הפרויקטים</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side (in code logic) -> Visually LEFT side in RTL */}
          {/* Responsive heights: 300px on mobile, 600px on desktop */}
          <div className="w-full lg:w-2/3 h-[300px] md:h-[400px] lg:h-[600px] relative rounded-sm overflow-hidden shadow-2xl shadow-stone-200 order-1 lg:order-2 reveal delay-100">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${activeId === project.id ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Subtle Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                
                <div className="absolute bottom-8 right-8 text-white translate-y-4 opacity-0 transition-all duration-700 delay-300 pointer-events-none" style={{ opacity: activeId === project.id ? 1 : 0, transform: activeId === project.id ? 'translateY(0)' : 'translateY(20px)' }}>
                   <div className="flex items-center gap-2 mb-2 text-stone-300 text-xs font-bold tracking-widest uppercase">
                      <MapPin className="w-4 h-4 text-bronze-400" />
                      {project.year}
                   </div>
                   <div className="text-3xl font-serif">
                     {project.title}
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};