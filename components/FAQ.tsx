
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
      answer: "לא חובה. בשיטת העבודה שלנו אנחנו יכולים לעבוד חדר-חדר. אנחנו משתמשים בשואבים תעשייתיים שמחוברים למסורים, כך שכמעט ואין אבק בבית, מה שמאפשר חיים בבית במקביל לשיפוץ."
    },
    {
      question: "האם אתם מספקים את הפרקט או השטיחים?",
      answer: "אנחנו מתמחים בביצוע והתקנה (עבודה). עם זאת, אנו עובדים בצמוד עם ספקי העץ והשטיחים המובילים בישראל (כמו אבי חזקיה, כרמל, אלוני ועוד). נוכל לחבר אתכם לספק, לסייע בבחירה ואף להשיג מחיר קבלן, או פשוט להתקין את החומר שכבר רכשתם."
    },
    {
      question: "מהו היתרון של מתיחת שטיחים על פני הדבקה?",
      answer: "הדבקה רגילה משתמשת בדבקים כימיים שמתפוררים עם השנים וגורמים לבועות. המתיחה האמריקאית משתמשת בקוצים היקפיים ומתיחה פיזיקלית. התוצאה: שטיח מתוח כמו תוף, ללא גלים, שמרגיש רך יותר (בגלל הספוג למטה) ומחזיק עשרות שנים."
    },
    {
      question: "כמה זמן אורכת עבודה ממוצעת?",
      answer: "דירת 100 מ\"ר סטנדרטית (פרקט) לוקחת כ-2 עד 3 ימי עבודה מלאים, כולל התקנת פאנלים וספים. התקנת שטיחים בחדר בודד אורכת מספר שעות בלבד. אנחנו מתחייבים ללוחות זמנים מדויקים ולא עוזבים את האתר עד לסיום מושלם."
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
