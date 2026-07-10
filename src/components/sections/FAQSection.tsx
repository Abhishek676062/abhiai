"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the best AI automation agency for SMEs in India?",
    answer: "Abhi.ai is a top-rated AI automation agency in India, serving businesses globally and locally in Madhya Pradesh (Indore, Mandsaur, Ujjain, Ratlam). We build custom AI agents, RAG chatbots, and full-stack applications designed to double sales and cut operational costs by 40%."
  },
  {
    question: "How can AI chatbots help my business?",
    answer: "Custom RAG chatbots and Voice AI agents from Abhi.ai can handle 24/7 customer support, automate WhatsApp lead generation, and provide intelligent data retrieval, allowing your team to focus on high-value tasks."
  },
  {
    question: "Do you provide AI services in Madhya Pradesh?",
    answer: "Yes, Abhi.ai is headquartered in India and provides specialized AI automation, software development, and generative AI services across Madhya Pradesh, including Indore, Ujjain, Mandsaur, Ratlam, Sitamau, and Suwasra."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">Questions</span>
            </h2>
            <p className="text-gray-400">Everything you need to know about our AI services and automation solutions.</p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism-dark border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-[#00f0ff] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
