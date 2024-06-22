import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { assert } from 'console';

test('Validate login page static text', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://automationexercise.com/login');
    await expect(loginPage.label.loginTitle).toHaveText('Login to your account');
    await expect(loginPage.label.signupTitle).toHaveText('New User Signup!');
    await expect(loginPage.label.or).toHaveText('OR');
    await expect(loginPage.label.subscriptionTitle).toHaveText('Subscription');
    await expect(loginPage.label.subscriptionDescription)
        .toHaveText('Get the most recent updates from our site and be updated your self...')
});