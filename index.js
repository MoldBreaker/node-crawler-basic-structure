const puppeteer = require('puppeteer')
require('dotenv').config()

async function start() {
    const browser = await puppeteer.launch({
        headless: false //if headless == false new browser alway open automatically
    })
    console.log("browser opened")
    const page = await browser.newPage()
    page.setDefaultNavigationTimeout(90000)
    await page.goto(process.env.URL)

    //code here


    await browser.close()
    console.log("browser closed")
}

start()