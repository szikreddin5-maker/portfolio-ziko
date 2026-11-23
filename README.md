# Zikreddin Şık — Personal Portfolio

Portfolio for a computer engineering student focused on **Unity & C# game development**, selected product projects, and community leadership.

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

Production static build:

```bash
npm run build
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
