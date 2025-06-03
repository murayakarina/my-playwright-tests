
# ⚙️ Playwright E2E Test Suite

## 📝 Overview

This project is a Playwright-based end-to-end (E2E) testing suite for a Python web application. It automates user flows such as login, dashboard interaction, and logout using Playwright with TypeScript. The test structure is clean, reusable, and optimized for CI/CD pipelines.

---

## 🚀 Features

- **Login Automation** – Reusable login helper that authenticates users before protected test flows.  
- **Dashboard Interaction** – Tests include form inputs, dropdown selection, and UI assertions after actions.  
- **Logout Flow** – Verifies that users can successfully log out and are redirected properly.  
- **Reusable Utility Functions** – Shared login logic and reusable test patterns are stored in the `utils/` folder.  
- **XPath & CSS Selectors** – Both CSS and XPath selectors are used based on specificity and reliability.  
- **Test Isolation** – Each test runs independently for reliability in CI environments.

---

## 📁 Project Structure

```
.
├── tests/                  # Organized test files by feature
│   ├── 01.login.test.ts
│   ├── 02.dashboard.test.ts
│   └── 03.logout.test.ts
├── utils/                  # Reusable helpers (e.g., login logic)
│   └── login.ts
├── playwright.config.ts    # Playwright test configuration
└── README.md               # Project documentation
```

---

## 🛠️ Setup and Installation

1. Make sure [Node.js](https://nodejs.org/) is installed.

2. Install project dependencies:

```bash
npm install
```

3. Install Playwright-supported browsers:

```bash
npx playwright install
```

4. Ensure the web app is running locally at:

```
http://127.0.0.1:5000
```

---

## 🧪 Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/02.dashboard.test.ts
```

Run in headed mode (shows browser UI):

```bash
npx playwright test --headed
```

Debug using the inspector:

```bash
npx playwright test --debug
```

---

## ✅ Best Practices

- Keep tests atomic and independent.  
- Use `test.beforeEach` to set up common preconditions like login.  
- Store reusable functions (e.g., login) in the `utils/` directory.  
- Use CSS selectors for simplicity; use XPath only when necessary.  
- Prefix test files with numbers (e.g., `01.login.test.ts`) to control order if needed.

---

<<<<<<< Updated upstream
<<<<<<< Updated upstream
## 📄 License

MIT License

---

=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
Built with ❤️ by Brian – Happy Testing!
