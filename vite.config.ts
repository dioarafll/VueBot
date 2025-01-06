import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  test: {
    globals: true, // Untuk menggunakan sintaks global seperti "describe", "it", dll.
    environment: 'jsdom', // Menggunakan jsdom untuk simulasi DOM di lingkungan testing.
    transformMode: {
      web: [/\.vue$/], // Untuk mendukung transformasi file .vue
    },
    coverage: {
      provider: 'v8', // Menggunakan V8 untuk code coverage
      reporter: ['text', 'json', 'html'], // Tipe laporan yang dihasilkan
    },
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
