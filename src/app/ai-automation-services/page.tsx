import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/ai-automation-services",
  },
  title: "End-to-End AI Automation Services | Streamline Operations | Abhi.ai",
  description: "Optimize your workflows with our end-to-end AI automation services. We automate repetitive tasks to save time and reduce costs. Talk to our experts today!",
  keywords: ["AI Automation Services", "Workflow Optimization", "Business Process Automation", "AI Integration"],
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Strategic"
      gradientText="AI Automation Services"
      subtitle="Transform manual bottlenecks into automated growth engines."
      description="Stop wasting human potential on repetitive tasks. Our AI automation services audit your current workflows and inject intelligent automation where it matters most, reducing errors and increasing throughput by up to 10x."
      features={[
        "Business Process Audits",
        "Custom Automation Workflows",
        "ERP/CRM AI Integration",
        "Data Entry Automation",
        "Automated Reporting",
        "24/7 System Monitoring"
      ]}
    />
  );
}
