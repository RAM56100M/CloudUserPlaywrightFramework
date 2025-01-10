import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

// Initialize and handle common setup before each test
test.beforeEach(async ({ page }) => {
  try {
    await page.goto('https://portal.dev.biosero.com');
  } catch (error) {
    console.log(`Error during page initialization: ${error}`);
  }
});

test.describe('Login Tests', () => {

  test('Verify user can log in to the Admin portal using valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    // Perform login
    await login.doLogin('rammarshivane@biosero.com', 'Ram@7670');
    // Verify the page title
    const title = await page.title();
    console.log('Page Title:', title);
    await expect(page).toHaveTitle("User Portal");
  });

  test('Verify user cannot log in to the Admin portal using an invalid password', async ({ page }) => {
    const login = new LoginPage(page);
    // Attempt login with an invalid password
    const message = await login.doLogin('rammarshivane@biosero.com', 'InvalidPwd');
    console.log("Login failed because:", message);
    // expect(message).toEqual("Expected error message here");
  });

  test('Verify user cannot log in to the Admin portal using an invalid email', async ({ page }) => {
    const login = new LoginPage(page);
    const message = await login.doLogin('rammarshivane1@biosero.com', 'Ram@7670');
    console.log("Login failed because:", message);
    // expect(message).toEqual("Expected error message here");
  });

  test('Verify user can see the Dashboard on successful login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.doLogin('rammarshivane@biosero.com', 'Ram@7670');
    const isDashboardVisible = await login.isDashboardVisible();

    if (isDashboardVisible) {
      console.log("Successfully landed on the dashboard");
    } else {
      throw new Error("Dashboard is not visible");
    }
  });

  test('Verify user can log out of the Admin portal successfully', async ({ page }) => {
    const login = new LoginPage(page);
    await login.doLogin('rammarshivane@biosero.com', 'Ram@7670');

    await login.waitFor(3);
    await login.doLogout();
    console.log("Logout successful");
  });

});
