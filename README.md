# E2E and smoke test in angular using cypress


### Install dependencies:

```shell

npm install

```


### Run the Angular app:

```shell

ng serve

```


Opens at: http://localhost:4200

# 🧪 How to Run Cypress

Open Cypress UI:

```shell

npx cypress open

```



Select your test (item.cy.ts, login.cy)

Run all tests in headless mode:

```shell

npx cypress run

```



## 🔥 How to Run the Smoke Test
A smoke test is a lightweight test to confirm the core functionality of the app is working.

Example Smoke Test (in smoke.cy.ts):

```shell

describe('Smoke Test', () => {
  it('Loads the homepage and verifies core features', () => {
    cy.visit('/');
    cy.contains('Login');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
  });
});
```

To run it:

npx cypress run --spec "cypress/e2e/smoke.cy.ts"

### 🌐 Why End-to-End (E2E) Testing Matters
- ✅ Validates the entire app from the user’s perspective
- ✅ Catches real-world issues (routing, UI flow, integration)
- ✅ Boosts confidence before deployment
- ✅ Complements unit and integration tests
- ✅ Ensures critical user paths like login, add/view/edit items work

### 🔎 Why Smoke Testing Matters

- ✅ Runs fast, checking the most vital features
- ✅ Prevents broken deployments
- ✅ Ideal for CI/CD pipelines before full test suites
- ✅ Saves time during rapid development cycles
