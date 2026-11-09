# IoT Security Manager Academy — Version 1.0

A static, offline-capable learning app for IoT product-security managers. No build tools or backend.

## Included
- 20 short, original lessons covering the first four weeks
- 40 multiple-choice questions, explanations and four weekly 10-question tests
- Adaptive spaced repetition with due dates
- Practical written exercises and a competence portfolio
- On-device progress via `localStorage`, JSON export/import
- Dark/light themes and installable Progressive Web App (PWA)

**Important:** This is self-study material, not certification or legal advice. The app does not independently grade free-text exercises. Data is only on the device/browser; export your progress regularly.

## Publish with GitHub Pages (no command line)
1. On GitHub click **+ → New repository**. Name it `iot-security-academy`, choose **Public**, then create it.
2. Download the ZIP of this starter project and **extract it** on your computer.
3. In GitHub, open your new repository and select **uploading an existing file** (or **Add file → Upload files**).
4. Drag **the files and `icons` folder contents** from the extracted project into the repository. Preserve paths: `index.html` and `app.js` must be in the repository root, and the icon file at `icons/icon.svg`. If your browser does not preserve folders, create `icons` in GitHub and upload its SVG separately.
5. Write a commit message such as `Initial Security Academy v1` and click **Commit changes**.
6. Go to **Settings → Pages → Build and deployment**. Set **Deploy from a branch**; select branch `main`, folder `/(root)`, then **Save**.
7. Visit `https://YOUR-GITHUB-USERNAME.github.io/iot-security-academy/` after GitHub completes deployment.
8. Add the site to your mobile home screen via the browser's install/add-to-home-screen feature.

To update: upload the changed files to the same repo and commit. GitHub Pages republishes automatically. If an old version remains visible, reload the page; service-worker caching can delay updates.

## Try locally
Open `index.html` directly for most features. For PWA installation and reliable offline caching, run from GitHub Pages or a local HTTP server. Example: `python -m http.server 8000` then open `http://localhost:8000`.

## File map
- `index.html` — page shell and navigation
- `style.css` — responsive visual design
- `data.js` — lessons, questions and official reference links
- `app.js` — progress tracking, quizzes, assessments, spaced repetition
- `manifest.webmanifest`, `service-worker.js`, `icons/icon.svg` — PWA

## Updating content
Edit the `window.ACADEMY.lessons` array in `data.js`. Each lesson contains an ID, week, day, title, learning sections, exercise, and 2 questions. Keep IDs stable; progress is associated with them.

## Privacy and known v1 limitations
- Progress is not synced between computers/browsers.
- No email notifications or scheduling in the background.
- Weekly assessments use the same 10 subject questions in shuffled order (not a separate exam bank yet).
- Written exercises are self-assessed, not automatically scored.
- The learning plan covers **weeks 1–4**, with weeks 5–12 planned as later extensions.
- Source material should be reviewed when regulatory status changes. Refer to the current EU legal texts and IEC/ETSI publications for authoritative compliance decisions.
