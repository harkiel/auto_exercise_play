import { test, expect } from '@playwright/test';
import { Navbar } from '../pages/Navbar';
import { Shared } from '../pages/Shared';
import { Products } from '../pages/Products';
import { Product, ProductData } from '../test-data/ProductData';

test('Test Case 8: Verify All Products and product detail page', async ({ page }) => {
    const products = new Products(page);
    const navbar = new Navbar(page);
    const productData = new ProductData();
    
    await page.goto(Shared.URL);
    await navbar.button.products.click();
    await expect(products.overview.label.allProducts).toHaveText('All Products');
    await expect(products.overview.label.price())


});