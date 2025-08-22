import { AttributesRunData } from "@data/attributes-run-data";
import { test, expect } from "@fixtures";
import { env } from "@utils/env-utils";

test.describe("Search scenarios", () => {
  test.beforeEach(async ({ attributesPage }) => {
    await attributesPage.goto(env.BASE_URL);
    await attributesPage.clickAcceptCookies();

    await expect.soft(attributesPage.row).toHaveCount(6);
  });

  test("T22: should verify that Run information popup is displayed correctly.", async ({
    attributesPage,
    runInformationModal,
  }) => {
    await attributesPage.clickDetailsMenuButton();
    await attributesPage.clickRunInformation();

    await expect(runInformationModal.title).toBeVisible();
    await expect(runInformationModal.name).toContainText(
      AttributesRunData.NAME,
    );
    await expect(runInformationModal.id).toContainText(AttributesRunData.ID);
    await expect(runInformationModal.state).toContainText(
      AttributesRunData.STATE,
    );
    await expect(runInformationModal.owner).toContainText(
      AttributesRunData.OWNER,
    );
    await expect(runInformationModal.created).toContainText(
      AttributesRunData.CREATED,
    );
    await expect(runInformationModal.modified).toContainText(
      AttributesRunData.MODIFIED,
    );
    await expect(runInformationModal.description).toContainText(
      AttributesRunData.DESCRIPTION,
    );
    await expect(runInformationModal.tags).toContainText(
      AttributesRunData.TAGS,
    );
    await expect(runInformationModal.groupTags).toContainText(
      AttributesRunData.GROUP_TAGS,
    );
  });

  test("T24: should verify that Enter and Leave distraction free view works correctly.", async ({
    attributesPage,
  }) => {
    await attributesPage.clickDistractionFreeButton();

    await expect.soft(attributesPage.compressIcon).toBeVisible();

    await attributesPage.clickLeaveDistractionFreeButton();

    await expect.soft(attributesPage.compressIcon).not.toBeVisible();
  });
});
