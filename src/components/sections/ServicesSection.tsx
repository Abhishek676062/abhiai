"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Code2, GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const services = [
  {
    title: "Go Digital",
    description: "Establish a strong online presence to attract local customers.",
    icon: <Globe className="w-10 h-10 text-[#00f0ff]" />,
    features: ["Google Business Profile setup", "Social media management", "Website development", "WhatsApp automation"],
  },
  {
    title: "AI Business Solutions",
    description: "Automate customer support and internal workflows.",
    icon: <Cpu className="w-10 h-10 text-[#7c3aed]" />,
    features: ["AI chatbot (RAG-based)", "Voice AI agents", "Automation workflows", "AI system integration"],
  },
  {
    title: "Full Stack + AI",
    description: "Custom software tailored to your unique business needs.",
    icon: <Code2 className="w-10 h-10 text-[#00f0ff]" />,
    features: ["Custom SaaS apps", "AI-powered dashboards", "CRM/ERP with AI", "API integrations"],
  },
  {
    title: "Career Accelerator",
    description: "Level up your tech career with AI tools and preparation.",
    icon: <GraduationCap className="w-10 h-10 text-[#7c3aed]" />,
    features: ["Resume (ATS optimized)", "Portfolio building", "Mock interviews", "AI tools training"],
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to modernize your business, save time, and drive massive growth through intelligent automation.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={item} className="h-full">
              <Card className="h-full glassmorphism-dark border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <CardHeader>
                  <div className="mb-4 bg-black/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-400 mb-6 text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contact" className="w-full">
                    <Button variant="ghost" className="w-full text-[#00f0ff] hover:text-white hover:bg-[#00f0ff]/20">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
