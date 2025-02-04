import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bioserob2cdev.b2clogin.com/bioserob2cdev.onmicrosoft.com/b2c_1a_signup_signin/oauth2/v2.0/authorize?client_id=0b878f9b-e2c2-433b-9229-fd285f1ef02b&scope=https%3A%2F%2FBioseroB2CDev.onmicrosoft.com%2Fgraph-api%2FInvitations.ReadWrite%20https%3A%2F%2FBioseroB2CDev.onmicrosoft.com%2Fgraph-api%2FOrganizations.ReadWrite%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fportal.dev.biosero.com%2Fauthentication%2Flogin-callback&client-request-id=61ec2a0e-25ad-4e43-8202-d32350aabdc3&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.16.1&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=tvrL14zW7ytCsrVRhs1Bnv7KTrdoZRXfJVHKfvCRdnQ&code_challenge_method=S256&nonce=1b10cb43-0124-4064-95e7-e26d35b74634&state=eyJpZCI6ImVmYTQ4MThhLTRjNTYtNDMxYS1iZDRlLWU5YTlmZTcyYjRiMiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7COJiwA1NykMMp8nfWjKtirnwSkPlqUt3GuFXBhHr5DVU');
  await page.getByRole('textbox', { name: 'Sign in name' }).fill('rammarshivane@biosero.com');
  await page.getByRole('textbox', { name: 'Sign in name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Ram@7670');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout(5000); // Waits for 5 seconds

await page.goto('https://portal.dev.biosero.com/dashboard');
const dashboardLink = page.getByRole('link', { name: 'space_dashboard Dashboard' });

  // Wait for the element to be visible first
 dashboardLink.waitFor({ state: 'visible', timeout: 100000 });
  
  
  await dashboardLink.click();
  await page.getByRole('link', { name: 'corporate_fare Organization' }).click();
  await page.getByRole('link', { name: 'groups Members' }).click();
  await page.getByRole('link', { name: 'mail Invitations' }).click();  
  await page.getByRole('link', { name: 'list_alt Subscriptions' }).click();
  await page.getByRole('link', { name: 'encrypted Scheduler Licenses' }).click();
//const page1Promise = page.waitForEvent('popup');
//await page.getByRole('link', { name: 'deployed_code Marketplace' }).click();
//const page1 = await page1Promise;
//await page1.goto('https://marketplace.dev.biosero.com/marketplace');
//const softwareButton = page1.getByRole('button', { name: 'Software' });

//await softwareButton.waitFor({ state: 'visible', timeout: 10000});
  

/*  await softwareButton.click();
  

  await page1.getByRole('button', { name: 'Owned' }).click();
  await page1.getByRole('button', { name: 'Drivers' }).click();
  await page1.getByRole('button', { name: 'navigate_next' }).click();
  await page1.getByRole('button', { name: 'navigate_next' }).click();
  await page1.getByRole('button', { name: 'last_page' }).click();
  await page1.getByRole('button', { name: 'navigate_before' }).click();
  await page1.getByRole('button', { name: 'first_page' }).click();*/
  page.close();
});