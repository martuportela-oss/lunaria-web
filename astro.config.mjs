import { defineConfig } from 'astro/config';

// Cuando tengan dominio propio, completar `site` (sirve para sitemap y SEO).
export default defineConfig({
  vite: {
    server: {
      watch: {
        // Espera a que un archivo termine de guardarse antes de recargarlo.
        // Evita que el servidor local muestre estilos cortados a la mitad.
        awaitWriteFinish: { stabilityThreshold: 600, pollInterval: 100 },
      },
    },
  },
});
