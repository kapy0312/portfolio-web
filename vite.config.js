import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ─── Change '/portfolio/' to match your GitHub repo name ──────────────────────
// e.g. if your repo is github.com/kapy0312/my-portfolio → base: '/my-portfolio/'
// For Vercel or custom domain deployment, set base: '/'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/portfolio/',
})
