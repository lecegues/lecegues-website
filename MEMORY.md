# Project Memory

## Durable Project Facts

- The active product is a personal portfolio website for John Lecegues.
- The currently hosted site is frontend-only on Vercel.
- The active frontend lives in `client/` and uses Next.js App Router, React,
  Tailwind CSS, Framer Motion, EmailJS, and Vercel Analytics.
- The homepage is a single-page layout composed from navbar, hero, experience,
  projects, contact, and footer sections.
- The contact form currently sends through EmailJS in `ContactSection.jsx`, not
  through the Express backend.
- Social preview metadata currently uses `client/public/images/john.jpeg` until
  a dedicated Open Graph image is created.
- The `backend/` folder contains older or deferred Express/Mongoose/Nodemailer
  work and should be treated as inactive unless explicitly revived.

## Project Conventions

- Prefer small, direct frontend changes that preserve the existing portfolio style.
- Use Tailwind utility classes and existing component patterns before adding new
  styling systems or abstractions.
- Keep social symbols dark because the portfolio uses a white background
  regardless of user/system theme.
- Keep backend, auth, database, environment, lockfile, and infrastructure changes
  out of scope unless the user explicitly approves them.
- Update project docs when durable architecture or workflow facts change.

## Gotchas

- Some existing strings contain encoding artifacts.
- Project-related components are rendered by the active home page and should stay
  static unless dynamic content becomes necessary.
- Root scripts can start both backend and frontend, but the current practical
  workflow is the frontend in `client/`.
- On this Windows environment, PowerShell blocks `npm.ps1`; use `cmd /c npm ...`
  for npm verification commands.
- `next build` may need network access because `next/font` fetches Google Fonts
  during the build.
