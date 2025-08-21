# Playwright Test Automation

Automated end‑to‑end tests for the Neptune using Playwright + TypeScript, with Page Object Model, custom fixtures, and soft assertions.

## Installation

```bash
git clone https://github.com/Stawowcz/neptune.git
cd neptune
npm install
```

## Configuration

Create a `.env` file with:

```env
BASE_URL= https://scale.neptune.ai/o/examples/org/LLM-Pretraining/runs/details?viewId=standard-view&detailsTab=attributes&runIdentificationKey=llm_train-v945&type=experiment&compare=uMlyIDUTmecveIHVma0eEB95Ei5xu8F_9qHOh0nynbtM
```

## Running Tests

To run all tests:

```bash
npm run test:all
```

To run tests in debug mode (Chromium):

```bash
npm run test:debug:chrome
```

To run tests in specific browsers:

```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

## Reporting

- HTML & JUnit reporters configured in `playwright.config.ts`
- Screenshots (on failure), videos (on retry), and trace files (first retry) are saved under `src/report/<timestamp>/`
- To view the HTML report:
  ```bash
  npm run report
  ```

## CI/CD

Configured in `.github/workflows/tests.yml` to:

- Run tests in parallel across Chromium, Firefox, and WebKit
- Cache `node_modules` and Playwright browsers for faster builds
- Publish test reports and artifacts on each run

## Documentation
