import {test} from "@playwright/test"

import data from "../../../data/Leaf.json"

for(let login of data){
test(`learn to read data from JSON ${login.TestcaseID}`, async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(login.Username)
    await page.locator('input[id="password"]').fill(login.Password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()

    //Fill all the mandatory fields
    await page.locator("#createLeadForm_companyName").fill(login.Companyname)
    await page.locator("#createLeadForm_firstName").fill(login.Firstname)
    await page.locator("#createLeadForm_lastName").fill(login.Lastname)

    //Select Direct Mail
    await page.locator("#createLeadForm_dataSourceId").selectOption({label:'Direct Mail'})

    //Select Demo Marketing Campaign and print the options
    await page.locator("#createLeadForm_marketingCampaignId").selectOption({value:'DEMO_MKTG_CAMP'})
    const dropDown=page.locator("//select[@id='createLeadForm_marketingCampaignId']/option")
    const dropDowncount=await dropDown.count()
    console.log(`no of values in the Marketing Campaign dropdown is ${dropDowncount}`);
        for(let index=0;index<dropDowncount;index++){
        console.log(await dropDown.nth(index).innerText()); 
    }
  
    await page.locator("#createLeadForm_industryEnumId").selectOption({index:6})
    await page.locator("#createLeadForm_currencyUomId").selectOption({value:'INR'})
    await page.locator("#createLeadForm_generalCountryGeoId").selectOption({label:'India'})
    await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption({label:'KARNATAKA'})
    const countrydropDown=page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']/option")
    const countryCount=await countrydropDown.count()
    console.log(`no of values in the states dropDown is ${countryCount}`);
        for(let index=0;index<countryCount;index++){
        console.log(await countrydropDown.nth(index).innerText()); 
    }
    await page.locator('[class="smallSubmit"]').click();

})
}

/* let login=data[1]
test(`learn to read data from JSON ${login.TestcaseID}`, async({page})=>{
    // Login  and create lead
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(login.Username)
    await page.locator('input[id="password"]').fill(login.Password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()

    //Fill all the mandatory fields
    await page.locator("#createLeadForm_companyName").fill(login.Companyname)
    await page.locator("#createLeadForm_firstName").fill(login.Firstname)
    await page.locator("#createLeadForm_lastName").fill(login.Lastname)

    //Select Direct Mail
    await page.locator("#createLeadForm_dataSourceId").selectOption({label:'Direct Mail'})

    //Select Demo Marketing Campaign and print the options
    await page.locator("#createLeadForm_marketingCampaignId").selectOption({value:'DEMO_MKTG_CAMP'})
    const dropDown=page.locator("//select[@id='createLeadForm_marketingCampaignId']/option")
    const dropDowncount=await dropDown.count()
    console.log(`no of values in the Marketing Campaign dropdown is ${dropDowncount}`);
        for(let index=0;index<dropDowncount;index++){
        console.log(await dropDown.nth(index).innerText()); 
    }
  
    await page.locator("#createLeadForm_industryEnumId").selectOption({index:6})
    await page.locator("#createLeadForm_currencyUomId").selectOption({value:'INR'})
    await page.locator("#createLeadForm_generalCountryGeoId").selectOption({label:'India'})
    await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption({label:'KARNATAKA'})
    const countrydropDown=page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']/option")
    const countryCount=await countrydropDown.count()
    console.log(`no of values in the states dropDown is ${countryCount}`);
        for(let index=0;index<countryCount;index++){
        console.log(await countrydropDown.nth(index).innerText()); 
    }
    await page.locator('[class="smallSubmit"]').click();

})  */
