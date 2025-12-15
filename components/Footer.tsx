import React from 'react';
import { Phone, Mail, Instagram, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-stone-950 text-stone-400 pt-24 pb-12 relative overflow-hidden">
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-stone-900 via-bronze-900/40 to-stone-900"></div>

      <div className="container mx-auto px-6">
        
        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
            
            {/* Column 1: Brand Manifesto (RTL Right) */}
            <div className="md:col-span-5 flex flex-col items-start text-right">
                <div className="mb-8">
                  <Logo variant="horizontal" lightMode={true} />
                </div>
                <p className="text-stone-500 font-sans font-light leading-relaxed max-w-sm text-lg">
                  אנחנו מאמינים שרצפה היא לא רק משטח דריכה, אלא הבסיס לשקט הנפשי בבית. 
                  שילוב של אסתטיקה בינלאומית וביצוע ישראלי חסר פשרות.
                </p>
                <div className="mt-8 text-xs font-bold tracking-[0.2em] text-bronze-700 uppercase">
                  Est. 2010 • Tel Aviv
                </div>
            </div>

            {/* Column 2: The Concierge (Contact) */}
            <div className="md:col-span-4 md:pr-12">
                <span className="block text-white font-serif text-xl mb-8 border-b border-stone-800 pb-4 inline-block pr-8 pl-2">
                   תיאום ייעוץ
                </span>
                
                <div className="space-y-6">
                  {/* Phone - Updated */}
                  <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-stone-600 mb-1 block">ישיר למייסד</span>
                    <a href="tel:0543962871" className="flex items-center gap-3 text-stone-300 hover:text-bronze-400 transition-colors">
                        <span className="text-2xl font-serif dir-ltr group-hover:translate-x-1 transition-transform">054-396-2871</span>
                    </a>
                  </div>

                  {/* WhatsApp Integrated Elegant Link */}
                  <div className="group">
                     <a 
                      href="https://wa.me/972543962871" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-bronze-500 hover:text-white transition-colors uppercase tracking-widest border border-stone-800 px-4 py-2 rounded-sm hover:border-bronze-500 hover:bg-bronze-500/10"
                    >
                       <span>WhatsApp Concierge</span>
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-stone-600 mb-1 block">דואר אלקטרוני</span>
                    <a href="mailto:office@jericho-flooring.co.il" className="text-stone-300 hover:text-white transition-colors font-light">
                        office@jericho-flooring.co.il
                    </a>
                  </div>
                </div>
            </div>

            {/* Column 3: Social & Navigation */}
            <div className="md:col-span-3 flex flex-col justify-between h-full">
                <div>
                   <span className="block text-white font-serif text-xl mb-8 border-b border-stone-800 pb-4 inline-block pr-8 pl-2">
                     עקבו אחרינו
                   </span>
                   <a 
                     href="#" 
                     className="flex items-center gap-3 text-stone-500 hover:text-bronze-400 transition-colors group mb-4"
                   >
                     <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                     <span className="text-sm font-medium tracking-wide">Instagram Portfolio</span>
                   </a>
                </div>

                <button 
                  onClick={scrollToTop}
                  className="hidden md:flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-white transition-colors uppercase tracking-widest self-end mt-12 group"
                >
                  <span>חזרה למעלה</span>
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
        
        {/* Bottom Bar: Micro-Manifesto */}
        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600 font-sans tracking-wide">
            <p>&copy; {new Date().getFullYear()} Jericho Espinoza. All Rights Reserved.</p>
            <p className="opacity-50 hover:opacity-100 transition-opacity">
              Crafting Israeli Homes with Quiet Luxury.
            </p>
        </div>
      </div>
    </footer>
  );
};