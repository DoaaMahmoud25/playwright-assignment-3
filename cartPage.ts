import { Page, Locator }  from "@playwright/test";

export class CartPage{
    readonly page: Page;
    readonly CheckoutButton: Locator;


    constructor(page:Page){
        this.page = page;
        this.CheckoutButton = page.getByRole("button", { name: "Checkout" });
    }


    async proceedToCheckout(){
        await this.CheckoutButton.click();
    }
}