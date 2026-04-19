import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhi.ai | AI Solutions & Automation for Businesses",
  description: "We turn your business into an AI-powered system. Get custom RAG chatbots, WhatsApp automation, and full-stack AI applications.",
  keywords: ["AI automation", "RAG chatbot", "WhatsApp automation", "AI for SMEs", "Business digitalization", "Next.js development"],
  authors: [{ name: "Abhishek Sharma" }],
  openGraph: {
    title: "Abhi.ai | AI Solutions & Automation",
    description: "Transform your business with AI. Chatbots, automation, and full-stack development tailored for growth.",
    url: "https://abhiai.in",
    siteName: "Abhi.ai",
    images: [
      {
        url: "https://abhiai.in/og-image.jpg", // You'll need to add this image later
        width: 1200,
        height: 630,
        alt: "Abhi.ai Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhi.ai | AI Solutions & Automation",
    description: "Transform your business with AI. Chatbots, automation, and full-stack development tailored for growth.",
    images: ["https://abhiai.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground relative">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
