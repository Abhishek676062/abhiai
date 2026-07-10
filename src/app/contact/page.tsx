import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact",
  },
  title: "Contact Abhi.ai | Hire Expert AI Developers & Consultants",
  description: "Ready to build the future? Contact Abhi.ai for custom AI solutions, workflow automation, and RAG chatbots. Book your free AI consultation today!",
  keywords: ["Contact Abhi.ai", "AI Consultation", "Hire AI Developer", "AI Development Team"],
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Connect With"
      gradientText="Abhi.ai"
      subtitle="Ready to transform your business with AI?"
      description="Whether you have a specific project in mind or just want to explore what's possible, we're here to help. Reach out to our team of experts and let's start building your AI-powered future together."
      features={[
        "Free 30-min Consultation",
        "Project Scope Definition",
        "Custom Quote Estimates",
        "Rapid Deployment Options",
        "Technical Advisory",
        "Partner Ecosystem"
      ]}
    />
  );
}
