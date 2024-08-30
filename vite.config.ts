import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const ClientSideRouting = {
  name: "dynamic-router",
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.url.search(/^\/@\d+/) !== -1 || ['/team', '/prototype', '/competition'].includes(req.url)) {
        req.url = "/";
      }

      next();
    });
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ClientSideRouting],
  server: {
    port: 3000,
  },
});