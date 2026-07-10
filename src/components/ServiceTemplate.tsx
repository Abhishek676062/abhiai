"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const currentUrl = `https://www.abhiai.in${pathname}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.abhiai.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": currentUrl
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${title} ${gradientText}`,
    "serviceType": title,
    "description": description,
    "provider": {
      "@id": "https://www.abhiai.in/#organization"
    },
    "url": currentUrl,
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "offers": {
      "@type": "Offer",
      "price": "Custom",
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm font-medium text-gray-400 mb-8 max-w-4xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#00f0ff]">Services</span>
          <span>/</span>
          <span className="text-white">{gradientText}</span>
        </nav>
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
          <article className="glassmorphism-dark p-8 rounded-3xl border border-white/10 mb-12 text-left">
            <div className="mb-6 flex justify-between items-center text-xs text-gray-500 font-medium">
              <span>Abhi.ai Technical Services</span>
              <span>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
            
            <p className="text-gray-200 leading-relaxed mb-6 text-lg border-l-4 border-[#00f0ff] pl-4 bg-[#00f0ff]/5 py-2 pr-2 rounded-r">
              <strong>What is {title} {gradientText}?</strong> At Abhi.ai, {title.toLowerCase()} {gradientText.toLowerCase()} refers to {description.charAt(0).toLowerCase() + description.slice(1)} We engineer these solutions to help businesses cut operational costs by up to 40% and scale efficiently.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 font-heading flex items-center gap-3 mt-10">
              <div className="w-8 h-8 rounded-full bg-[#7c3aed]/20 flex items-center justify-center text-[#7c3aed]">
                <ArrowRight size={16} />
              </div>
              Core Capabilities & Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-[#00f0ff]"></div>
                  {feature}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6 font-heading flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">
                <ArrowRight size={16} />
              </div>
              Our 3-Step Integration Process
            </h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-300">
              <li><strong>Discovery & Audit:</strong> We analyze your current bottlenecks to determine exactly where {title} {gradientText} will yield the highest ROI.</li>
              <li><strong>Custom Engineering:</strong> Our team develops a bespoke solution securely using modern AI stacks (Python, LangChain, Next.js).</li>
              <li><strong>Deployment & Training:</strong> We deploy the system to production and train your team for a seamless, immediate handoff.</li>
            </ol>
          </article>
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
    </>
  );
}
