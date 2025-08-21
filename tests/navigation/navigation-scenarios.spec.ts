import { test, expect } from "@fixtures";

test.describe("Navigation Scenarios", () => {
  test.beforeEach(async ({ attributesPage, page }) => {
    await attributesPage.goto(process.env.BASE_URL!);
    await attributesPage.clickAcceptCookies();
  });

  test("T1: should verify that the main list expands correctly when entering the main tab", async ({
    attributesPage,
  }) => {
    await expect.soft(attributesPage.rowConfig).toBeVisible();
    await expect.soft(attributesPage.rowDebug).toBeVisible();
    await expect.soft(attributesPage.rowEval).toBeVisible();
    await expect.soft(attributesPage.rowRandom).toBeVisible();
    await expect.soft(attributesPage.rowSys).toBeVisible();
    await expect.soft(attributesPage.rowSystem).toBeVisible();
    await expect.soft(attributesPage.row).toHaveCount(6);

    const items = attributesPage.attributeListItems;
    const count = await items.count();

    for (let i = 0; i < count; i++) {
      await expect(attributesPage.folderIcons.nth(i)).toBeVisible();
    }
  });

  test("T2: should verify that subfolders/files expand correctly when entering a folder", async ({
    attributesPage,
  }) => {
    await attributesPage.clickConfigRow();
    await expect.soft(attributesPage.rowData).toBeVisible();
    await expect.soft(attributesPage.rowModel).toBeVisible();
    await expect.soft(attributesPage.rowSystem).toBeVisible();
    await expect.soft(attributesPage.rowTokenizer).toBeVisible();
    await expect.soft(attributesPage.rowTraining).toBeVisible();
    await expect.soft(attributesPage.rowParameters).toBeVisible();
    await expect.soft(attributesPage.row).toHaveCount(6);
  });
});
