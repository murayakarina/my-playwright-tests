import  { test, chromium } from '@playwright/test';

test("Login test demo", async () => {

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("/");
await page.fill("//input[@name='username']", "bkarina@ona.io");
await page.fill("//input[@name='password']", "Akuko@");
await page.click("//button[@type='submit']");
await page.isVisible ("//div[@class='welcome-container']");
});