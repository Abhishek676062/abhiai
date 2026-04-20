import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Development | Abhi.ai",
  description: "Custom AI Agent development for business automation. We build autonomous agents that handle complex tasks, research, and workflows.",
  keywords: ["AI Agent Development", "Autonomous Agents", "Business Automation", "Custom AI Solutions"],
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Next-Gen"
      gradientText="AI Agent Development"
      subtitle="Autonomous intelligence that works for your business 24/7."
      description="We design and deploy sophisticated AI agents capable of executing complex multi-step workflows. Whether it's automated market research, customer follow-ups, or internal data processing, our agents are built to scale your operations without increasing headcount."
      features={[
        "Autonomous Task Execution",
        "Multi-Agent Orchestration",
        "Tool & API Integration",
        "Self-Learning Capabilities",
        "Custom Workflow Design",
        "Performance Monitoring"
      ]}
    />
  );
}
