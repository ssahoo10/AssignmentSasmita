/* Classroom Activity: */
import {test} from '@playwright/test'
test('handling dropdowns in leaf ground', async({page})=>
{
    //Step 1: launch the leafground url
    await page.goto("https://www.leafground.com/select.xhtml");

    //step 2: Print all the automation tools using Selectoption dropdown method.
    await page.locator("//select[@class='ui-selectonemenu']").click();
    const dropDown=page.locator('//select[@class="ui-selectonemenu"]/option');//No. of elements=5
    const dropDowncount=await dropDown.count()
    console.log(`no of values in the dropDown is ${dropDowncount}`);
        for(let index=0;index<dropDowncount;index++){
        console.log(await dropDown.nth(index).innerText()); 
    }
    //Step 3: Choose the preferred country as "India" using custom dropdown method
    await page.locator("//label[text()='Select Country']").click();
    await page.locator("//li[text()='India']").click();
    const countryName=await page.locator("//li[text()='India']").innerText();//India
    console.log("Country clicked: " +countryName);
    
})










