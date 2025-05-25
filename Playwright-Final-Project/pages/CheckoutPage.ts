import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async clickCheckoutButton() {
    await this.page.click('#checkout');
  }

  async fillUserInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('#continue');
  }

  async finishCheckout() {
    await this.page.click('#finish');
  }

  async isOrderComplete() {
    return this.page.locator('.complete-header');
  }
}