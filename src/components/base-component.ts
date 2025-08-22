import { Page, Locator } from "@playwright/test";

export abstract class BaseComponent {
  private readonly page: Page;
  protected readonly root: Locator;

  constructor(page: Page, root: Locator) {
    this.page = page;
    this.root = root;
  }
}
