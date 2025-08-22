import { BasePage } from "@pages/base-page";
import type { Locator } from "@playwright/test";
import { AttributeRowNames } from "@locators/attributes-locators";
import { AttributesTexts } from "@typings/pages/attributes";

export class AttributesPage extends BasePage {
  public readonly rowConfig = this.page.getByRole("row", {
    name: AttributeRowNames.Config,
  });
  public readonly rowDebug = this.page.getByRole("row", {
    name: AttributeRowNames.Debug,
  });
  public readonly rowEval = this.page.getByRole("row", {
    name: AttributeRowNames.Eval,
  });
  public readonly rowRandom = this.page.getByRole("row", {
    name: AttributeRowNames.Random,
  });
  public readonly rowSys = this.page.getByRole("row", {
    name: "sys",
    exact: true,
  });
  public readonly rowSystem = this.page.getByRole("row", {
    name: AttributeRowNames.System,
  });

  public readonly rowMetric000 = this.page.getByRole("row", {
    name: AttributeRowNames.Metric000,
  });

  public readonly distributedType: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.DistributedType,
  });
  public readonly deType: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.DType,
  });
  public readonly gitCommit: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.GitCommit,
  });
  public readonly seed: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Seed,
  });

  public readonly filterSearchResults = this.page.locator(
    ".filter-search-results",
  );
  public readonly truncatedStart = this.page.locator(
    ".middle-ellipsis__truncated-start",
  );

  public readonly rowData = this.page.getByRole("row", {
    name: AttributeRowNames.Data,
  });
  public readonly rowModel = this.page.getByRole("row", {
    name: AttributeRowNames.Model,
  });
  public readonly rowTokenizer = this.page.getByRole("row", {
    name: AttributeRowNames.Tokenizer,
  });
  public readonly rowTraining = this.page.getByRole("row", {
    name: AttributeRowNames.Training,
  });
  public readonly rowParameters = this.page.getByRole("row", {
    name: AttributeRowNames.Parameters,
  });

  public readonly rowBatchSize = this.page.getByRole("row", {
    name: AttributeRowNames.BatchSize,
  });

  public readonly rowPacking = this.page.getByRole("row", {
    name: AttributeRowNames.Packing,
  });

  public readonly rowSequenceLenght = this.page.getByRole("row", {
    name: AttributeRowNames.SequenceLength,
  });

  public readonly row = this.page.locator(".ReactVirtualized__Table__row");
  public readonly attributeListItems = this.page.locator(
    '[data-role="attribute-list-name"]',
  );
  public readonly folderIcons = this.attributeListItems.locator(
    'svg[data-icon="folder"]',
  );

  public readonly parentFolderArrow = this.page.getByRole("img", {
    name: AttributesTexts.PARENT_FOLDER,
  });

  public readonly columnName = this.page.getByRole("columnheader", {
    name: AttributesTexts.COLUMN_NAME,
  });
  public readonly columnPreview = this.page.getByRole("columnheader", {
    name: AttributesTexts.COLUMN_PREVIEW,
  });

  public readonly closeGuideButton = this.page.getByRole("button", {
    name: AttributesTexts.CLOSE_GUIDE,
  });

  public readonly cookieAcceptButton = this.page.getByRole("button", {
    name: AttributesTexts.COOKIE_ACCEPT,
  });

  public readonly detailsMenuButton = this.page.locator(
    '[data-role="details-menu-button"]',
  );

  private readonly distractionFreeButton: Locator = this.page.locator(
    '[data-role="enter-distraction-free-view"]',
  );

  private readonly leaveDistractionFreeButton: Locator = this.page.locator(
    '[data-role="leave-distraction-free-view"]',
  );

  public readonly compressIcon: Locator = this.page.locator(
    '[data-icon="compress"]',
  );

  public readonly chartCanvases: Locator = this.page.locator(
    '[data-role="chart-with-data"] canvas',
  );

  public readonly chartTitle: Locator = this.page.locator(
    '[data-role="series-label"] .chart-legend__series-label-name',
  );

  async clickMetric000() {
    await this.safeClick(this.rowMetric000);
  }
  async clickDistractionFreeButton() {
    await this.safeClick(this.distractionFreeButton);
  }

  async clickLeaveDistractionFreeButton() {
    await this.safeClick(this.leaveDistractionFreeButton);
  }

  public readonly runInformationOption = this.page.getByTitle(
    AttributesTexts.RUN_INFORMATION,
  );

  public async clickRunInformation(): Promise<void> {
    await this.safeClick(this.runInformationOption);
  }

  public async clickDetailsMenuButton(): Promise<void> {
    await this.safeClick(this.detailsMenuButton);
  }

  public readonly previewWrapper = this.page.locator(".file-preview-wrapper");

  public readonly previewLoader = this.previewWrapper.locator(
    '[data-role="loading-indicator"]',
  );

  public readonly previewText = this.previewWrapper.locator(
    ".loading-preview__text",
  );

  public readonly previewBody = this.page.locator('[data-role="preview"]');

  public readonly breadcrumbRoot: Locator = this.page.locator(
    '[data-role="attribute-breadcrumbs"]',
  );

  public getBreadcrumb(name: string): Locator {
    return this.breadcrumbRoot.getByRole("button", { name });
  }

  public async clickBreadcrumb(name: string): Promise<void> {
    await this.safeClick(this.getBreadcrumb(name));
  }

  public async clickSequenceLenght(): Promise<void> {
    await this.safeClick(this.rowSequenceLenght);
  }
  public async clickPackingRow(): Promise<void> {
    await this.safeClick(this.rowPacking);
  }

  public async clickBatchSizeRow(): Promise<void> {
    await this.safeClick(this.rowBatchSize);
  }

  public async clickConfigRow(): Promise<void> {
    await this.safeClick(this.rowConfig);
  }

  public async clickDebugRow(): Promise<void> {
    await this.safeClick(this.rowDebug);
  }

  public async clickEvalRow(): Promise<void> {
    await this.safeClick(this.rowEval);
  }

  public async clickRandomRow(): Promise<void> {
    await this.safeClick(this.rowRandom);
  }

  public async clickSysRow(): Promise<void> {
    await this.safeClick(this.rowSys);
  }

  public async clickSystemRow(): Promise<void> {
    await this.safeClick(this.rowSystem);
  }

  public async clickDataRow(): Promise<void> {
    await this.safeClick(this.rowData);
  }

  public async clickModelRow(): Promise<void> {
    await this.safeClick(this.rowModel);
  }

  public async clickTokenizerRow(): Promise<void> {
    await this.safeClick(this.rowTokenizer);
  }

  public async clickTrainingRow(): Promise<void> {
    await this.safeClick(this.rowTraining);
  }

  public async clickParametersRow(): Promise<void> {
    await this.safeClick(this.rowParameters);
  }

  public async clickParentFolderArrow(): Promise<void> {
    await this.safeClick(this.parentFolderArrow);
  }

  public async clickAcceptCookies(): Promise<void> {
    await this.safeClick(this.cookieAcceptButton);
  }

  public getAttributeRow(attributeName: string) {
    return this.page
      .locator(
        `[data-role="attribute-list-name"][data-name="${attributeName}"]`,
      )
      .locator("xpath=../../..");
  }

  public getAttributeTableValue(attributeName: string) {
    return this.getAttributeRow(attributeName).locator(
      ".av-attribute-preview span",
    );
  }

  public getAttributePanelValue() {
    return this.page.locator(
      '[data-role="av-text-preview-body"] .text-preview-content',
    );
  }

  public readonly searchInput = this.page.getByRole("textbox", {
    name: AttributesTexts.SEARCH_ATTRIBUTES,
  });

  public async clickSearchInput(): Promise<void> {
    await this.safeClick(this.searchInput);
  }

  public async clickFilteredSearchResult(): Promise<void> {
    await this.safeClick(this.filterSearchResults);
  }

  public async fillSearchInput(value: string): Promise<void> {
    await this.safeFill(this.searchInput, value);
  }
}
