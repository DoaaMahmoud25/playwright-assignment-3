import { test, expect } from "@playwright/test";

test.use({
  launchOptions: { slowMo: 1500 },
});

test("handle a new tab", async ({ context, page }) => {
  await page.goto("https://rahulshettyacademy.com/locatorspractice/");

  const bannerLink = page.getByRole("link", { name: /QA Career Accelerator/i });

  console.log(bannerLink);

  const [newTab] = await Promise.all([
    context.waitForEvent("page"),
    bannerLink.click(),
  ]);

  await newTab.waitForLoadState();
  expect(newTab.url()).toContain("rahulshettyacademy");
  await newTab.close();

  await expect(bannerLink).toBeVisible();
});