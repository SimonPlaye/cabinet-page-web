import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig(() => {
  return {
    base: "/",
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    publicDir: "public",
  };
});
