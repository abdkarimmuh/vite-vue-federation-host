import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host-app',
      remotes: {
          remote_app: "http://localhost:8081/assets/remoteEntry.js",
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  }
})
