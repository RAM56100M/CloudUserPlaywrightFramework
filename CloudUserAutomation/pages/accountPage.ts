import { BasePage } from "./basePage";
import { Page } from "@playwright/test";


export class accountPage extends BasePage{
    constructor(page: Page){
        super(page)
    }


    async clickOnAccountTab() {
        try {
          const tabAccount = this.page.locator("xpath=//div[contains(text(),'Account')]");
          await tabAccount.waitFor({ state: 'visible', timeout: 5000 });
          await tabAccount.click();
        } catch (error) {
          throw new Error(`Unable to click on Account Tab: ${error.message}`);
        }
      }
      
}