import { test } from "@playwright/test";

test('Print button text before and after click', async ({ page }) => {
    await page.goto('https://www.leafground.com/frame.xhtml');

    //nested frame-> page.frame({name:'frame2'}).locator('#Click').click()

    const frameref=page.frame({name:'frame2'})
    await frameref?.locator("#Click")
    await page.waitForTimeout(2000)

    // 1. Text before clicking
    const textBefore = await (frameref?.locator("#Click"))?.innerText()
    console.log(`Text Before Click: ${textBefore}`)

    // 2. Perform the click
    await frameref?.locator("#Click").click()
    await page.waitForTimeout(2000)

    // 3. Text after clicking
    const textAfter = await (frameref?.locator("#Click"))?.innerText()
    console.log(`Text After Click: ${textAfter}`);

})
