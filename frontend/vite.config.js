import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Using the Vite plugin for React
  server: {
    port: 3000, // Configuring the development server to run on port 3000
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Proxying API requests to localhost:5000
      },
    },
  },
});
