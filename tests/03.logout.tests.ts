import {test, expect} from '@playwright/test'
import {login} from '../utils/login';


test.describe('Logout', () =>{
    test.beforeEach(async({page})=>{
        await login(page);
    })

    test('user can successfully logout', async({page})=>{
        await page.click("body > div > form:nth-child(3) > button");
        await expect(page.locator("body > div.logo-title")).toBeVisible();
    })
})