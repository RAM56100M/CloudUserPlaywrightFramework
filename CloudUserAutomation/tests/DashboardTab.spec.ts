import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { dashboardPage } from "../pages/dashboardPage";  



test.beforeEach(async ({ page }) => {
  const dashboard = new dashboardPage(page);
  await page.goto('https://portal.dev.biosero.com');
  await dashboard.doLogin('rammarshivane@biosero.com', 'Ram@7670'); // Login before each test
});

test('Verify user can Click on the Organization tab', async ({ page }) => {
  const dashboard = new dashboardPage(page);
    const organizationTab = page.locator("xpath=//div[contains(text(), 'Organization')]");
  await organizationTab.waitFor({ state: 'visible', timeout: 10000 });

  await expect(organizationTab).toHaveText('Organization');
});


test('Verify user can Click on the Marketplace tab', async ({ page, context }) => {
  const dashboard = new dashboardPage(page);
  await dashboard.waitFor(5);
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('xpath=//div[contains(text(),"Marketplace")]'), 
  ]);

  // Validate text on the new page
 // const text = await newPage.locator("//h2[contains(text(),'Marketplace')]").textContent();
  //expect(text?.trim()).toBe('Marketplace'); 

  // Optionally, close the new tab
  await newPage.close();
});
