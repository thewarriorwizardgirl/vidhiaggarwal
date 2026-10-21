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

## Add a separate journal app later

The journal is intended to be its own app and its own Netlify site, available at:

```text
https://journal.thewarriorwizardgirl.com
```

When the journal app is ready:

1. Create it in a separate repository, or keep it in a separate folder in this repository. It must have its own build command and output directory.
2. Deploy it to Netlify as a **second site**. For a separate repository, connect that repository directly. For a monorepo, configure the second Netlify site with the journal folder as its **Base directory**; set its build command and publish directory to values appropriate for that app.
3. Confirm the journal site works at its Netlify-provided address, such as `your-journal-site.netlify.app`.
4. In that journal site's Netlify **Domain management**, add `journal.thewarriorwizardgirl.com` as a custom domain.
5. At the DNS provider for `thewarriorwizardgirl.com`, add the record Netlify requests for the `journal` subdomain. It is commonly a CNAME from `journal` to the journal site's Netlify hostname. Follow the exact DNS values Netlify displays and allow time for DNS/HTTPS provisioning.
6. In [src/components/JournalPage.tsx](./src/components/JournalPage.tsx), change the `journalUrl` constant from the current journal address to `https://journal.thewarriorwizardgirl.com`.
7. Run `npm run build`, deploy the portfolio site again, and test **Read Journal**. The link is already configured to open in a new tab.

The portfolio's Netlify site and the journal's Netlify site have separate build settings and deployments. Do not point the portfolio site's publish directory at the journal app's build output.

## Adding images

Put site-owned image files in `public/images/`, preferably using descriptive lowercase names with hyphens. For example, `public/images/home/slide-one.jpg` is referenced in app code as:

```ts
image: '/images/home/slide-one.jpg'
```

Commit the image files so they are included in Netlify's production build. The image directory has additional guidance in [public/images/README.md](./public/images/README.md).
