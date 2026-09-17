import {test, expect, type Locator, type Page} from "@playwright/test";

  test.use({
        launchOptions: { slowMo: 800},
    });

class ToDoPage{
    static readonly URL = "https://demo.playwright.dev/todomvc/#/";

    private readonly page: Page;
    public readonly todoItems: Locator;
    public readonly todoInput: Locator;

    constructor(page: Page){
        this.page = page;
        this .todoInput = page.getByPlaceholder("what needs to be done?");
        this.todoItems = page.getByTestId("todo-item");
    }
    
    public async open() : Promise<void>{
      await this.page.goto(ToDoPage.URL);
    }

    public async toDoItem(title: string) : Promise<void>{
        await this.todoInput.fill(title);
        await this.todoInput.press("Enter");
    }
}

test("adds todo items", async ({page}) => {
    const too = new ToDoPage(page);

    await too.open();
    await too.toDoItem("Automation Course");

    await expect(too.todoItems).toHaveCount(1);
    await expect(too.todoItems).toContainText(["Automation Course"]);
});

