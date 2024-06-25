import { LaunchOptions, expect, type Locator, type Page } from '@playwright/test';
import { User } from '../test-data/LoginData';
import { Shared } from './Shared';

export class SignupPage {

    input: {
        titleMr: Locator
        ,titleMrs: Locator
        ,name: Locator
        ,email: Locator
        ,password: Locator
        ,birthDay: Locator
        ,birthMonth: Locator
        ,birthYear: Locator
        ,newsletter: Locator
        ,specialOffers: Locator
        ,firstName: Locator
        ,lastName: Locator
        ,company: Locator
        ,address: Locator
        ,address2: Locator
        ,country: Locator
        ,state: Locator
        ,city: Locator
        ,zipcode: Locator
        ,mobileNumber: Locator
    }

    button: {
        createAccount: Locator,
    }

    label: {
        accountTitle: Locator
        ,titleSex: Locator
        ,titleMr: Locator
        ,titleMrs: Locator
        ,name: Locator
        ,email: Locator
        ,password: Locator
        ,dateOfBirth: Locator
        ,newsletter: Locator
        ,specialOffers: Locator
        ,addressTitle: Locator
        ,firstName: Locator
        ,lastName: Locator
        ,company: Locator
        ,address: Locator
        ,address2: Locator
        ,country: Locator
        ,state: Locator
        ,city: Locator
        ,zipcode: Locator
        mobileNumber: Locator
    }

    constructor(page: Page) {
        this.input = {
            titleMr: page.locator('input#id_gender1')
            ,titleMrs: page.locator('input#id_gender2')
            ,name: page.locator('input#name')
            ,email: page.locator('input#email')
            ,password: page.locator('input#password')
            ,birthDay: page.locator('select#days')
            ,birthMonth: page.locator('select#months')
            ,birthYear: page.locator('select#years')
            ,newsletter: page.locator('input#newsletter')
            ,specialOffers: page.locator('input#optin')
            ,firstName: page.locator('input#first_name')
            ,lastName: page.locator('input#last_name')
            ,company: page.locator('input#company')
            ,address: page.locator('input#address1')
            ,address2: page.locator('input#address2')
            ,country: page.locator('select#country')
            ,state: page.locator('input#state')
            ,city: page.locator('input#city')
            ,zipcode: page.locator('input#zipcode')
            ,mobileNumber: page.locator('input#mobile_number')

        }
        
        this.button = {
            createAccount: page.locator('button[data-qa=create-account]')
        }

        this.label = {
            accountTitle: page.locator('div.login-form > h2')
            ,titleSex: page.locator('div.clearfix > label')
            ,titleMr: page.locator('label[for=id_gender1]')
            ,titleMrs: page.locator('label[for=id_gender2]')
            ,name: page.locator('label[for=name]')
            ,email: page.locator('label[for=email]')
            ,password: page.locator('label[for=password]')
            ,dateOfBirth: page.locator('')
            ,newsletter: page.locator('label[for=newsletter]')
            ,specialOffers: page.locator('label[for=optin]')
            ,addressTitle: page.locator('div.login-form > form > h2')
            ,firstName: page.locator('label[for=first_name]')
            ,lastName: page.locator('label[for=last_name]')
            ,company: page.locator('label[for=company]')
            ,address: page.locator('label[for=address1]')
            ,address2: page.locator('label[for=address2]')
            ,country: page.locator('label[for=country]')
            ,state: page.locator('label[for=state]')
            ,city: page.locator('p:nth-child(18) > label[for=city]')
            ,zipcode: page.locator('p:nth-child(19) > label[for=city]')
            ,mobileNumber: page.locator('label[for=mobile_number]')
        }
    }

    async fillSignUp(User: User) {
        if (User.titleMr == true) {
            await this.input.titleMr.check();
        }
        if (User.titleMrs == true) {
            await this.input.titleMrs.check();
        }

        await this.input.name.fill(User.name);
        await expect(this.input.email).toBeDisabled();
        await this.input.password.fill(User.password);
        await this.input.birthDay.selectOption(User.birthDay.toString());
        await this.input.birthMonth.selectOption(User.birthMonth.toString());
        await this.input.birthYear.selectOption(User.birthYear.toString());

        if(User.newsletter == true) {
            await this.input.newsletter.check();
        }
        if(User.specialOffers == true) {
            await this.input.specialOffers.check();
        }

        await this.input.firstName.fill(User.firstName);
        await this.input.lastName.fill(User.lastName);
        await this.input.company.fill(User.company);
        await this.input.address.fill(User.address);
        await this.input.address2.fill(User.address2);
        await this.input.country.selectOption(User.country);
        await this.input.state.fill(User.state);
        await this.input.city.fill(User.city);
        await this.input.zipcode.fill(User.zipcode);
        await this.input.mobileNumber.fill(User.mobileNumber);
    }

    async createAccount(user: User) {
        await this.fillSignUp(user);
        await this.button.createAccount.click();
    }

}