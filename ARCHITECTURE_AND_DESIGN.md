# Architecture and Design

## Active Architecture

The production-relevant app is the Next.js frontend in `client/`.

- Framework: Next.js App Router.
- UI: React components under `client/app/components/`.
- Styling: Tailwind CSS plus `client/app/globals.css` and a small legacy
  `client/styles/LandingPage.css` import.
- Animations: Framer Motion and `react-type-animation`.
- Contact delivery: EmailJS client-side send from `ContactSection.jsx`.
- Analytics: `@vercel/analytics/react` in `client/app/layout.js`.
- Assets: Static files in `client/public/`, including resume PDF, icons, and images.

The root `package.json` can start both frontend and backend with `concurrently`,
but the current hosted product is frontend-only on Vercel.

## Frontend Flow

`client/app/layout.js` defines global fonts, metadata, Vercel Analytics, and wraps
the app with `ProgressBarProvider`.

`client/app/page.js` renders the one-page portfolio:

1. `Navbar`
2. `HeroSection`
3. `ExperienceSection`
4. `ProjectsSection`
5. `ContactSection`
6. `Footer`

Navigation uses anchor links for page sections. The navbar is fixed, has desktop
links, and switches to a mobile overlay menu on small screens.

## Key Components

- `HeroSection.jsx`: Intro copy, animated role text, resume link, contact link,
  LinkedIn link, and portrait image.
- `ExperienceSection.jsx`: Client-side interactive timeline with work and
  education entries.
- `ContactSection.jsx`: Social links and EmailJS-powered contact form. It updates
  the shared progress bar during submission.
- `ProgressBarContext.js` and `ProgressBar.jsx`: Lightweight shared progress state
  displayed below the fixed navbar.
- `ProjectsSection.jsx`, `ProjectCard.jsx`, `ProjectTag.jsx`, and `TabButton.jsx`:
  Static project display, filtering, optimized project images, and project links.

## Backend Folder

`backend/` contains an Express server with:

- `POST /send-contact-form` using Nodemailer.
- Local MongoDB connection setup.
- Mongoose models for users, posts, contacts, and projects.

This backend appears inactive for the current Vercel-hosted frontend. Do not make
backend, database, auth, or environment changes unless the task explicitly revives
that part of the project.

## Design Direction

The current visual design is a clean light portfolio:

- White background.
- Dark gray primary text (`#37444B`).
- Blue accent (`#4A90E2`).
- Tailwind utility classes for spacing, layout, color, and responsiveness.
- Rounded controls and subtle borders.

Keep design changes consistent with this restrained portfolio style. Avoid broad
visual rewrites unless the user asks for a redesign.

## Development Commands

From the repository root:

- `npm run start-client`: starts the Next.js development server from `client/`.
- `npm run start`: starts both backend and frontend, but this is not the normal
  current workflow for the frontend-only deployment.

From `client/`:

- `npm run dev`: starts Next.js locally.
- `npm run build`: builds the frontend.
- `npm run start`: starts the built Next.js app.
- `npm run lint`: runs the configured Next lint command.

## Known Gotchas

- Some source strings show mojibake/encoding artifacts for apostrophes, bullets,
  dashes, and multiplication symbols.
- `client/package.json` uses Next `^16.1.6` while `eslint-config-next` is pinned
  to `14.0.4`; verify lint/build behavior before relying on tooling changes.
- `globals.css` references `--background-end-rgb`, but only
  `--background-start-rgb` is defined in the inspected file.
- The contact form contains EmailJS service/template/public key values in source.
  Treat contact integration changes carefully and avoid committing secrets.
