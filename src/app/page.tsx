import HeroSection from "@/components/sections/HeroSection";
import TrustTicker from "@/components/TrustTicker";
import ServicesSection from "@/components/sections/ServicesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import DemoSection from "@/components/sections/DemoSection";
import ResultsSection from "@/components/sections/ResultsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
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
      <ContactSection />
    </>
  );
}
