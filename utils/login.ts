import { Page } from "@playwright/test";

export async function login(page: Page) {
    await page.goto('http://127.0.0.1:5000');
    await page.locator('//input[@name="username"]').fill ('bkarina@ona.io');
    await page.locator('//input[@name="password"]').fill('@Akuko');
    await page.click('button[type="submit"]');
  }
  
