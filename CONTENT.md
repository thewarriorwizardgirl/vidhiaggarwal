# Website content reference

This file is a quick content inventory for the portfolio. Update the source
files linked in each section to change the website; this document is a
reference, not the source of truth.

## Site-wide

- **Brand/title:** The Warrior Wizard Girl — `src/components/Header.tsx`
- **Navigation:** Home, Projects, Journal, Professional Journey, Contact Me — `src/components/Header.tsx`
- **Logo:** `public/images/flying-kick-logo.png`
- **Theme:** Open Sans; ink `#181818`; paper white; shared tokens in `src/theme.css`
- **Footer:** `vidhiaggarwal` and `thewarriorwizardgirl@gmail.com` — `src/components/Footer.tsx`

## Home carousel

Slide copy, button destinations, images, alt text, and image treatment live in
[`src/data/slides.ts`](./src/data/slides.ts). Carousel layout and controls are in
[`src/components/Carousel.tsx`](./src/components/Carousel.tsx).

1. **A little about me**
   - Title: “Curious by nature. Creative by choice.”
   - Button: “My Work” → Projects
   - Image: `/images/home/slide1-workstation.jpeg`
2. **Things I believe**
   - Title: “Always becoming. Never quite done.”
   - Button: “My Adventures” → Journal
   - Image: `/images/home/slide2-trek.jpg`
3. **What comes next**
   - Title: “Make room for wonder.”
   - Button: “My Journal” → Journal
   - Image: `/images/home/slide3-journal.jpg`

The descriptions and image alt text are stored alongside each slide in
`src/data/slides.ts`.

## Projects

Project groups, names, descriptions, status, image paths, and destinations are
in [`src/data/projects.ts`](./src/data/projects.ts). The two groups are:

- **Business Websites:** My Kitchen Garden; New India Logistics (Import Export Business); South Indian Tea; Custom Gifting.
- **Personal Portfolios:** CA Bhawna; Versatile Shruti; Product Manager Ishika.

The projects page layout is in
[`src/components/ProjectsPage.tsx`](./src/components/ProjectsPage.tsx).

## Professional Journey

Milestones, dates, roles, organizations, locations, summaries, details, and
technology tags are in [`src/data/journey.ts`](./src/data/journey.ts). The
categories are Software Engineering, EdTech & Research, and Education.

Filtering, timeline, animation, and expandable milestone cards are in
[`src/components/ProfessionalJourneyPage.tsx`](./src/components/ProfessionalJourneyPage.tsx).

## Journal

The Journal page intentionally contains only an image and a **Read Journal**
link; no journal posts are included in this portfolio page.

- Image and destination URL: [`src/components/JournalPage.tsx`](./src/components/JournalPage.tsx)
- Primary destination: `https://journal.thewarriorwizardgirl.com/`
- Fallback destination: `https://journal-thewarriorwizardgirl.netlify.app/`
- If the primary URL does not open, the page links to the fallback Netlify URL.

## Contact

Contact copy, email address, WhatsApp link/message, email-copy action, and
mailto links are in [`src/components/ContactPage.tsx`](./src/components/ContactPage.tsx).

- Email: `thewarriorwizardgirl@gmail.com`
- WhatsApp: `https://wa.me/?text=...` with a prefilled message. The current link
  does not include a phone number, so WhatsApp asks the visitor to choose a
  recipient.

## Empty pages

Journal has the image/link layout described above. Other page routing and the
placeholder view are managed in [`src/App.tsx`](./src/App.tsx).
