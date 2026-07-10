import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abhiai.in"),
  title: {
    default: "Top AI Automation Agency in India | Custom AI Agents | Abhi.ai",
    template: "%s | Abhi.ai",
  },
  description:
    "Looking to scale? Abhi.ai is India's top AI automation agency. We build custom RAG chatbots & AI agents to double sales and cut costs. Book a free demo today!",
  keywords: [
    "AI automation agency India",
    "AI agency Indore",
    "AI automation Madhya Pradesh",
    "RAG chatbot developer India",
    "WhatsApp automation agency",
    "custom AI agents",
    "AI solutions for SMEs",
    "top AI development company in India",
    "Generative AI services Mandsaur Ujjain Ratlam",
    "Next.js AI developer",
    "Sitamau Suwasra AI services"
  ],
  authors: [{ name: "Abhishek Sharma", url: "https://www.abhiai.in/about" }],
  creator: "Abhishek Sharma",
  publisher: "Abhi.ai",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" }
    ],
    shortcut: ["/logo.png"],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" }
    ]
  },
  openGraph: {
    title: "Top AI Automation Agency in India | Custom AI Agents | Abhi.ai",
    description:
      "Looking to scale? Abhi.ai is India's top AI automation agency. We build custom RAG chatbots & AI agents to double sales and cut costs. Book a free demo today!",
    url: "https://www.abhiai.in",
    siteName: "Abhi.ai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhi.ai — AI Solutions & Automation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top AI Automation Agency in India | Custom AI Agents | Abhi.ai",
    description:
      "Looking to scale? Abhi.ai is India's top AI automation agency. We build custom RAG chatbots & AI agents to double sales and cut costs. Book a free demo today!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
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
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground relative overflow-x-hidden w-full">
        {/* LocalBusiness & Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              "@id": "https://www.abhiai.in/#organization",
              name: "Abhi.ai",
              alternateName: "AbhiAI",
              url: "https://www.abhiai.in",
              logo: "https://www.abhiai.in/logo.png",
              image: "https://www.abhiai.in/og-image.jpg",
              description:
                "Premium AI automation services, RAG chatbots, voice AI agents, and full-stack development for businesses in India. Helping SMEs double sales and cut operations costs by 40%.",
              email: "shabhishek055@gmail.com",
              telephone: "+919575676062",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mandsaur",
                addressRegion: "Madhya Pradesh",
                postalCode: "458441",
                addressCountry: "IN",
              },
              openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
              areaServed: [
                { "@type": "City", name: "Indore" },
                { "@type": "City", name: "Mandsaur" },
                { "@type": "City", name: "Ujjain" },
                { "@type": "City", name: "Ratlam" },
                { "@type": "City", name: "Sitamau" },
                { "@type": "City", name: "Suwasra" },
                { "@type": "State", name: "Madhya Pradesh" },
                { "@type": "Country", name: "India" }
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                reviewCount: "48"
              },
              founder: {
                "@type": "Person",
                name: "Abhishek Sharma",
                jobTitle: "Software AI/ML Developer & Generative AI Expert",
              },
              sameAs: [
                "https://www.linkedin.com/in/abhi-ai/",
                "https://www.instagram.com/abhi.ai_/",
                "https://abhiai.tech",
                "https://shriji.online",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "RAG Chatbots",
                "Voice AI Agents",
                "WhatsApp Automation",
                "Full Stack Development",
                "AI Automation",
              ],
            }),
          }}
        />

        {/* WebSite Schema for Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Abhi.ai",
              url: "https://www.abhiai.in",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.abhiai.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <ClientWrapper>
          <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
            <TopBanner />
            <Navbar />
            <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}
