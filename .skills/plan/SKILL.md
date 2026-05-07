---
name: plan
description: Create an actionable implementation plan with a checklist of coding tasks based on the requirements and design. Use this as the third step of Spec Driven Development.
---

# Implementation Plan Creation Workflow

## Quick start
"Run the plan skill to create a task list based on the design document at [path/to/design.md]."

## Workflows

### 1. Task List Generation
- **Prerequisite**: Ensure a design document exists and has been approved.
- **Task**: Convert the feature design into a series of prompts for a code-generation LLM that will implement each step in a test-driven manner.
- **Core Directives**:
  - Prioritize best practices, incremental progress, and early testing.
  - Ensure no big jumps in complexity at any stage.
  - Make sure each prompt builds on the previous ones and ends with wiring things together.
  - Avoid hanging or orphaned code not integrated into a previous step.
  - Focus ONLY on tasks that involve writing, modifying, or testing code. Avoid deployment, metrics, training, etc.
- **Constraints**:
  - Format the plan as a numbered checkbox list with a maximum of two levels of hierarchy (e.g., 1., 1.1). Follow the format in `template.md`.
  - Include a clear objective for each task.
  - Add specific references to requirements from the requirements document (granular sub-requirements).
  - Ensure each step is concrete, specifies files/components, and is actionable by a coding agent.
  - Sequence steps to validate core functionality early through code.

### 2. Iterative Refinement
- **Output**: Write the tasks document to `tasks.md`.
- **Feedback Loop**:
  - Ask the user: "Do the tasks look good?"
  - Make modifications if the user requests changes or does not explicitly approve.
  - Offer to return to previous steps (requirements or design) if gaps are identified.
  - Continue the feedback-revision cycle until explicit approval is received.
