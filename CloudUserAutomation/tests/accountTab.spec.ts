import { test, expect } from "@playwright/test";
import { accountPage } from "../pages/accountPage";  

test.beforeEach(async ({ page }) => {
  const Account = new accountPage(page);
  await page.goto('https://portal.dev.biosero.com');
  await Account.doLogin('rammarshivane@biosero.com', 'Ram@7670');
});

test('Verify user can Click on the Account tab', async ({ page }) => {
  const Account1 = new accountPage(page);

  await Account1.clickOnAccountTab
    console.log("Clicked on Account tab")
  const MembersTabText = page.locator("xpath=//h2[contains(text(),'Account')]");
  await page.waitForTimeout(5000);

   //await expect(MembersTabText).toHaveText('Account');

});
