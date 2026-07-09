"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold font-heading text-white flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Abhi.ai Logo" width={36} height={36} style={{ width: "auto", height: "auto" }} className="rounded-lg" />
              Abhi<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#7c3aed]">ai</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <Link href="https://www.linkedin.com/in/abhi-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors"><FaLinkedin size={20} /></Link>
              <Link href="https://www.instagram.com/abhi.ai_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors"><FaInstagram size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">{t("footer.aboutUs")}</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">{t("footer.caseStudies")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("footer.contact")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li><Link href="/ai-agent-development" className="hover:text-white transition-colors">AI Agent Development</Link></li>
              <li><Link href="/ai-automation-services" className="hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link href="/ai-chatbot-development" className="hover:text-white transition-colors">Chatbot Development</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.contactInfo")}</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-[#00f0ff]" />
                <a href="mailto:shabhishek055@gmail.com" className="hover:text-white transition-colors">shabhishek055@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-[#00f0ff]" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Abhi.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white">{t("footer.privacyPolicy")}</Link>
            <Link href="/terms-of-service" className="hover:text-white">{t("footer.termsOfService")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
