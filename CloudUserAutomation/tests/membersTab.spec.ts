import { test, expect } from "@playwright/test";
import { membersPage } from "../pages/membersPage";  

test.beforeEach(async ({ page }) => {
  const Members = new membersPage(page);
  await page.goto('https://portal.dev.biosero.com');
  await Members.doLogin('rammarshivane@biosero.com', 'Ram@7670');
});

test('Verify user can Click on the Members tab', async ({ page }) => {
  const Members = new membersPage(page);

  await Members.clickOnMembersTab();

  const MembersTabText = page.locator("xpath=//h2[contains(text(),'Members')]");

  await expect(MembersTabText).toHaveText('Members');
});
