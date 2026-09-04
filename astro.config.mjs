// @ts-check
import { defineConfig } from 'astro/config';

// Static institutional event website for the ARIES International Workshop.
// No integrations required — plain Astro components + hand-written CSS.
export default defineConfig({
  site: 'https://www.aries.res.in',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
});
