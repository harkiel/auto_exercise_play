import { test, expect } from '@playwright/test';
import { Portal } from '../pages/Portal';
import { TIMEOUT } from 'dns';

test('Test Case 7: Verify Test Cases Page', async ({ page }) => {
    test.setTimeout(60000);

    const portal = new Portal(page);
    await page.goto('https://portal-dev.dashsolutions.com/#/login');
    await portal.input.username.fill('Janiel_dev');
    await portal.input.password.fill('handsomeUnicorn78&*');
    await expect(portal.input.captcha).toBeVisible({timeout: 20000});
    await page.waitForTimeout(6000);
    await portal.input.captcha.click();
    await page.waitForTimeout(6000);
    await portal.button.login.click();
    await expect(page.locator('#addNewCustomer')).toBeVisible({timeout: 20000});
    
});