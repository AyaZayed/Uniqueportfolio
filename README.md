# Aya Zayed – Portfolio

Personal portfolio of **Aya Zayed**, a MERN Stack Developer based in Egypt. It has an editorial look: a huge name, a looping cloud video behind the hero, numbered project rows, and light/dark themes that follow the device setting. It is fully responsive and built mobile-first.

## Features

- Full-screen hero with muted autoplay video (mp4 + webm sources, poster image as fallback)
- Sections: Hero, About, Projects, Experience, Skills, Contact
- Smooth entrance animations that respect `prefers-reduced-motion`
- Light and dark themes via CSS variables
- Responsive layout from small phones to large desktops
- Deployed automatically to GitHub Pages on every push to `main`

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 18, TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | Motion |
| Icons | lucide-react |
| Fonts | Archivo Black, DM Sans |
| Hosting | GitHub Pages (GitHub Actions) |

## Getting started

Requirements: Node.js 20 or later.

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# create a production build in dist/
npm run build
```

## Project structure

```
.
├── .github/workflows/deploy.yml   # builds and deploys to GitHub Pages
├── src/
│   ├── app/
│   │   ├── App.tsx                # page layout, hero and project data
│   │   └── components/            # About, Projects, Experience, Skills, Contact...
│   ├── assets/                    # project screenshots
│   ├── imports/                   # hero video (webm/mp4) and poster image
│   ├── styles/                    # theme.css (colors, fonts), Tailwind setup
│   └── main.tsx
├── vite.config.ts
└── package.json
```

## Editing content

- **Text, projects and links:** edit the data and copy in `src/app/App.tsx` and the files in `src/app/components/`.
- **Colors and fonts:** change the CSS variables in `src/styles/theme.css`.
- **Hero video:** replace `src/imports/clouds1.webm` and `clouds1.mp4`, and keep both formats so older iPhones can play it.

## Deployment

The site deploys with GitHub Actions (`.github/workflows/deploy.yml`):

1. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`. The workflow installs dependencies, runs `npm run build`, and publishes `dist/`.

**Base path:** `vite.config.ts` sets `base` to the repository name (for example `'/azzportfolio/'`). It must match your repo name exactly or the site loads blank. If you use a custom domain, set `base` to `'/'`.

**Figma Make note:** this project was started in Figma Make. Pushes from Figma Make can delete the workflow file and add invalid alias entries to `package.json`. The workflow already strips those entries before installing. After a Figma Make push, check that `deploy.yml` and the `base` setting in `vite.config.ts` are still there.

## Credits

- Initial layout generated with [Figma Make](https://www.figma.com/make/).
- Design inspired by [shelbykay.dev](https://shelbykay.dev/).
- UI primitives follow the shadcn/ui pattern (see `ATTRIBUTIONS.md`).

## Contact

- Email: [ayazayedofficial@gmail.com](mailto:ayazayedofficial@gmail.com)
- GitHub: [@AyaZayed](https://github.com/AyaZayed)
- LinkedIn: [ayazayed414](https://www.linkedin.com/in/ayazayed414)
