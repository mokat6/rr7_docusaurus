import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rr7_docusaurus/",
  server: {
    // rewrite requests so that local dev works with /rr7_docusaurus/ prefix
    fs: {
      strict: false,
    },
  },
});
