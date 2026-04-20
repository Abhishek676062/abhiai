import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generative AI Solutions | Abhi.ai",
  description: "Custom generative AI solutions for creative and business applications. Image generation, text synthesis, and more.",
  keywords: ["Generative AI Solutions", "AI Image Generation", "Text Synthesis", "Creative AI"],
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Creative"
      gradientText="Generative AI Solutions"
      subtitle="Unlocking new dimensions of productivity and creativity."
      description="From custom content generation engines to AI-powered design tools, we help businesses leverage the latest in Generative AI to produce high-quality assets at scale and automate creative workflows."
      features={[
        "Custom Content Engines",
        "AI Image Synthesis",
        "Video & Audio AI",
        "Marketing Copy Automation",
        "Creative Design Tools",
        "Asset Generation at Scale"
      ]}
    />
  );
}
