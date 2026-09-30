# Specification: Harmless Landing-Page Comment

## Summary

Make a minimal, non-functional source change that demonstrates work on the existing BetBuddies app: add one explanatory comment to the landing-page source. The repository is a Next.js 14 / React 18 TypeScript app; the current landing page is `src/app/page.tsx`. The README describes broader future product ideas, but this task does not implement any of them.

## Goal

Leave a clear, harmless comment in the current landing-page file without changing the rendered page or application behavior.

## Scope and requirements

1. Add exactly one ordinary TypeScript/JavaScript line comment near the top of `src/app/page.tsx`, after the `'use client'` directive and before the imports. Use this exact text:
   ```ts
   // Factory test: working on the BetBuddies landing page.
   ```
2. Preserve the `'use client'` directive as the first statement in the module so Next.js continues to treat the page as a client component.
3. Do not change imports, component logic, JSX, styling, copy, accessibility, or any other source file.
4. Do not add product functionality, TODOs, dependencies, tests, or configuration changes. This is intentionally a comment-only application change.
5. The comment must have no effect on the rendered output or runtime behavior.

## Acceptance criteria

- `src/app/page.tsx` contains the exact comment once, immediately after the client directive and before the imports.
- The client directive remains the first statement in the file.
- The change introduces no other application-source modifications and the landing page's output and behavior are unchanged.
- The project continues to pass its available lint and build checks (`bun run lint` and `bun run build`, or the equivalent package scripts where Bun is unavailable).

## Out of scope

Authentication, betting, currency, rooms, challenges, live data, chat, profiles, leaderboards, notifications, monetization, redesign, and changes to the separate landing-page component are all out of scope.

## Subtasks

- [ ] Add the specified single-line factory-test comment after the `'use client'` directive in `src/app/page.tsx`, leaving all other application code unchanged.
- [ ] Run the available lint and production-build checks and confirm the comment-only change introduces no failures.
