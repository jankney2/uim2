const express=require('express')
const app=express()
const puppeteer=require('puppeteer')
require('dotenv').config()



app.listen(3005, async ()=>{
    console.log('listening on 3005')

    const browser= await puppeteer.launch({headless:false})
    const page=await browser.newPage()
    await page.goto('https://www.uim2.com/login?m=1')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.type(process.env.USERNAME)
    await page.keyboard.press('Tab')
    await page.keyboard.type(process.env.PASS)
    await page.keyboard.press('Enter')
    await page.waitForSelector('#hexagon_4')
    await page.goto('https://www.uim2.com/uim-app/reports', {waitUntil:'networkidle2'})

})