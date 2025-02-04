import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 2, // ✅ Always allow retries (for Allure trends)
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html'],
    ['dot'],
    ['allure-playwright'],
    ['json', { outputFile: 'test-results.json' }],
  ],
  use: {
    baseURL: 'https://portal.dev.biosero.com',
    trace: 'on-first-retry',
    navigationTimeout: 20000,
    actionTimeout: 5000,
    video: 'on',
    headless: true,
  },

  projects: [
    {
      name: 'adminPortal',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://portal.dev.biosero.com',
        navigationTimeout: 20000,
        headless: true,
      },
    },
  ],
});
