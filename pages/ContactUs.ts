import {type Locator, type Page } from '@playwright/test';

export class ContactUs {

    button: {
        submit: Locator
        home: Locator
    }

    label: {
        contactUs: Locator
        ,alertSuccess: Locator
    }

    input: {
        name: Locator
        ,email: Locator
        ,subject: Locator
        ,message: Locator
        chooseFile: Locator
    }

    constructor(page: Page) {
        
        this.button = {
            submit: page.locator('input[data-qa=submit-button]')
            ,home: page.locator('a.btn-success')
        }

        this.label = {
            contactUs: page.locator('div.bg > div.row h2.title')
            ,alertSuccess: page.locator('div.contact-form div.alert-success')

        }

        this.input = {
            name: page.locator('input[data-qa=name]')
            ,email: page.locator('input[data-qa=email]')
            ,subject: page.locator('input[data-qa=subject]')
            ,message: page.locator('textarea[data-qa=message]')
            ,chooseFile: page.locator('input[name=upload_file]')
        }
    }


}