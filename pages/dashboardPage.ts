import { BasePage } from "./basePage";
import { Page } from "@playwright/test";


export class dashBoardPage extends BasePage{
    constructor(page: Page){
        super(page)
    }

    async clickOnDashboardTab() {
        try {
          const tabDashboard = this.page.locator('xpath=//div[contains(text(),"Dashboard")]');
          
          // Wait for the element to be visible and ready for interaction
          await tabDashboard.waitFor({ state: 'visible', timeout: 5000 });
      
          // Click on the tab if it is visible
          await tabDashboard.click();
        } catch (error) {
          throw new Error(`Unable to click on Dashboard Tab: ${error.message}`);
        }
      }

      async clickOnMarketplaceTab() {
        try {
          const tabMarketplace = this.page.locator("xpath=//div[contains(text(),'Marketplace')]");
          
          await tabMarketplace.waitFor({ state: 'visible', timeout: 5000 });
      
          // Click on the tab if it is visible
          await tabMarketplace.click();
        } catch (error) {
          throw new Error(`Unable to click on Marketplace Tab: ${error.message}`);
        }
      }

}