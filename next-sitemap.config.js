/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.abhayadityajain.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/', { priority: 1.0 }),
    await config.transform(config, '/about', { priority: 0.9 }),
    await config.transform(config, '/ledger', { priority: 0.8 }),
    await config.transform(config, '/ledger/solara-virtue-getting-wrecked', { priority: 0.8 }),
    await config.transform(config, '/ledger/laurus-labs-metamorphosis', { priority: 0.8 }),
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