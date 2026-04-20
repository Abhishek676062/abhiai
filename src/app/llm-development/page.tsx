import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLM Development & Tuning | Abhi.ai",
  description: "Expert LLM development and fine-tuning. We customize Large Language Models for specific industry niches and requirements.",
  keywords: ["LLM Development", "Fine-Tuning", "Language Models", "Custom GPT", "Open Source LLMs"],
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Custom"
      gradientText="LLM Development"
      subtitle="Specialized language models built for your industry's language."
      description="We go beyond just using OpenAI. We help you fine-tune open-source models like Llama or Mistral on your specific industry terminology and use cases, providing superior performance and data privacy."
      features={[
        "Model Fine-Tuning",
        "Custom Prompt Engineering",
        "Local LLM Deployment",
        "Performance Optimization",
        "Cost-Effective AI Training",
        "Domain-Specific Tuning"
      ]}
    />
  );
}
