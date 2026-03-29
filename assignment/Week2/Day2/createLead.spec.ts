import {test} from '@playwright/test'
test('Create Lead', async({page})=>
{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill('demosalesmanager');
    await page.locator('input[id="password"]').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator("text=CRM/SFA").click();
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill("Test Leaf");
    await page.locator("#createLeadForm_firstName").fill("Sasmita");
    await page.locator("#createLeadForm_lastName").fill("Sahoo");
    await page.locator("#createLeadForm_personalTitle").fill("Ms");
    await page.locator("#createLeadForm_generalProfTitle").fill("User1");
    await page.locator("#createLeadForm_annualRevenue").fill("10000");
    await page.locator("#createLeadForm_departmentName").fill("Playwright");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("949296351");
    await page.locator('[class="smallSubmit"]').click();


    
})