import { test } from "@playwright/test";

test.use({
  launchOptions: { slowMo: 1500 },
});

test("Playwright special locators", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.getByPlaceholder("Password").fill("Test123");

  await page.getByLabel("Gender").selectOption("Male");

  await page.getByLabel("Student").click();

  await page.getByRole("button", { name: "Submit" }).click();

  await page.getByRole("link", { name: "Shop" }).click();

  await page
    .locator("app-card")
    .filter({ hasText: "Nokia Edge" })
    .getByRole("button", { name: "Add " })
    .click();
});
