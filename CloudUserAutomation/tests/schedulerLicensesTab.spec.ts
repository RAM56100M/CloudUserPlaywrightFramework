import { test, expect } from "@playwright/test";
import { schedulerLicenses } from "../pages/schedulerLicensesPage";

test.beforeEach(async ({ page }) => {
  const orgTab = new schedulerLicenses(page);
  await page.goto('https://portal.dev.biosero.com');
  await orgTab.doLogin('rammarshivane@biosero.com', 'Ram@7670'); 
});

test('Verify user can Click on the Scheduler License tab', async ({ page }) => {
  const scLicense = new schedulerLicenses(page);
  await scLicense.clickOnSchedulerLicensesTab();
  const scLicenseText = page.locator("xpath=//h2[contains(text(),'Scheduler Licenses')]");
  await expect(scLicenseText).toHaveText('Scheduler Licenses');
});
