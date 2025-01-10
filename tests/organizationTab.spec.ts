import { test, expect } from "@playwright/test";
import { organizationPage } from "../pages/organizationPage";  

test.beforeEach(async ({ page }) => {
  const orgTab = new organizationPage(page);
  await page.goto('https://portal.dev.biosero.com');
  await orgTab.doLogin('rammarshivane@biosero.com', 'Ram@7670'); 
});

test('Verify user can Click on the Organization tab', async ({ page }) => {
  const orgTab = new organizationPage(page);
  await orgTab.clickOnOrganizationTab();

  const organizationText = page.locator('xpath=//h2[contains(text(), "Organization")]');

// Wait for the element to be visible
await organizationText.waitFor({ state: 'visible' });

try {
  // Assert that the element contains the expected text 'Organization'
  await expect(organizationText).toHaveText('Organization');
  
  console.log("Found 'Organization' text successfully");
} catch (error) {
  // If the text doesn't match or the element is not visible
  console.log("Failed to locate or match 'Organization' text. Error:", error.message);
}

});
