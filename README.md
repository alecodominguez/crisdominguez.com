# crisdominguez.com

Portfolio, CV, and online business card for artist **Cris Dominguez**. Plain HTML/CSS/JS with no build step, hosted on GitHub Pages.

```
crisdominguez.com/
├── index.html            ← Works (portfolio grid + lightbox)
├── about.html            ← Bio, artist statement, CV
├── news.html             ← Updates + Instagram
├── writing.html          ← Selected poems
├── contact.html          ← Email + social links
├── 404.html
├── CNAME                 ← www.crisdominguez.com  (do not delete)
├── .nojekyll             ← tells Pages to serve files as-is
├── robots.txt, sitemap.xml
├── css/styles.css        ← all styling; colors and fonts live in :root
├── js/works-data.js      ← ALL artwork: titles, statements, images (edit this)
├── js/main.js            ← builds the Works page, viewer, language switch
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
2. Copy the site files into the **root** of the repo, then commit and push to `main`. Leave out the `crisdominguez.com/` and `Claude outputs/` folders (see the privacy section below).
   - **Hidden file:** `.nojekyll` is easy to miss, because Finder hides it and the web uploader skips it. To add it on GitHub, choose **Add file → Create new file**, name it `.nojekyll`, leave it empty, and commit.
   - **Seeing your changes:** a deploy takes about 1 minute; you can watch it under the repo's **Actions** tab. Browsers then keep the old copy for up to 10 minutes. To see the new version right away, hard-refresh (Cmd+Shift+R on Mac, Ctrl+F5 on Windows) or open the site in a private window.

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
- The old `placeholder-*.svg` files in `images/works/` are no longer used and can be deleted (keep `images/site/portrait-placeholder.svg` until her portrait is in).

### 4. Add or edit a work
All artwork is listed in **`js/works-data.js`**, one block per piece or collection. You don't need to touch the HTML.
1. Resize the photo into two copies with the same file name: a large one in `images/works/` (2000 px) and a small one in `images/works/thumbs/` (900 px).
2. In `js/works-data.js`, copy an existing `{ … }` block into the right group and edit its title, medium, year, statement and images. Each piece's statement is hidden on the grid and opens when someone clicks the work or "Read statement".
3. To add a **collection**, use `section: "collections"` and list several images. The viewer steps through them in order.
4. Lines marked `// CHECK` are things Cris should confirm, such as working titles or draft statements.

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

### 6. Groups and filters
The Works page is grouped as: Collections · Oils · Graphite Drawings · Ink · Color & Pattern · Collage · Sculpture & Installation · Photography · In Progress. To rename or reorder them, edit `SECTIONS` at the top of `js/works-data.js`. A group only appears if it has at least one work. Each group has its own link, for example `crisdominguez.com/#photography`.

### 7. Update the CV, news, and contact info
- **CV:** edit `about.html`. Every entry is an `<li class="cv-item">`, so copy one and change the text. Also export the PDF to `assets/cris-dominguez-cv.pdf`.
- **News:** copy an `<article class="post">` in `news.html`.
- **Email:** in `contact.html`, set `data-email-user` / `data-email-domain`.
- **Accent color or fonts:** edit `:root` at the top of `css/styles.css`. The current accent is Pacific sea-teal `#2f6f6a`.

### Privacy and the originals folder
- **Never upload the `crisdominguez.com/` folder** (the Drive originals) or `Claude outputs/` to GitHub. They hold her full resume with her phone number and about 300 MB of originals. The site only uses the resized copies in `images/works/`. A `.gitignore` file excludes those folders if you use git or GitHub Desktop, but the github.com drag-and-drop uploader ignores it, so only drag in the site files.
- The resized images had their camera metadata (including any GPS location) removed.
- The site intentionally leaves out her phone number, citizenship, exact town and GPA. Keep those off the downloadable CV PDF too.
