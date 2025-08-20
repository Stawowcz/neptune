# TEST_PLAN.md  

# Test Plan for Neptune Attributes  

This document describes **26 test cases** divided into logical categories.  
Each test case includes: **ID, Priority, Description, and Rationale**.  

---

## Full Regression Suite  

### Navigation  

- **T1 (High)** – Verify that the main list expands correctly when entering the main tab and that folders have correct icons.  
  - **Rationale:** Core navigation feature. If broken, users cannot explore data at all → critical.  

- **T2 (High)** – Verify that subfolders/files expand correctly when entering a folder.  
  - **Rationale:** Essential navigation. Without it, attributes are inaccessible → high risk.  

- **T3 (Medium)** – Verify that back arrow is visible when navigating into nested folders.  
  - **Rationale:** Important for usability, but not blocking since breadcrumbs provide an alternative.  

- **T4 (Low)** – Verify that back arrow is disabled when in the root folder.  
  - **Rationale:** UX detail. Low impact if incorrect, since functionality is not blocked.  

- **T5 (Medium)** – Verify that breadcrumb works correctly and is fully navigable.  
  - **Rationale:** Provides an alternative navigation method. Medium because it improves usability but does not block.  

- **T6 (Medium)** – Verify that we can navigate back using the back arrow.  
  - **Rationale:** Important for intuitive navigation. Medium priority since breadcrumbs still allow navigation.  

---

### Attributes & Preview  

- **T7 (High)** – Verify that each table has both **Name** and **Preview** columns.  
  - **Rationale:** Mandatory for correct data display. Without it, data is unreadable.  

- **T8 (Medium)** – Verify that each data type has a proper icon.  
  - **Rationale:** Supports quick data recognition. Medium priority since it improves UX but is not critical.  

- **T9 (High)** – Verify that data loads correctly into the preview panel (e.g., file preview).  
  - **Rationale:** Core functionality. If broken, previewing data is impossible.  

- **T10 (High)** – Verify that data in the preview column matches data in the highlighted preview panel.  
  - **Rationale:** Data consistency is critical. Mismatches could lead to wrong decisions.  

- **T11 (Medium)** – Verify that the path shown in preview is correct.  
  - **Rationale:** Important for orientation but not blocking.  

- **T12 (Medium)** – Verify that empty preview shows appropriate text when no value is selected.  
  - **Rationale:** UX support. Medium because it avoids confusion but does not block usage.  

- **T13 (Medium)** – Verify that entering and leaving full screen in preview works correctly.  
  - **Rationale:** Useful for large datasets. Medium priority since it improves usability.  

---

### Search & Filter  

- **T14 (Medium)** – Verify that search is case-sensitive.  
  - **Rationale:** Ensures predictable results. Medium because incorrect behavior may cause confusion but not complete failure.  

- **T15 (Medium)** – Verify that we can search by path.  
  - **Rationale:** Important for advanced filtering. Medium since it improves precision but is not always required.  

- **T16 (High)** – Verify that we can search by a single word.  
  - **Rationale:** Fundamental search functionality. Critical for usability.  

- **T17 (High)** – Verify that when clicking the search field, a list with all elements appears.  
  - **Rationale:** Essential for discoverability. High priority since it helps users find data quickly.  

- **T18 (Low)** – Verify that the search field can be cleared by clicking the **X** button and that such a button is visible.  
  - **Rationale:** UX improvement. Low priority since text can be deleted manually.  

---

### Run Actions & Settings  

- **T19 (Medium)** – Verify that charts are downloadable.  
  - **Rationale:** Important for offline analysis but not blocking core functionality.  

- **T20 (Medium)** – Verify that settings near **Name** can be expanded and changed.  
  - **Rationale:** Supports customization. Medium because it affects flexibility but not critical workflows.  

- **T21 (Low)** – Verify that **Copy the run name** works properly.  
  - **Rationale:** Convenience feature. Low priority since manual copy is possible.  

- **T22 (Low)** – Verify that **Change run color** works properly.  
  - **Rationale:** Useful for visual clarity. Low since it improves recognition but not critical.  

- **T23 (High)** – Verify that **Run information** popup is displayed correctly.  
  - **Rationale:** Critical to access metadata. High because it directly impacts user understanding of runs.  

- **T24 (Medium)** – Verify that **Enter distraction free view** works correctly.  
  - **Rationale:** Improves user focus. Medium since it is supportive but not critical.  

- **T25 (Medium)** – Verify that **Leave distraction free view** works correctly.  
  - **Rationale:** Important to avoid being stuck in full screen. Medium because a workaround exists (refresh).  

- **T26 (High)** – Verify that **Show Inherited Metric** button toggles on and off correctly.  
  - **Rationale:** Impacts correctness of displayed data. High because incorrect state could mislead analysis.  

---

## Smoke Suite (Automated High Priority Tests)  

The following **High priority test cases** are also included in the **Smoke Suite** and will be automated:  

- **T1** – Main list expands correctly with correct folder icons.  
- **T2** – Subfolders/files expand correctly.  
- **T7** – Each table has both Name and Preview columns.  
- **T9** – Data loads correctly into the preview panel.  
- **T10** – Data in the preview column matches data in the highlighted preview panel.  
- **T16** – Search by single word works correctly.  
- **T17** – Search field click displays a list with all elements.  
- **T23** – Run information popup is displayed correctly.  
- **T26** – Show Inherited Metric button toggles correctly.  

**Rationale for Smoke Suite:**  
These scenarios cover the **core critical flows**: navigation, preview, search, and key run actions. Automating them ensures that the most essential functionality is always validated quickly, providing fast feedback in CI/CD pipelines.  

---
