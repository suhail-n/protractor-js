const { browser, element, by, Key, ExpectedConditions } = require("protractor");

describe("Syncing with Expected Conditions", function () {

    it("should wait for spinner to complete", async function () {
        browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
        // await browser.sleep(2000);
        element(by.css("a[href*='loadAjax']")).click();
        // await browser.sleep(2000);
        // ExpectedConditions.invisibilityOf(element(by.id("loader")), 10000);
        browser.wait(ExpectedConditions.invisibilityOf(element(by.id("loader"))), 10000);
        // await browser.sleep(2000)

        // element(by.css("div#results")).getText().then(text => {
        //     console.log(`found text: ${text}`);
        // });
        let text = await element(by.css("div#results")).getText();
        console.log(`Found Text: ${text}`);

        // loader
    });

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        // set this for non angular pages
    });

    afterAll(() => {
        console.log("After all");
        browser.quit();
        console.log("Quit browser");
    }, 1000);
});