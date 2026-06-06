# Project Context

## Purpose

This repository is for John Lecegues' personal portfolio website at lecegues.com.
The site showcases professional experience, education, resume access, social links,
and a contact form.

## Current Scope

The active product is the frontend portfolio site in `client/`.

- Hosted on Vercel.
- Built with Next.js App Router, React, Tailwind CSS, Framer Motion, and EmailJS.
- Currently structured as a single-page portfolio.
- The active page renders hero, experience, contact, and footer sections.
- Project components remain in the codebase, but the Projects section is
  temporarily hidden because most current project work is internal/company-owned.
- The contact form sends email through EmailJS directly from the frontend.

## Repository Shape

- `client/`: Active Next.js frontend app.
- `backend/`: Older or future Express/Mongoose/Nodemailer backend work. It is not
  part of the currently hosted Vercel frontend flow.
- `skills/`: Local agent workflow support, including the code-quality review skill.
- Root markdown files: Project context, phases, architecture notes, memory, and
  handoff state for agent continuity.

## Product Direction

The project should remain simple and portfolio-focused. Prefer direct,
maintainable frontend changes over adding backend or infrastructure complexity
unless there is a clear product need.

Near-term work should focus on:

- Keeping the portfolio accurate and polished.
- Improving responsiveness, accessibility, and content clarity.
- Preserving a fast static/frontend deployment path on Vercel.
- Treating the backend folder as inactive unless explicitly revived.

## Current Design Direction

The visible portfolio uses a professional modern-sketchbook design:

- Warm-white paper background with charcoal ink and muted ink text.
- Blue marker as the only primary accent.
- Caveat handwriting limited to annotations and callouts.
- Code-native rough borders, highlights, strokes, and taped-photo treatments.
- Light-only presentation with responsive and reduced-motion behavior.
