import { BasePage } from "./basePage";
import { Page } from "@playwright/test";


export class subscriptionsPage extends BasePage{
    constructor(page: Page){
        super(page)
    }


    async clickOnSubscriptionsTab() {
        try {
          const tabSubscriptions = this.page.locator("xpath=//div[contains(text(),'Subscriptions')]");
          
          await tabSubscriptions.waitFor({ state: 'visible' });
      
          await tabSubscriptions.click();
          await this.page.waitForTimeout(5000);
        } catch (error) {
          throw new Error(`Unable to click on Subscriptions Tab: ${error.message}`);
        }
    }
      
}