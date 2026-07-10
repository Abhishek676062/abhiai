"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Lock } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "3582659b-5551-4cf3-8e4c-1018b0749b7c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert(
          language === "en"
            ? "Success! Your message has been sent. We will contact you shortly."
            : "सफलता! आपका संदेश भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।"
        );
        (e.target as HTMLFormElement).reset();
      } else {
        alert(
          language === "en"
            ? "Something went wrong. Please try again or email us directly."
            : "कुछ गलत हो गया। कृपया पुन: प्रयास करें या सीधे हमें ईमेल करें।"
        );
      }
    } catch (error) {
      alert(
        language === "en"
          ? "Error sending message. Please check your internet connection."
          : "संदेश भेजने में त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें।"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-black/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl overflow-hidden glassmorphism-dark flex flex-col md:flex-row">

          {/* Left: Info */}
          <div className="md:w-2/5 p-10 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] border-r border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4 font-heading">
              {t("contact.titleNormal")}{" "}
              <span className="text-[#00f0ff]">{t("contact.titleHighlight")}</span>
            </h3>
            <p className="text-gray-400 mb-8">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/20 flex items-center justify-center text-[#7c3aed]">
                  <Phone size={18} />
                </div>
                <a href="tel:+919575676062" className="hover:text-white transition-colors">+91 95756 76062</a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff]">
                  <Mail size={18} />
                </div>
                <a href="mailto:shabhishek055@gmail.com" className="hover:text-white">shabhishek055@gmail.com</a>
              </div>
              <div className="flex items-start gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-semibold text-white">Headquarters</span>
                  <span>Mandsaur, Madhya Pradesh</span>
                  <span>India - 458441</span>
                </div>
              </div>
              <div className="flex items-start gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="font-semibold text-white">Business Hours</span>
                  <span>Mon-Sat: 09:00 AM - 06:00 PM (IST)</span>
                  <span className="text-gray-500">Sunday: Closed</span>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 h-48 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116345.8776645511!2d74.9961670984813!3d24.06208577539091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642c67675e4785%3A0xeabff6e7a25032df!2sMandsaur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Abhi.ai in Mandsaur"
              ></iframe>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:w-3/5 p-10">
            <h3 className="text-2xl font-bold text-white mb-6">{t("contact.formTitle")}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">{t("contact.name")}</label>
                  <Input id="name" name="name" required placeholder="John Doe" className="bg-black/50 border-white/10 focus-visible:ring-[#00f0ff]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="business" className="text-sm text-gray-400">{t("contact.businessName")} (Optional)</label>
                  <Input id="business" name="business" placeholder="ACME Corp" className="bg-black/50 border-white/10 focus-visible:ring-[#00f0ff]" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400">{t("contact.email")}</label>
                <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-black/50 border-white/10 focus-visible:ring-[#00f0ff]" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">{t("contact.requirement")}</label>
                <Textarea id="message" name="message" required placeholder={language === "en" ? "I'm interested in an AI chatbot..." : "मैं अपनी वेबसाइट के लिए AI चैटबॉट चाहता हूँ..."} className="min-h-[120px] bg-black/50 border-white/10 focus-visible:ring-[#00f0ff]" />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 mt-4 bg-[#00f0ff] text-black hover:bg-white font-semibold shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
              >
                {isSubmitting ? t("contact.submitBtnSending") : t("contact.submitBtn")}
                {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
              </Button>
              
              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500">
                <Lock size={12} />
                <span>100% Secure & Confidential. We never spam.</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
