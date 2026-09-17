// frontend/vite.config.js

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // Relatório de desempenho
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 20 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: { plugins: [{ name: "removeViewBox", active: false }] },
      webp: { quality: 75 },
    }),
  ],
  // Code Splitting e Lazy Loading
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router-dom")) {
              return "vendor-router";
            }
            if (id.includes("framer-motion")) {
              return "vendor-framer";
            }
            if (id.includes("react-icons")) {
              return "vendor-icons";
            }
            return "vendor"; // Todas as outras libs em um chunk 'vendor'
          }
        },
      },
      // Minificação e compressão
      minify: "esbuild", // Padrão, mas bom garantir
      brotliSize: true, // Gera arquivos .br (ótimo para servidores que suportam)
    },
  },
});
