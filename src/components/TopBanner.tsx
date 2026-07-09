"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-[#00f0ff] via-[#3b82f6] to-[#7c3aed] text-black font-semibold text-sm relative z-[60]"
      >
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center justify-center flex-1 gap-2">
            <AlertCircle size={16} className="animate-pulse" />
            <span>
              <a href="/#contact" className="hover:underline transition-colors">
                {t("topBanner.text")}
              </a>
            </span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-black/60 hover:text-black transition-colors"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
