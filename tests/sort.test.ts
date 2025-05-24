import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { SortPages } from '../pages/SortPage';

import * as dotenv from 'dotenv';
const { chromium } = require('playwright');
const { firefox } = require('playwright');

dotenv.config();


test.beforeEach( async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
} )



test.describe('Sort Items From A-Z', () => {  
  test('Should sort from A-Z', async ({ page }) => {

    const sort = new SortPages(page);
    await sort.sortItemsAtoZ();

  });
});

test.describe('Sort Items From Z-A', () => {  
  test('Should sort from Z-A', async ({ page }) => {

    const sort = new SortPages(page);
    await sort.sortItemsZtoA();

  });
});

test.describe('Sort Items From High to Low', () => {  
  test('Should sort from High to Low', async ({ page }) => {

    const sort = new SortPages(page);
    await sort.sortItemsHighToLow();

  });
});
test.describe('Sort Items From Low to High', () => {  
  test('Should sort from Low to High', async ({ page }) => {

    const sort = new SortPages(page);
    await sort.sortItemsLowToHigh();

  });
});