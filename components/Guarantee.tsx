import React from 'react';
import { Shield, FileText, Umbrella } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
           <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
             שקט נפשי. באחריות.
           </h2>
           <p className="text-stone-600">
             אנחנו מבינים את החשש מבעלי מקצוע. לכן בנינו מעטפת ביטחון שמבטיחה לכם עבודה בראש שקט, מהיום הראשון ועד שנים אחרי סיום הפרויקט.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-200 reveal hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-bronze-50 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-bronze-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">5 שנות אחריות</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              כל עבודת התקנה מגובה בכתב אחריות מלא ל-5 שנים. פרקטים שהתרוממו? ספים שהתנתקו? אנחנו מגיעים לתקן, ללא עלות וללא ויכוחים.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-200 reveal delay-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-bronze-50 rounded-full flex items-center justify-center mb-6">
              <Umbrella className="w-6 h-6 text-bronze-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">ביטוח צד ג' מלא</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              אנחנו עובדים בצורה בטוחה, אבל תמיד טוב להיות מכוסים. הפעילות שלנו מבוטחת בביטוח צד ג' ורכוש, כך שגם הבית שלכם וגם השכנים מוגנים מכל נזק.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-200 reveal delay-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-bronze-50 rounded-full flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-bronze-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">הצעת מחיר סגורה</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              מה שכתוב זה מה שמשלמים. אין "הפתעות" ביום ההתקנה, אין תוספות מחיר לא ברורות. השקיפות היא ערך עליון עבורנו.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};