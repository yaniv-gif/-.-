import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 border-b border-stone-800 pb-10">
            
            {/* Brand */}
            <div className="max-w-sm text-center md:text-right">
                <div className="mb-6 flex justify-center md:justify-start">
                  <Logo variant="horizontal" lightMode={true} />
                </div>

                <p className="text-stone-400 font-sans leading-relaxed mb-6">
                    מומחים בחיפוי רצפה, דקים ופרגולות.
                    עבודה מקצועית, שירות אדיב ומחיר הוגן.
                </p>
                <div className="inline-block px-4 py-2 bg-stone-800 rounded text-sm text-stone-300">
                    אזור שירות: השרון והמרכז
                </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-6 md:items-start items-center">
                <h4 className="text-white font-bold text-lg">דברו איתנו</h4>
                
                <a href="tel:0500000000" className="flex items-center gap-4 hover:text-white transition-colors">
                    <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-bronze-500">
                        <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-xl dir-ltr">050-000-0000</span>
                </a>
                
                <a href="mailto:info@jericho.co.il" className="flex items-center gap-4 hover:text-white transition-colors">
                    <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-bronze-500">
                        <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg">info@jericho.co.il</span>
                </a>
            </div>
        </div>
        
        <div className="text-center text-stone-600 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
            <p>&copy; {new Date().getFullYear()} Jericho Espinoza.</p>
            <p>בניית אתרים: Apex Web Architects</p>
        </div>
      </div>
    </footer>
  );
};