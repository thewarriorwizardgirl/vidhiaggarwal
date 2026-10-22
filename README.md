# The Warrior Wizard Girl

A responsive React, TypeScript, and Tailwind CSS portfolio built with Vite.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

To open the development server on another device on your local network:

```bash
npm run dev -- --host 0.0.0.0
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
public/
  images/                  Static images served from the site root
src/
  components/              Header, footer, carousel, and page components
  data/                    Editable slide, project, and journey content
  theme.css                Shared color and font tokens
  styles.css               Global styles and Tailwind import
netlify.toml               Netlify build and SPA fallback configuration
```

For an app structure and code walkthrough, see [APP_STRUCTURE.md](./APP_STRUCTURE.md).
For a content-only reference and editing pointers, see [CONTENT.md](./CONTENT.md).
For details on adding image assets, see [public/images/README.md](./public/images/README.md).

## Deploy this portfolio to Netlify

1. Push this project to a Git provider supported by Netlify.
2. In Netlify, choose **Add new site → Import an existing project** and connect the repository.
3. Netlify reads [netlify.toml](./netlify.toml). The build command is `npm run build`, and the publish directory is `dist`.
4. Deploy. Add the primary portfolio domain in the Netlify site's **Domain management** settings and configure the DNS records Netlify provides.

The DNS provider for `thewarriorwizardgirl.com` (including `www.thewarriorwizardgirl.com`) is Wix.

## Journal site

```text
Primary:  https://journal.thewarriorwizardgirl.com/
Fallback: https://journal-thewarriorwizardgirl.netlify.app/
```

The portfolio's **Read Journal** button opens the primary URL. If it does not
open, use the fallback Netlify URL linked beneath the button. Both URLs are
configured in [`src/components/JournalPage.tsx`](./src/components/JournalPage.tsx).

## Adding images

Put site-owned image files in `public/images/`, preferably using descriptive lowercase names with hyphens. For example, `public/images/home/slide-one.jpg` is referenced in app code as:

```ts
image: '/images/home/slide-one.jpg'
```

Commit the image files so they are included in Netlify's production build. The image directory has additional guidance in [public/images/README.md](./public/images/README.md).
