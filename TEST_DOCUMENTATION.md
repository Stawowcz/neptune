# Test Documentation for Neptune Attributes  

## Introduction  

This test plan focuses on validating the **Attributes tab in the single run view** of the Neptune application:  
[Single run view – LLM-Pretraining example](https://scale.neptune.ai/o/examples/org/LLM-Pretraining/runs/details?viewId=standard-view&detailsTab=attributes&runIdentificationKey=llm_train-v945&type=experiment&compare=uMlyIDUTmecveIHVma0eEB95Ei5xu8F_9qHOh0nynbtM)  

The goal is to ensure that users can reliably explore and interact with run metadata, including navigation through namespaces, previewing attribute values, searching and filtering, and performing essential run actions.  

The analysis was based on Neptune documentation:  
- [Runs](https://docs.neptune.ai/runs)  
- [Namespaces and attributes](https://docs.neptune.ai/namespaces_and_attributes)  
- [Attribute types](https://docs.neptune.ai/attribute_types) and the provided test environment.  
From this, we identified potential **risks** such as:  
- incorrect rendering of metadata structure (namespaces/attributes),  
- mismatched or missing preview values,  
- inconsistencies between attribute types and displayed data,  
- failures in search/filter functionality,  
- problems with key run actions (distraction free view).  

The test suite is divided into **Full Regression** and **Smoke Suite**:  
- **Full Regression** covers all identified scenarios, including functional and usability edge cases.  
- **Smoke Suite** focuses on the **most critical, high-priority paths**, automated to provide fast and reliable validation in CI/CD pipelines.  

---

This document describes **26 test cases** divided into logical categories.  
Each test case includes: **ID, Priority, Description, and Rationale**.

---

## Full Regression Suite

### Navigation

- **T1 (High)** – Verify that the main list expands correctly when entering the main tab and that folders have correct icons.
  - **Rationale:** Core navigation feature. If broken, users cannot explore data at all → critical.

- **T2 (High)** – Verify that subfolders/files expand correctly when entering a folder.
  - **Rationale:** Essential navigation. Without it, attributes are inaccessible → high risk.

- **T3 (Low)** – Verify that back arrow is disabled when in the root folder.
  - **Rationale:** UX detail. Low impact if incorrect, since functionality is not blocked.

- **T4 (Medium)** – Verify that breadcrumb works correctly and is fully navigable.
  - **Rationale:** Provides an alternative navigation method. Medium because it improves usability but does not block.

- **T5 (Medium)** – Verify that we can navigate back using the back arrow.
  - **Rationale:** Important for intuitive navigation. Medium priority since breadcrumbs still allow navigation.

---

### Attributes & Preview

- **T6 (High)** – Verify that each table has both **Name** and **Preview** columns.
  - **Rationale:** Mandatory for correct data display. Without it, data is unreadable.

- **T7 (Medium)** – Verify that each data type has a proper icon.
  - **Rationale:** Supports quick data recognition. Medium priority since it improves UX but is not critical.

- **T8 (High)** – Verify that data loads correctly into the preview panel (e.g., file preview).
  - **Rationale:** Core functionality. If broken, previewing data is impossible.

- **T9 (High)** – Verify that data in the preview column matches data in the highlighted preview panel.
  - **Rationale:** Data consistency is critical. Mismatches could lead to wrong decisions.

- **T10 (Medium)** – Verify that the path shown in preview is correct.
  - **Rationale:** Important for orientation but not blocking.

- **T11 (Medium)** – Verify that empty preview shows appropriate text when no value is selected.
  - **Rationale:** UX support. Medium because it avoids confusion but does not block usage.

- **T12 (Medium)** – Verify that entering and leaving full screen in preview works correctly.
  - **Rationale:** Useful for large datasets. Medium priority since it improves usability.

---

### Search & Filter

- **T13 (Medium)** – Verify that search is case-sensitive.
  - **Rationale:** Ensures predictable results. Medium because incorrect behavior may cause confusion but not complete failure.

- **T14 (Medium)** – Verify that we can search by path.
  - **Rationale:** Important for advanced filtering. Medium since it improves precision but is not always required.

- **T15 (High)** – Verify that we can search by a single word.
  - **Rationale:** Fundamental search functionality. Critical for usability.

- **T16 (High)** – Verify that when clicking the search field, a list with all elements appears.
  - **Rationale:** Essential for discoverability. High priority since it helps users find data quickly.

- **T17 (Low)** – Verify that the search field can be cleared by clicking the **X** button and that such a button is visible.
  - **Rationale:** UX improvement. Low priority since text can be deleted manually.

---

### Run Actions & Settings

- **T18 (Medium)** – Verify that charts are downloadable.
  - **Rationale:** Important for offline analysis but not blocking core functionality.

- **T19 (Medium)** – Verify that settings near **Name** can be expanded and changed.
  - **Rationale:** Supports customization. Medium because it affects flexibility but not critical workflows.

- **T20 (Low)** – Verify that **Copy the run name** works properly.
  - **Rationale:** Convenience feature. Low priority since manual copy is possible.

- **T21 (Medium)** – Verify that **Change run color** works properly.
  - **Rationale:** Useful for visual clarity. Low since it improves recognition but not critical.

- **T22 (High)** – Verify that **Run information** popup is displayed correctly.
  - **Rationale:** Critical to access metadata. High because it directly impacts user understanding of runs.

- **T23 (Medium)** – Verify that **Enter distraction free view** works correctly.
  - **Rationale:** Improves user focus. Medium since it is supportive but not critical.

- **T24 (High)** – Verify that **Leave distraction free view** works correctly.
  - **Rationale:** Important to avoid being stuck in full screen. High because it can block user workflow.

- **T25 (High)** – Verify that **Show Inherited Metric** button toggles on and off correctly.
  - **Rationale:** Impacts correctness of displayed data. High because incorrect state could mislead analysis.

---

### Attribute Types & Data Validation

- **T26 (High)** – Verify that attributes of different types (Float, Integer, String, Boolean, Datetime) are displayed correctly in the Attributes tab.
  - **Rationale:** Core correctness – wrong type rendering could mislead analysis.

- **T27 (High)** – Verify that series attributes (FloatSeries, StringSeries, FileSeries, HistogramSeries) display values consistently across steps or time.
  - **Rationale:** Essential for analyzing metrics and logs over time.

- **T28 (Medium)** – Verify handling of very long attribute names (close to 1024 bytes).
  - **Rationale:** Edge case from documentation; failure could break UI.

- **T29 (High)** – Verify behavior when attribute values exceed limits (e.g., long String > 1 MiB, StringSet > 1 MiB).
  - **Rationale:** Important edge case – system should gracefully handle or truncate, not crash.

---

## Smoke Suite (Automated High Priority Tests)

The following **High priority test cases** are also included in the **Smoke Suite** and will be automated:

- **T1 (High)** – Verify that the main list expands correctly when entering the main tab and that folders have correct icons.
- **T2 (High)** – Verify that subfolders/files expand correctly when entering a folder.
- **T4 (Medium)** – Verify that breadcrumb works correctly and is fully navigable.(added to smoke just to check at least on back navigation way)
- **T6 (High)** – Verify that each table has both **Name** and **Preview** columns.
- **T8 (High)** – Verify that data loads correctly into the preview panel (e.g., file preview).
- **T9 (High)** – Verify that data in the preview column matches data in the highlighted preview panel.
- **T15 (High)** – Verify that we can search by a single word.
- **T16 (High)** – Verify that when clicking the search field, a list with all elements appears.
- **T22 (High)** – Verify that **Run information** popup is displayed correctly.
- **T24 (High)** – Verify that **Leave distraction free view** works correctly.

**Rationale for Smoke Suite:**  
These scenarios cover the **core critical flows**: navigation, preview, search, and key run actions. Automating them ensures that the most essential functionality is always validated quickly, providing fast feedback in CI/CD pipelines.

---
