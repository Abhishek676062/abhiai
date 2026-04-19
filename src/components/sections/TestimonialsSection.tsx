"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajiv M.",
    role: "Clinic Owner",
    content: "Abhi.ai built an automated WhatsApp booking system for my clinic. We've reduced missed appointments by 60% and I save hours of manual work every week.",
    initials: "RM"
  },
  {
    name: "Priya S.",
    role: "Retail Store Manager",
    content: "The AI chatbot handles 80% of our customer queries about stock and timings. It's like having a 24/7 employee. Highly recommended!",
    initials: "PS"
  },
  {
    name: "Amit K.",
    role: "Startup Founder",
    content: "Abhishek and his team delivered a custom AI dashboard that completely transformed how we analyze our user data. Professional, fast, and top-tier quality.",
    initials: "AK"
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
            Trusted by <span className="text-[#00f0ff]">Businesses</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about the impact of our AI solutions.
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
                <CardContent className="p-8">
                  <div className="flex gap-1 text-yellow-500 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-8">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-[#7c3aed]">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gray-800 text-white">{testimonial.initials}</AvatarFallback>
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
