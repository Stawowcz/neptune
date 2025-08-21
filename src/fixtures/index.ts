import { test as base, expect } from "@playwright/test";
import { pagesFixture } from "./pages-fixture";
import type { MyFixtures } from "@typings/fixtures";
import { componentsFixture } from "./components-fixture";

export const test = base.extend<MyFixtures>({
  ...pagesFixture,
  ...componentsFixture,
});

export { expect };
