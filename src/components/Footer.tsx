import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold font-heading text-white flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#7c3aed] flex items-center justify-center"></div>
              Abhi<span className="text-[#00f0ff]">.ai</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We turn your business into an AI-powered system. From going digital to full AI automation — we help you grow faster.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <Link href="#" className="hover:text-[#00f0ff] transition-colors"><FaLinkedin size={20} /></Link>
              <Link href="#" className="hover:text-[#00f0ff] transition-colors"><FaTwitter size={20} /></Link>
              <Link href="#" className="hover:text-[#00f0ff] transition-colors"><FaInstagram size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#demo" className="hover:text-white transition-colors">AI Demo</Link></li>
              <li><Link href="#why-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Go Digital</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI Business Solutions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Full Stack + AI</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Career Accelerator</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-[#00f0ff]" />
                <span>hello@abhiai.in</span>
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
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
