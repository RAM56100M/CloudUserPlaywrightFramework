import { BasePage } from "./basePage";
import { Page } from "@playwright/test";


export class membersPage extends BasePage{
    constructor(page: Page){
        super(page)
    }


    async clickOnMembersTab() {
        try {
          const tabMembers = this.page.locator("xpath=//div[contains(text(),'Members')]");
          
          await tabMembers.waitFor({ state: 'visible', timeout: 5000 });
      
          await tabMembers.click();
          await this.page.waitForTimeout(5000);
        } catch (error) {
          throw new Error(`Unable to click on Members Tab: ${error.message}`);
        }
    }
      
}