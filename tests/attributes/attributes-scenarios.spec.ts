import { test, expect } from "@fixtures";

test.describe("Attributes Scenarios", () => {
  test.beforeEach(async ({ attributesPage, page }) => {
    await attributesPage.goto(process.env.BASE_URL!);
    await attributesPage.clickAcceptCookies();
  });

  test("T6: should verify that each table has both Name and Preview columns.", async ({
    attributesPage,
  }) => {
    await attributesPage.clickConfigRow();
    await expect(attributesPage.columnName).toBeVisible();
    await expect(attributesPage.columnPreview).toBeVisible();
    await attributesPage.clickParentFolderArrow();

    await attributesPage.clickDebugRow();
    await expect(attributesPage.columnName).toBeVisible();
    await expect(attributesPage.columnPreview).toBeVisible();
    await attributesPage.clickParentFolderArrow();

    await attributesPage.clickEvalRow();
    await expect(attributesPage.columnName).toBeVisible();
    await expect(attributesPage.columnPreview).toBeVisible();
    await attributesPage.clickParentFolderArrow();

    await attributesPage.clickRandomRow();
    await expect(attributesPage.columnName).toBeVisible();
    await expect(attributesPage.columnPreview).toBeVisible();
    await attributesPage.clickParentFolderArrow();

    await attributesPage.clickSysRow();
    await expect(attributesPage.columnName).toBeVisible();
    await expect(attributesPage.columnPreview).toBeVisible();
    await attributesPage.clickParentFolderArrow();

    await attributesPage.clickSystemRow();
    await expect(attributesPage.columnName).toBeVisible();
    await expect(attributesPage.columnPreview).toBeVisible();
    await attributesPage.clickParentFolderArrow();
  });

  test.only("T8: should verify that data loads correctly into the preview panel", async ({
    attributesPage,
  }) => {
    // batch_size
    await attributesPage.clickConfigRow();
    await expect.soft(attributesPage.row).toHaveCount(6);

    await attributesPage.clickParametersRow();

    // Loader (tylko w preview)
    await expect(attributesPage.previewLoader).not.toBeVisible();

    // Tekst "Preview"
    await expect(attributesPage.previewText).not.toBeVisible();

    // Faktyczna zawartość preview
    await expect(attributesPage.previewBody).toBeVisible();

    const text = await attributesPage.previewBody.innerText();
    console.log("Parameters.json preview content:", text);

    expect(text.length).toBeGreaterThan(0);
  });

  test("T9: should Verify that data in the preview column matches data in the highlighted preview", async ({
    attributesPage,
  }) => {
    await attributesPage.clickConfigRow();
    await expect.soft(attributesPage.row).toHaveCount(6);

    await attributesPage.clickDataRow();
    await expect.soft(attributesPage.row).toHaveCount(3);

    await attributesPage.clickBatchSizeRow();
    const batchTableValue = await attributesPage
      .getAttributeTableValue("batch_size")
      .innerText();
    const batchPanelValue = attributesPage.getAttributePanelValue();
    await expect(batchPanelValue).toHaveText(batchTableValue);

    await attributesPage.clickPackingRow();
    const packingTableValue = await attributesPage
      .getAttributeTableValue("packing")
      .innerText();
    const packingPanelValue = attributesPage.getAttributePanelValue();
    await expect(packingPanelValue).toHaveText(packingTableValue);

    await attributesPage.clickSequenceLenght();
    const seqTableValue = await attributesPage
      .getAttributeTableValue("sequence_length")
      .innerText();
    const seqPanelValue = attributesPage.getAttributePanelValue();
    await expect(seqPanelValue).toHaveText(seqTableValue);
  });
});
