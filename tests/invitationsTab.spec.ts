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

try {
  // Wait for the element to be visible
  await InvitationsTabText.waitFor({ state: 'visible' });

  // Check if the element has the expected text
  const hasText = await InvitationsTabText.textContent() === 'Invitations';

  if (hasText) {
    console.log("Clicked on Invitations successfully");
  } else {
    console.log("Invitations text not found");
  }
} catch (error) {
  console.error("Error while checking Invitations tab:", error.message);
}

});
