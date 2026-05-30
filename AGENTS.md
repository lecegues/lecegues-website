# Agent Instructions

## Workflow

For non-trivial work:

1. Read relevant project documentation.
2. Inspect the existing implementation.
3. Explain the current flow.
4. Propose a concise plan.
5. Wait for approval before editing.
6. Make the smallest safe change.
7. Review the diff for simplicity and readability.
8. Run relevant tests.

## Project docs

Read these before making architecture or product decisions:

- `PROJECT_CONTEXT.md`
- `PROJECT_PHASES.md`
- `ARCHITECTURE_AND_DESIGN.md`
- `MEMORY.md`

## Core rules

- Make the smallest safe change.
- Prefer simple, readable, boring code.
- Follow existing project patterns.
- Do not refactor unrelated code.
- Do not over-engineer or add abstractions unless they clearly reduce real duplication.
- Keep functions focused and testable.
- Avoid hidden side effects.
- Add or update tests for behavior changes.
- Never edit generated files manually.
- Never commit secrets.

## Before editing

For non-trivial work:
1. Inspect relevant files.
2. Explain the current flow.
3. Propose a concise plan.
4. List files likely to change.
5. Wait for approval before editing.

## Code quality standard

Code should be:
- Easy to read
- Easy to test
- Direct and straightforward
- Modular, but not fragmented
- Consistent with existing style

Avoid:
- Spaghetti control flow
- Large mixed-responsibility functions
- Premature abstractions
- Clever generic helpers
- Unnecessary new dependencies
- Reformatting unrelated files

## Dangerous areas

Do not modify these without explicit approval:

- Auth
- Payments
- Permissions
- Database migrations
- CI/CD
- Infrastructure
- Environment files
- Lockfiles
- Generated files
- Public API contracts

## Finishing checklist

End every task with:

- Summary
- Files changed
- Tests run
- Tests not run and why
- Risks or follow-ups

Before finishing code changes, use `skills/code-quality/SKILL.md` to review the diff.

## Memory updates

At the end of meaningful work, update `MEMORY.md` only if there is durable information worth preserving.

Add:
- Architecture decisions
- Gotchas discovered
- Important project conventions
- Current active work state
- Remaining risks

Do not add:
- Every file changed
- Random debugging thoughts
- Temporary guesses
- Information already obvious from code

## Handoff

If work is paused, incomplete, or likely to continue in another session, update `TASK_HANDOFF.md`.

Keep it concise and factual.
When the task is complete, move only durable lessons into `MEMORY.md`.