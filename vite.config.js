import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import eslint from "vite-plugin-eslint2";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: true,
    }),
    eslint({
      // Opciones útiles para desarrollo
      include: ["resources/js/**/*.{js,jsx,ts,tsx,vue}"],
      cache: true,
      fix: true, // Habilita el auto-fix al guardar si lo deseas
    }),
  ],
});
