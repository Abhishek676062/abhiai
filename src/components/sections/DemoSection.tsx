"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const MOCK_MESSAGES = [
  { role: "ai", text: "Hi! I am the Abhi.ai Smart Assistant. I can answer questions about your business 24/7. What would you like to ask?" },
];

export default function DemoSection() {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: "user", text: input }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "ai", 
        text: "That's exactly what I'm built for! I use Retrieval-Augmented Generation (RAG) to instantly answer questions based on your specific company data. I help reduce support tickets by 80%." 
      }]);
      setIsTyping(false);
    }, 1500);
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
                Experience the Power of an <span className="text-[#00f0ff]">AI Chatbot</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Imagine having a customer support agent that never sleeps, knows everything about your business, and instantly replies to your customers. Try it yourself!
              </p>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">✓</div>
                  Answers from your custom data (RAG)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">✓</div>
                  Integrates with WhatsApp & Websites
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">✓</div>
                  Reduces manual work by up to 80%
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
                    placeholder="Ask about business..." 
                    className="bg-black/50 border-white/10 focus-visible:ring-[#00f0ff]"
                  />
                  <Button type="submit" size="icon" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white">
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
