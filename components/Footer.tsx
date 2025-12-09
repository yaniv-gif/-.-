import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-200 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20 border-b border-white/10 pb-12">
            
            {/* Brand */}
            <div className="reveal max-w-sm">
                <h3 className="text-4xl font-serif text-white mb-6">ג'ריקו אספינוזה</h3>
                <p className="text-stone-400 font-sans font-light leading-relaxed mb-8">
                    התקנת פרקטים ושטיחים בסטנדרט בינלאומי.
                    אנו משרתים אדריכלים, מעצבי פנים ולקוחות פרטיים שלא מתפשרים על פחות משלמות.
                </p>
                <div className="flex gap-4">
                  {/* Social placeholders could go here */}
                </div>
            </div>

            {/* Contact Details */}
            <div className="reveal delay-100 flex flex-col gap-8">
                <h4 className="text-white font-serif text-xl border-b border-bronze-500 w-fit pb-2">צור קשר</h4>
                
                <a href="tel:0500000000" className="flex items-center gap-4 hover:text-white transition-colors group">
                    <Phone className="w-5 h-5 text-bronze-500" strokeWidth={1.25} />
                    <span className="text-xl font-light ltr-text" dir="ltr">050-000-0000</span>
                </a>
                
                <a href="mailto:info@jericho.co.il" className="flex items-center gap-4 hover:text-white transition-colors group">
                    <Mail className="w-5 h-5 text-bronze-500" strokeWidth={1.25} />
                    <span className="text-xl font-light">info@jericho.co.il</span>
                </a>

                 <div className="flex items-center gap-4 text-stone-400">
                    <MapPin className="w-5 h-5 text-bronze-500" strokeWidth={1.25} />
                    <span className="text-lg font-light">תל אביב והמרכז</span>
                </div>
            </div>
        </div>
        
        <div className="text-center text-stone-600 font-sans text-xs tracking-widest uppercase reveal delay-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Jericho Espinoza. כל הזכויות שמורות.</p>
            <p className="opacity-50">עיצוב: Apex Web Architects</p>
        </div>
      </div>
    </footer>
  );
};