import { expect, type Locator, type Page } from '@playwright/test';

export class Portal {

    button: {
        login: Locator,
    }

    input: {
        username: Locator
        , password: Locator
        , captcha: Locator
    }

    constructor(page: Page) {
        
        this.button = {
            login: page.locator('#loginSubmit')
        }

        this.input = {
            username : page.locator('#email')
            , password : page.locator('#password')
            , captcha: page.frameLocator('iframe[title="reCAPTCHA"]').locator('span.recaptcha-checkbox')
        }
    }
}