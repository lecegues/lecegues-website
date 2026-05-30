# Code Quality Review

Use this skill before finishing any code change.

Review the diff for readability, simplicity, maintainability, and testability.

Check:

1. Is the code easy for a human to understand?
2. Is the change smaller than it could be?
3. Did I follow existing project patterns?
4. Did I avoid unnecessary abstraction?
5. Are functions focused?
6. Are side effects obvious?
7. Is behavior covered by tests?
8. Did I avoid unrelated refactors?

If the answer to any item is no, fix the issue or call it out explicitly.