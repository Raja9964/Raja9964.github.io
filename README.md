# raja9964.github.io

Personal portfolio of Raja Mohamad, Data Engineering Intern in Bengaluru, India.
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
assets/img/projects/    project screenshots (WebP, 1200px wide)
```

## Editing content

Everything personal (title, experience, projects, certifications,
publication, education, links) lives in `assets/js/data.js`. Change the values,
save and refresh. There's no need to touch the HTML.

- **Projects:** add or remove objects in `projects`. `featured: true` makes the
  wide card; `demo` adds a live demo button and `image` points at a screenshot.
- **Publications and certifications:** edit `publications` and `certifications`.

The `<title>`, description and Open Graph tags in `index.html` also mention the
name and title. Update them too if the job title changes. LinkedIn caches link
previews, so use the [Post Inspector](https://www.linkedin.com/post-inspector/)
to refresh it after a change.

## Running locally

```
python -m http.server 5108
```

Then open http://localhost:5108.

## Deploying with GitHub Pages

1. Create a public repo named `Raja9964.github.io` on GitHub.
2. Push this folder to its `main` branch.
3. In **Settings → Pages**, set the source to "Deploy from a branch", then
   choose `main` and `/ (root)`.
4. The site goes live at https://raja9964.github.io within a minute or two.

`.nojekyll` tells Pages to serve the files as they are.
