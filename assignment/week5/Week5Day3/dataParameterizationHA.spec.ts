import {test} from "@playwright/test"
import dotenv from "dotenv"

let filename=process.env.envfile || "Qa" || "Prod" //env.envfile used to read the env from terminal
dotenv.config({path:`data/${filename}.env`})

let URL=process.env.LF_Url as string
let Username=process.env.LF_Username as string
let Password=process.env.LF_Password as string
let CompanyName=process.env.LF_Compname as string
let Firstname=process.env.LF_Fname as string
let Lastname=process.env.LF_Lname as string

test(`learn to read data from JSON `, async({page})=>{
    await page.goto(URL)
    await page.locator('#username').fill(Username)
    await page.locator('input[id="password"]').fill(Password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator("#createLeadForm_companyName").fill(CompanyName)
    await page.locator("#createLeadForm_firstName").fill(Firstname)
    await page.locator("#createLeadForm_lastName").fill(Lastname)
    await page.locator("#createLeadForm_dataSourceId").selectOption({label:'Direct Mail'})
    await page.locator("#createLeadForm_marketingCampaignId").selectOption({value:'DEMO_MKTG_CAMP'})
    const dropDown=page.locator("//select[@id='createLeadForm_marketingCampaignId']/option")
    const dropDowncount=await dropDown.count()
    console.log(`No of values in the Marketing Campaign dropdown is ${dropDowncount}`);
        for(let index=0;index<dropDowncount;index++){
        console.log(await dropDown.nth(index).innerText()); 
    }
    await page.locator("#createLeadForm_industryEnumId").selectOption({index:6})
    await page.locator("#createLeadForm_currencyUomId").selectOption({value:'INR'})
    await page.locator("#createLeadForm_generalCountryGeoId").selectOption({label:'India'})
    await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption({label:'KARNATAKA'})
    const countrydropDown=page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']/option")
    const countryCount=await countrydropDown.count()
    console.log(`No of values in the states dropDown is ${countryCount}`);
        for(let index=0;index<countryCount;index++){
        console.log(await countrydropDown.nth(index).innerText()); 
    }
    await page.locator('[class="smallSubmit"]').click()
})