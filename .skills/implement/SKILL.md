---
name: implement
description: Execute a single coding task from an implementation plan based on the specs and design documents. Use this as the final execution step of Spec Driven Development.
---

# Feature Implementation Execution Workflow

## Quick start
"Run the implement skill to execute task [Task Number] from the plan at [path/to/tasks.md]."

## Workflows

### 1. Task Execution Setup
- **Prerequisites Context Check**: Before executing ANY tasks, ALWAYS ensure you have read the `requirements.md`, `design.md`, and `tasks.md` files (or their equivalents). Executing tasks without full context leads to inaccurate implementations.
- **Task Verification**: Identify the specific requested task from the task list. If the requested task has sub-tasks, prioritize starting with the sub-tasks.

### 2. Execution Constraints
- **Focus**: Only focus on ONE task at a time. Do NOT implement functionality for other tasks.
- **Verification**: Verify your implementation against the requirements specified in the task or its details. Do NOT assume user preferences or requirements; always ask explicitly if something is ambiguous.
- **Step Tracking**: Maintain a clear record of which step you are currently working on. Do NOT combine multiple steps into a single interaction.

### 3. Completion and Review
- **Update Plan**: Once you complete the requested task, mark it as complete in the `tasks.md` file (check the box).
- **Stop**: Stop and ask the user to review. DO NOT automatically proceed to the next task in the list without the user explicitly asking you to do so.
