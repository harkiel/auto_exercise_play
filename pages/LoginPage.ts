import { expect, type Locator, type Page } from '@playwright/test';
import { User } from '../test-data/LoginData';

export class LoginPage {

    input: {
        loginEmail: Locator
        , loginPassword: Locator
        , signUpName: Locator
        , signUpEmail: Locator
    }

    button: {
        login: Locator,
        signup: Locator,
        subscribe: Locator
    }

    label: {
        loginTitle: Locator
        , signupTitle: Locator
        , or: Locator
        , subscriptionTitle: Locator
        , subscriptionDescription: Locator
        , invalidLogin: Locator
        , invalidSignup: Locator
    }

    constructor(page: Page) {
        this.input = {
            loginEmail: page.locator('input[data-qa=login-email]')
            , loginPassword: page.locator('input[data-qa=login-password]')
            , signUpName: page.locator('input[data-qa=signup-name]')
            , signUpEmail: page.locator('input[data-qa=signup-email]')
        }

        this.button = {
            login: page.locator('button[data-qa=login-button]')
            , signup: page.locator('button[data-qa=signup-button]')
            , subscribe: page.locator('button#subscribe')
        }

        this.label = {
            loginTitle: page.locator('div.login-form > h2')
            , signupTitle: page.locator('div.signup-form > h2')
            , or: page.locator('h2.or')
            , subscriptionTitle: page.locator('div.single-widget > h2')
            , subscriptionDescription: page.locator('form.searchform > p')
            , invalidLogin: page.locator('div.login-form > form > p')
            , invalidSignup: page.locator('div.signup-form > form > p')
        }
    }

    async fillLogin(user: User) {
        await this.input.loginEmail.fill(user.email);
        await this.input.loginPassword.fill(user.password);
    }

    async fillSignup(user: User) {
        await this.input.signUpName.fill(user.name);
        await this.input.signUpEmail.fill(user.email);
    }

    async login(user: User) {
        await this.fillLogin(user);
        await this.button.login.click();
    }

    async signup(user: User) {
        await this.fillSignup(user);
        await this.button.signup.click();
    }
}