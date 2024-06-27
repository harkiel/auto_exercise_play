import {type Locator, type Page } from '@playwright/test';

export class TestCases {

    label: {
        testCases: Locator

    }

    constructor(page: Page) {
        
        this.label = {
            testCases: page.locator('h2', {hasText: 'Test Cases'})
        }
    }
}