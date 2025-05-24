import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import * as dotenv from 'dotenv';
const { chromium } = require('playwright');
const { firefox } = require('playwright');

dotenv.config();


test.describe('Remove Feature', () => {  // this for chrome and edge
  test('should Remove items From Cart using edge', async ({ page }) => {
      const browser = await chromium.launch({ headless: false }); 

    page = await browser.newPage();
    const inventoryPage = new InventoryPage(page);
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);

    await inventoryPage.addItemToCart();
    await inventoryPage.goToCart();

    await inventoryPage.removeItemFromCart();
  });
});




test.describe('Remove Feature', () => { // test for firefox
  test('should Remove items From Cart using firefox', async ({ page }) => {
      const browser = await firefox.launch({ headless: false });

      
    page = await browser.newPage();
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);

    await inventoryPage.addItemToCart();
    await inventoryPage.goToCart();

    await inventoryPage.removeItemFromCart();
  });
});
