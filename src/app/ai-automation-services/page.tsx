import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Services | Abhi.ai",
  description: "End-to-end AI automation services to streamline your business. We automate repetitive tasks and optimize workflows using cutting-edge AI.",
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
