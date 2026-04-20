/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.abhiai.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,

  exclude: [
    '/admin/*',
    '/api/*',
    '/private/*',
    '/404',
    '/500'
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },

  transform: async (config, path) => {
    // 🔥 Priority control for ranking pages
    let priority = 0.7
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    }

    if (path.includes('ai-agent')) {
      priority = 0.95
      changefreq = 'daily'
    }

    if (path.includes('ai-automation')) {
      priority = 0.95
      changefreq = 'daily'
    }

    if (path.includes('chatbot')) {
      priority = 0.9
      changefreq = 'daily'
    }

    if (path.includes('blog')) {
      priority = 0.8
      changefreq = 'daily'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },

  additionalPaths: async (config) => {
    const importantPages = [
      '/ai-agent-development',
      '/ai-automation-services',
      '/ai-chatbot-development',
      '/generative-ai-solutions',
      '/rag-based-ai',
      '/llm-development',
      '/case-studies',
      '/contact',
      '/about',
      '/privacy-policy',
      '/terms-of-service',
    ]

    return Promise.all(
      importantPages.map((path) => config.transform(config, path))
    )
  },
}
