import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAG-Based AI Systems | Abhi.ai",
  description: "Advanced Retrieval-Augmented Generation (RAG) systems. We connect AI to your private data for accurate, context-aware responses.",
  keywords: ["RAG-Based AI", "Retrieval-Augmented Generation", "Private AI", "Context-Aware AI"],
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Secure"
      gradientText="RAG-Based AI Systems"
      subtitle="Connect your business data to the world's most powerful LLMs."
      description="Generic AI models don't know your business. Our RAG-based systems securely index your internal knowledge bases, PDFs, and databases, allowing the AI to answer questions with zero hallucinations and complete context."
      features={[
        "Private Data Vectorization",
        "Semantic Search Integration",
        "Hallucination Prevention",
        "Real-time Data Syncing",
        "Multi-Source Integration",
        "Secure Knowledge Bases"
      ]}
    />
  );
}
