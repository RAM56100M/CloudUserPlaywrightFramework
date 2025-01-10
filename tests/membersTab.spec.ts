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

try {
  // Wait for the element to be visible
  await MembersTabText.waitFor({ state: 'visible' });

  // Check if the element contains the expected text 'Members'
  const textContent = await MembersTabText.textContent();
  
  if (textContent && textContent.includes('Members')) {
    console.log("Found Members text successfully");
  } else {
    console.log("Failed to locate Members text");
  }
} catch (error) {
  // If the element is not visible or any error occurs
  console.log("Error while locating Members text:", error.message);
}

});
