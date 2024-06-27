import { test, expect } from '@playwright/test';
import { Navbar } from '../pages/Navbar';
import { TestCases } from '../pages/TestCases';
import { Shared } from '../pages/Shared';

test('Test Case 7: Verify Test Cases Page', async ({ page }) => {
    const testCases = new TestCases(page);
    const navbar = new Navbar(page);
    
    await page.goto(Shared.URL);
    await navbar.button.testCases.click();
    await expect(testCases.label.testCases).toHaveText('Test Cases')
});