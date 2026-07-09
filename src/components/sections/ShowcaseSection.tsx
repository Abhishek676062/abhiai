"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Globe, Code2, Cpu, ExternalLink, Camera, MonitorPlay } from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState("apps");
  const { t } = useLanguage();

  const TABS = [
    { id: "apps", label: t("showcase.tabLiveApps"), icon: <MonitorPlay size={16} /> },
    { id: "marketing", label: t("showcase.tabMarketing"), icon: <Camera size={16} /> },
  ];

  const LIVE_APPS = [
    {
      name: "abhiai.in",
      url: "https://abhiai.in",
      image: "/showcase/portfolio/abhiai-in-v2.png",
      description: t("showcase.app1Desc"),
      tags: ["AI Automation", "Conversion", "SME Solutions"],
      icon: <Globe className="w-5 h-5" />
    },
    {
      name: "abhiai.tech",
      url: "https://abhiai.tech",
      image: "/showcase/portfolio/abhiai-tech-v2.png",
      description: t("showcase.app2Desc"),
      tags: ["AI/ML Portfolio", "Gen AI", "Agentic Workflows"],
      icon: <Code2 className="w-5 h-5" />
    },
    {
      name: "shriji.online",
      url: "https://shriji.online",
      image: "/showcase/portfolio/shriji-gita.png",
      description: t("showcase.app3Desc"),
      tags: ["AI Chatbot", "Gita Wisdom", "Spiritual Support"],
      icon: <Cpu className="w-5 h-5" />
    },
  ];

  const MARKETING_IMAGES = [
    {
      src: "/showcase/images/marketing-image-1.png",
      alt: "AI Generated Marketing Design - Client Campaign",
      title: "Conversion-Optimized Landing Page",
      category: "Client Campaign",
    },
    {
      src: "/showcase/images/marketing-image-2.png",
      alt: "AI Generated Brand Identity",
      title: "Brand Identity & Visual Storytelling",
      category: "Brand Design",
    },
  ];

  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-[#00f0ff] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7c3aed] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              {t("showcase.titleNormal")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">
                {t("showcase.titleHighlight")}
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t("showcase.description")}
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] text-black shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {/* APPS TAB */}
            {activeTab === "apps" && (
              <motion.div
                key="apps"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {LIVE_APPS.map((app, idx) => (
                  <div key={idx} className="group glassmorphism-dark rounded-2xl border border-white/5 hover:border-[#00f0ff]/40 transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <Image
                        src={app.image}
                        alt={`${app.name} - ${app.tags.join(', ')}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
                        {app.icon} {app.name}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-gray-300 text-sm mb-4 flex-1">{app.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {app.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-1 text-[11px] rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">{tag}</span>
                        ))}
                      </div>
                      <a href={app.url} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full bg-white/5 hover:bg-[#00f0ff] hover:text-black text-white border border-white/10 transition-all font-semibold">
                          {t("showcase.viewLiveApp")} <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* MARKETING TAB */}
            {activeTab === "marketing" && (
              <motion.div
                key="marketing"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {MARKETING_IMAGES.map((img, idx) => (
                  <div key={idx} className="group relative aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/10 hover:border-[#00f0ff]/50 transition-all duration-500 shadow-xl">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <span className="text-[11px] text-[#7c3aed] bg-[#7c3aed]/20 px-2 py-0.5 rounded-full font-medium mb-2 inline-block">{img.category}</span>
                        <h4 className="text-white font-bold text-lg">{img.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
