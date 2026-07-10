import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/case-studies",
  },
  title: "AI Transformation Case Studies | Real-World Success | Abhi.ai",
  description: "Explore our real-world AI case studies and success stories. Discover how Abhi.ai helps businesses scale through intelligent automation. Read our results!",
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
