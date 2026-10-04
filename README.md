# raja9964.github.io

Personal portfolio of Raja Mohamad, Data Engineer in Bengaluru, India.
Live at https://raja9964.github.io

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html              page shell, meta tags, Open Graph tags
favicon.svg
robots.txt, sitemap.xml
assets/css/styles.css   all styles, light and dark themes
assets/js/data.js       all personal content (edit this)
assets/js/main.js       renders data.js into the page
assets/img/             photo, og-image.png, apple-touch-icon.png
```

## Editing content

Everything personal (title, experience, projects, certifications,
publication, education, links) lives in `assets/js/data.js`. Change the values,
save and refresh. There's no need to touch the HTML.

- **Résumé button:** put the PDF at `assets/Raja_Mohamad_Resume.pdf` and set
  `resumeAvailable: true`.
- **Email button:** set `links.email` to an address. Leave it empty to hide it.
- **Paper link:** set `publication.url` to show a "Read the paper" link.
- **Projects:** add or remove objects in `projects`. `featured: true` makes the
  large card.

The `<title>`, description and Open Graph tags in `index.html` also mention the
name and title. Update them too if the job title changes. LinkedIn caches link
previews, so use the [Post Inspector](https://www.linkedin.com/post-inspector/)
to refresh it after a change.

## Running locally

```
python -m http.server 5107
```

Then open http://localhost:5107.

## Deploying with GitHub Pages

1. Create a public repo named `Raja9964.github.io` on GitHub.
2. Push this folder to its `main` branch.
3. In **Settings → Pages**, set the source to "Deploy from a branch", then
   choose `main` and `/ (root)`.
4. The site goes live at https://raja9964.github.io within a minute or two.

`.nojekyll` tells Pages to serve the files as they are.
