import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does FUELabc save me money?",
    answer: "We analyze route topography, traffic patterns, and distance to calculate the most fuel-efficient route, not just the fastest one. We also compare fuel station prices along your way."
  },
  {
    question: "Is the app free to use?",
    answer: "Yes, FUELabc is free to download and includes core navigation and routing features. We offer a Premium tier for advanced historical analytics and personalized driving coaching."
  },
  {
    question: "Does it work with all vehicle types?",
    answer: "Currently, we support petrol, diesel, CNG, and hybrid cars. Motorcycle support is in beta testing."
  },
  {
    question: "Is GPS required all the time?",
    answer: "Yes, we need GPS to provide real-time navigation and speed analysis to calculate your fuel efficiency accurately."
  },
  {
    question: "What about my privacy data?",
    answer: "We value your privacy. Your location data is used strictly for navigation and app functionality. We do not sell your personal movement history to third parties."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 overflow-hidden transition-colors duration-300">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-50 dark:border-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};