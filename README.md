# awpa: marketing site

Static marketing site for **awpa** (Connect. Trade. Grow.), built with
plain HTML/CSS/JS. No build step, no framework, no backend required.

```
awpa-site/
├── index.html            → home page
├── for-business.html     → business detail page
├── about.html            → About Us
├── careers.html          → Careers
├── privacy.html          → Privacy Policy (draft, review before publishing)
├── contact.html          → Contact Us (mailto-based form, no backend needed)
├── help-center.html      → Help Center / FAQ
├── android.html          → Android download page
├── iphone.html           → iPhone download page (coming soon + notify-me)
├── blog.html             → Blog (empty state, ready for future posts)
├── download.html         → Dedicated download page
├── css/                  → tokens.css, header.css, hero.css, features.css,
│                           business-footer.css, business-page.css, content-page.css
├── js/main.js            → nav dropdown, mobile menu, scroll reveal, App Store placeholder alert
├── favicon.svg / *.png   → icons generated from the brand mark
├── og-image.jpg          → social share preview image
├── downloads/            → put your real awpa.apk here (see step 2)
└── CNAME                 → GitHub Pages custom domain (awpa.app)
```

---

## 1. Run it locally

You don't need Node, npm, or any build tooling. Any of these work:

**Easiest, just open the file:**
Double-click `index.html` (or right-click → Open with your browser).

**Recommended, serve it properly** (so relative paths and fonts behave
exactly like they will in production):

```bash
# Python (already on most machines)
cd awpa-site
python3 -m http.server 8000
# then open http://localhost:8000

# or, if you have Node:
npx serve .
```

---

## 2. Add your Android app file

The Download buttons across the site point to `/downloads/awpa.apk`. That
file isn't included in this package since I can't access your Expo/EAS
build account or download binaries from external sites, only you can get
the actual `.apk` file onto your computer (from your EAS build page, or
wherever your build output lands).

Once you have it:

1. Rename it to exactly `awpa.apk`
2. Place it at `awpa-site/downloads/awpa.apk`
3. Delete `awpa-site/downloads/PUT_YOUR_APK_HERE.txt`
4. Commit and push (see step 4 below)

The buttons will then work immediately, no code changes needed.

## 3. Before you go live: swap the placeholders

These were intentionally left as placeholders since the app isn't public yet:

| What | Where | Swap it for |
|---|---|---|
| App Store button | `index.html` (hero + Download section), `download.html` | The real App Store URL, once submitted. Search `data-store-link` to find every instance. The Android button already downloads your real `.apk` directly, see step 2. |
| Feature "screenshots" | Every `<div class="mock ...">` block | Real app screenshots, once you have them |
| Logo | Inline SVG `<svg class="brand-mark">` in every HTML file | Your real logo file, if different from this speech-bubble mark |
| Social preview image | `og-image.jpg` | A real screenshot/branded image, ideally 1200×630 |
| Contact emails | `contact.html`, `iphone.html`, `download.html`, `privacy.html` (`support@`, `business@`, `press@`, `privacy@`, `notify@awpa.app`) | Real inboxes you control at your domain |
| Privacy Policy | `privacy.html` | This is a starting draft, not a finished legal document. Have a lawyer review and finalize it before publishing. |
| Social links | Footer icons on every page | Your real Instagram/X/LinkedIn URLs |

---

## 4. Push it to GitHub

```bash
cd awpa-site
git init
git add .
git commit -m "Initial commit: awpa marketing site"

# Create a new repo on GitHub first (via github.com/new), then:
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

---

## 5. Make it live at awpa.app

You have two easy paths. **Option A (GitHub Pages)** is free and simplest
if you want everything to live on GitHub. **Option B (Vercel/Netlify)** is
just as free, deploys faster, and gives you preview URLs for every commit.
Either is a completely reasonable choice.

### Option A: GitHub Pages

1. In your GitHub repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Still on that page, under **Custom domain**, enter `awpa.app` and save.
   (This repo already includes a `CNAME` file with `awpa.app` in it, which
   GitHub Pages reads automatically, so this step just confirms it in the UI.)
5. Go to your domain registrar (wherever you bought awpa.app) and add these
   DNS records:

   **For the root domain (awpa.app):**
   ```
   Type   Name   Value
   A      @      185.199.108.153
   A      @      185.199.109.153
   A      @      185.199.110.153
   A      @      185.199.111.153
   ```

   **For www.awpa.app (optional, recommended):**
   ```
   Type    Name   Value
   CNAME   www    <your-username>.github.io
   ```

6. Wait for DNS to propagate (usually minutes, sometimes up to a few hours).
7. Back in **Settings → Pages**, tick **Enforce HTTPS** once it becomes
   available (GitHub issues a free SSL certificate automatically).

Your site will then be live at `https://awpa.app`.

### Option B: Vercel or Netlify (also free)

1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com)
   and sign in with your GitHub account.
2. Import the repo you just pushed. No build command needed, set the
   output/publish directory to the repo root (`.`).
3. Deploy. You'll get a free `*.vercel.app` or `*.netlify.app` URL immediately.
4. In the project's domain settings, add `awpa.app` as a custom domain.
   The dashboard will show you the exact DNS records to add (usually a
   single `A` or `CNAME` record), add those at your domain registrar the
   same way as above.
5. HTTPS is issued and enforced automatically.

---

## 6. Notes on what's real vs. illustrative

- The "screenshots" throughout the site are hand-built CSS/SVG mockups,
  not real app screenshots. Each is labeled "illustrative preview" so
  it's never mistaken for the real thing.
- Store download buttons are placeholders and show an explicit "not live
  yet" message if clicked, so nobody assumes the app is already published.
- Security section deliberately says "sent securely" rather than
  "end-to-end encrypted," since that's the accurate current state.
- No fees, follower thresholds, or other specific numbers were invented
  for the escrow/verification copy. Add real figures there once you've
  decided on them.

---

© 2026 AWPA Technologies
