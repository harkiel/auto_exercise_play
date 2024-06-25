import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Shared } from '../pages/Shared';
import { AccountCreated } from '../pages/AccountCreated';
import { AccountDeleted } from '../pages/AccountDeleted';
import { SignupPage } from '../pages/SignupPage';
import { Navbar } from '../pages/Navbar';
import { UsersData } from '../test-data/LoginData';

test('Validate login page static text', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto(Shared.URL + '/login');
    await expect(loginPage.label.loginTitle).toHaveText('Login to your account');
    await expect(loginPage.label.signupTitle).toHaveText('New User Signup!');
    await expect(loginPage.label.or).toHaveText('OR');
    await expect(loginPage.label.subscriptionTitle).toHaveText('Subscription');
    await expect(loginPage.label.subscriptionDescription)
        .toHaveText('Get the most recent updates from our site and be updated your self...')
});

test('Test Case 2: Login User with correct email and password', async({page}) => {
    const shared = new Shared();
    const signupPage = new SignupPage(page);
    const loginPage = new LoginPage(page);
    const accountCreated = new AccountCreated(page);
    const accountDeleted = new AccountDeleted(page);
    const navbar = new Navbar(page);
    const userData = new UsersData();

    userData.users.newUser.email = shared.getUniqueEmail();

    // create the user
    await page.goto(Shared.URL);
    await navbar.button.signup.click();
    await loginPage.signup(userData.users.newUser);
    await signupPage.createAccount(userData.users.newUser);
    await accountCreated.button.continue.click();
    await navbar.button.logout.click();

    // login with created user
    await loginPage.login(userData.users.newUser)
    await expect(navbar.button.loggedInAs).toHaveText('Logged in as ' + userData.users.newUser.name);

    // delete user
    await navbar.button.deleteAccount.click();
    await expect(accountDeleted.label.accountDeleted).toHaveText('Account Deleted!');
})

test('Test Case 3: Login User with incorrect email and password', async({page}) => {
    const shared = new Shared();
    const loginPage = new LoginPage(page);
    const navbar = new Navbar(page);
    const userData = new UsersData();

    userData.users.newUser.email = shared.getUniqueEmail();
    userData.users.newUser.password = 'invalid_password';

    await page.goto(Shared.URL);
    await navbar.button.signup.click();
    await loginPage.login(userData.users.newUser)
    await expect(loginPage.label.invalidLogin).toBeVisible();
    await expect(loginPage.label.invalidLogin).toHaveText('Your email or password is incorrect!');
})


test('Test Case 4: Logout User', async({page}) => {
    const loginPage = new LoginPage(page);
    const navbar = new Navbar(page);
    const userData = new UsersData();

    await page.goto(Shared.URL);
    await navbar.button.signup.click();
    await loginPage.login(userData.users.existingUser)
    await expect(navbar.button.loggedInAs).toHaveText('Logged in as ' + userData.users.existingUser.name);
    await navbar.button.logout.click();
    await expect(loginPage.label.loginTitle).toHaveText('Login to your account');
})