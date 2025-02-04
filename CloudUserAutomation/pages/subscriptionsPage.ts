import { BasePage } from "./basePage";
import { Page } from "@playwright/test";


export class subscriptionsPage extends BasePage{
    constructor(page: Page){
        super(page)
    }


    async clickOnSubscriptionTab() {
        try {
          const tabSubscriptions = this.page.locator("xpath=//div[contains(text(),'Subscription')]");
          await tabSubscriptions.waitFor({ state: 'visible', timeout: 15000 });
          await tabSubscriptions.click();
        } catch (error) {
          throw new Error(`Unable to click on Subscriptions Tab: ${error.message}`);
        }
      }

      async totalSubscriptions() {
        try {
            const totalSubscription = this.page.locator("xpath=//button[contains(text(),'All')]");

            await totalSubscription.waitFor({ state: 'visible', timeout: 9000 });
          await totalSubscription.click();
        } catch (error) {
          throw new Error(`Unable to locate on All (Subscriptions) Option: ${error.message}`);
        }
      }
      







}