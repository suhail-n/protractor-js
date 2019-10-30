const { browser, element, by, Key } = require("protractor");

describe('Protractor Demo App', function () {
    it('should add one and two', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.manage().window().maximize();
        element(by.model('first')).sendKeys(1);
        console.log("entered 1");
        element(by.model('second')).sendKeys(2);
        element(by.css('#gobutton')).click();
        expect(element(by.binding('latest')).getText()).
            toEqual('3'); // This is wrong!
        // comparison apis vary based on what is being compared. toBe is different than toEqual.
        // refer to docs
        expect(element(by.tagName("h4")).getText()).toBe("History");
    });
    it("should load microsoft and make a search", async function () {
        // must add this to allow non angular apps to load
        browser.waitForAngularEnabled(false);
        browser.get("https://www.microsoft.com/en-ca");
        element(by.id("search")).click();
        element(by.id("cli_shellHeaderSearchInput")).sendKeys("surface");
        element(by.id("cli_shellHeaderSearchInput")).sendKeys(Key.ENTER);
        console.log("Pressed ENTER")
        await browser.sleep(5000);
        console.log(await browser.getTitle());
        console.log(`url: ${await browser.getCurrentUrl()}`);
        expect(browser.getCurrentUrl()).toContain("q=surface");
    });
});