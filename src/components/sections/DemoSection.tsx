"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

/* Keyword → response map for a smarter demo */
const AI_RESPONSES: Record<string, string> = {
  "chatbot": "Great question! I build custom RAG chatbots that learn from YOUR documents — product manuals, FAQs, pricing sheets. They answer customer queries 24/7 on your website or WhatsApp, reducing your support load by up to 80%. Pricing starts at ₹14,999/mo.",
  "whatsapp": "WhatsApp automation is our most popular service! I can build a bot that handles appointment bookings, order tracking, FAQ responses, and even sends automated follow-ups. One clinic we helped reduced missed appointments by 60%.",
  "voice": "Our AI Voice Agents can handle sales calls, customer support, and appointment scheduling with a natural Indian accent. They work 24/7, never take sick leave, and cost a fraction of a human team.",
  "price": "Our pricing is transparent: Starter plans from ₹4,999/mo for digital presence, Growth plans from ₹14,999/mo with AI automation, and custom Enterprise AI projects from ₹29,999+. We always give a free AI audit first!",
  "cost": "Our pricing is transparent: Starter plans from ₹4,999/mo for digital presence, Growth plans from ₹14,999/mo with AI automation, and custom Enterprise AI projects from ₹29,999+. We always give a free AI audit first!",
  "website": "I build high-conversion websites using Next.js and React — optimized for speed, SEO, and lead generation. Unlike template builders, every site is custom-coded for your brand and business goals.",
  "saas": "I build custom SaaS applications from scratch — dashboards, CRMs, internal tools — all powered by AI. Think of it as your own software, tailored exactly to how your business operates.",
  "who": "I'm Abhishek Sharma, a Fullstack AI Engineer certified by Stanford, Google, and AWS. I've been featured in Patrika newspaper for my Health AI project. I personally handle every project, so you get expert-level attention.",
  "hello": "Hello! Welcome to Abhi.ai. I can help you understand how AI automation can save you time and increase your revenue. Try asking about chatbots, WhatsApp automation, pricing, or voice agents!",
  "hi": "Hi there! I'm the Abhi.ai demo assistant. Ask me anything — about our services, pricing, what kind of AI we build, or how we can help your specific business!",
};

const DEFAULT_RESPONSE = "That's a great question! At Abhi.ai, I specialize in building custom AI solutions — from chatbots and voice agents to full SaaS applications. Every project is unique. Try asking about 'chatbot', 'WhatsApp automation', 'pricing', or 'voice agent' to see specific answers!";

function getAIResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  for (const [keyword, response] of Object.entries(AI_RESPONSES)) {
    if (lower.includes(keyword)) return response;
  }
  return DEFAULT_RESPONSE;
}

const MOCK_MESSAGES = [
  { role: "ai", text: "Hi! I'm the Abhi.ai Smart Assistant 🤖 I can answer questions about our AI services, pricing, and how we can help your business grow. Try asking about chatbots, WhatsApp automation, or our pricing!" },
];

export default function DemoSection() {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "ai", 
        text: getAIResponse(userMsg) 
      }]);
      setIsTyping(false);
    }, delay);
  };

  return (
    <section id="demo" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7c3aed]/20 text-[#7c3aed] mb-6">
                <Bot size={16} />
                <span className="text-sm font-medium">Interactive Demo</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                See What an <span className="text-[#00f0ff]">AI Chatbot</span> Can Do
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                This is a simplified demo — the real bots we build use your actual company documents (RAG) and integrate with WhatsApp, websites, and voice systems. Try asking questions!
              </p>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">✓</div>
                  Try asking: "What is your pricing?"
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">✓</div>
                  Try asking: "Tell me about WhatsApp automation"
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">✓</div>
                  Try asking: "Can you build a voice agent?"
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Chatbot UI */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glassmorphism-dark rounded-2xl border border-white/10 overflow-hidden shadow-2xl neon-border-purple"
            >
              <div className="bg-black/60 p-4 border-b border-white/10 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm font-medium text-gray-300">Abhi.ai Smart Demo</span>
                <span className="ml-auto text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">● Live</span>
              </div>
              
              <div className="h-[400px] p-6 overflow-y-auto flex flex-col gap-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-700' : 'bg-gradient-to-tr from-[#00f0ff] to-[#7c3aed]'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} className="text-black" />}
                    </div>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-gray-800 text-white rounded-tr-none' 
                        : 'bg-[#00f0ff]/10 text-gray-200 border border-[#00f0ff]/20 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-tr from-[#00f0ff] to-[#7c3aed]">
                      <Bot size={16} className="text-black" />
                    </div>
                    <div className="bg-[#00f0ff]/10 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                      <div className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-black/60 border-t border-white/10">
                <form onSubmit={handleSend} className="flex gap-2">
                  <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about chatbots, pricing, WhatsApp..." 
                    className="bg-black/50 border-white/10 focus-visible:ring-[#00f0ff]"
                  />
                  <Button type="submit" size="icon" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white" disabled={isTyping}>
                    <Send size={18} />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
