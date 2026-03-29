class CartPage {
  constructor(page) {
    this.page = page;

    this.addToCartButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
    this.cartIcon = '.shopping_cart_link';
    this.cartBadge = '.shopping_cart_badge';
    this.productName = '.inventory_item_name';
  }

  async addProductToCart() {
    await this.page.waitForSelector(this.addToCartButton);  
    await this.page.click(this.addToCartButton);
  }

  async validateProductAdded() {
    await this.page.waitForSelector(this.cartBadge);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
    await this.page.waitForLoadState('networkidle');  
  }

  async validateProductInCart() {
    await this.page.waitForSelector(this.productName, { timeout: 10000 }); // más tiempo
  }
}

module.exports = CartPage;