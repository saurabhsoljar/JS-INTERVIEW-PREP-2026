# Copilot Instructions for JS-INTERVIEW-PREP-2026

## Overview
This codebase is structured to facilitate learning and practicing JavaScript concepts, particularly for interview preparation. It includes various folders that cover fundamental topics, control flow, iterations, and more advanced JavaScript features.

## Architecture
- **Folder Structure**: The project is divided into several folders, each focusing on specific JavaScript concepts:
  - `01_Basics/`: Covers basic JavaScript concepts such as variables, data types, and operations.
  - `02_Basics/`: Focuses on arrays and objects, essential data structures in JavaScript.
  - `03_basics/`: Discusses functions, scopes, and arrow functions.
  - `04_control_flow/`: Contains examples of control flow statements like `if`, `switch`, and truthy evaluations.
  - `05_iterations/`: Demonstrates different iteration methods in JavaScript.

## Developer Workflows
- **Running Code**: JavaScript files can be executed in a browser or Node.js environment. Use `node <filename>.js` to run scripts in Node.js.
- **Testing**: While there are no formal tests in this codebase, developers are encouraged to manually test functions by running the respective files.

## Project-Specific Conventions
- **Variable Declaration**: Avoid using `var` for variable declarations. Prefer `let` and `const` for block-scoped variables to prevent hoisting issues and accidental redeclarations.
- **Alert Function**: The `alert()` function is only available in browser environments and not in Node.js. This distinction is crucial for understanding where certain functions can be used.

## Integration Points
- **External Dependencies**: This project does not currently utilize external libraries or frameworks, focusing solely on vanilla JavaScript.
- **Cross-Component Communication**: Each file is designed to be self-contained, with examples demonstrating specific concepts without interdependencies.

## Key Files/Directories
- **README.md**: Provides an overview of the project and coding conventions.
- **01_Basics/**: Contains foundational JavaScript files that are essential for understanding the language.

## Conclusion
These instructions aim to provide a clear understanding of the project's structure, conventions, and workflows to help AI agents effectively navigate and utilize the codebase.