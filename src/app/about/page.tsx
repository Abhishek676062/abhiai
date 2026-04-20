import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Abhi.ai | Leading AI Innovation",
  description: "Learn more about Abhi.ai and our mission to democratize advanced AI for businesses of all sizes.",
  keywords: ["About Abhi.ai", "Abhishek Sharma AI", "AI Development Mission", "Innovation Team"],
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Innovation at"
      gradientText="Abhi.ai"
      subtitle="Democratizing advanced intelligence for every business."
      description="Led by Abhishek Sharma, Abhi.ai was founded on the belief that cutting-edge AI shouldn't just be for big tech. We combine engineering excellence with a deep understanding of business problems to deliver AI solutions that actually matter."
      features={[
        "Expert Engineering Team",
        "Ethical AI Frameworks",
        "Business-First Approach",
        "Agile Development Cycle",
        "Continuous AI Research",
        "Dedicated Client Support"
      ]}
    />
  );
}
