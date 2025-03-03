const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

// Define only the main URL for a Single Page Application (SPA)
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 }
];

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://www.sabuildingsolutions.in' });

// Convert stream to promise and save to public folder
streamToPromise(Readable.from(links).pipe(sitemap)).then((data) => {
  require('fs').writeFileSync('public/sitemap.xml', data.toString());
  console.log('✅ Sitemap generated successfully!');
}).catch(err => console.error('❌ Sitemap generation failed:', err));
