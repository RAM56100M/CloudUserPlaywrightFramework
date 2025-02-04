import { BasePage } from "./basePage";
import { Page } from "@playwright/test";


export class schedulerLicenses extends BasePage{
    constructor(page: Page){
        super(page)
    }


    async clickOnSchedulerLicensesTab() {
        try {
          const tabScLicenses = this.page.locator("xpath=//div[contains(text(),'Scheduler Licenses')]");
          
          await tabScLicenses.waitFor({ state: 'visible', timeout: 5000 });
      
          await tabScLicenses.click();
          console.log("Clicked on Scheduler Licenses tab successfully")
          await this.page.waitForTimeout(5000);
        } catch (error) {
          throw new Error(`Unable to click on Scheduler Licenses Tab: ${error.message}`);
        }
    }
      
}