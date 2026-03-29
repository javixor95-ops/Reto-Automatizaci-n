const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

setDefaultTimeout(20000); // ⏳ importante

let browser;
let page;
let loginPage;
let cartPage;
let checkoutPage;

Given('el usuario está en la página de login', async function () {
  browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });

  page = await browser.newPage();

  loginPage = new LoginPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page); // 🔥 nuevo

  await loginPage.goTo();
});

When('ingresa usuario y contraseña válidos', async function () {
  await loginPage.login('standard_user', 'secret_sauce');
});

When('agrega un producto al carrito', async function () {
  await cartPage.addProductToCart();
  await cartPage.validateProductAdded();
  await cartPage.goToCart();
});

When('completa el checkout', async function () {
  await checkoutPage.startCheckout();
  await checkoutPage.fillInformation('Javier Requejo', 'Nuevo QE de Encora', '12345');
  await checkoutPage.finishPurchase();
});

Then('debería ver confirmación de compra', async function () {
  await checkoutPage.validatePurchase();

  await page.waitForTimeout(5000);
  await browser.close();
});