import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('complete the task');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.goto('https://demo.playwright.dev/todomvc/#/completed');
  console.log("Test Passed")
  await page.close();
});