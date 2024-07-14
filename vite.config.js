import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ecommerce-stage-two-hng/",
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://timbu-get-all-products.reavdev.workers.dev",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  plugins: [react(), svgr()],
})