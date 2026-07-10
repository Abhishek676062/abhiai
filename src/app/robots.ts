import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: ["PerplexityBot", "ChatGPT-User", "Google-Extended", "Claude-Web"],
        allow: "/",
      }
    ],
    sitemap: "https://www.abhiai.in/sitemap.xml",
    host: "https://www.abhiai.in",
  };
}
