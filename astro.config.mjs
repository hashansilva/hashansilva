import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
    site: 'https://hashansilva.vercel.app', // update if you add a custom domain
    integrations: [sitemap()],
    build: {
        format: 'directory'
    }
});