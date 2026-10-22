# App structure walkthrough

This is a Vite-powered React and TypeScript single-page app. The header updates
the selected page, `App.tsx` chooses which page component to render, and the
components read their editable copy from `src/data/`.

## Folder map

```text
.
├── index.html
├── netlify.toml
├── public/
│   └── images/
│       ├── home/
│       │   ├── slide1-workstation.jpeg
│       │   ├── slide2-trek.jpg
│       │   └── slide3-journal.jpg
│       ├── flying-kick-logo.png
│       └── README.md
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   ├── theme.css
│   ├── components/
│   │   ├── Carousel.tsx
│   │   ├── ContactPage.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── JournalPage.tsx
│   │   ├── ProfessionalJourneyPage.tsx
│   │   └── ProjectsPage.tsx
│   └── data/
│       ├── journey.ts
│       ├── projects.ts
│       └── slides.ts
├── CONTENT.md
└── README.md
```

## How the app renders a page

1. `index.html` provides the page shell and the `#root` element.
2. `src/main.tsx` mounts the React app and imports global styles.
3. `src/App.tsx` holds the current page and selects the home carousel, Projects,
   Journal, Professional Journey, or Contact Me component.
4. `src/components/Header.tsx` displays the logo and navigation. Navigation
   links call `onNavigate` to change the page.
5. The selected page component displays its page content.
6. `src/components/Footer.tsx` appears below the page content.

## Components and content

| File | Purpose |
| --- | --- |
| `src/App.tsx` | App shell, current-page state, and page selection. |
| `src/components/Header.tsx` | Logo and responsive navigation (icons on small screens). |
| `src/components/Footer.tsx` | Site handle and email address. |
| `src/components/Carousel.tsx` | Home slide layout, controls, and per-slide CTA. |
| `src/components/ProjectsPage.tsx` | Two-column project category layout and cards. |
| `src/components/ProfessionalJourneyPage.tsx` | Journey filters, expandable milestones, and animated timeline marker. |
| `src/components/JournalPage.tsx` | Journal image and link to the separate journal app. |
| `src/components/ContactPage.tsx` | WhatsApp and email contact actions. |
| `src/data/slides.ts` | Home slide copy, image paths, alt text, and CTA destinations. |
| `src/data/projects.ts` | Project groups, project descriptions, status, images, and live links. |
| `src/data/journey.ts` | Experience and education entries, details, and technology tags. |

Edit the files in `src/data/` to update most of the page content without
changing the layout components. See [CONTENT.md](./CONTENT.md) for the current
content inventory and editing pointers.

## Styling and assets

- `src/theme.css` contains shared Tailwind theme tokens, including the
  monochrome palette and font.
- `src/styles.css` imports Tailwind, applies global CSS, and contains small
  custom animations and component color rules.
- Put images owned by this site in `public/images/`. A file at
  `public/images/home/slide1-workstation.jpeg` is referenced in code as
  `/images/home/slide1-workstation.jpeg`.
- Vite copies files in `public/` into `dist/` unchanged during production builds.
- `netlify.toml` tells Netlify to run `npm run build`, publish `dist/`, and route
  application URLs to the React entry page.

## Common tasks

### Change a carousel slide

Edit its object in `src/data/slides.ts`. To change the image, place the file in
`public/images/` and set `image` to its root-relative URL, such as
`/images/home/new-slide.jpg`.

### Change a project or milestone

Edit or add an item in `src/data/projects.ts` or `src/data/journey.ts`. Keep the
properties consistent with the corresponding TypeScript type in that file.

### Update the journal app URL

Edit `journalUrl` in `src/components/JournalPage.tsx`. The link is configured
to open in a new browser tab. The current destination is documented in
[README.md](./README.md#journal-site).

### Run the site

```bash
npm install
npm run dev
```

Build for deployment with `npm run build`; preview the generated build with
`npm run preview`.
