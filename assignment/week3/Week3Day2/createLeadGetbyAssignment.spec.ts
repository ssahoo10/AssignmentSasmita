import {test} from '@playwright/test'
test('Create Lead', async({page})=>
{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //await page.getByRole('textbox',{name:"Username"}).click();
    await page.getByRole('textbox',{name:'Username',exact:true}).fill('Demosalesmanager');
    await page.getByRole('textbox',{name:'Password',exact:true}).fill('crmsfa');
    await page.getByRole('button',{name:"Login",exact:true}).click();
    await page.getByRole('link', {name:"CRM/SFA",exact:true}).click();
    await page.getByText('Leads',{ exact: true }).first().click();
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