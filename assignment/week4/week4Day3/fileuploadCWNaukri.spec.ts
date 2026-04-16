/* Step1: login to URL
https://www.naukri.com/registration/createAccount

Step2: click on I'm experienced

Step3: upload the file using setInputFiles() */

import {test} from "@playwright/test"
import path from "path"

test('Upload file using input tag with type=file attribute',async({page})=>{

await page.goto('https://www.naukri.com/registration/createAccount')

/* //relative path
await page.locator(`//h2[text()="I'm experienced"]`).click()
console.log("I'm experienced button is clicked.. ");

const fileupload=page.locator("//button[text()='Upload Resume']")
const fileupload=page.locator('(//input[@type="file"])')
await fileupload.setInputFiles('Utils/bird.jpg')

console.log("File uploaded..");
await page.waitForTimeout(3000)
 */

//absolute path
await page.locator(`//h2[text()="I'm experienced"]`).click()
console.log("I'm experienced button is clicked.. ");

//const fileupload=page.locator('//button[text()="Upload Resume"]')
const fileupload=page.locator('(//input[@type="file"])')
await fileupload.setInputFiles(path.join(__dirname,'../../../Utils','bird.jpg'))
console.log("File uploaded..");
await page.waitForTimeout(3000)
    
})