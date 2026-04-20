import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot Development | Abhi.ai",
  description: "Custom RAG-based AI chatbots for websites and WhatsApp. Reduce support load and increase conversions with intelligent conversation.",
  keywords: ["AI Chatbot Development", "RAG Chatbots", "WhatsApp AI Bots", "Customer Support Automation"],
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Advanced"
      gradientText="AI Chatbot Development"
      subtitle="Intelligent conversation that converts and supports."
      description="Our chatbots aren't just rule-based scripts. We build RAG-powered (Retrieval-Augmented Generation) bots that understand your company's documents, products, and policies to provide accurate, human-like responses instantly."
      features={[
        "RAG-Powered Intelligence",
        "Multi-Platform Support",
        "WhatsApp & Web Integration",
        "Lead Generation Focus",
        "Support Ticket Reduction",
        "Natural Language Understanding"
      ]}
    />
  );
}
