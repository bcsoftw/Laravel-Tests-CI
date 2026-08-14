import js from "@eslint/js";
import globals from "globals";

export default [
  // 1. Aplicar las reglas base recomendadas de ESLint v10
  js.configs.recommended,

  // 2. Bloque principal para los scripts del Frontend de Laravel
  {
    files: ["resources/js/**/*.{js,jsx,ts,tsx,vue}"],

    languageOptions: {
      ecmaVersion: "latest", // Soporte para características modernas de JS
      sourceType: "module", // Laravel usa Vite (módulos ES nativos)
      globals: {
        ...globals.browser, // Habilita window, document, fetch, etc.
        ...globals.node, // Habilita process, etc.
        axios: "readonly", // Evita alertas por el Axios global de Laravel bootstrap.js
        route: "readonly", // Evita alertas si usas Ziggy Routes en Laravel
      },
    },

    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Permite variables sin uso si empiezan por barra baja
      "no-console": "warn", // Alerta si olvidas limpiar console.log() antes de producción
    },
  },

  // 3. Exclusiones obligatorias para un entorno Laravel
  {
    ignores: [
      "public/**", // Código compilado final por Vite
      "node_modules/**", // Módulos de Node
      "vendor/**", // Paquetes PHP de Composer
      "bootstrap/cache/**", // Caché interna de Laravel
      "storage/**", // Archivos cargados y logs de Laravel
    ],
  },
];
