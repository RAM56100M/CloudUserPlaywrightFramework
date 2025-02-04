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
  await expect(organizationText).toHaveText('Organization');
});
