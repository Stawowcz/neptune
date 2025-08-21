import { test, expect } from "@fixtures";

test.describe("Search scenarios", () => {
  test.beforeEach(async ({ attributesPage }) => {
    await attributesPage.goto(process.env.BASE_URL!);
    await attributesPage.clickAcceptCookies();
  });

  test("T15: should verify that we can search by a single word", async ({
    attributesPage,
  }) => {
    await attributesPage.fillSearchInput("hidden");
    await expect.soft(attributesPage.filterSearchResults).toHaveCount(1);
    await attributesPage.clickFilteredSearchResult();
    const seqTableValue = await attributesPage
      .getAttributeTableValue("hidden_size")
      .innerText();
    const seqPanelValue = attributesPage.getAttributePanelValue();
    await expect(seqPanelValue).toHaveText(seqTableValue);
    await expect(seqPanelValue).toHaveText("6144");
  });

  test("T16: should verify that when clicking the search field, a list with all elements appears.", async ({
    attributesPage,
  }) => {
    await attributesPage.clickSearchInput();
    await expect.soft(attributesPage.filterSearchResults).toHaveCount(1);
    await expect.soft(attributesPage.truncatedStart).toHaveCount(58);
  });
});
