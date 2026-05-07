---
name: spec
description: Transform a rough feature idea into a structured requirements document using EARS format. Use this as the first step of Spec Driven Development to gather and solidify requirements before designing.
---

# Feature Spec Creation Workflow

## Quick start
"Run the spec skill to gather requirements for [feature description]."

## Workflows

### 1. Requirement Gathering
- **Task**: Generate an initial set of requirements in EARS format based on the feature idea. Do NOT focus on code exploration; focus ONLY on writing requirements.
- **Constraints**:
  - Generate an initial version based on the user's rough idea WITHOUT asking sequential questions first.
  - Format the initial document according to the template in `template.md`.
  - Consider edge cases, user experience, technical constraints, and success criteria.
- **Iterative Refinement**:
  - Write the initial requirements document to `requirements.md`.
  - Ask the user: "Do the requirements look good? If so, we can move on to the design."
  - Make modifications if the user requests changes or does not explicitly approve.
  - Continue the feedback-revision cycle until explicit approval is received.
  - Suggest specific areas needing clarification/expansion or options when the user is unsure.
