import{ test, expect } from "@playwright/test";
import { RegisterPage } from "./registerPage";
import { LoginPage } from "./loginPage";
import { DashboardPage } from "./dashboardPage";
import { CartPage } from "./cartPage";
import { CheckoutPage } from "./checkoutPage";



test("Register a new user with Date.now() and login",async ({ page}) => {
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    
    const timestamp = Date.now();

    const firstName = "Super";
    const lastName = "DiDa";
    
    const email = `doaam.pag+${timestamp}@gmail.com`;
    const phone = `1${String(timestamp).slice(-9)}`;

    const occupation = "Engineer";
    const gender = "Female";
    const password = "Pass12345";
    const confirmPassword = "Pass12345";

    const cardNumber = "5111111111111111";
    const expiryMonth = "09";
    const expiryYear = "28";
    const cvv = "123";
    const nameOnCard = "visa";
    const shippingName = "Dida";



    await registerPage.open();
    await registerPage.fillForm(
        firstName, 
        lastName, 
        email, 
        phone, 
        occupation, 
        gender, 
        password, 
        confirmPassword
    );

    await registerPage.submit();

    await expect(page.getByText("Account Created Successfully"))
    .toBeVisible();

    await loginPage.open();
    await loginPage.login(email, password);

    await expect(page).toHaveURL(/.*dashboard/);
    await page.screenshot({ path: "screenshots/screenshot-after-logged-in.png" });

    await dashboardPage.checkSignUpVisibleInNewTab();

    await dashboardPage.addProductToCart("Zara Coat 3");
    await expect(dashboardPage.cartCount).toHaveText("1");
    await page.screenshot({ path: "screenshots/screenshot-after-adding-product-to-cart.png" });

    await dashboardPage.openCart();

    await cartPage.proceedToCheckout();

    await checkoutPage.fillCheckoutInfo(
        cardNumber,
        expiryMonth,
        expiryYear,
        cvv,
        nameOnCard,
        shippingName
    );
  

    await page.screenshot({ path: "screenshots/screenshot-after-filling-checkout-information.png" });
    

})
