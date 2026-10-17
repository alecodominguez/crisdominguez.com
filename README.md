# crisdominguez.com

Portfolio, CV, and online business card for artist **Cris Dominguez**. Plain HTML/CSS/JS with no build step, hosted on GitHub Pages.

```
crisdominguez.com/
├── index.html            ← Works (portfolio grid + lightbox)
├── about.html            ← Bio, artist statement, CV
├── news.html             ← Updates + Instagram
├── contact.html          ← Email + social links
├── 404.html
├── CNAME                 ← www.crisdominguez.com  (do not delete)
├── .nojekyll             ← tells Pages to serve files as-is
├── robots.txt, sitemap.xml
├── css/styles.css        ← all styling; colors and fonts live in :root
├── js/main.js            ← nav, filters, lightbox, email
├── assets/
│   └── cris-dominguez-cv.pdf      ← (add) downloadable CV
└── images/
    ├── works/
    │   ├── 2026-boats-at-dawn.jpg       ← full size, opens in the lightbox
    │   └── thumbs/
    │       └── 2026-boats-at-dawn.jpg   ← grid thumbnail
    ├── site/
    │   ├── favicon.svg
    │   ├── portrait.jpg           ← (add) About page photo, 4:5
    │   └── og-image.jpg           ← (add) 1200×630 social share image
    ├── news/                      ← photos used in News posts
    └── instagram/                 ← square crops for the Instagram grid
```

Find every spot that still needs content by searching the project for `PLACEHOLDER`.

---

## GitHub Pages asset guide

### 1. Put the site in the repo
1. Clone `https://github.com/alecodominguez/crisdominguez.com`. Alternatively, open it on github.com and use **Add file → Upload files**.
2. Copy everything in this folder into the **root** of the repo, including the hidden `.nojekyll` file, then commit and push to `main`.

### 2. Turn on Pages and connect the domain
1. Go to **Repo → Settings → Pages**. Under **Source**, choose *Deploy from a branch*, then pick `main` and `/ (root)`.
2. Under **Custom domain**, enter `www.crisdominguez.com` and click Save. The `CNAME` file already holds this value.
3. Add these records at your domain registrar's DNS settings:
   | Type  | Host | Value |
   |-------|------|-------|
   | CNAME | www  | `alecodominguez.github.io` |
   | A     | @    | `185.199.108.153` |
   | A     | @    | `185.199.109.153` |
   | A     | @    | `185.199.110.153` |
   | A     | @    | `185.199.111.153` |
4. Once DNS has propagated (from a few minutes up to 24 hours), tick **Enforce HTTPS**.

### 3. Prepare images (this matters most for speed)
| Use | Folder | Size (long edge) | Format | Target weight |
|-----|--------|------------------|--------|---------------|
| Grid thumbnail | `images/works/thumbs/` | 800 px (4:5 crop is ideal) | JPG (or WebP) | ≤ 150 KB |
| Lightbox / full | `images/works/` | 2000 px | JPG (or WebP) | ≤ 500 KB |
| Portrait | `images/site/portrait.jpg` | 1200×1500 | JPG | ≤ 250 KB |
| Share image | `images/site/og-image.jpg` | 1200×630 | JPG | ≤ 200 KB |
| Instagram grid | `images/instagram/1.jpg …` | 300×300 | JPG | ≤ 40 KB |

- **File names:** use `year-title-in-lowercase-with-hyphens.jpg`, e.g. `2025-self-portrait-with-mask.jpg`. Don't use spaces, accents, or capitals, because GitHub Pages URLs are case-sensitive.
- **Free tools:** [Squoosh](https://squoosh.app) in the browser, or on a Mac run `sips -Z 2000 *.jpg` to resize a whole folder.
- **Photographing work:** use daylight with no flash, shoot the piece straight on, and crop off the background. Shoot 3D work against a plain wall.
- Delete the `_placeholder-*.svg` files after the real images are in.

### 4. Add a work
In `index.html`, copy the template that sits in the comment above `<ul class="works-grid">`. Paste it as the **first** item to keep newest work first, then fill in:
- `data-medium`: one or more of `oils graphite photography painting drawing sculpture mixed-media film`
- `data-full`: the full-size image path
- `src`: the thumbnail path
- `alt`: what a viewer actually *sees* (for example: "Oil painting of three blue fishing boats pulled onto the sand at dawn, rough orange brushstrokes in the sky"). Screen readers use this text, and so does Google Images.
- Title, then **Medium · Dimensions · Year** in both languages (in the Spanish version, give dimensions in cm). Use dimensions as H × W (× D) in inches or cm, and keep one unit across the whole site.

### 5. English / Spanish
Every bit of visible text is written twice, side by side:
```html
<span lang="en">Oil on canvas</span><span lang="es">Óleo sobre lienzo</span>
<p lang="en">English paragraph…</p>
<p lang="es">Párrafo en español…</p>
```
The EN/ES switch in the header shows one and hides the other. The choice is remembered, and Spanish-language browsers get Spanish automatically. Any link ending in `?lang=es` opens in Spanish, which is handy for sharing with Spanish-speaking schools.
- For **alt text and labels**, add `data-es-alt="…"` (or `data-es-aria-label="…"`) next to the English attribute.
- Text that's the same in both languages, such as names or a title she keeps in one language, doesn't need spans.
- If you forget the Spanish half of a pair, that text simply won't appear in Spanish. Search for `lang="en"` to double-check.

### 6. Filter categories
The Works filters are: Oils, Graphite Drawings, Photography, Painting, Drawing, Sculpture, Mixed media, Film & digital. Tag each work with `data-medium` (for example `oils`, `graphite`, `photography`). A chip only appears once at least one work uses it, so unused categories stay hidden.

### 7. Update the CV, news, and contact info
- **CV:** edit `about.html`. Every entry is an `<li class="cv-item">`, so copy one and change the text. Also export the PDF to `assets/cris-dominguez-cv.pdf`.
- **News:** copy an `<article class="post">` in `news.html`.
- **Email:** in `contact.html`, set `data-email-user` / `data-email-domain`.
- **Accent color or fonts:** edit `:root` at the top of `css/styles.css`. The current accent is Pacific sea-teal `#2f6f6a`.

### Privacy note
Cris is under 18, and this site is public. It intentionally leaves out her phone number, citizenship, exact village, and GPA, all of which appear on her resume. Keep those off the downloadable PDF as well.
