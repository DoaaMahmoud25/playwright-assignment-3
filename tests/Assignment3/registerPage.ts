import {  Page } from "@playwright/test";

export class RegisterPage {
    readonly page: Page;

    constructor(page: Page){ 
        this.page = page;
    }

    async open(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/register");
    }
    async fillForm(
        firstName: string,
        lastName: string,
        email: string,
        phone : string,
        occupation: string,
        gender: string,
        password: string,
        confirmPassword: string
     ) {  
        
        await this.page.getByLabel("First Name").fill(firstName);
        await this.page.getByLabel("Last Name").fill(lastName);
        await this.page.getByPlaceholder("email@example.com").fill(email);
        await this.page.getByPlaceholder("enter your number").fill(phone);


        await this.page
        .locator('select[formcontrolname="occupation"]')
        .selectOption({label: occupation}); 

        await this.page.getByLabel(gender).check();

        await this.page.getByPlaceholder("Passsword", { exact: true }).fill(password);
        await this.page.getByLabel("Confirm Password").fill(confirmPassword);
        
        await this.page.locator('input[type="checkbox"]').check();
    }

    async submit(){
        await this.page.locator("#login").click();
    }
}

