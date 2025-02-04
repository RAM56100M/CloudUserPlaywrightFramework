import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { dashboardPage } from "../pages/dashboardPage";
import { organizationPage } from "../pages/organizationPage";
import { membersPage } from "../pages/membersPage";  

test.describe("Biosero Portal Tests", () => {
    let page; 
    let orgTab: organizationPage;   
    let dashboard: dashboardPage; 
    let Members: membersPage;
  

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext(); 
    page = await context.newPage(); 
    dashboard = new dashboardPage(page); 
    await page.goto('https://portal.dev.biosero.com');
    await dashboard.doLogin('rammarshivane@biosero.com', 'Ram@7670'); 
    console.log("Logged in successfully")
  });


  test.skip('Verify user can Click on the Organization tab', async ({ page }) => {
    const orgTab = new organizationPage(page);
  
    await orgTab.clickOnOrganizationTab();
    console.log("Successfully Clicked on Organization tab")
  //This will validate the text 'Organization' present on the Organization page
   // const organizationText = page.locator('xpath=//h2[contains(text(), "Organization")]');
  
    //await expect(organizationText).toHaveText('Organization');
  });
 
  test.skip('Verify user can Click on the Members tab', async ({ page }) => {
    const Members = new membersPage(page);
  
    await Members.clickOnMembersTab();
    //This will validate the text 'Members' present on the Members page

    const MembersTabText = page.locator("xpath=//h2[contains(text(),'Members')]");
  
    await expect(MembersTabText).toHaveText('Members');
  });
  
});
