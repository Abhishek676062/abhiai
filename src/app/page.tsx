import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DemoSection from "@/components/sections/DemoSection";
import ResultsSection from "@/components/sections/ResultsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DemoSection />
      <ResultsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
