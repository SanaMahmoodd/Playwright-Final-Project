import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Checkout Feature', () => {
  test('should complete checkout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);

    await inventoryPage.addItemToCart();
    await inventoryPage.goToCart();

    await checkoutPage.clickCheckoutButton();
    await checkoutPage.fillUserInfo('Hebah', 'Ahmad', '00970');
    await checkoutPage.finishCheckout();

    const confirmation = await checkoutPage.isOrderComplete();
    await expect(confirmation).toHaveText('Thank you for your order!');
  });
});
