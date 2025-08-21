import { Locator, Page, expect } from "@playwright/test";
import { GotoOptions, LocatorWaitOptions } from "@typings/framework";

export abstract class BasePage {
  protected readonly page: Page;
  public readonly title: Locator;

  public constructor(page: Page) {
    this.page = page;
    this.title = this.page.getByTestId("title");
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

  async goBack() {
    await this.page.goBack();
  }

  async goForward() {
    await this.page.goForward();
  }

  async reloadPage() {
    await this.page.reload();
  }

  async expectUrlContains(path: string) {
    await expect.soft(this.page).toHaveURL(new RegExp(`.*${path}`));
  }
}
