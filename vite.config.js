import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { getPromoMes } from './src/PRECIOS.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  define: { __PROMO_MES__: JSON.stringify(getPromoMes()) },
})
