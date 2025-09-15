# React + Netlify CI/CD Demo

[![CI Pipeline](https://github.com/Pranavi2002/Netlify-CI-CD-Demo/actions/workflows/ci.yml/badge.svg)](https://github.com/Pranavi2002/Netlify-CI-CD-Demo/actions/workflows/ci.yml)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/f97dd6b2-5872-4916-abba-c76c1bc250f0/deploy-status)](https://app.netlify.com/projects/netlify-ci-cd-demo/deploys)

A demo React project to showcase **CI/CD with GitHub Actions and Netlify**.  
Every push to GitHub runs automated tests, and successful merges to `main` automatically deploy to Netlify.

**Live Demo:** [https://netlify-ci-cd-demo.netlify.app/](https://netlify-ci-cd-demo.netlify.app/)

---

## Features

- React app with multiple components and headings
- GitHub Actions workflow for **continuous integration**
- Automated testing with **Jest & React Testing Library**
- Netlify deployment for **continuous deployment**
- Branch protection ensures **only passing code is deployed**

---

## Project Structure

```
src/
├── App.js
├── App.test.js               # Basic test file
├── App.realistic.test.js     # Realistic CI/CD test file
└── index.js
```

---

## GitHub Actions Workflow

- Workflow file: `.github/workflows/ci.yml`
- Runs on `push` and `pull_request` to `main`
- Steps:
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Run all tests (`npm test`)

---

## How CI/CD Works

1. **Feature branch workflow** (recommended for real-world projects):

```bash
git checkout -b feature/your-feature
```

- Make changes to App.js or test file

```bash
git add .
git commit -m "Add feature / update tests"
git push origin feature/your-feature
```

2. **Open a Pull Request (PR)** to `main` branch

   * GitHub Actions runs tests automatically
   * Status checks show pass/fail in PR

3. **Check test results**

   * ✅ All tests pass → branch can be merged
   * ❌ Any test fails → cannot merge due to branch protection

4. **Merge PR** → automatically triggers Netlify deploy

---

## Branch Protection Rules

* `main` branch protected to require passing **CI Pipeline** status checks
* Prevents broken code from being deployed
* Optional: Require PR review before merging

---

## Adding Tests

* Add new `.test.js` files in `src/`
* Jest automatically runs all test files in CI workflow
* Example:

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent(/Hello from React/i);
});
```

---

## Deployment

* Netlify automatically deploys **merged commits** from `main`
* Only deploys if **CI tests pass**

---

## 👩‍💻 Author
### Pranavi Kolipaka
Feel free to connect: 
- [LinkedIn] (https://www.linkedin.com/in/vns-sai-pranavi-kolipaka-489601208/) 
- [GitHub] (https://github.com/Pranavi2002)

