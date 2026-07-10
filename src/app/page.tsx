import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};
import TrustTicker from "@/components/TrustTicker";
import ServicesSection from "@/components/sections/ServicesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import DemoSection from "@/components/sections/DemoSection";
import ResultsSection from "@/components/sections/ResultsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
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
      <HeroSection />
      <TrustTicker />
      <ServicesSection />
      <ShowcaseSection />
      <ResultsSection />
      <DemoSection />
      <WhyChooseUsSection />
      <CredentialsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
