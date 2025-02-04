import { BasePage } from "./basePage";
import { Page } from "@playwright/test";


export class invitationsPage extends BasePage{
    constructor(page: Page){
        super(page)
    }


    async clickOnInvitationsTab() {
        try {
          const tabInvitations = this.page.locator("xpath=//div[contains(text(),'Invitations')]");
          
          await tabInvitations.waitFor({ state: 'visible'});
      
          await tabInvitations.click();
          await this.page.waitForTimeout(5000);
        } catch (error) {
          throw new Error(`Unable to click on Invitations Tab: ${error.message}`);
        }
    }
      
}