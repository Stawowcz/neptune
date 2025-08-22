import type { Page } from "@playwright/test";
import { AttributesPage } from "@pages/attributes-page";
import { LocalStorageData } from "@data";

export const pagesFixture = {
  attributesPage: async (
    { page }: { page: Page },
    use: (attributesPage: AttributesPage) => Promise<void>,
  ) => {
    await page.addInitScript((anonId) => {
      localStorage.setItem("userflow:anonymousId", anonId);
    }, LocalStorageData.ANON_ID);

    await use(new AttributesPage(page));
  },
};
