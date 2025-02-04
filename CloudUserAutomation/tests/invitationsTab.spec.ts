import { test, expect } from "@playwright/test";
import { invitationsPage } from "../pages/invitationsPage";  

test.beforeEach(async ({ page }) => {
  const invitations = new invitationsPage(page);
  await page.goto('https://portal.dev.biosero.com');
  await invitations.doLogin('rammarshivane@biosero.com', 'Ram@7670');
});

test('Verify user can Click on the Invitations tab', async ({ page }) => {
    const invitations = new invitationsPage(page);
     await invitations.clickOnInvitationsTab();
     const InvitationsTabText = page.locator("xpath=//h2[contains(text(),'Invitations')]");
     await InvitationsTabText.waitFor({ state: 'visible'}); 
     
  await expect(InvitationsTabText).toHaveText('Invitations');
});
