import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
