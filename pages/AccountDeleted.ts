import { expect, type Locator, type Page } from '@playwright/test';

export class AccountDeleted {

    button: {
        continue: Locator,
    }

    label: {
        accountDeleted: Locator
    }

    constructor(page: Page) {
        
        this.button = {
            continue: page.locator('a[data-qa=continue-button]')
        }

        this.label = {
            accountDeleted : page.locator('div.container h2[data-qa=account-deleted]')
        }
    }
}