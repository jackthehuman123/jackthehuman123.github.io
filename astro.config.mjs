// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The repo is named jackthehuman123.github.io, so the site lives at the root.
export default defineConfig({
  site: 'https://jackthehuman123.github.io',
  integrations: [sitemap()],
});
