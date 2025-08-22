import { Locator, Page, expect } from "@playwright/test";
import { GotoOptions, LocatorWaitOptions } from "@typings/framework";

export abstract class BasePage {
  protected readonly page: Page;

  public readonly attributesTab: Locator;
  public readonly chartsTab: Locator;
  public readonly dashboardsTab: Locator;

  public constructor(page: Page) {
    this.page = page;
    this.attributesTab = this.page.locator('[data-tab-item="attributes"]');
    this.chartsTab = this.page.locator('[data-tab-item="charts"]');
    this.dashboardsTab = this.page.locator('[data-tab-item="dashboard"]');
  }

  public async goto(
    url: string = "/",
    options: GotoOptions = { waitUntil: "load" },
  ): Promise<void> {
    await this.page.goto(url, options);
  }

  protected async safeClick(
    locator: Locator,
    options?: LocatorWaitOptions & { skipWait?: boolean },
  ): Promise<void> {
    if (!options?.skipWait) {
      await locator.waitFor(options ?? { state: "visible" });
    }
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }

  protected async safeFill(
    locator: Locator,
    value: string,
    options: LocatorWaitOptions = { state: "visible" },
  ): Promise<void> {
    await locator.waitFor(options);
    await locator.scrollIntoViewIfNeeded();
    await locator.fill(value);
  }

  protected async safeClear(
    locator: Locator,
    options: LocatorWaitOptions = { state: "visible" },
  ): Promise<void> {
    await locator.waitFor(options);
    await locator.scrollIntoViewIfNeeded();
    await locator.clear();
  }

  public async clickAttributesTab(): Promise<void> {
    await this.safeClick(this.attributesTab);
  }

  public async clickChartsTab(): Promise<void> {
    await this.safeClick(this.chartsTab);
  }

  public async clickDashboardsTab(): Promise<void> {
    await this.safeClick(this.dashboardsTab);
  }
}
