# Specification: Add an “Under construction” title to the README

## Goal
Make the construction status immediately visible to anyone opening the repository README by adding the requested title at its beginning.

## Scope
- Update only `README.md` for the product change.
- Add the exact text `Under construction` as a level-one Markdown heading (`# Under construction`) before all existing README content.
- Preserve every existing README section and its content, order, and formatting apart from inserting the new heading and the necessary separating newline(s).
- Do not change application code, project configuration, dependencies, lockfiles, or other documentation.

## User-visible behavior
When a reader opens `README.md`, its first rendered heading is “Under construction.” The existing BetBuddies description follows beneath it unchanged.

## Acceptance criteria
1. The first non-empty line of `README.md` is exactly `# Under construction`.
2. The heading appears before the existing `## App Name: BetBuddies` heading.
3. All README content that preceded the change remains present and in the same order, with no unrelated edits.
4. No file other than `README.md` is modified as part of implementation.

## Validation
- Inspect the beginning of `README.md` and confirm the new level-one heading is first and the existing app-name heading follows it.
- Review the remainder of the file to confirm its existing content is preserved.
- No build, lint, or application tests are required for this documentation-only change.

## Subtasks
- [ ] Insert `# Under construction` at the very beginning of `README.md`, followed by a blank line, preserving all existing README content below it.
- [ ] Verify the README starts with the requested heading and that the existing content remains unchanged and in order.
