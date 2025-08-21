import type { Page } from "@playwright/test";
import { AttributesPage } from "@pages/attributes-page";

export const attributesFixture = {
  attributesPage: async (
    { page }: { page: Page },
    use: (attributesPage: AttributesPage) => Promise<void>,
  ) => {
    // dodajemy initScript przed każdym goto w tym teście
    await page.addInitScript(() => {
      localStorage.setItem(
        "userflow:anonymousId",
        "anon-2b16d3a4-4fb1-4aa4-80e7-4b625c5ae4b3",
      );
    });

    await use(new AttributesPage(page));
  },
};
