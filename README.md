# Manan Choudhary — static portfolio

This is a framework-free portfolio built with plain HTML, CSS, and vanilla JavaScript. It can be hosted directly on GitHub Pages.

## Preview locally

From this folder, start any simple static server:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` directly also works, but a local server is closer to the GitHub Pages environment.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select your main branch and `/ (root)`, then save.
4. GitHub Pages will serve the root `index.html` at the generated site URL.

## Editing guide

- **Content:** edit the clearly marked `CONTENT DATA` JSON block at the top of `index.html`.
- **Colors, spacing, typography:** edit the CSS variables at the top of `styles.css`; the Google Font import is in `index.html`.
- **Behavior:** `script.js` renders the data, mobile menu, active navigation, and scroll reveal effects.

The site is self-contained and does not require Node, npm, or a build step.
