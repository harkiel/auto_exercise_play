import {type Locator, type Page } from '@playwright/test';

export class Navbar {

    button: {
        loggedInAs: Locator
        ,deleteAccount: Locator
        ,signup: Locator
        ,logout: Locator
        ,contactUs: Locator
        ,testCases: Locator
    }

    constructor(page: Page) {
        
        this.button = {
            loggedInAs: page.locator('ul.navbar-nav > li > a:has(i.fa-user)')
            ,deleteAccount: page.locator('ul.navbar-nav > li > a:has(i.fa-trash-o)')
            ,signup: page.locator('ul.navbar-nav > li > a:has(i.fa-lock)')
            ,logout: page.locator('ul.navbar-nav > li > a:has(i.fa-lock)')
            ,contactUs: page.locator('a[href="/contact_us"]')
            ,testCases: page.locator('ul.navbar-nav > li > a[href="/test_cases"]:has(i.fa-list)')
        }
    }
}