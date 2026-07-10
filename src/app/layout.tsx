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
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Top AI Automation Agency in India | Abhi.ai Solutions",
    template: "%s | Abhi.ai",
  },
  description:
    "Double your sales & cut costs with custom AI automation, RAG chatbots, and full-stack AI development. Trusted AI agency in Indore, MP, and across India.",
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
    title: "Abhi.ai | Top AI Automation Agency in India & MP",
    description:
      "Transform your business with AI. Custom RAG chatbots, WhatsApp automation, voice AI agents, and full-stack development tailored for SME growth in India.",
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
    title: "Abhi.ai | AI Solutions & Automation",
    description:
      "Transform your business with AI. Chatbots, automation, and full-stack development tailored for growth.",
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
                addressRegion: "Madhya Pradesh",
                addressCountry: "IN",
              },
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
        {/* FAQ Schema for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the best AI automation agency for SMEs in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Abhi.ai is a top-rated AI automation agency in India, serving businesses globally and locally in Madhya Pradesh (Indore, Mandsaur, Ujjain, Ratlam). We build custom AI agents, RAG chatbots, and full-stack applications designed to double sales and cut operational costs by 40%."
                  }
                },
                {
                  "@type": "Question",
                  name: "How can AI chatbots help my business?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Custom RAG chatbots and Voice AI agents from Abhi.ai can handle 24/7 customer support, automate WhatsApp lead generation, and provide intelligent data retrieval, allowing your team to focus on high-value tasks."
                  }
                },
                {
                  "@type": "Question",
                  name: "Do you provide AI services in Madhya Pradesh?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Abhi.ai is headquartered in India and provides specialized AI automation, software development, and generative AI services across Madhya Pradesh, including Indore, Ujjain, Mandsaur, Ratlam, Sitamau, and Suwasra."
                  }
                }
              ]
            })
          }}
        />
        {/* Service Schema for GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "AI Automation & Chatbot Development",
              provider: {
                "@type": "ProfessionalService",
                name: "Abhi.ai",
                image: "https://www.abhiai.in/og-image.jpg"
              },
              areaServed: {
                "@type": "Country",
                name: "India"
              },
              description: "Custom AI agent development, RAG chatbots, WhatsApp automation, and Next.js full-stack applications for SMEs."
            })
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
