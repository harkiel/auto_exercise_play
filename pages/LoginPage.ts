import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {

    input: {
        loginEmail: Locator
        ,loginPassword: Locator
        ,signUpName: Locator
        ,signUpEmail: Locator
        ,subscription: Locator
    }

    button: {
        login: Locator,
        signup: Locator,
        subscribe: Locator
    }

    label: {
        loginTitle: Locator
        ,signupTitle: Locator
        ,or: Locator
        ,subscriptionTitle: Locator
        ,subscriptionDescription: Locator
    }

    constructor(page: Page) {
        this.input = {
            loginEmail: page.locator('input[data-qa=login-email]')
            ,loginPassword: page.locator('input[data-qa=login-password]')
            ,signUpName: page.locator('input[data-qa=signup-name]')
            ,signUpEmail: page.locator('input[data-qa=signup-email]')
            ,subscription: page.locator('input#susbscribe_email')
        }
        
        this.button = {
            login: page.locator('button[data-qa=login-button]')
            ,signup: page.locator('button[data-qa=signup-button]')
            ,subscribe: page.locator('button#subscribe')
        }

        this.label = {
            loginTitle : page.locator('div.login-form > h2')
            ,signupTitle : page.locator('div.signup-form > h2')
            ,or : page.locator('h2.or')
            ,subscriptionTitle : page.locator('div.single-widget > h2')
            ,subscriptionDescription : page.locator('form.searchform > p')
        }
    }

    async fillLogin(credentials: {email: string, password: string}) {
        await this.input.loginEmail.fill(credentials.email);
        await this.input.loginPassword.fill(credentials.password);
    }

    async fillSignup(userInfo: {name: string, email: string}) {
        await this.input.signUpName.fill(userInfo.name);
        await this.input.signUpEmail.fill(userInfo.email);
    }

    async login(credentials: {email: string, password: string}) {
        await this.fillLogin(credentials);
        await this.button.login.click();
    }

    async signup(userInfo: {name: string, email: string}) {
        await this.fillSignup(userInfo);
        await this.button.signup.click();
    }
}