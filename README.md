# Jessie Apac — Portfolio

My personal portfolio: a frontend developer building high-traffic web platforms that stay fast and maintainable.

**Live site:** https://apacjessie.github.io

## Stack

- React 19 + TypeScript, built with Vite
- Plain CSS with design tokens (light and dark themes, follows the system setting)
- Self-hosted fonts via Fontsource: Bricolage Grotesque, Instrument Sans, JetBrains Mono
- Deployed to GitHub Pages with GitHub Actions

## Structure

```
src/
  data/content.ts     all site copy: projects, experience, toolkit
  components/         one component per section
  hooks/useTheme.ts   light/dark theme with a remembered choice
  styles/             tokens.css (colors, type, spacing) and global.css
```

To update the site, edit `src/data/content.ts`. To add a project screenshot, put the image in `public/projects/` and set `image: '/projects/name.png'` on that project.

## Run locally

```bash
npm install
npm run dev
```

Pushing to `main` builds and deploys automatically.
