"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Rajiv Mehta",
    role: "Clinic Owner, Indore",
    content: "Abhishek built a WhatsApp booking system for my clinic. We reduced missed appointments by 60% in the first month itself. My staff now spends zero time on phone bookings. The ROI was visible in the first week.",
    initials: "RM",
    result: "60% fewer missed appointments",
  },
  {
    name: "Priya Sharma",
    role: "D2C Brand Founder, Mumbai",
    content: "The AI chatbot handles 80% of our customer queries about products, shipping, and returns. It's like having a 24/7 customer support team for the price of a single employee. Highly recommended for any e-commerce business!",
    initials: "PS",
    result: "80% queries automated",
  },
  {
    name: "Amit Kumar",
    role: "SaaS Startup CTO, Bangalore",
    content: "We needed a custom RAG pipeline for our internal docs. Abhishek delivered a production-grade system in 3 weeks — faster than any agency we spoke to, at a fraction of the cost. His Stanford ML background really shows in the quality of work.",
    initials: "AK",
    result: "Delivered in 3 weeks",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/80">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f0ff] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
            Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">Results</span>, Real People
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it — hear from business owners who are saving time and making more money with our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="glassmorphism-dark border-white/10 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-[#7c3aed]/40 mb-4" />
                  <div className="flex gap-1 text-yellow-500 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6 flex-1 text-sm leading-relaxed">"{testimonial.content}"</p>
                  
                  {/* Result Badge */}
                  <div className="mb-6 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 w-fit">
                    <span className="text-[#00f0ff] text-xs font-semibold">✦ {testimonial.result}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-[#7c3aed]">
                      <AvatarFallback className="bg-gradient-to-br from-[#7c3aed] to-[#00f0ff] text-white font-bold text-sm">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
