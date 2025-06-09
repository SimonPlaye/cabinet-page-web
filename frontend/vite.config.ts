import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    base: "./",
    plugins: [react(), tsconfigPaths()],
    define: process.env.NODE_ENV === "development" ? { global: "window" } : {},
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    publicDir: "public",
  };
});
