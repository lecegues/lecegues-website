# Project Phases

## Phase 1: Current Frontend Portfolio

Status: Active

The current site is a Vercel-hosted frontend portfolio. It presents:

- Hero introduction with resume and contact calls to action.
- Responsive navigation for Home, Experience, and Contact.
- Experience and education timeline.
- Contact form powered by EmailJS.
- Footer and social links.

## Phase 2: Portfolio Polish

Status: Likely next work

Improve the current frontend without changing the core architecture.

- Clean up text encoding issues visible in some source strings.
- Improve accessibility for buttons, links, form states, and mobile navigation.
- Add clearer success/error UI for contact form submission instead of browser alerts.
- Review responsive layout across mobile, tablet, and desktop.
- Update project content as resume, experience, and portfolio goals evolve.

## Phase 3: Projects Section

Status: Deferred

Project-related components and images remain in the codebase, but the section is
temporarily hidden from the active home page because most current projects are
internal/company-owned and not suitable to show publicly yet.

Potential follow-up work:

- Re-enable the section when there are enough public projects to show.
- Keep project content and imagery current.
- Keep the section static unless dynamic content becomes necessary.

## Phase 4: Backend Decision

Status: Deferred

The repository contains an Express/Mongoose/Nodemailer backend, but the active
frontend contact flow uses EmailJS and the site is hosted as a frontend on Vercel.

Before doing backend work, decide whether the backend should be:

- Removed if it is no longer part of the product direction.
- Archived/documented as historical work.
- Revived only if the portfolio needs server-owned contact handling, auth, blog
  content, admin tooling, or database-backed project data.

## Phase 5: Production Hardening

Status: Future

Useful once the active frontend scope settles:

- Add focused tests or checks for core page rendering.
- Run regular `next build` verification before deployment-sensitive changes.
- Review analytics, SEO metadata, and Open Graph/social preview assets.
- Keep dependency versions coherent, especially Next.js and ESLint config.
