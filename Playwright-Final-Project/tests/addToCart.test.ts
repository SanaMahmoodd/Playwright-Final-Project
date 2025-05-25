import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Cart Feature', () => {
  test('should add item to cart successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);

    await inventoryPage.addItemToCart();
    await inventoryPage.goToCart();

    const cartItem = page.locator('.cart_item');
    await expect(cartItem).toBeVisible();
  });
});