Implemented the RahulShettyAcademy Client automation assignment using Playwright with TypeScript and the Page Object Model (POM).

Automated Workflow

- Register a new user with dynamically generated data.
- Login with the registered credentials.
- Add a product (Zara Coat 3) to the cart.
- Verify the cart count updated correctly.
- Navigate to the Cart page and proceed to Checkout.
- Fill in the checkout information (excluding Country).

Project Structure

- registerPage.ts - Registration form handling.
- loginPage.ts - Login functionality.
- dashboardPage.ts - Product listing and add-to-cart actions.
- cartPage.ts - Cart page and checkout navigation.
- checkoutPage.ts - Checkout form handling.
- register.spec.ts - End-to-end test scenario.
- README.md - Project documentation.

### Screenshots

*After Login:
<img width="2560" height="1440" alt="screenshot-after-logged-in" src="https://github.com/user-attachments/assets/8e3fb31f-6e07-4b36-be1e-5fecb08c2e75" />

*After Adding Product to Cart:
<img width="2560" height="1440" alt="screenshot-after-adding-product-to-cart" src="https://github.com/user-attachments/assets/a1b7b1dc-09eb-4b2d-b3c1-0cdd3a737d8d" />

*After Filling Checkout Information:
<img width="2560" height="1440" alt="screenshot-after-filling-checkout-information" src="https://github.com/user-attachments/assets/49f3374f-af98-4853-994c-3b83035fc3e4" />



