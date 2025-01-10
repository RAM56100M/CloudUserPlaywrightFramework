import { test, expect } from "@playwright/test";
import { dashBoardPage } from "../pages/dashboardPage";

// Perform login before each test
test.beforeEach(async ({ page }) => {
  const dashboard = new dashBoardPage(page);
  await page.goto('https://portal.dev.biosero.com');
  await dashboard.doLogin('rammarshivane@biosero.com', 'Ram@7670');
  console.log("Login successful");
});

// Test case to verify landing on the Dashboard tab
test('Verify user lands on the Dashboard tab', async ({ page }) => {
  const dashboard = new dashBoardPage(page);

  // Define the locator
  const Dashboardtxt = page.locator("//h2[contains(text(),'Dashboard')]");

  try {
    // Assert that the text is as expected
    await expect(Dashboardtxt).toHaveText('Dashboard');
    console.log("Successfully landed on the Dashboard tab");
  } catch (error) {
    console.error("Failed to land on the Dashboard tab", error);
  }
});

// Test case to verify clicking the Marketplace tab
test('Verify user can click on the Marketplace tab', async ({ page, context }) => {
  const dashboard = new dashBoardPage(page);

  // Optional: Add a wait if necessary for stability
  await dashboard.waitFor(5);

  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for a new page event
    dashboard.clickOnMarketplaceTab() // Click the Marketplace tab
  ]);

  // Switch to the new tab
  await newPage.bringToFront();

  // Define the locator for the Marketplace text in the new tab
  const MarketplaceText = newPage.locator("xpath=//div[contains(text(), 'Marketplace')]");

  // Wait for the element to be visible
 // await MarketplaceText.waitFor({ state: 'visible' });

  // Optional: Add additional stability waits
  //await dashboard.waitFor(5);

  try {
    // Assert that the text is as expected
    await expect(MarketplaceText).toHaveText('Marketplace');
    console.log("Successfully clicked on the Marketplace tab");
  } catch (error) {
    console.error("Failed to click on the Marketplace tab", error);
  }
});
