class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.checkoutButton = '#checkout';
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  async startCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async fillInformation(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  async finishPurchase() {
    await this.page.click(this.finishButton);
  }

  async validatePurchase() {
    await this.page.waitForSelector(this.successMessage);
  }
}

module.exports = CheckoutPage;