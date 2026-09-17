import { test } from "@playwright/test";
import { RegistrationPage } from "./registrationPage";
import { ShopPage} from "./shopPage";  

test.use({
  launchOptions: { slowMo: 1000 },
});

test("Verify checkout count after adding products", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  const shopPage = new ShopPage(page);

  const name = "DiDa";
  const email = "doaam.pag@gmail.com";
  const password = "123456";
  const gender = "Female";

  await registrationPage.open();
  await registrationPage.fillForm(name, email, password, gender);
  await registrationPage.submit();
  await registrationPage.gotoShop();

  const productsCount = await shopPage.addFirstAndLastProductToCart();
  await shopPage.verifyCheckoutCount(productsCount);
  await shopPage.gotoCheckout();
});
   

