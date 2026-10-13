import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites need the repository name here.
  // Update this to '/YOUR-REPOSITORY-NAME/' before deploying to a project repo.
  base: "/My-React-app/",
})
