import { test, expect, type Locator, type Page} from "@playwright/test";

test.use({
    launchOptions: { slowMo: 800},
});

class PuttmannPage{
    static readonly URL = "https://puttmann.com/";

    private readonly page: Page;
    public readonly ourBrandsMenu: Locator;
    public readonly sophieLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ourBrandsMenu= page.getByRole("link", {  name: "Our Brands" });
        this.sophieLink = page.getByRole("link", { name: "Sophie la girafe" }).first();

    }

     public async open() : Promise<void>{
      await this.page.goto(PuttmannPage.URL);
    }

        public async goToSophieLaGirafe() : Promise<void>{
           await this.page.goto("https://puttmann.com/our-brands/sophie-la-girafe/");
    
        }
    }

    test("navigates to Sophie la girafe brand page", async ({page}) => {
    const puttmann = new PuttmannPage(page);

    await puttmann.open();
    await puttmann.goToSophieLaGirafe();

   
    await expect(page).toHaveURL(/our-brands\/sophie-la-girafe/);
});

