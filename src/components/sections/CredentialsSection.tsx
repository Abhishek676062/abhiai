"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, ShieldCheck, Award, Newspaper } from "lucide-react";

const certifications = [
  { name: "Google Data Analytics", icon: "📊", verified: true },
  { name: "Google Cloud Arcade", icon: "☁️", verified: true },
  { name: "AWS Certified", icon: "🔶", verified: true },
  { name: "Stanford ML", icon: "🎓", verified: true },
  { name: "Advanced Agentic AI", icon: "🤖", verified: true },
  { name: "AI Summit Certified", icon: "🏆", verified: true },
];

export default function CredentialsSection() {
  return (
    <section id="credentials" className="py-24 relative overflow-hidden bg-black/50 border-y border-white/5">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00f0ff] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7c3aed]/20 text-[#7c3aed] mb-6">
              <ShieldCheck size={16} />
              <span className="text-sm font-medium">Verified Credentials</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
              Certified & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">Recognized</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Backed by industry-leading certifications from Google, AWS, Stanford, and recognized in national media for AI innovation.
            </p>
          </motion.div>
        </div>

        {/* Certification Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 px-4 py-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#00f0ff]/30 hover:bg-white/[0.06] transition-all duration-300 group">
              <span className="text-2xl">{cert.icon}</span>
              <span className="text-xs text-gray-300 font-medium text-center leading-tight">{cert.name}</span>
              {cert.verified && (
                <span className="text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck size={10} /> Verified
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Featured In Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glassmorphism-dark rounded-2xl border border-white/5 hover:border-[#7c3aed]/30 p-8 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#00f0ff] flex items-center justify-center flex-shrink-0">
                <Newspaper className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-white font-bold text-lg">Featured in Patrika Newspaper</h3>
                  <span className="text-[10px] text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full font-semibold">MEDIA</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Recognized as a top college project for developing <strong className="text-white">Health Hub</strong> — an AI-powered health assistant that was featured in Patrika newspaper for its innovative approach to accessible healthcare using artificial intelligence.
                </p>
                <div className="flex items-center gap-2 text-[#00f0ff] text-sm">
                  <Award size={14} />
                  <span className="font-medium">College Top Project Recognition</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Business Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12"
        >
          {[
            { name: "Abhi.ai — AI Solutions", rating: 5.0, reviews: 12, desc: "Premium AI services, RAG chatbots, and full-stack development." },
            { name: "Abhi.ai — Tech Services", rating: 5.0, reviews: 8, desc: "AI automation, custom software, and digital transformation." },
          ].map((profile, idx) => (
            <div key={idx} className="glassmorphism-dark rounded-2xl border border-white/5 hover:border-[#00f0ff]/30 p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg font-bold text-blue-600">G</div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{profile.name}</h3>
                  <span className="text-xs text-gray-500">Google Business Profile</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white font-bold">{profile.rating}</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-400 text-xs">({profile.reviews} reviews)</span>
              </div>
              <p className="text-gray-400 text-sm">{profile.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
