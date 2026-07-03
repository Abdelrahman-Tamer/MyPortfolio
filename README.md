# Abdelrahman Emam Portfolio

Angular portfolio website for Abdelrahman Emam, a Junior Frontend Developer and Angular Developer based in Cairo, Egypt.

## Tech Stack

- Angular 22 standalone components
- TypeScript
- Tailwind CSS 4
- CSS custom properties for dark/light themes
- English/Arabic language support with RTL/LTR switching
- Inline SVG icon component
- Static SEO assets for deployment

## Features

- Responsive portfolio sections: Navbar, Hero, Stats, About, Timeline, Services, Projects, Skills, Contact, and Footer
- Dark and light theme toggle
- English and Arabic language toggle
- Data-driven portfolio content from `src/app/core/data/portfolio.data.ts`
- SEO metadata, Open Graph, Twitter card metadata, JSON-LD, robots.txt, sitemap.xml, manifest, favicon, and social preview SVG
- UI-only contact form

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The app runs at `http://localhost:4200/` by default.

## Build

Create a production build:

```bash
ng build
```

The static build output is generated in:

```text
dist/my-portfolio
```

## Deployment Notes

This project is ready for static hosting. Deploy the contents of `dist/my-portfolio/browser` after running `ng build`.

Public assets are copied from `public/`, including:

- `favicon.svg`
- `og-preview.svg`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`

## SEO

The current production domain used for canonical, Open Graph, Twitter, robots, and sitemap URLs is:

`https://abdelrahman-emam-portfolio.vercel.app/`

Replace `public/og-preview.svg` with a final branded preview image if needed.

## Contact Form

The contact form is currently UI-only. It prevents the default submit action and does not send emails or connect to EmailJS/backend yet.
