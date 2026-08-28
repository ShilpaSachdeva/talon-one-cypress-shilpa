# Demoblaze UI Automation with Cypress

A Cypress-based UI automation project for testing the main user journeys of the [Demoblaze](https://www.demoblaze.com/) web application.

The framework uses the **Page Object Model (POM)** to keep test cases readable and reusable, with test data maintained separately through Cypress fixtures. Mochawesome is used for HTML test reporting.

---

## Project Scope

The automation focuses on two key areas:

* User authentication
* Product purchase

Both positive and negative scenarios are covered to verify expected application behaviour.

---

## Tech Stack

| Tool              | Purpose                           |
| ----------------- | --------------------------------- |
| Cypress           | UI test automation                |
| JavaScript        | Test implementation               |
| Page Object Model | Page and interaction abstraction  |
| Mochawesome       | HTML test reporting               |
| Node.js / npm     | Project and dependency management |
| GitHub Actions    | CI test execution                 |

---

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── purchase.cy.js
│   │
│   ├── fixtures/
│   │   ├── orderDetails.json
│   │   ├── products.json
│   │   └── users.json
│   │
│   ├── pages/
│   │   ├── CartPage.js
│   │   ├── LoginPage.js
│   │   ├── ProductDetailsPage.js
│   │   └── ProductsPage.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

Test reports, screenshots, videos and `node_modules` are generated locally and are excluded from version control.

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

### Install dependencies

Clone the repository and install the project dependencies:

```bash
npm install
```

---

## Running the Tests

### Headless execution

Run the complete Cypress test suite:

```bash
npx cypress run
```

### Interactive mode

Open the Cypress Test Runner:

```bash
npx cypress open
```

From there, individual specs can be selected and executed interactively.

### Run a specific spec

For example:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

or:

```bash
npx cypress run --spec "cypress/e2e/purchase.cy.js"
```

---

## Test Coverage

### Login

The login suite covers:

* Successful login using valid credentials
* Login attempt with an unregistered username
* Login attempt with an incorrect password
* Login attempt with blank username and password

### Product Purchase

The purchase suite covers:

* Selecting a laptop from the product catalogue
* Verifying product details
* Adding a product to the cart
* Verifying the cart contents
* Completing a purchase with valid order information
* Attempting to complete a purchase with missing required information

---

## Test Design

### Page Object Model

Application-specific selectors and actions are kept inside page objects rather than directly in the test cases.

For example:

```text
LoginPage
   ├── openLoginModal()
   ├── fillUsername()
   ├── fillPassword()
   └── clickLogin()
```

This keeps the test cases focused on **what is being tested** rather than on implementation details.

It also makes maintenance easier if application selectors change.

### Fixtures

Test data is separated from the test implementation using JSON fixtures:

```text
users.json
products.json
orderDetails.json
```

This avoids hard-coding test data throughout the test cases and makes it easier to update or reuse data.

### Custom Commands

Reusable Cypress functionality is kept in:

```text
cypress/support/commands.js
```

For example, custom commands are used for handling browser alert validation.

---

## Reporting

The project uses **Mochawesome** for test reporting.

After a Cypress execution, an HTML report is generated under:

```text
cypress/reports/
```

The reports directory is intentionally excluded from Git because reports are generated artifacts rather than source files.

Screenshots generated for failed tests are stored under:

```text
cypress/screenshots/
```

and are also excluded from version control.

---

## CI Integration

The project includes a GitHub Actions workflow under:

```text
.github/workflows/cypress.yml
```

The workflow executes the Cypress test suite automatically in CI.

It can be triggered through configured GitHub events and can also be started manually from the **Actions** section of the repository.

The CI environment installs the project dependencies and executes the Cypress tests using a browser available on the GitHub runner.

---

## Observations from Testing

During testing, a couple of application behaviours were identified.

### Login error messages

When an existing user enters an incorrect password, the application displays:

```text
Wrong password.
```

From a security perspective, exposing whether a username exists can enable user-enumeration attacks. A more secure implementation would generally use a generic authentication error message.

### Order form validation

The purchase form does not appear to provide sufficient validation for fields such as Name and Credit Card. Invalid or incomplete input can result in unexpected behaviour.

These observations were treated as application-level findings rather than automation failures.

---

## Possible Improvements

The current implementation intentionally keeps the framework lightweight. Some possible future enhancements include:

* Use `cy.session()` to improve login setup time and reduce repeated UI logins.
* Use API-level setup where appropriate to reduce unnecessary UI dependencies.
* Add more negative and boundary scenarios around product and order validation.
* Add cross-browser execution to the CI pipeline.
* Add test retry/stability analysis for identifying flaky tests.
* Publish Mochawesome reports as GitHub Actions artifacts.
* Introduce ESLint and automated formatting checks.
* Add tagging or grouping for smoke, regression and negative test suites.

---

## AI Usage

AI was used as a supporting tool rather than for generating the complete automation solution.

The test scenarios and framework structure were designed based on the application requirements and testing approach.

AI was mainly used for:

* Supporting the implementation of browser alert stubbing and assertions.
* Fixing some flaky tests.
* Improving code readability and formatting.
* Reviewing and refining the README documentation.

The automation itself remains based on the project's defined test scenarios, page objects, fixtures and Cypress implementation.

---

## Summary

This project demonstrates a maintainable Cypress automation structure with:

* JavaScript-based Cypress tests
* Page Object Model
* Externalised test data
* Reusable Cypress commands
* Positive and negative test coverage
* Mochawesome reporting
* GitHub Actions CI execution

The primary focus was to keep the framework **simple, readable and maintainable**, while covering the most important user journeys of the Demoblaze application.
