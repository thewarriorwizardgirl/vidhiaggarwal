# Portfolio images

Add image files for the website in this folder, for example:

```text
public/
  images/
    home/
      slide-one.jpg
    journal/
      journal-image.png
    projects/
      kitchen-garden.png
      coming-soon.png
```

Files in `public/` are copied directly into the production build. An image saved
as `public/images/journal/journal-image.png` is used in the site as
`/images/journal/journal-image.png`.

Keep images grouped by page (`home`, `journal`, `projects`) and reference them
with root-relative URLs in the app. For example, to use an image in the home
carousel, update the matching `image` value in `src/data/slides.ts`:

```ts
image: '/images/home/slide-one.jpg',
```

Keep filenames lowercase and use hyphens instead of spaces. Commit the image
files along with the code so they are included when Netlify builds the site.
