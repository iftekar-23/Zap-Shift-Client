import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      q: "How does this posture corrector work?",
      a: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    },
    { q: "Is it suitable for all ages and body types?", a: "Yes, it is designed to fit a wide range of people." },
    { q: "Does it really help with back pain and posture improvement?", a: "Consistent use can help improve posture and reduce discomfort." },
    { q: "Does it have smart features like vibration alerts?", a: "Some models include vibration alerts when slouching is detected." },
    { q: "How will I be notified when the product is back in stock?", a: "You will receive an email notification when it's available again." }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Question (FAQ)</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment,
          reduce pain, and strengthen your body with ease!
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              openIndex === i ? "bg-teal-50 border-teal-300" : "bg-white border-gray-200"
            }`}
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {faq.q}
              <ChevronDown
                className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>

            {openIndex === i && (
              <div className="px-4 pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 rounded-full text-white font-semibold shadow-md hover:opacity-90 transition-all duration-300 flex items-center gap-2 bg-primary">
          See More FAQ's
        </button>
      </div>
    </section>
  );
};

export default FAQ;
