"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, PiggyBank } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const results = [
  {
    icon: <TrendingUp className="w-12 h-12 text-[#00f0ff]" />,
    title: "Get More Customers",
    description: "Our digital systems are optimized for conversion, turning casual visitors into paying clients.",
    metric: "+40%"
  },
  {
    icon: <Clock className="w-12 h-12 text-[#7c3aed]" />,
    title: "Automate Your Work",
    description: "Replace repetitive manual tasks with smart AI workflows, freeing up your team's time.",
    metric: "20hrs/wk"
  },
  {
    icon: <PiggyBank className="w-12 h-12 text-[#00f0ff]" />,
    title: "Save Time & Cost",
    description: "Reduce operational overhead by deploying AI agents instead of expanding headcount.",
    metric: "-30%"
  }
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed]/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
            Real <span className="text-[#00f0ff]">Business Impact</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don't just build websites and bots; we engineer systems that directly impact your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="glassmorphism-dark border-white/5 text-center h-full flex flex-col items-center p-8 hover:neon-border-cyan transition-all duration-300">
                <div className="mb-6">{result.icon}</div>
                <h3 className="text-5xl font-bold text-white mb-2 font-heading">{result.metric}</h3>
                <h4 className="text-xl font-semibold text-gray-200 mb-4">{result.title}</h4>
                <p className="text-gray-400 text-sm">{result.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
