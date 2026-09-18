import { Page, Locator, expect } from "@playwright/test";

export class DashboardPage{
    readonly page: Page;
    readonly product: Locator;
    readonly cartButton: Locator;
    readonly cartCount : Locator;
    


    constructor (page: Page){
        this.page = page;
        this.product = page.locator(".card-body");
        this.cartButton = page.locator('button[routerlink="/dashboard/cart"]');
        this.cartCount = this.cartButton.locator("label");
        }


        async addProductToCart( productName: string){
            await this.product.first().waitFor();
            const productCard = this.product.filter({ hasText: productName })
            await productCard.getByRole("button", { name: "Add To Cart" }).click();            
        }


        async openCart(){
            await this.cartButton.click();
        }

        async checkSignUpVisibleInNewTab(){
            const [ newPage ] = await Promise.all([
                this.page.context().waitForEvent("page"),
                this.page.getByRole("link", { name: /QA Career Accelerator/i }).click(),
            ]);


            await newPage.waitForLoadState();
            await expect(newPage.getByRole("link", { name: "Sign Up", exact: true})).toBeVisible();
            await newPage.close();


        }
}
