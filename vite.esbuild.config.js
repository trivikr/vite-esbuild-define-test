import { defineConfig } from "vite";

// Refs: https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    include: [".js"],
    define: {
      global: "window",
    },
  },
});
