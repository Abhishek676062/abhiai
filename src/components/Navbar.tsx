"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        isScrolled ? "glassmorphism-dark py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-heading text-white flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#7c3aed] flex items-center justify-center group-hover:neon-border-cyan transition-all">
            <span className="text-black font-black text-sm">AI</span>
          </div>
          Abhi<span className="text-[#00f0ff]">.ai</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link href="/#demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-[#00f0ff] text-black hover:bg-white hover:text-black transition-colors font-semibold px-6 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              Book Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glassmorphism-dark border-t border-white/10 flex flex-col p-6 gap-6">
          <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg">Services</Link>
          <Link href="#demo" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg">Demo</Link>
          <Link href="#results" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg">Results</Link>
          <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white text-lg">Pricing</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-[#00f0ff] text-black font-semibold">
              Book Consultation
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
