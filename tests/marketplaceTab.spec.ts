import { test, expect } from "@playwright/test";
import { marketPlace } from "../pages/marketPlacePage";  
 
let mplace: marketPlace;
 
test.beforeEach(async ({ page }) => {
  mplace = new marketPlace(page);
  await page.goto('https://portal.dev.biosero.com');
  await mplace.doLogin('rammarshivane@biosero.com', 'Ram@7670');
});
 
test('Verify user can Click on the Marketplace tab', async ({ page }) => {
  await mplace.clickonMarketPlaceTab();
  await page.waitForLoadState('networkidle');
 
  const mplaceText = page.locator("xpath=//h2[contains(text(),'Marketplace')]");
  await mplaceText.waitFor({ state: 'visible', timeout: 10000 });
 
  await expect(mplaceText).toHaveText('Marketplace');
});
 