import { test, expect } from "@playwright/test";
import { dashBoardPage } from "../pages/dashboardPage";

test.beforeEach(async ({ page }) => {
  const dashboard = new dashBoardPage(page);
  await page.goto('https://portal.dev.biosero.com');
  await dashboard.doLogin('rammarshivane@biosero.com', 'Ram@7670'); // Login before each test
});

test.skip('Verify user can Click on the Organization tab', async ({ page }) => {
  const dashboard = new dashBoardPage(page);
  await dashboard.waitFor(5);
  const MarketplaceText = page.locator("xpath=//div[contains(text(), 'Marketplace')]");
  await dashboard.waitFor(5);
  await expect(MarketplaceText).toHaveText('Marketplace');
});

test.skip('Verify user can Click on the Marketplace tab', async ({ page, context }) => {
  const dashboard = new dashBoardPage(page);
  await dashboard.waitFor(5);
  // Wait for the new tab to open
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('xpath=//div[contains(text(),"Marketplace")]'), // Replace with the correct selector
  ]);

  // Wait for the new page to load
  await newPage.waitForLoadState();

  // Validate text on the new page
  const text = await newPage.locator("//h2[contains(text(),'Marketplace')]").textContent();
  expect(text?.trim()).toBe('Marketplace'); // Ensure whitespace is trimmed before comparison

  // Optionally, close the new tab
  await newPage.close();
});
