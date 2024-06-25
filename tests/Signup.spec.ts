import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
import { LoginPage } from '../pages/LoginPage';
import { Shared } from '../pages/Shared';
import { UsersData } from '../test-data/LoginData';
import { AccountCreated } from '../pages/AccountCreated';
import { Navbar } from '../pages/Navbar';
import { AccountDeleted } from '../pages/AccountDeleted';
import exp from 'constants';
import { log } from 'console';



test('Test Case 1: Register User', async({page}) => {
    const shared = new Shared();
    const signupPage = new SignupPage(page);
    const loginPage = new LoginPage(page);
    const accountCreated = new AccountCreated(page);
    const accountDeleted = new AccountDeleted(page);
    const navbar = new Navbar(page);
    const userData = new UsersData();

    userData.users.newUser.email = shared.getUniqueEmail();

    await page.goto(Shared.URL);
    await navbar.button.signup.click();
    await loginPage.signup(userData.users.newUser);
    await signupPage.createAccount(userData.users.newUser);
    await expect(accountCreated.label.accountCreated).toHaveText('Account Created!');
    await accountCreated.button.continue.click();
    await expect(navbar.button.loggedInAs).toHaveText('Logged in as ' + userData.users.newUser.name);
    await navbar.button.deleteAccount.click();
    await expect(accountDeleted.label.accountDeleted).toHaveText('Account Deleted!');
    await accountDeleted.button.continue.click();
    await expect (navbar.button.loggedInAs).not.toBeVisible();
    await expect (navbar.button.deleteAccount).not.toBeVisible();
});

test('Test Case 5: Register User with existing email', async({page}) => {
    const shared = new Shared();
    const signupPage = new SignupPage(page);
    const loginPage = new LoginPage(page);
    const accountCreated = new AccountCreated(page);
    const accountDeleted = new AccountDeleted(page);
    const navbar = new Navbar(page);
    const userData = new UsersData();

    userData.users.newUser.email = userData.users.existingUser.email;

    await page.goto(Shared.URL);
    await navbar.button.signup.click();
    await loginPage.signup(userData.users.newUser);
    await expect(loginPage.label.invalidSignup).toBeVisible();
    await expect(loginPage.label.invalidSignup).toHaveText('Email Address already exist!');
});



