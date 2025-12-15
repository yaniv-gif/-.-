import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: 'parquet'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission - In real app, connect to EmailJS or Backend
    setTimeout(() => {
      setSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="lead-form" className="py-20 bg-bronze-50 border-t border-bronze-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-sm shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Copy & Promise */}
          <div className="w-full md:w-2/5 bg-stone-900 p-10 text-white flex flex-col justify-center relative overflow-hidden">
             {/* Decorative Circle */}
             <div className="absolute -top-20 -left-20 w-60 h-60 bg-bronze-600/20 rounded-full blur-3xl"></div>
             
             <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">בואו נתחיל.</h3>
             <p className="text-stone-300 mb-8 font-light relative z-10 leading-relaxed">
               השאירו פרטים לקבלת שיחת ייעוץ קצרה והצעת מחיר מסודרת.
               <br/><br/>
               <span className="text-bronze-400 font-bold">ללא התחייבות וללא אותיות קטנות.</span>
             </p>
             <ul className="space-y-4 text-sm relative z-10">
               <li className="flex items-center gap-3">
                 <div className="w-6 h-6 rounded-full bg-bronze-900 flex items-center justify-center text-bronze-400">1</div>
                 <span>שיחה קצרה להבנת הצורך</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-6 h-6 rounded-full bg-bronze-900 flex items-center justify-center text-bronze-400">2</div>
                 <span>תיאום מדידה בביתכם</span>
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-6 h-6 rounded-full bg-bronze-900 flex items-center justify-center text-bronze-400">3</div>
                 <span>הצעת מחיר סופית וברורה</span>
               </li>
             </ul>
          </div>

          {/* Right Side: The Form */}
          <div className="w-full md:w-3/5 p-10 relative">
            {submitted ? (
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-stone-900 mb-2">הפרטים התקבלו!</h3>
                <p className="text-stone-500">תודה {formData.name}, נחזור אליך בהקדם האפשרי.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2">שם מלא</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 outline-none transition-all"
                    placeholder="ישראל ישראלי"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-2">טלפון נייד</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 outline-none transition-all"
                      placeholder="050-0000000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-bold text-stone-700 mb-2">עיר מגורים</label>
                    <input 
                      type="text" 
                      id="city"
                      name="city"
                      required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 outline-none transition-all"
                      placeholder="לדוגמה: ראשון לציון"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-stone-700 mb-2">מה מעניין אותך?</label>
                  <select 
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500 outline-none transition-all text-stone-600"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="parquet">התקנת פרקט (למינציה/עץ)</option>
                    <option value="deck">דק לגינה / מרפסת</option>
                    <option value="carpet">שטיח מקיר לקיר</option>
                    <option value="repair">תיקון / חידוש</option>
                    <option value="consultation">ייעוץ כללי</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-bronze-600 text-white font-bold py-4 rounded-sm hover:bg-bronze-700 transition-colors shadow-lg flex items-center justify-center gap-2 mt-4"
                >
                  <span>קבלת הצעת מחיר</span>
                  <Send className="w-4 h-4" />
                </button>
                
                <p className="text-center text-xs text-stone-400 mt-4">
                  * הפרטים שלך בטוחים איתנו ולא יועברו לצד ג'.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};