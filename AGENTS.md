```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines are designed to ensure high-quality, maintainable, and efficient development for our AI coding agents. Adherence to these principles is mandatory for all development efforts.

## 1. DRY (Don't Repeat Yourself)

*   All code within a file should be self-contained and reusable.  Avoid duplicating logic or data structures across multiple files.
*   When a component is implemented multiple times, consider creating a reusable component with clear API contracts.
*   Refactor any repetitive code to a single, well-defined function or class.

## 2. KISS (Keep It Simple, Stupid)

*   Prioritize simplicity and readability.  Strive for concise and easy-to-understand code.
*   Avoid overly complex logic.  Complex solutions should be justified.
*   Use clear naming conventions.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class or module should have one, and only one, reason to change.
*   **Open/Closed Principle:**  The system should be open for extension but closed for modification.
*   **Liskov Substitution Principle:**  Subclasses should be able to replace all their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients shouldn’t be forced to implement interfaces they don’t use.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement functionality that is absolutely necessary for the current task.
*   Avoid adding features or code that is not currently required.
*   Refactor code incrementally, only adding functionality when it’s needed.

## 5. Code Structure & Organization

*   **File Size Limit:** Each file should not exceed 180 lines of code.
*   **Modularization:** Break down complex tasks into smaller, manageable modules.
*   **Documentation:**  Each module should have a clear and concise docstring explaining its purpose, inputs, and outputs.  Use standard docstring conventions (e.g., Google style).
*   **Comments:**  Write concise and helpful comments to explain complex logic or assumptions.

## 6. Testing

*   **Unit Tests:** All code must be thoroughly tested using unit tests.
*   **Test Coverage:**  Minimum 80% coverage is required.
*   **Test Driven Development:**  Write tests *before* writing the code.
*   **Mocking/Stubbing:**  Only use mocks/stubs for testing.  No external API calls or data sources.
*   **Test Isolation:** Each test should be isolated and have its own dependencies.

## 7. Development Practices

*   **Version Control:** Use a version control system (e.g., Git) and adhere to established branching strategies.
*   **Code Reviews:** All code changes should be reviewed by at least one other developer before merging.
*   **Continuous Integration (CI):**  Implement a CI pipeline to automatically build and test the code.
*   **Static Analysis:**  Utilize static analysis tools to identify potential bugs and code quality issues.
*   **Refactoring:** Regularly refactor code to improve its structure and maintainability.

## 8. Specific Considerations (Example – Requires Definition)

*   [Specific Algorithm/Data Structure Implementation] – Must be optimized for performance.
*   [API Definition] – Ensure clear and comprehensive documentation.
*   [Error Handling] – Implement robust error handling with informative error messages.


These guidelines are intended as a framework.  Adapt and refine them as needed to best support the overall goals of the AGENTS.md repository.  Any code not conforming to these principles will be considered a violation and may be subject to review.
```