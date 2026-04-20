"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradientText: string;
}

export default function ServiceTemplate({
  title,
  subtitle,
  description,
  features,
  gradientText,
}: ServiceTemplateProps) {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
            {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">{gradientText}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">{subtitle}</p>
          <div className="glassmorphism-dark p-8 rounded-3xl border border-white/10 mb-12 text-left">
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              {description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-[#00f0ff]"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-[#00f0ff] text-black hover:bg-white hover:text-black transition-all px-8 h-14 text-lg font-bold">
                Get Started Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white px-8 h-14 text-lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
