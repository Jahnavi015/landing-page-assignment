import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide web design, development, and animation services using modern tools.",
  },
  {
    question: "Are your pages mobile-friendly?",
    answer:
      "Yes, we build fully responsive designs that adapt to all screen sizes.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach out via our contact form or email support@example.com.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-2xl mx-auto text-left space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800"
            >
              {faq.question}
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

