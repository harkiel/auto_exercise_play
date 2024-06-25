import { expect, type Locator, type Page } from '@playwright/test';
import { User } from '../test-data/LoginData';
import { LoadHookContext } from 'module';

export class Navbar {

    button: {
        loggedInAs: Locator
        ,deleteAccount: Locator
        ,signup: Locator
        ,logout: Locator
    }

    constructor(page: Page) {
        
        this.button = {
            loggedInAs: page.locator('ul.navbar-nav > li > a:has(i.fa-user)')
            ,deleteAccount: page.locator('ul.navbar-nav > li > a:has(i.fa-trash-o)')
            ,signup: page.locator('ul.navbar-nav > li > a:has(i.fa-lock)')
            ,logout: page.locator('ul.navbar-nav > li > a:has(i.fa-lock)')
        }
    }
}