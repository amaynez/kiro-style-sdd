---
name: design
description: Develop a comprehensive technical design document based on approved requirements. Use this as the second step of Spec Driven Development to architecture and design the solution.
---

# Feature Design Creation Workflow

## Quick start
"Run the design skill to create a technical design document based on [path/to/requirements.md]."

## Workflows

### 1. Research & Design Generation
- **Prerequisite**: Ensure a requirements document exists and has been approved.
- **Research**:
  - Identify areas needing research based on requirements.
  - Conduct research (build context in conversation, summarize findings, cite sources). Do NOT create separate research files.
- **Task**: Develop a comprehensive design document incorporating the research findings.
- **Constraints**:
  - Format the document according to the template in `template.md`.
  - Address all feature requirements identified in the previous step.
  - Highlight design decisions and their rationales.
  - Use Mermaid for diagrams if applicable.

### 2. Iterative Refinement
- **Output**: Write the design document to `design.md`.
- **Feedback Loop**:
  - Ask the user: "Does the design look good? If so, we can move on to the implementation plan."
  - Make modifications if the user requests changes or does not explicitly approve.
  - Continue the feedback-revision cycle until explicit approval is received.
  - Offer to return to requirements clarification if gaps are identified during design.
