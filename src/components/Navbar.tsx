"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism-dark py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Abhi.ai Home">
          <Image
            src="/logo.png"
            alt="Abhi.ai Logo"
            width={44}
            height={44}
            style={{ width: "auto", height: "auto" }}
            className="rounded-lg group-hover:scale-105 transition-transform"
            priority
          />
          <span className="text-xl font-bold font-heading text-white">
            Abhi<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#7c3aed]">ai</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main navigation">
          <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">{t("navbar.services")}</Link>
          <Link href="/#showcase" className="text-gray-300 hover:text-white transition-colors">{t("navbar.showcase")}</Link>
          <Link href="/#demo" className="text-gray-300 hover:text-white transition-colors">{t("navbar.demo")}</Link>
          <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors">{t("navbar.pricing")}</Link>
          <Link href="/#credentials" className="text-gray-300 hover:text-white transition-colors">{t("navbar.credentials")}</Link>
        </nav>

        {/* CTA & Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-300 hover:text-white transition-all"
            title={language === "en" ? "Translate to Hindi" : "Translate to English"}
          >
            <Globe size={14} className="text-[#00f0ff]" />
            <span>{language === "en" ? "हिंदी" : "EN"}</span>
          </button>
          
          <Link href="/#contact">
            <Button className="bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] text-white hover:opacity-90 transition-opacity font-semibold px-6 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              {t("navbar.auditButton")}
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle & Switcher */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-300"
          >
            <Globe size={12} className="text-[#00f0ff]" />
            <span>{language === "en" ? "हिंदी" : "EN"}</span>
          </button>
          
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glassmorphism-dark border-t border-white/10 flex flex-col p-6 gap-6">
          <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg">{t("navbar.services")}</Link>
          <Link href="/#showcase" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg">{t("navbar.showcase")}</Link>
          <Link href="/#demo" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg">{t("navbar.demo")}</Link>
          <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg">{t("navbar.pricing")}</Link>
          <Link href="/#credentials" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg">{t("navbar.credentials")}</Link>
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-[#3b82f6] to-[#7c3aed] text-white font-semibold">
              {t("navbar.auditButton")}
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
