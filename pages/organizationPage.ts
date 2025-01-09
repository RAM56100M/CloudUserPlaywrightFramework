import { BasePage } from "./basePage";
import { Page } from "@playwright/test";


export class organizationPage extends BasePage{
    constructor(page: Page){
        super(page)
    }


    async clickOnOrganizationTab() {
        try {
          const tabOrganization = this.page.locator("xpath=//div[contains(text(),'Organization')]");
          
          // Wait for the element to be visible and ready for interaction
          await tabOrganization.waitFor({ state: 'visible', timeout: 5000 });
      
          // Click on the tab if it is visible
          await tabOrganization.click();
        } catch (error) {
          throw new Error(`Unable to click on Organization Tab: ${error.message}`);
        }
      }
      







}