"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfect for establishing a digital presence.",
    price: "₹4,999",
    features: [
      "Google Business Profile Setup",
      "Basic Landing Page",
      "Social Media Setup",
      "SEO Basics",
    ],
    popular: false
  },
  {
    name: "Growth",
    description: "Comprehensive marketing and digital footprint.",
    price: "₹14,999",
    features: [
      "Everything in Starter",
      "Multi-page Website",
      "WhatsApp Automation Basics",
      "Lead Generation Setup",
      "Monthly Analytics Report"
    ],
    popular: true
  },
  {
    name: "AI Smart Business",
    description: "Full AI automation to scale your operations.",
    price: "₹29,999",
    features: [
      "Everything in Growth",
      "Custom AI Chatbot (RAG)",
      "Advanced WhatsApp Bot",
      "Internal Workflow Automation",
      "Custom Dashboard integration",
      "24/7 Priority Support"
    ],
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. Upgrade anytime as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className={`relative h-full flex flex-col glassmorphism-dark transition-transform hover:-translate-y-2 duration-300 ${plan.popular ? 'border-[#00f0ff] shadow-[0_0_30px_rgba(0,240,255,0.15)]' : 'border-white/10'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <Badge className="bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] text-black font-bold border-none hover:opacity-90">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2 pt-8">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col pt-6">
                  <div className="text-center mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm">/mo</span>
                  </div>
                  
                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-gray-300">
                        <Check className="w-5 h-5 text-[#00f0ff] mr-3 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Link href="#contact" className="w-full">
                    <Button 
                      className={`w-full h-12 text-lg font-semibold transition-all ${
                        plan.popular 
                          ? 'bg-[#00f0ff] text-black hover:bg-white' 
                          : 'bg-white/10 text-white hover:bg-[#7c3aed]'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
