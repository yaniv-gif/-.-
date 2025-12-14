import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        className="w-full flex items-center justify-between py-6 text-right focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-serif font-medium transition-colors duration-300 ${isOpen ? 'text-bronze-600' : 'text-stone-900'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-bronze-600 border-bronze-600 text-white' : 'bg-white border-stone-200 text-stone-400 group-hover:border-bronze-600 group-hover:text-bronze-600'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-stone-500 font-sans font-light leading-relaxed pl-12">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "האם צריך לפנות את כל הבית לפני ההתקנה?",
      answer: "לא חובה. בשיטת העבודה שלנו אנחנו עובדים חדר-חדר, כך שאתם לא חייבים לעזוב את הבית. אנחנו גם משתמשים בשואבים תעשייתיים המחוברים לכלי החיתוך, כך שכמעט ולא מצטבר אבק. אפשר להמשיך לגור בבית בזמן ההתקנה ללא הפרעה גדולה."
    },
    {
      question: "האם אתם מספקים גם את החומרים (פרקט או שטיח)?",
      answer: "אנחנו מתמקדים בעבודה ובהתקנה מקצועית – לא במכירת חומרים. עם זאת, אנחנו בקשר עם ספקי פרקט ושטיח מהטובים בארץ (כמו אבי חזקיה, אלוני, מודי ועוד). נשמח לחבר אתכם לספק אמין, לייעץ בבחירת החומר ואף לעזור להשיג מחיר קבלן. כמובן, נתקין גם פרקט או שטיח שאתם תספקו לפי בחירתכם."
    },
    {
      question: "אם חלק מהפרקט נפגע, חייבים להחליף את כל הרצפה?",
      answer: "ברוב המקרים ממש לא. אם אזור קטן נפגע (למשל ממים או שריטות), אפשר להחליף רק את הלוחות הפגומים או לתקן מקומית בלי לפרק את כל הרצפה. בפרקט עץ מלא ניתן לפעמים לשייף ולחדש את השכבה העליונה במקום החלפה. אנחנו תמיד נציע את הפתרון הכי חסכוני ונכון לכם – רק מה שצריך, ולא יותר."
    },
    {
      question: "כמה זמן אורכת עבודה ממוצעת?",
      answer: "דירת 100 מ\"ר סטנדרטית (התקנת פרקט) אורכת בערך יומיים עד שלושה ימי עבודה מלאים – וזה כולל גם התקנת פאנלים וספים. אנחנו מתחייבים ללוחות זמנים מדויקים ולא עוזבים את האתר עד לסיום מושלם של הפרויקט."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">שאלות נפוצות</h2>
          <div className="w-16 h-1 bg-bronze-500 mx-auto"></div>
        </div>
        
        <div className="bg-white shadow-xl shadow-stone-200/50 rounded-sm p-8 reveal delay-100 border-t-4 border-bronze-500">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};