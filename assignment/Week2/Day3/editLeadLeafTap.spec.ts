// Assignment: 2 Edit Lead 

import {test} from '@playwright/test'
test('handling dropdowns in leafTaps', async({page})=>
{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill('demosalesmanager');
    await page.locator("input[id='password']").fill('crmsfa');
    await page.locator(".decorativeSubmit").click();
    await page.locator("text=CRM/SFA").click();
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill("Test Leaf");
    await page.locator("#createLeadForm_firstName").fill("Sasmita");
    await page.locator("#createLeadForm_lastName").fill("Sahoo");
    await page.locator('[class="smallSubmit"]').click();
    await page.locator("//a[text()='Edit']").click();
    await page.locator("//input[@id='updateLeadForm_companyName']").clear();
    await page.locator("//input[@id='updateLeadForm_companyName']").fill("playwright");
    await page.locator("//input[@value='Update']").click();
})
