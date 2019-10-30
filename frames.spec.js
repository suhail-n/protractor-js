const { browser, element, by, Key, ExpectedConditions } = require("protractor");

describe("Use Frames", function () {

    it("Open Non angular websites and use frames", async () => {
        browser.get("http://qaclickacademy.com/practice.php");
        browser.switchTo().frame("courses-iframe");
        let text = await element(by.css("a[href$='sign_in']")).getText();
        console.log(`Got text: ${text}`);
        // switch back to default frame
        browser.switchTo().defaultContent();
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