import { Page } from "@playwright/test";
import { BaseComponent } from "./base-component";

export class RunInformationModal extends BaseComponent {
  public readonly title = this.root.getByText("Run information");
  public readonly name = this.root.locator('[data-name="entity-name"]');
  public readonly id = this.root.locator('[data-name="entity-id"]');
  public readonly state = this.root.locator('[data-name="entity-state"]');
  public readonly owner = this.root.locator('[data-name="entity-owned-by"]');
  public readonly created = this.root.locator('[data-name="entity-created"]');
  public readonly modified = this.root.locator(
    '[data-name="entity-completed"]',
  );
  public readonly description = this.root.locator(
    '[data-name="entity-description"]',
  );
  public readonly tags = this.root.locator('[data-name="entity-tags"]');
  public readonly groupTags = this.root.locator(
    '[data-name="entity-group-tags"]',
  );

  constructor(page: Page) {
    super(page, page.locator(".n-modal__card"));
  }
}
