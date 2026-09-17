import { Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;

    constructor (page: Page){
        this.page = page;
    }
    
    async open(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async login(email: string, password: string){
    await this.page.getByPlaceholder("email@example.com").fill(email);
    await this.page.getByPlaceholder("enter your passsword").fill(password);
    await this.page.locator("#login").click();
    }
}

