const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.seusite.com.br';

const pages = [
  { loc: '/', priority: 1.0, changefreq: 'weekly' },
  { loc: '/sobre', priority: 0.8, changefreq: 'monthly' },
  { loc: '/servicos', priority: 0.9, changefreq: 'weekly' },
  { loc: '/contato', priority: 0.7, changefreq: 'monthly' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      ({ loc, priority, changefreq }) => `
    <url>
      <loc>${baseUrl}${loc}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap, 'utf8');

console.log('✅ sitemap.xml gerado com sucesso!');
