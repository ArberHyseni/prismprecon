# prismprecon.com

Landing page for Prism Preconstruction & Operations.
React + TypeScript (Vite) frontend, Node + TypeScript (Express) backend, hosted as a Node.js app on Namecheap cPanel.

```
client/                 React app (Vite)
  public/               favicon, fonts, OG image (served as-is)
  src/content.ts        all page copy — edit text here
  src/components/       one component per page section
  src/styles/global.css brand tokens + styles (palette from the brand guide)
server/                 Express API + serves the built client in production
  src/routes/contact.ts POST /api/contact → emails the Prism inbox
  .env.example          SMTP settings for the contact form
scripts/assemble-release.mjs   builds release/ (what runs on cPanel)
deploy/.cpanel.yml      cPanel copy step, shipped inside release/
.github/workflows/deploy.yml   CI: build on push to master → `deploy` branch
```

## Local development

```bash
npm install
cp server/.env.example server/.env   # optional; without SMTP the form logs to the terminal
npm run dev                          # client http://localhost:5173, API on :3001
```

`npm run typecheck` checks both packages. `npm run release && npm start` runs the production build locally on :3001.

## How deploys work

1. Push to `master`.
2. GitHub Actions typechecks, builds, and force-pushes the runnable app to the `deploy` branch:
   `app.js` (server bundled with all its dependencies), `public/` (built site), `package.json`, `.cpanel.yml`.
3. In cPanel → **Git Version Control** → Manage → **Pull or Deploy**: click **Update from Remote**, then **Deploy HEAD Commit**.
   `.cpanel.yml` copies the files into `~/prismprecon_app` and restarts the app.

Nothing is built or `npm install`ed on the server.

## One-time cPanel setup

**1. Node.js app** — cPanel → **Setup Node.js App** → Create Application:

| Field | Value |
|---|---|
| Node.js version | 20 or newer (highest offered) |
| Application mode | Production |
| Application root | `prismprecon_app` |
| Application URL | `prismprecon.com` |
| Application startup file | `app.js` |

Add environment variables (contact form email):
`SMTP_HOST=mail.prismprecon.com`, `SMTP_PORT=465`, `SMTP_USER=info@prismprecon.com`, `SMTP_PASS=<mailbox password>`, `CONTACT_TO=info@prismprecon.com`.
Create that mailbox first in cPanel → **Email Accounts**. Restart the app after changing variables.

**2. Git repo on the `deploy` branch** — after the first GitHub Actions run has created `deploy`:
cPanel → **Git Version Control** → Manage → **Update from Remote**, then set **Checked-Out Branch** to `deploy`, then **Pull or Deploy → Deploy HEAD Commit**.

**3. Clean `public_html`** — the Node app serves the whole site. Remove any old `index.html`/placeholder files from `public_html`, but keep `.htaccess` (cPanel writes the Node app config there), `.well-known` and `cgi-bin`.

**4. HTTPS** — cPanel → **SSL/TLS Status** → Run AutoSSL, then cPanel → **Domains** → turn on **Force HTTPS Redirect**.

Check: `https://prismprecon.com/api/health` should return `{"ok":true}`.
