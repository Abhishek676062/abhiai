import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Abhi.ai",
  description: "Read the terms of service of Abhi.ai for our AI development and automation services.",
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Our"
      gradientText="Terms of Service"
      subtitle="The foundation of our professional partnership."
      description="These terms govern your use of the AI development and automation services provided by Abhi.ai. By engaging with our services, you agree to these professional standards and operational guidelines designed to ensure mutual success and project clarity."
      features={[
        "Service Level Agreements",
        "Intellectual Property",
        "Payment & Billing",
        "Project Timelines",
        "Confidentiality Clauses",
        "Liability & Warranty"
      ]}
    />
  );
}
