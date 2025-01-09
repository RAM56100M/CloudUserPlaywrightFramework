import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async doLogin(username: string, password: string): Promise<string | null> {
    let errorMessage: string | null = null;

    try {
      await this.page.locator("input#signInName").fill(username);
      await this.waitFor(1);

      await this.page.locator("input#password").fill(password);
      await this.waitFor(1);
      await this.page.getByRole('button', {name: 'Sign in'}).click();
      await this.waitFor(2);

// Check if there is an error message visible
const isErrorVisible = await this.page.isVisible('div.error.pageLevel');

if (isErrorVisible) {
  // Retrieve and log the error message
  errorMessage = await this.page.locator('div.error.pageLevel').textContent();
  console.log('Login Failed. Error Message:', errorMessage?.trim() || 'Unknown Error');
} else {
  // If no error, assume login is successful
  console.log('Login Successful');
}

return errorMessage; // Return error message or null if successful
} catch (error) {
console.log(`An error occurred while trying to login: ${error}`);
throw new Error('Failed to Login');
}
}

async isDashboardVisible() : Promise<boolean>{
    let flagDashboard: boolean = false

    try{
        const dashboardText= this.page.getByRole('heading',{name: 'Dashboard'})
        if(dashboardText){
            await dashboardText.isVisible()
            flagDashboard=true
        }
    }
     catch(error){

            throw new Error('Dashboard is not visible')

        }
        return flagDashboard
    }

  async doLogout(): Promise<void> {
    try {
      await this.clickUserDetailsAccount();
      await this.waitFor(3);
      await this.clickSignOut();
    } catch (error) {
      throw new Error(`Unable to do Logout: ${error}`);

    }
  }
}

