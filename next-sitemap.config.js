/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.abhayadityajain.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about', { priority: 0.9 }),
    await config.transform(config, '/ledger'),
    await config.transform(config, '/ledger/solara-virtue-getting-wrecked'),
    await config.transform(config, '/ledger/laurus-labs-metamorphosis'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}