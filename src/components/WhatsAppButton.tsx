import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        href="https://wa.me/919575676062?text=Hi%20Abhi.ai,%20I%20am%20interested%20in%20scaling%20my%20business%20with%20your%20AI%20solutions." 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      >
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        <MessageCircle size={28} className="relative z-10" fill="currentColor" />
      </Link>
    </div>
  );
}
