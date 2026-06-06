# Project Memory

## Durable Project Facts

- The active product is a personal portfolio website for John Lecegues.
- The currently hosted site is frontend-only on Vercel.
- The active frontend lives in `client/` and uses Next.js App Router, React,
  Tailwind CSS, Framer Motion, EmailJS, and Vercel Analytics.
- The homepage is a single-page layout composed from navbar, hero, experience,
  contact, and footer sections.
- The contact form currently sends through EmailJS in `ContactSection.jsx`, not
  through the Express backend.
- Project components still exist, but the Projects section is temporarily hidden
  because most current project work is internal/company-owned.
- Social preview metadata currently uses `client/public/images/john.jpeg` until
  a dedicated Open Graph image is created.
- The `backend/` folder contains older or deferred Express/Mongoose/Nodemailer
  work and should be treated as inactive unless explicitly revived.

## Project Conventions

- Prefer small, direct frontend changes that preserve the modern-sketchbook
  portfolio style.
- Use Tailwind utility classes and existing component patterns before adding new
  styling systems or abstractions.
- Keep the portfolio light-only with a warm-paper background, charcoal ink, and
  blue as the only primary accent.
- Limit Caveat handwriting to annotations and callouts; use Inter/Poppins for
  normal content.
- Reuse the code-native sketch primitives in `client/app/globals.css` before
  adding new decorative patterns or dependencies.
- Keep decorative rotations, shadows, and annotations restrained on narrow
  screens and respect reduced-motion preferences.
- Keep social symbols dark so they remain legible on the light paper background.
- Keep backend, auth, database, environment, lockfile, and infrastructure changes
  out of scope unless the user explicitly approves them.
- Update project docs when durable architecture or workflow facts change.

## Gotchas

- Some existing strings contain encoding artifacts.
- Project-related components should stay available for re-enablement, but should
  remain hidden until there are enough public projects to show.
- Root scripts can start both backend and frontend, but the current practical
  workflow is the frontend in `client/`.
- On this Windows environment, PowerShell blocks `npm.ps1`; use `cmd /c npm ...`
  for npm verification commands.
- `next build` may need network access because `next/font` fetches Inter, Poppins,
  and Caveat during the build.
