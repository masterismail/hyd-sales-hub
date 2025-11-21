import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// vite.config.ts
export default defineConfig(({ mode }) => ({
  // CHANGE THIS to match your actual GitHub repo name
  // Example: if your repo is 'my-sales-app', this should be '/my-sales-app/'
  base: "/hyd-sales-hub/", 
  
  server: {
    host: "::",
    port: 8080,
  },
  // ... rest of the config
}));
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
