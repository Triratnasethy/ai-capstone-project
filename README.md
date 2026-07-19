# AI Capstone Project

[License: MIT](LICENSE)
[Node.js](https://nodejs.org/)

An AI-assisted development capstone that explores modern software engineering practices using Cursor IDE, Node.js, and GitHub. This repository documents the full development lifecycle—from project setup and AI-driven code generation to version control, documentation, and iterative improvement.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **AI-assisted development** — Uses Cursor AI for code generation, review, and documentation
- **Modern JavaScript** — Built with Node.js and ES6+ conventions
- **Version control best practices** — Structured Git workflow with Conventional Commits
- **Professional repository setup** — Includes `.gitignore`, licensing, and contributor documentation
- **Modular code organization** — Designed for clean, maintainable, and reusable functions

## Tech Stack


| Category        | Tools                      |
| --------------- | -------------------------- |
| Runtime         | Node.js, JavaScript (ES6+) |
| Version Control | Git, GitHub                |
| Development     | Cursor IDE                 |
| AI Assistance   | Cursor AI                  |


## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Git](https://git-scm.com/)
- [Cursor IDE](https://cursor.com/) (recommended for AI-assisted development)

### Setup

1. **Clone the repository**
  ```bash
   git clone https://github.com/Triratnasethy/ai-capstone-project.git
   cd ai-capstone-project
  ```
2. **Install dependencies** *(when a `package.json` is added)*
  ```bash
   npm install
  ```
3. **Configure environment variables** *(optional)*
  ```bash
   cp .env.example .env
  ```
   Edit `.env` with your local configuration. Environment files are excluded from version control via `.gitignore`.
4. **Run the project** *(when application scripts are defined)*
  ```bash
   npm start
  ```

## Project Structure

Current layout:

```
ai-capstone-project/
├── .gitignore          # Git ignore rules (Node.js, env files, build output)
├── CLAUDE.md           # AI assistant context and coding conventions
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

Planned layout as the capstone evolves:

```
ai-capstone-project/
├── src/                # Application source code
├── tests/              # Unit and integration tests
├── docs/               # Additional documentation
├── .env.example        # Environment variable template
├── package.json        # Node.js dependencies and scripts
└── ...
```

## Future Enhancements

- [x] Initialize Node.js project with `package.json` and core dependencies
- [x] Add application source code under `src/`
- [x] Implement automated testing with a framework such as Jest or Vitest
- [x] Set up CI/CD pipeline with GitHub Actions
- [x] Add API or CLI functionality based on capstone requirements
- [x] Expand documentation with usage examples and architecture notes
- [x] Add linting and formatting (ESLint, Prettier) for consistent code quality

## License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2026 Triratnasethy