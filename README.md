# Spec Driven Development (SDD) Agent Skills

*This methodology was inspired by how Kiro, the AI IDE from Amazon, does Spec Driven Development (SDD).*

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

You can install these skills using npm or manually copy them to your project.

### NPM Installation

**Local Installation (Recommended)**
To install the skills locally in your project, run:
```bash
npm install amaynez-sdd
```

**Global Installation**
To install the skills globally on your machine, run:
```bash
npm install -g amaynez-sdd
```

### Manual Installation

If you prefer not to use npm, or if you are using this repository directly (where the skills are already configured), you can manually copy the skills into your project or global agent configuration:

1. Clone or download this repository.
2. Copy the entire contents of the `.skills/` directory.
3. Paste the contents into one of the following locations depending on your AI agent:
   - **Project Root**: `.skills/` (Works automatically for many standard agents)
   - **Claude Code**: `~/.claude/skills/` (Global configuration)
   - **Cursor**: `.cursor/rules/` (Project-level configuration)
   - **Kiro**: `.kiro/skills/` (Project-level configuration)

*Note: The agent configurations for different clients exist in their respective hidden directories at the root of this project (e.g., `.claude`, `.cursor`, `.kiro`).*

## Usage

Start your AI agent in this repository and type one of the following commands:

- `/spec` - Start requirement gathering.
- `/design` - Begin technical design.
- `/plan` - Generate the implementation plan.
- `/implement` - Start writing code.

The agent will prompt you at each step to review and approve the documents before moving on to the next phase, ensuring you stay in full control of the architecture and implementation details.
