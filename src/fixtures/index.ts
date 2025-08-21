import { test as base, expect } from "@playwright/test";
import { attributesFixture } from "./pages-fixture";
import type { MyFixtures } from "@typings/fixtures";

export const test = base.extend<MyFixtures>({
  ...attributesFixture,
});

export { expect };
