import { test, expect } from "@playwright/test";
import { marketPlace } from "../pages/marketPlacePage";  

test.beforeEach(async ({ page }) => {
  const mplace = new marketPlace(page);  // Declare `mplace` here
  await page.goto('https://portal.dev.biosero.com');
  await mplace.doLogin('rammarshivane@biosero.com', 'Ram@7670');
});

test('Verify user can Click on the Marketplace tab', async ({ page }) => {
  test.setTimeout(60000);  // Set timeout to 60 seconds (60,000ms)
  const mplace = new marketPlace(page);  // Declare `mplace` inside test
  await mplace.clickMarketPlaceTab();
  await page.waitForLoadState('networkidle'); 
  console.log("Clicked on marketplace tab successfully")
 // const mplaceText = page.locator("//h2[contains(text(),'Marketplace')]");
  //await mplaceText.waitFor({ state: 'visible', timeout: 10000 });

  // await expect(mplaceText).toHaveText('Marketplace');
});
