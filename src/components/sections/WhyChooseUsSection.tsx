"use client";

import { motion } from "framer-motion";
import { Brain, DollarSign, Zap, Target } from "lucide-react";

const reasons = [
  {
    icon: <Brain className="w-8 h-8 text-[#00f0ff]" />,
    title: "AI Expertise",
    description: "Deep knowledge of RAG, Agents, and LLMs to build cutting-edge solutions."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-[#7c3aed]" />,
    title: "Affordable Pricing",
    description: "Premium tech solutions designed specifically for SME budgets."
  },
  {
    icon: <Zap className="w-8 h-8 text-[#00f0ff]" />,
    title: "Fast Delivery",
    description: "Agile development process ensures your system is up and running in weeks, not months."
  },
  {
    icon: <Target className="w-8 h-8 text-[#7c3aed]" />,
    title: "Real Business Impact",
    description: "Everything we build is focused on ROI: getting leads, saving time, increasing revenue."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 font-heading"
            >
              Why Partner With <span className="text-[#7c3aed]">Abhi.ai</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-8"
            >
              Led by Abhishek Sharma, an AI/ML Engineer and Generative AI Expert, our team bridges the gap between advanced artificial intelligence and practical business applications.
            </motion.p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="bg-black/50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 border border-white/5">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
