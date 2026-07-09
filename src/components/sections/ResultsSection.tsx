"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Clock, PiggyBank, Users, Bot } from "lucide-react";
import { Card } from "../ui/card";

/* ─── Animated Counter Component ─── */
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-white font-heading tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

/* ─── ROI Metrics ─── */
const metrics = [
  {
    icon: <TrendingUp className="w-8 h-8 text-[#00f0ff]" />,
    title: "Lead Conversion Boost",
    description: "AI engages users instantly 24/7, turning missed inquiries into paying customers.",
    value: 60, suffix: "%", prefix: "+"
  },
  {
    icon: <Clock className="w-8 h-8 text-[#7c3aed]" />,
    title: "Hours Saved per Week",
    description: "Replace repetitive manual admin tasks with smart, autonomous AI workflows.",
    value: 40, suffix: " hrs", prefix: ""
  },
  {
    icon: <PiggyBank className="w-8 h-8 text-[#00f0ff]" />,
    title: "Operations Cost Cut",
    description: "Handle 10x more customers without hiring a massive support team.",
    value: 80, suffix: "%", prefix: "-"
  }
];

/* ─── Human vs AI Comparison ─── */
const comparison = [
  { category: "Availability", human: "9 AM - 6 PM", ai: "24/7, 365 days" },
  { category: "Response Time", human: "5-30 minutes", ai: "Instant (<1 sec)" },
  { category: "Monthly Cost (5 agents)", human: "₹1,50,000+", ai: "₹14,999" },
  { category: "Sick Leave / Holidays", human: "Yes", ai: "Never" },
  { category: "Handles Multiple Queries", human: "1 at a time", ai: "1000+ at once" },
  { category: "Scalability", human: "Hire more staff", ai: "Same cost" },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 relative overflow-hidden bg-black/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed]/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">ROI</span> Speaks for Itself
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don't sell hype. Every system we build is engineered to pay for itself in weeks, not months.
          </p>
        </div>

        {/* Animated Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="glassmorphism-dark border-white/5 text-center h-full flex flex-col items-center p-8 hover:border-[#00f0ff]/30 transition-all duration-300">
                <div className="mb-4 w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center">
                  {metric.icon}
                </div>
                <AnimatedCounter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                <h4 className="text-lg font-semibold text-[#00f0ff] mt-3 mb-2">{metric.title}</h4>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Human vs AI Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 font-heading">
            <Users className="inline w-6 h-6 mr-2 text-gray-400" />Human Team vs <Bot className="inline w-6 h-6 mx-2 text-[#00f0ff]" />AI Agent
          </h3>

          <div className="glassmorphism-dark rounded-2xl border border-white/10 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
              <div className="p-4 text-sm font-semibold text-gray-400">Category</div>
              <div className="p-4 text-sm font-semibold text-gray-400 text-center">👤 Human</div>
              <div className="p-4 text-sm font-semibold text-[#00f0ff] text-center">🤖 AI Agent</div>
            </div>
            {/* Table Rows */}
            {comparison.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx < comparison.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/[0.02] transition-colors`}>
                <div className="p-4 text-sm text-white font-medium">{row.category}</div>
                <div className="p-4 text-sm text-gray-400 text-center">{row.human}</div>
                <div className="p-4 text-sm text-[#00f0ff] font-semibold text-center">{row.ai}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs mt-4">
            * Based on average Indian market rates for 5-person support team vs. Abhi.ai Growth plan
          </p>
        </motion.div>
      </div>
    </section>
  );
}
