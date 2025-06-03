import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: "http://127.0.0.1:5000",
    headless: true,
   launchOptions:{ 
    slowMo: 3000,}
  },
  
  testDir: 'tests',
  testMatch: ['**/*.tests.ts']
});