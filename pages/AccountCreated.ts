import { expect, type Locator, type Page } from '@playwright/test';

export class AccountCreated {

    button: {
        continue: Locator,
    }

    label: {
        accountCreated: Locator
    }

    constructor(page: Page) {
        
        this.button = {
            continue: page.locator('a[data-qa=continue-button]')
        }

        this.label = {
            accountCreated : page.locator('div.container h2[data-qa=account-created]')
        }
    }
}