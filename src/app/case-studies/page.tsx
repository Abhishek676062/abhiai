import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Case Studies | Abhi.ai",
  description: "Real-world success stories of AI transformation. See how Abhi.ai helps businesses grow with intelligent automation.",
  keywords: ["AI Case Studies", "Success Stories", "AI Transformation", "ROI with AI"],
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Success"
      gradientText="Case Studies"
      subtitle="Proven results from real-world AI implementations."
      description="We believe in transparency and measurable impact. Our case studies highlight how we've helped diverse businesses—from clinics to tech startups—reduce their operational costs and scale their customer outreach."
      features={[
        "Clinic Automation Success",
        "E-commerce Growth with AI",
        "SaaS Productivity Boost",
        "Lead Generation Wins",
        "Cost Reduction Metrics",
        "Client Success Stories"
      ]}
    />
  );
}
