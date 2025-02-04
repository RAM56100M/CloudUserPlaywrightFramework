import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.beforeEach(async ({ page }) =>{
  
  const login = new LoginPage(page);
  await page.goto('https://portal.dev.biosero.com');
  await login.doLogin('rammarshivane@biosero.com', 'Ram@7670'); // Login before each test
  
});

test.describe('Login', () => {

test('Verify user can login to the Admin portal using valid credentials', async ({ page }) => {
    await expect(page).toHaveTitle("User Portal");

});

test('Verify user can logout from the Admin Portal successfully', async ({ page }) => {
    const login = new LoginPage(page);
    await login.waitFor(5); 
    await login.doLogout(); 
 
});

});
