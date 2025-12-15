import React from 'react';
import { Ruler, Award, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
           <div className="order-1 lg:order-2 relative reveal">
            <div className="absolute top-[-20px] right-[-20px] w-2/3 h-2/3 border-2 border-bronze-200 z-0"></div>
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1599696847727-941c7356645b?q=80&w=1000&auto=format&fit=crop" 
                alt="Jericho Espinoza" 
                className="w-full h-[400px] lg:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 lg:order-1 reveal">
            <span className="text-bronze-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              הסיפור שלי
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
              זה לא רק פרקט.<br/>
              <span className="text-stone-400">זו האובססיה שלי.</span>
            </h2>

            <div className="space-y-6 font-sans text-lg font-light leading-relaxed text-stone-600">
              <p>
                שמי ג'ריקו. נולדתי בפיליפינים, אך גדלתי והתחנכתי בישראל. השילוב הזה הוא מה שמגדיר את העבודה שלי: 
                לקחתי משם את המשמעת הבלתי מתפשרת והכבוד לחומר, ומכאן את החום, הישירות וההבנה העמוקה של הבית הישראלי.
              </p>
              <p>
                במשך עשור, פיתחתי סטנדרט עבודה משלי. אני לא קבלן ש"שולח פועלים" ונעלם. 
                אני נמצא שם בשטח, מוודא שכל חיבור הוא בקו האפס, שכל פנל יושב במילימטר, ושמילה זו מילה.
              </p>
              <p>
                עבורי, רצפה היא הקנבס של הבית. אם היא לא מושלמת, שום רהיט לא ייראה טוב עליה.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-stone-200/50">
               <div>
                 <Ruler className="w-8 h-8 text-bronze-500 mb-3" strokeWidth={1.5} />
                 <div className="text-sm font-bold text-stone-900">דיוק מילימטרי</div>
               </div>
               <div>
                 <Award className="w-8 h-8 text-bronze-500 mb-3" strokeWidth={1.5} />
                 <div className="text-sm font-bold text-stone-900">גימור אדריכלי</div>
               </div>
               <div>
                 <HeartHandshake className="w-8 h-8 text-bronze-500 mb-3" strokeWidth={1.5} />
                 <div className="text-sm font-bold text-stone-900">שירות אישי</div>
               </div>
            </div>
            
             <div className="mt-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="h-12 opacity-30" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};