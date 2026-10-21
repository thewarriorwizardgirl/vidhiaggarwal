# Portfolio images

Add image files for the website in this folder, for example:

```text
public/
  images/
    about-portrait.jpg
    journal-cover.webp
```

Files in `public/` are copied directly into the production build. An image saved
as `public/images/about-portrait.jpg` is used in the site as `/images/about-portrait.jpg`.

To use an image in the home carousel, update the matching `image` value in
`src/data/slides.ts`:

```ts
image: '/images/about-portrait.jpg',
```

Keep filenames lowercase and use hyphens instead of spaces. Commit the image
files along with the code so they are included when Netlify builds the site.
