import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
  title: "About Abhi.ai | Top AI Development & Innovation Agency",
  description: "Learn about Abhi.ai, a top AI innovation agency on a mission to democratize advanced artificial intelligence for businesses of all sizes. Meet our team!",
  keywords: ["About Abhi.ai", "Abhishek Sharma AI", "AI Development Mission", "Innovation Team"],
};

export default function Page() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Abhi.ai",
    "description": "Led by Abhishek Sharma, Abhi.ai was founded on the belief that cutting-edge AI shouldn't just be for big tech. We combine engineering excellence with a deep understanding of business problems to deliver AI solutions that actually matter.",
    "url": "https://www.abhiai.in/about",
    "mainEntity": {
      "@type": "Person",
      "name": "Abhishek Sharma",
      "jobTitle": "Founder & AI Engineer",
      "worksFor": {
        "@id": "https://www.abhiai.in/#organization"
      },
      "url": "https://www.linkedin.com/in/abhi-ai/",
      "sameAs": [
        "https://www.instagram.com/abhi.ai_/",
        "https://abhiai.tech"
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
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
    </>
  );
}
