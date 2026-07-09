import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.abhiai.in";

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/case-studies", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/ai-agent-development", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ai-automation-services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ai-chatbot-development", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/generative-ai-solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/llm-development", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/rag-based-ai", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
