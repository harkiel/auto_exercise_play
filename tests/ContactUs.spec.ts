import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Shared } from '../pages/Shared';
import { Navbar } from '../pages/Navbar';
import { ContactUs } from '../pages/ContactUs';
import path from 'path';

test('Test Case 6: Contact Us Form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const navbar = new Navbar(page);
    const contactUs = new ContactUs(page);

    await page.goto(Shared.URL);
    await navbar.button.contactUs.click();
    await expect(contactUs.label.contactUs).toHaveText('Contact Us');
    await contactUs.input.name.fill('Fiorello');
    await contactUs.input.email.fill('fior@nogmail.com');
    await contactUs.input.subject.fill('Could not checkout');
    await contactUs.input.message.fill('There was a problem checking out please help.');
    //await contactUs.input.chooseFile.setInputFiles(path.join(__dirname, '../test-data/documents/contact-us/evidence_of_the_issue.txt'));
    await page.waitForTimeout(3000);
    await contactUs.button.submit.click({ position: { x: 3, y: 3 } });
    await page.waitForTimeout(3000);
    page.on('dialog', dialog => dialog.accept());

    await page.waitForTimeout(3000);
    await expect(contactUs.label.alertSuccess).toBeVisible();
    await expect(contactUs.label.alertSuccess)
        .toHaveText('Success! Your details have been submitted successfully.');
    await contactUs.button.home.click();
    // TODO: add chech here once home page is built
});

