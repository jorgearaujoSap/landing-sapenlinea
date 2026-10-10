// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Dominio de producción (canonical, hreflang, og:url y sitemap absolutos). Ajustar si cambia.
  site: "https://sapenlinea.com.co",
  integrations: [
    // La raíz "/" solo redirige al idioma (noindex): se excluye del sitemap. El hreflang va en el HTML de cada página.
    sitemap({ filter: (page) => new URL(page).pathname !== "/" && !page.endsWith("/404/") }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
