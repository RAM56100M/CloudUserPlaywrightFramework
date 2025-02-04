import { BasePage } from "./basePage";
import { Page } from "@playwright/test";


export class marketPlace extends BasePage{
    constructor(page: Page){
        super(page)
    }


    async clickMarketPlaceTab() {
        try {
          const tabMarketplace = this.page.locator("xpath=//div[contains(text(),'Marketplace')]");
          
          await tabMarketplace.waitFor({ state: 'visible', timeout: 5000 });
      
          await tabMarketplace.click();
        //await this.page.waitForTimeout(100000);
        } catch (error) {
          throw new Error(`Unable to click on Marketplace Tab: ${error.message}`);
        }
    }
      
}