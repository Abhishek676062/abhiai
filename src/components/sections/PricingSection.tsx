"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, MessageCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const { t } = useLanguage();

  const starterFeatures = t("pricing.starter.features") || [];
  const growthFeatures = t("pricing.growth.features") || [];
  const enterpriseFeatures = t("pricing.enterprise.features") || [];

  const plans = [
    {
      name: t("pricing.starter.title"),
      badgeName: "Starter",
      description: t("pricing.starter.subtitle"),
      price: "1,999",
      priceLabel: t("pricing.setup"),
      features: starterFeatures,
      popular: false,
      cta: t("pricing.starter.cta"),
      accentColor: "border-cyan-500/30 hover:border-cyan-500/50",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      btnVariant: "outline" as const,
      btnClass: "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300",
    },
    {
      name: t("pricing.growth.title"),
      badgeName: "Growth",
      description: t("pricing.growth.subtitle"),
      price: billingPeriod === "monthly" ? "7,999" : "7,999",
      priceLabel: billingPeriod === "monthly" ? "setup + ₹2,999/month" : "setup + ₹2,399/month",
      features: growthFeatures,
      popular: true,
      cta: t("pricing.growth.cta"),
      accentColor: "border-[#7c3aed] shadow-[0_0_30px_rgba(124,58,237,0.15)]",
      badgeColor: "bg-[#7c3aed]/10 text-purple-400 border-[#7c3aed]/20",
      btnVariant: "default" as const,
      btnClass: "bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-[0_0_15px_rgba(124,58,237,0.4)]",
    },
    {
      name: t("pricing.enterprise.title"),
      badgeName: "AI Smart Business",
      description: t("pricing.enterprise.subtitle"),
      price: billingPeriod === "monthly" ? "25,000" : "20,000",
      priceLabel: t("pricing.projectBased"),
      features: enterpriseFeatures,
      popular: false,
      cta: t("pricing.enterprise.cta"),
      accentColor: "border-purple-500/30 hover:border-purple-500/50",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      btnVariant: "outline" as const,
      btnClass: "border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00f0ff]/5 opacity-20 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
            {t("pricing.titleNormal")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">
              {t("pricing.titleHighlight")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("pricing.description")}
          </p>
        </div>

        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/40 border border-white/10 rounded-full p-1.5 flex items-center gap-1 backdrop-blur-sm">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                billingPeriod === "monthly"
                  ? "bg-[#7c3aed] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("pricing.toggleMonthly")}
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 transition-all ${
                billingPeriod === "yearly"
                  ? "bg-[#7c3aed] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>{t("pricing.toggleYearly")}</span>
              <span className="text-[10px] bg-[#00f0ff]/20 text-[#00f0ff] font-bold px-2 py-0.5 rounded-full">
                {t("pricing.save20")}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full flex"
            >
              <Card
                className={`relative w-full flex flex-col glassmorphism-dark transition-transform hover:-translate-y-2 duration-300 border ${plan.accentColor}`}
              >
                {/* Most Popular Tag */}
                {plan.popular && (
                  <div className="absolute -top-3 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-[10px] font-bold">
                    <Sparkles size={10} />
                    <span>Most Popular</span>
                  </div>
                )}

                <CardHeader className="text-left pb-2 pt-8 px-8">
                  <div className="mb-2">
                    <Badge variant="outline" className={`font-semibold text-xs border ${plan.badgeColor}`}>
                      {plan.badgeName}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-extrabold text-white mb-1 font-heading">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col pt-6 px-8">
                  <div className="text-left mb-8 flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-gray-400 mr-1">₹</span>
                    <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                    <span className="text-gray-400 text-xs ml-1 font-medium">{plan.priceLabel}</span>
                  </div>

                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start text-sm text-gray-300">
                        <Check className="w-5 h-5 text-[#00f0ff] mr-3 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pb-8 px-8">
                  <Link href="#contact" className="w-full">
                    <Button
                      variant={plan.btnVariant}
                      className={`w-full h-12 text-md font-semibold transition-all ${plan.btnClass}`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Premium Indian Friendly Negotiation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto p-8 rounded-3xl border border-dashed border-[#00f0ff]/30 bg-gradient-to-r from-[#00f0ff]/5 via-[#7c3aed]/5 to-transparent backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
              <span>{t("pricing.negotiateTitle")}</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
              {t("pricing.negotiateText")}
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a
              href="https://wa.me/919575676062?text=Hi%20Abhishek%2C%20I'm%20interested%20in%20your%20AI%20services%20and%20wanted%20to%20discuss%20a%20custom%20budget."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-black font-extrabold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer"
            >
              <MessageCircle size={20} fill="currentColor" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </motion.div>

        <p className="text-center text-gray-500 text-xs mt-8">
          {t("pricing.pricingFootnote")}
        </p>
      </div>
    </section>
  );
}
