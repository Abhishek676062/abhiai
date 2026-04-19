"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks for your interest! We will contact you shortly.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-black/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl overflow-hidden glassmorphism-dark flex flex-col md:flex-row">
          
          {/* Left: Info */}
          <div className="md:w-2/5 p-10 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] border-r border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4 font-heading">Let's Build the <span className="text-[#00f0ff]">Future</span></h3>
            <p className="text-gray-400 mb-8">
              Book a free consultation to discuss how AI can transform your business operations and accelerate your growth.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/20 flex items-center justify-center text-[#7c3aed]">
                  <Phone size={18} />
                </div>
                <span>+91 95756 76062</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">
                  <Mail size={18} />
                </div>
                <a href="mailto:shabhishek055@gmail.com" className="hover:text-white">shabhishek055@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <MapPin size={18} />
                </div>
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:w-3/5 p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Your Name</label>
                  <Input required placeholder="John Doe" className="bg-black/50 border-white/10 focus-visible:ring-[#00f0ff]" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Business Name</label>
                  <Input required placeholder="ACME Corp" className="bg-black/50 border-white/10 focus-visible:ring-[#00f0ff]" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email Address</label>
                <Input type="email" required placeholder="john@example.com" className="bg-black/50 border-white/10 focus-visible:ring-[#00f0ff]" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Your Requirement</label>
                <Textarea required placeholder="I'm interested in an AI chatbot for my website..." className="min-h-[120px] bg-black/50 border-white/10 focus-visible:ring-[#00f0ff]" />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 mt-4 bg-[#00f0ff] text-black hover:bg-white font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
              >
                {isSubmitting ? "Sending..." : "Book Free Consultation"}
                {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
