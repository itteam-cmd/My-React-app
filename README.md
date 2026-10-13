# React + Vite Demo

A starter React project with Vite, ESLint, a responsive landing page, and a GitHub Pages deployment workflow.

## Run it on your computer

1. Install **Node.js LTS** from https://nodejs.org/
2. Extract this ZIP and open the project folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Create a production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a new, empty repository on GitHub.
2. Upload/push all files from this project to the repository's `main` branch.
3. If the repository is **not** named `YOUR-USERNAME.github.io`, edit `vite.config.js` and change `base: '/'` to `base: '/YOUR-REPOSITORY-NAME/'` (include the slashes).
4. On GitHub, open **Settings → Pages** and set the build/deployment source to **GitHub Actions**.
5. Push your changes to `main`. Open the **Actions** tab and wait for the deployment workflow to finish.
6. GitHub will show your published website URL under **Settings → Pages** or in the workflow deployment details.

## Main files

- `src/App.jsx` — page content and React components
- `src/App.css` — page styling
- `src/index.css` — global styling
- `vite.config.js` — Vite and GitHub Pages base path
- `.github/workflows/deploy.yml` — automatic GitHub Pages deployment

The counter button is interactive. Replace the demo text and feature cards with your own project content.
