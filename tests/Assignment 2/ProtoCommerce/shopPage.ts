import { Page, Locator , expect} from "@playwright/test";

export class ShopPage{ 
    readonly page: Page;
    readonly cards: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cards = page.locator("app-card");
        this.checkoutButton = page.locator("a.nav-link.btn.btn-primary");
    }
    
    async addFirstAndLastProductToCart(){
        await this.page
        .locator("app-card")
        .filter({ hasText: "iphone X" })
        .getByRole("button", { name: "Add " })
        .click()

        await this.page
        .locator("app-card")
        .filter({ hasText: "Blackberry"})
        .getByRole("button", { name: "Add " })
        .click()


        return 2;
    }

    async verifyCheckoutCount(expectedCount: number){
        await expect(this.checkoutButton).toContainText (
            new RegExp( `Checkout \\s*\\(\\s*${expectedCount}\\s*\\)`)
        );
    }
    
    async gotoCheckout(){
        await this.checkoutButton.click();
    }
}