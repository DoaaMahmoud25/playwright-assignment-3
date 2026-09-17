import { expect, Page } from "@playwright/test";

export class RegistrationPage {
    readonly page: Page;

    constructor(page: Page){ 
        this.page = page;
    }

    async open(){
        await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
    }
    async fillForm(name: string, email: string, password: string, gender: string){
        await this.page.locator('form input[name="name"]').fill(name);
        await this.page.locator('form input[name="email"]').fill(email);
        await this.page.getByPlaceholder("Password").fill(password);
        await this.page.getByLabel("Gender").selectOption(gender);
        await this.page.getByLabel("Student").click();
    }

    async submit(){
        await this.page.getByRole("button",{name: "Submit"}).click();
        await expect(this.page.locator('div.alert.alert-success.alert-dismissible')).toContainText("Success!");
    }

    async gotoShop(){
        await this.page.getByRole("link",{ name: "Shop"}).click();
    }
    
}

