"use client";

import { motion } from "framer-motion";
import { Brain, DollarSign, Zap, UserCheck } from "lucide-react";

const reasons = [
  {
    icon: <UserCheck className="w-8 h-8 text-[#00f0ff]" />,
    title: "1-on-1 Personal Attention",
    description: "You work directly with Abhishek — a Fullstack AI Engineer. No middlemen, no juniors assigned to your project."
  },
  {
    icon: <Brain className="w-8 h-8 text-[#7c3aed]" />,
    title: "End-to-End AI Expertise",
    description: "From graphic design to SaaS apps, RAG chatbots to voice agents — one person who can build everything you need."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-[#00f0ff]" />,
    title: "Built for Indian Budgets",
    description: "No ₹5 lakh quotes for a chatbot. We deliver premium AI solutions at prices that make sense for Indian businesses."
  },
  {
    icon: <Zap className="w-8 h-8 text-[#7c3aed]" />,
    title: "Delivery in Days, Not Months",
    description: "Zero corporate overhead means your project starts immediately and ships fast. Most projects live in 2-4 weeks."
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
              Why Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">Abhi.ai</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-4"
            >
              I'm Abhishek Sharma — an AI/ML Engineer certified by Stanford, Google, and AWS. I've built everything from health AI assistants (featured in Patrika newspaper) to enterprise voice agents.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-400 text-lg mb-8"
            >
              My mission: <strong className="text-white">help every Indian business — from a single-person shop to an MNC — harness AI at an affordable price</strong> and turn their growth dreams into reality.
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
