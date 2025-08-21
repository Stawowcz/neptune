import type { Page } from "@playwright/test";
import { RunInformationModal } from "@components/run-information-component";

export const componentsFixture = {
  runInformationModal: async (
    { page }: { page: Page },
    use: (modal: RunInformationModal) => Promise<void>,
  ) => {
    await use(new RunInformationModal(page));
  },
};
