"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function TrustTicker() {
  const { t } = useLanguage();
  const items = t("trustTicker.items") || [];
  
  // Duplicate list to ensure smooth scrolling loop
  const tickerItems = [...items, ...items];

  return (
    <div className="relative py-6 border-y border-white/[0.06] overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

      <p className="text-center text-[10px] text-white/25 tracking-[3px] uppercase mb-4">
        {t("trustTicker.title")}
      </p>

      <div className="flex gap-4 animate-ticker" style={{ width: "max-content" }}>
        {tickerItems.map((item: string, i: number) => (
          <div
            key={i}
            className="flex items-center gap-2 px-5 py-2 rounded-full glass border border-white/[0.06] text-sm text-white/50 whitespace-nowrap hover:text-white hover:border-blue-500/30 transition-all duration-200 cursor-default"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
