# Specification: Harmless Landing-Page Comment

## Summary

Make a minimal, non-functional source change to demonstrate work on the existing BetBuddies app: add one explanatory comment to the current landing-page source, `src/app/page.tsx`. The project is a Next.js 14 / React 18 TypeScript app. The README describes broader future product ideas; none are part of this task.

## Goal

Add a clear, harmless comment to the landing-page source without changing rendered output or application behavior.

## Scope and requirements

1. In `src/app/page.tsx`, add exactly one ordinary TypeScript/JavaScript line comment immediately after the existing `'use client'` directive and before the first import. The comment text must be exactly:
   ```ts
   // Factory test: working on the BetBuddies landing page.
   ```
2. Keep the existing client directive as the first statement in the module. Do not move it, alter its text, or place the comment before it.
3. Make no other changes to `src/app/page.tsx`: preserve all imports, component logic, JSX, styling, copy, and accessibility as-is.
4. Do not modify any other source file or add product functionality, TODOs, dependencies, tests, or configuration changes. This is intentionally a comment-only application change.
5. The comment must not affect rendered output or runtime behavior.

## Acceptance criteria

- `src/app/page.tsx` contains the exact comment text once, immediately after the client directive and before all imports.
- The client directive remains the first statement in the file.
- The only application-source change is the addition of that comment; all existing landing-page output and behavior remain unchanged.
- The project passes its available lint and production-build checks using the package scripts (`lint` and `build`), invoked through Bun or the available package manager.

## Out of scope

Authentication, betting, currency, rooms, challenges, live data, chat, profiles, leaderboards, notifications, monetization, redesign, and changes to the separate landing-page component are out of scope.

## Subtasks

- [ ] Add the exact single-line factory-test comment immediately after the client directive in `src/app/page.tsx`, leaving all other application code and files unchanged.
- [ ] Run the package's lint and production-build scripts and confirm that the comment-only change introduces no failures.
