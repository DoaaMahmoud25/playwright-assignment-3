import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    readonly creditCardNumberInput: Locator;
    readonly expiryMonthSelect: Locator;
    readonly expiryYearSelect: Locator;
    readonly cvvInput: Locator;
    readonly nameOnCardInput: Locator;
    readonly shippingNameInput: Locator;
    readonly countryInput: Locator;
    readonly placeOrderButton: Locator;


    constructor(page: Page) {
    this.page = page;

    const personalInfo = page.locator("div", { hasText: "Personal Information" });

        this.creditCardNumberInput = personalInfo.locator("input").nth(0);
        this.expiryMonthSelect = page.locator("select").nth(0);
        this.expiryYearSelect = page.locator("select").nth(1);
        this.cvvInput = personalInfo.locator("input").nth(1);
        this.nameOnCardInput = personalInfo.locator("input").nth(2);

    this.shippingNameInput = page.locator(".details__user input").first();

    this.countryInput = page.getByPlaceholder("Country");
    this.placeOrderButton = page.getByRole("button", { name: "Place Order" });
}


    async fillCheckoutInfo(
        cardNumber: string, 
        month: string, 
        year: string, 
        cvv: string,
        nameOnCard: string, 
        shippingName: string, 
    ){

        
        await this.expiryMonthSelect.selectOption({ label: month });
        await this.expiryYearSelect.selectOption({ label: year});
        await this.cvvInput.fill(cvv);
        await this.nameOnCardInput.fill(nameOnCard);
        await this.creditCardNumberInput.fill(cardNumber);
        await this.shippingNameInput.fill(shippingName);

    }


    async placeOrder(){
        await this.placeOrderButton.click();
    }

}