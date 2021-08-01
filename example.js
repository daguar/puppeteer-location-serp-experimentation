const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch(); //({headless: false});
    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://www.google.com', ['geolocation']);
    const page = await browser.newPage();
    await page.setViewport({
        width: 1280,
        height: 1024,
        deviceScaleFactor: 1,
    });
    //await page.setGeolocation({latitude: 29.760427, longitude: -95.369804});
    await page.goto('https://www.google.com');
    await page.type('input[name="q"]', "unemployment");
    await page.keyboard.press('Enter');
    await page.waitForSelector('h3.LC20lb', {timeout: 10000});
    await page.screenshot({ path: 'goog.png' });
    console.log(page);

    await browser.close();
})();
