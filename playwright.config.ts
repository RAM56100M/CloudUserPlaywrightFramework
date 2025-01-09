
import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';
require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 3 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'], // List reporter for console output
    ['html'], // HTML report
    ['dot'], // Default reporter
    ['allure-playwright'], // Allure reporter
    ['json', { outputFile: 'test-results.json' }], // JSON output

  ],
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'https://portal.dev.biosero.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    navigationTimeout:10000,
    video: 'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'adminPortal',
      use: { ...devices['Desktop Chrome'],
        baseURL: 'https://portal.dev.biosero.com',
        navigationTimeout:10000
       },
    },
   /* {
      name: 'userPortal',
      use: { ...devices['Desktop Chrome'],
        baseURL: 'https://portal.dev.biosero.com',
        navigationTimeout:10000
    },
  },
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'],
      baseURL: 'https://portal.dev.biosero.com',
      navigationTimeout:10000
  },
},
{
  name: 'firefox',
  use: { ...devices['Desktop Firefox'],
    baseURL: 'https://portal.dev.biosero.com',
    navigationTimeout:10000
},
},
    /* Uncomment to include WebKit if needed
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
