const { browser, element, by, Key, ExpectedConditions } = require("protractor");

describe("Test Non angular page alerts", function () {
    it("should handle window alert from non angular page", async (done) => {
        browser.get("http://qaclickacademy.com/practice.php");
        await browser.sleep(1000);
        element(by.id("confirmbtn")).click();
        let al = await browser.wait(ExpectedConditions.alertIsPresent(), 5000);
        if (al) {
            browser.switchTo().alert().accept();
        }
        console.log(al);
        await browser.sleep(1000);
        element(by.id("confirmbtn")).click();
        browser.wait(ExpectedConditions.alertIsPresent(), 2000)
            .then(_ => {
                console.log("Inside Then")
                expect(_).toBeUndefined("Alert is still present");
                done();
            })
            .catch(err => {
                expect(err).toBeTruthy();
                done();
            })
        console.log("done 1");
        await browser.sleep(1000);
        console.log("done 2");

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

})