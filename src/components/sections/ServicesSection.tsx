"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Code2, ArrowRight, Building2, User, Factory } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

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
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.goDigital.title"),
      description: t("services.goDigital.description"),
      icon: <Globe className="w-10 h-10 text-[#00f0ff]" />,
      features: [
        t("services.features.website"),
        t("services.features.gbp"),
        t("services.features.social"),
        t("services.features.whatsapp")
      ],
      bestFor: t("services.goDigital.bestFor"),
      bestForIcon: <User size={12} />,
    },
    {
      title: t("services.aiAutomation.title"),
      description: t("services.aiAutomation.description"),
      icon: <Cpu className="w-10 h-10 text-[#7c3aed]" />,
      features: [
        t("services.features.rag"),
        t("services.features.voice"),
        t("services.features.chatbot"),
        t("services.features.lead")
      ],
      bestFor: t("services.aiAutomation.bestFor"),
      bestForIcon: <Building2 size={12} />,
    },
    {
      title: t("services.customSaaS.title"),
      description: t("services.customSaaS.description"),
      icon: <Code2 className="w-10 h-10 text-[#00f0ff]" />,
      features: [
        t("services.features.saas"),
        t("services.features.dashboard"),
        t("services.features.crm"),
        t("services.features.api")
      ],
      bestFor: t("services.customSaaS.bestFor"),
      bestForIcon: <Factory size={12} />,
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
            {t("services.titleNormal")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
                  {/* Best For Tag */}
                  <div className="flex items-center gap-1.5 text-xs text-[#7c3aed] bg-[#7c3aed]/10 px-3 py-1.5 rounded-full w-fit border border-[#7c3aed]/20">
                    {service.bestForIcon}
                    <span className="font-medium">Best for: {service.bestFor}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="#contact" className="w-full">
                    <Button variant="ghost" className="w-full text-[#00f0ff] hover:text-white hover:bg-[#00f0ff]/20">
                      {t("services.cta")} <ArrowRight className="ml-2 w-4 h-4" />
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
