import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./base-component";

export class RunInformationModal extends BaseComponent {
  public readonly title: Locator = this.root.getByText("Run information");
  public readonly name: Locator = this.root.locator(
    '[data-name="entity-name"]',
  );
  public readonly id: Locator = this.root.locator('[data-name="entity-id"]');
  public readonly state: Locator = this.root.locator(
    '[data-name="entity-state"]',
  );
  public readonly owner: Locator = this.root.locator(
    '[data-name="entity-owned-by"]',
  );
  public readonly created: Locator = this.root.locator(
    '[data-name="entity-created"]',
  );
  public readonly modified: Locator = this.root.locator(
    '[data-name="entity-completed"]',
  );
  public readonly description: Locator = this.root.locator(
    '[data-name="entity-description"]',
  );
  public readonly tags: Locator = this.root.locator(
    '[data-name="entity-tags"]',
  );
  public readonly groupTags: Locator = this.root.locator(
    '[data-name="entity-group-tags"]',
  );
  constructor(page: Page) {
    super(page, page.locator(".n-modal__card"));
  }
}
