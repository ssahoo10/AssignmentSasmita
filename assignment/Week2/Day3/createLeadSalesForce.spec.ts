import {expect, test} from '@playwright/test'
test('Login to leaftaps', async({page})=>
{
    await page.goto("https://login.salesforce.com");
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('#password').fill('TestLeaf@2025');
    await page.locator('#Login').click();
    await page.locator('//div[@class="slds-icon-waffle"]').click();
    await page.locator('//button[text()="View All"]').click();
    await page.locator('//p[text()="Sales"]').click();
    await page.locator('//a[@title="Leads"]').click();
    await page.locator('//div[@title="New"]').click();
    await page.locator('//button[@name="salutation"]').click();
    await page.locator('//span[@title="Ms."]').click();
    await page.locator('//input[@name="lastName"]').fill("LastName");
    await page.locator('//input[@name="Company"]').fill("Testleaf");
    await page.locator('//button[@name="SaveEdit"]').click();
    const successMessage = page.locator('//span[contains(@class,"toastMessage")]');
    console.log("Toast Message: " +successMessage);
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('Lead "Ms. LastName" was created.')


})
