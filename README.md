# Zikreddin Şık — Personal Portfolio

Zikreddin Şık’s portfolio features **Unity and Android projects** and his work leading the Karabük University AI Club.

## Live site
https://portfolio-ziko-00.vercel.app/

## Stack
- Next.js Pages Router (legacy Next.js 10)
- React 17
- styled-components
- Vercel deployment

## Local development
Use a supported modern Node.js version and npm.

```bash
npm ci --legacy-peer-deps
npm run dev
```

The scripts explicitly pass a legacy OpenSSL compatibility flag for the current build setup. **This is an interim compatibility step, not a security upgrade.** A framework migration and fresh dependency audit are still needed.

Production static build and tests:

```bash
npm run build
npm test
```

The command creates a static site in `out/`. No server-side contact form or database is required for this portfolio. Reach-out uses a direct email link.

## Content and privacy policy
- Never commit a CV containing a street address, full date of birth, phone number, personal identification, academic rank, or other nonessential personal data.
- A professional email address, public GitHub and professional LinkedIn are sufficient for contact.
- Keep project contributions explicit and distinguish personal work from team work.
- Only publish real screenshots and demo recordings; do not label promotional artwork as gameplay.
- If introducing server-side features, place credentials in hosting environment variables, never in source code.
- Deleting files from a branch does **not** purge Git history, search caches or old deployments. Review those separately.

## Next steps
- Replace placeholder project artwork with authentic captures and short videos.
- Review and update dependencies with a separate tested migration PR.
- Remove tracked `node_modules/` from Git history/index in a dedicated cleanup.
- Verify desktop/mobile layouts, accessibility and static-export build before production release.

## Interactive TROMPET design study

The homepage includes an SVG **presentation concept**, not a playable game demo. It visualizes the four rabbit players around one table with three independent card zones per player.

Its geometry lives in `src/lib/boardGeometry.js`, which calculates each player using radial unit vectors:

- Player angle: `theta(i) = -PI/2 + 2PI*i/4`
- Outward normal: `n(i) = (cos theta(i), sin theta(i))`
- Tangent: `t(i) = (-sin theta(i), cos theta(i))`
- Zone position: `q(i,j) = center + radius*n(i) + (j-1)*gap*t(i)`

This is deterministic, uses **O(P·Z)** geometry operations, and renders exactly 12 zones for P=4 and Z=3. It does not require WebGL or a continuous animation loop. Unit tests verify symmetry, separation, bounds and invalid inputs.

## Automated quality gates

The GitHub Actions workflow runs the static export and Node.js built-in tests:

- Correct generated routes and canonical project pages
- Current public output omits the superseded CV and telephone links
- English-language, keyboard-accessible player controls
- Gzipped JavaScript budget of **155 KiB** for homepage external Next.js chunks
- Featured cover artwork budget of **200 KiB**
- Required response-security headers plus robots.txt and sitemap.xml

The JavaScript budget uses deterministic local gzip estimates, **not real network timings or Lighthouse scores**. Mobile visual QA and Core Web Vitals measurements still require a working preview deployment.

The currently tracked `node_modules` directory is being removed in separate draft PR #2 to avoid obscuring design changes with thousands of unrelated deletions.
