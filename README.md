# Spec Driven Development (SDD) Agent Skills

This repository provides native "Agent Skills" to guide AI Agents through the Spec Driven Development (SDD) methodology. By leveraging these skills, you can predictably and systematically transform a rough feature idea into an actionable, test-driven implementation.

## Overview of Skills

The SDD methodology has been modernized into four distinct skills, accessible via slash commands in supported AI agents:

1. **/spec**: Transforms a rough feature idea into a structured requirements document using the EARS format.
2. **/design**: Develops a comprehensive technical design document (architecture, data models, components) based on the approved requirements.
3. **/plan**: Creates an actionable implementation plan, producing a task list optimized for AI coding agents.
4. **/implement**: Executes a single coding task from the implementation plan, ensuring proper scoping, early testing, and continuous validation.

## Supported Agents

These skills are structured using the open Agent Skills standard and are compatible out-of-the-box with:
- **Claude Code**: Uses `~/.claude/skills/`
- **Cursor**: Uses `.cursor/rules/` and `.cursorrules`
- **Kiro**: Uses `.kiro/skills/`
- **Other AI Agents**: Automatically detects `.skills/` directory

## Installation & Setup

If you are using this repository directly, the skills are already configured.

To install these skills in another repository, copy the contents of the `.skills/` directory to your project root or your global agent configuration folder (e.g., `~/.claude/skills/` or `~/.cursor/rules/`).

The agent configurations for different clients exist in their respective hidden directories at the root of this project (e.g., `.claude`, `.cursor`, `.kiro`).

## Usage

Start your AI agent in this repository and type one of the following commands:

- `/spec` - Start requirement gathering.
- `/design` - Begin technical design.
- `/plan` - Generate the implementation plan.
- `/implement` - Start writing code.

The agent will prompt you at each step to review and approve the documents before moving on to the next phase, ensuring you stay in full control of the architecture and implementation details.
