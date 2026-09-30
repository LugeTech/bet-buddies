# Specification: Harmless Landing-Page Comment

## Summary

Make one non-functional source change to demonstrate work on the existing BetBuddies landing page: add a single explanatory line comment to `src/app/page.tsx`. This is a Next.js 14 / React 18 TypeScript app. The repository README describes broader future product ideas; none are part of this task. No `docs/` files were found during repository review.

## Goal

Add the requested comment to the landing-page source without changing rendered output or application behavior.

## Scope and requirements

1. In `src/app/page.tsx`, add exactly this ordinary TypeScript/JavaScript line comment immediately after the existing client directive and before the first import:
   ```ts
   // Factory test: working on the BetBuddies landing page.
   ```
2. Preserve the existing client directive verbatim as the first line of the module. It is currently `"use client"` without a semicolon. Do not move or alter it, and do not place the comment before it.
3. Make no other changes to `src/app/page.tsx`. Preserve all imports, component logic, JSX, styling, copy, and accessibility as-is.
4. Do not modify any other source file or add product functionality, TODOs, dependencies, tests, or configuration changes. This is intentionally a comment-only application change. The only planned repository file changes are `src/app/page.tsx` and this specification artifact, `SPEC.md`.
5. The comment must not affect rendered output or runtime behavior.

## Acceptance criteria

- `src/app/page.tsx` contains the exact comment text once, immediately after the unchanged client directive and before all imports.
- The client directive remains the first line of the file, unchanged.
- The only application-source change is the addition of that comment; existing landing-page output and behavior remain unchanged.
- The available package scripts `lint` (`next lint`) and `build` (`next build`) complete successfully, using Bun or another available package manager. No unrelated source edits may be made to address pre-existing issues; report any baseline failure rather than expanding scope.

## Out of scope

Authentication, betting, currency, rooms, challenges, live data, chat, profiles, leaderboards, notifications, monetization, redesign, and changes to the separate landing-page component are out of scope.

## Subtasks

- [ ] Add the exact single-line factory-test comment immediately after the existing `"use client"` directive in `src/app/page.tsx`, leaving all other application code and files unchanged.
- [ ] Run the package's lint and production-build scripts and confirm that the comment-only change introduces no failures; report any unrelated baseline failure without expanding scope.
