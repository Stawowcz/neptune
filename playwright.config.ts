import { defineConfig, devices } from "@playwright/test";

import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? "100%" : "50%",
  reporter: "html",
  use: {
    baseURL:
      "https://scale.neptune.ai/o/examples/org/LLM-Pretraining/runs/details?viewId=standard-view&detailsTab=attributes&runIdentificationKey=llm_train-v945&type=experiment&compare=uMlyIDUTmecveIHVma0eEB95Ei5xu8F_9qHOh0nynbtM",
    trace: "on-first-retry",
  },

  timeout: 120000,
  expect: {
    timeout: 45 * 1000,
  },

  projects: [
    // {
    //   name: "chromium",
    //   use: { ...devices["Desktop Chrome"] },
    // },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
