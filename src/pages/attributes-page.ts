import { BasePage } from "@pages/base-page";
import type { Locator } from "@playwright/test";
import { AttributeRowNames } from "@locators/attributes-locators";
import { AttributesTexts } from "@typings/pages/attributes";

export class AttributesPage extends BasePage {
  public readonly rowConfig: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Config,
  });
  public readonly rowDebug: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Debug,
  });
  public readonly rowEval: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Eval,
  });
  public readonly rowRandom: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Random,
  });
  public readonly rowSys: Locator = this.page.getByRole("row", {
    name: "sys",
    exact: true,
  });
  public readonly rowSystem: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.System,
  });
  private readonly rowMetric000: Locator = this.page.getByRole("row", {
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
  public readonly filterSearchResults: Locator = this.page.locator(
    ".filter-search-results",
  );
  public readonly truncatedStart: Locator = this.page.locator(
    ".middle-ellipsis__truncated-start",
  );
  public readonly rowData: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Data,
  });
  public readonly rowModel: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Model,
  });
  public readonly rowTokenizer: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Tokenizer,
  });
  public readonly rowTraining: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Training,
  });
  public readonly rowParameters: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Parameters,
  });
  private readonly rowBatchSize: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.BatchSize,
  });
  private readonly rowPacking: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.Packing,
  });
  private readonly rowSequenceLenght: Locator = this.page.getByRole("row", {
    name: AttributeRowNames.SequenceLength,
  });
  public readonly row: Locator = this.page.locator(
    ".ReactVirtualized__Table__row",
  );
  public readonly attributeListItems: Locator = this.page.locator(
    '[data-role="attribute-list-name"]',
  );
  public readonly folderIcons: Locator = this.attributeListItems.locator(
    'svg[data-icon="folder"]',
  );
  private readonly parentFolderArrow: Locator = this.page.getByRole("img", {
    name: AttributesTexts.PARENT_FOLDER,
  });
  public readonly columnName: Locator = this.page.getByRole("columnheader", {
    name: AttributesTexts.COLUMN_NAME,
  });
  public readonly columnPreview: Locator = this.page.getByRole("columnheader", {
    name: AttributesTexts.COLUMN_PREVIEW,
  });
  private readonly cookieAcceptButton: Locator = this.page.getByRole("button", {
    name: AttributesTexts.COOKIE_ACCEPT,
  });
  private readonly detailsMenuButton: Locator = this.page.locator(
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
  private readonly runInformationOption: Locator = this.page.getByTitle(
    AttributesTexts.RUN_INFORMATION,
  );
  private readonly breadcrumbRoot: Locator = this.page.locator(
    '[data-role="attribute-breadcrumbs"]',
  );
  private getBreadcrumb(name: string): Locator {
    return this.breadcrumbRoot.getByRole("button", { name });
  }
  private readonly searchInput: Locator = this.page.getByRole("textbox", {
    name: AttributesTexts.SEARCH_ATTRIBUTES,
  });
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
  public async clickParentFolderArrow(): Promise<void> {
    await this.safeClick(this.parentFolderArrow);
  }
  public async clickAcceptCookies(): Promise<void> {
    await this.safeClick(this.cookieAcceptButton);
  }
  public async clickSearchInput(): Promise<void> {
    await this.safeClick(this.searchInput);
  }
  public async clickFilteredSearchResult(): Promise<void> {
    await this.safeClick(this.filterSearchResults);
  }
  public async fillSearchInput(value: string): Promise<void> {
    await this.safeFill(this.searchInput, value);
  }
  public async clickRunInformation(): Promise<void> {
    await this.safeClick(this.runInformationOption);
  }
  public async clickDetailsMenuButton(): Promise<void> {
    await this.safeClick(this.detailsMenuButton);
  }
  public async clickMetric000(): Promise<void> {
    await this.safeClick(this.rowMetric000);
  }
  public async clickDistractionFreeButton(): Promise<void> {
    await this.safeClick(this.distractionFreeButton);
  }
  public async clickLeaveDistractionFreeButton(): Promise<void> {
    await this.safeClick(this.leaveDistractionFreeButton);
  }

  private getAttributeRow(attributeName: string) {
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
}
