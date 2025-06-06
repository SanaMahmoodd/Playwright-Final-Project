import { Page } from '@playwright/test';

export class InventoryPage {
  private addToCartButton = '#add-to-cart-sauce-labs-backpack';
  private cartIcon = '.shopping_cart_link';
  private removeItem='#remove-sauce-labs-backpack';

  constructor(private page: Page) {}

  async addItemToCart() {
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

async removeItemFromCart(){
  await this.page.click(this.removeItem);
}



}