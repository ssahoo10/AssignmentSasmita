import {test,expect} from "@playwright/test"
import path from "path"
test.use({
    storageState:'data/salesforce.json'
})
test('Salesforce-upload file', async({page}) => {
/* await page.goto('https://login.salesforce.com/?locale=in');
await page.fill('#username', 'sahoosasmita.in.d7d54bfe6651@agentforce.com');
await page.fill('#password', 'Mysalesforce@10');
await page.click('#Login');
await page.waitForTimeout(10000) */
await page.goto('https://orgfarm-41191f7a65-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')
await page.waitForTimeout(5000)
await page.locator(".slds-icon-waffle").click()
await page.locator('//button[text()="View All"]').click()
//await page.getByPlaceholder('Search apps or items...').fill("Accounts")
await page.getByRole('combobox', {name:"Search apps or items..."}).fill("Accounts")
await page.locator("//mark[text()='Accounts']").click()
await page.locator("//div[text()='New']/parent::a[@role='button']").click()
await page.getByRole('textbox',{name:"Account Name"}).fill("Sasmita Playwright")

await page.getByRole('combobox',{name:"Rating"}).click()
await page.locator("//span[@title='Warm']").click()
await page.getByRole('combobox',{name:"Type"}).click()
await page.locator("//span[@title='Prospect']").click()
await page.getByRole('combobox', {name:"Industry"}).click()
await page.locator("//span[@title='Banking']").click()
await page.getByRole('combobox', {name:"Ownership"}).click()
await page.locator("//span[@title='Public']").click()
await page.getByRole('button', {name:"Save", exact: true}).click()
const successToast = page.locator('.toastMessage')
await expect(successToast).toBeVisible()
await expect(successToast).toContainText("Sasmita Playwright")

const fileupload=page.locator('(//input[@type="file"])')
await fileupload.setInputFiles(path.join(__dirname,'../../../Utils','bird.jpg'))
console.log("File uploaded..")
await page.waitForTimeout(3000)
await page.locator("//span[text()='Done']").click()
const UploadSuccess = page.locator('//div[contains(@id, "toastDescription")]')
await expect(UploadSuccess).toBeVisible()
await expect(UploadSuccess).toContainText("1 file was uploaded")

})
