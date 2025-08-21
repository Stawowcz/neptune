import { test, expect } from "@fixtures";
import { AttributesKeys } from "@typings/pages/attributes";
import { env } from "@utils/env-utils";

test.describe("Attributes Scenarios", () => {
  test.beforeEach(async ({ attributesPage }) => {
    await attributesPage.goto(env.BASE_URL);
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

  test("T8: should verify that data loads correctly into the preview panel", async ({
    attributesPage,
  }) => {
    await attributesPage.clickConfigRow();
    await expect.soft(attributesPage.row).toHaveCount(6);

    await attributesPage.clickParametersRow();

    await expect(attributesPage.previewLoader).not.toBeVisible();

    await expect(attributesPage.previewText).not.toBeVisible();

    await expect(attributesPage.previewBody).toBeVisible();

    const text = await attributesPage.previewBody.innerText();

    expect(text.length).toBeGreaterThan(0);
  });

  test("T9: should verify that data in the preview column matches data in the highlighted preview", async ({
    attributesPage,
  }) => {
    await attributesPage.clickConfigRow();
    await expect.soft(attributesPage.row).toHaveCount(6);

    await attributesPage.clickDataRow();
    await expect.soft(attributesPage.row).toHaveCount(3);

    await attributesPage.clickBatchSizeRow();
    const batchTableValue = await attributesPage
      .getAttributeTableValue(AttributesKeys.BATCH_SIZE)
      .innerText();
    const batchPanelValue = attributesPage.getAttributePanelValue();
    await expect(batchPanelValue).toHaveText(batchTableValue);

    await attributesPage.clickPackingRow();
    const packingTableValue = await attributesPage
      .getAttributeTableValue(AttributesKeys.PACKING)
      .innerText();
    const packingPanelValue = attributesPage.getAttributePanelValue();
    await expect(packingPanelValue).toHaveText(packingTableValue);

    await attributesPage.clickSequenceLenght();
    const seqTableValue = await attributesPage
      .getAttributeTableValue(AttributesKeys.SEQUENCE_LENGTH)
      .innerText();
    const seqPanelValue = attributesPage.getAttributePanelValue();
    await expect(seqPanelValue).toHaveText(seqTableValue);
  });
});
