import {test, chromium, webkit} from '@playwright/test'
import {channel} from 'node:diagnostics_channel'

test('Multiple Context' , async()=>{
    
//chromium edge launch for redbus
    const edgebrowser= await chromium.launch({channel:"msedge", headless:false})
    const edgecontext= await edgebrowser.newContext()
    const edgepage= await edgecontext.newPage()
    await edgepage.goto("https://www.redbus.in/")
      
    const title = await edgepage.title();
    const url = edgepage.url();
    await edgepage.waitForTimeout(5000)
   
    console.log('Title of the Page: ', title);
    console.log('URL:', url); 
    
    //Webkit launch for Flipkart
    const wkbrowser= await webkit.launch({channel: undefined})
    const wkcontext= await wkbrowser.newContext()
    const wkpage= await wkcontext.newPage()
    await wkpage.goto("https://www.flipkart.com/")
      
    const wktitle = await wkpage.title();
    const wkurl = wkpage.url();
    await wkpage.waitForTimeout(5000)
   
    console.log('Title of the Page: ', wktitle);
    console.log('URL:', wkurl);
})
