import { BasePage } from "@pages/base-page";
import type { Locator } from "@playwright/test";

export class AttributesPage extends BasePage {
  public readonly rowConfig = this.page.getByRole("row", { name: /config/ });
  public readonly rowDebug = this.page.getByRole("row", { name: /debug/ });
  public readonly rowEval = this.page.getByRole("row", { name: /eval/ });
  public readonly rowRandom = this.page.getByRole("row", { name: /random/ });
  public readonly rowSys = this.page.getByRole("row", {
    name: "sys",
    exact: true,
  });
  public readonly rowSystem = this.page.getByRole("row", { name: /system/ });

  public readonly rowData = this.page.getByRole("row", { name: /data/ });
  public readonly rowModel = this.page.getByRole("row", { name: /model/ });
  public readonly rowTokenizer = this.page.getByRole("row", {
    name: /tokenizer/,
  });
  public readonly rowTraining = this.page.getByRole("row", {
    name: /training/,
  });
  public readonly rowParameters = this.page.getByRole("row", {
    name: /parameters\.json/,
  });

  public readonly rowBatchSize = this.page.getByRole("row", {
    name: /batch_size/,
  });

  public readonly rowPacking = this.page.getByRole("row", {
    name: /packing/,
  });

  public readonly rowSequenceLenght = this.page.getByRole("row", {
    name: /sequence_length/,
  });

  public readonly row = this.page.locator(".ReactVirtualized__Table__row");
  public readonly attributeListItems = this.page.locator(
    '[data-role="attribute-list-name"]',
  );
  public readonly folderIcons = this.attributeListItems.locator(
    'svg[data-icon="folder"]',
  );

  public readonly parentFolderArrow = this.page.getByRole("img", {
    name: "Go to parent folder",
  });

  public readonly columnName = this.page.getByRole("columnheader", {
    name: "Name",
  });
  public readonly columnPreview = this.page.getByRole("columnheader", {
    name: "Preview",
  });

  // 🔹 nowy locator na Close guide button
  public readonly closeGuideButton = this.page.getByRole("button", {
    name: "Close guide",
  });

  public readonly cookieAcceptButton = this.page.getByRole("button", {
    name: "OK, I get it",
  });

  // --- PREVIEW ---
  public readonly previewWrapper = this.page.locator(".file-preview-wrapper");

  // loader (tylko dla preview)
  public readonly previewLoader = this.previewWrapper.locator(
    '[data-role="loading-indicator"]',
  );

  // tekst "Preview"
  public readonly previewText = this.previewWrapper.locator(
    ".loading-preview__text",
  );

  // faktyczna zawartość preview
  public readonly previewBody = this.page.locator('[data-role="preview"]');

  // metody do kliknięcia w każdy wiersz
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
}
