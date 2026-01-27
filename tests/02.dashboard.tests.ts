import {test, expect} from '@playwright/test';
import {login } from '../utils/login';



test.describe('Dashboard', () => {
    test.beforeEach(async ({ page }) => {
      await login(page); // Reuse the login helper
    });
    test ('user can choose a favourite team and reset selection',async ({page}) => {
      await page.fill ("//input[@id='firstName']", "Brian");
      await page.press("//input[@id='firstName']", 'Enter');
      const teamOption = page.locator("//option[@value='Napoli']");
      await teamOption.scrollIntoViewIfNeeded();
      await teamOption.click();
      await page.click("button[type='submit']");
      await page.waitForSelector('#badgeContainer', { state: 'visible' });
      await expect(page.locator("#badgeContainer")).toBeVisible();
      // await page.click("button[type='reset']");
      })
    test ('User can reset team selection',async ({page}) =>{
      await page.click("button[type='reset']");
    } )
    test ('User can toggle dark mode', async ({page}) => {
      await page.click("span[class='slider']");
    })
  });

