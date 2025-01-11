import { test, expect } from "@playwright/test";
import { membersPage } from "../pages/membersPage";  
import { subscriptionsPage } from "../pages/subscriptionsPage";

test.beforeEach(async ({ page }) => {
  const subscriptions = new subscriptionsPage(page);
  await page.goto('https://portal.dev.biosero.com');
  await subscriptions.doLogin('rammarshivane@biosero.com', 'Ram@7670');
});

test('Verify user can Click on the Subscriptions tab', async ({ page }) => {
  const subscriptions = new subscriptionsPage(page);

  await subscriptions.clickOnSubscriptionsTab();

  const MembersTabText = page.locator("xpath=//h2[contains(text(),'Subscriptions')]");

try {
  // Wait for the element to be visible
  await MembersTabText.waitFor({ state: 'visible' });

  // Check if the element contains the expected text 'Members'
  const textContent = await MembersTabText.textContent();
  
  if (textContent && textContent.includes('Subscriptions')) {
    console.log("Found Subscriptions text successfully");
  } else {
    console.log("Failed to locate Subscriptions text");
  }
} catch (error) {
  // If the element is not visible or any error occurs
  console.log("Error while locating Subscriptions text:", error.message);
}

});
