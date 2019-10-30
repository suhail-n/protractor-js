const { browser, element, by, Key, ExpectedConditions } = require("protractor");

describe("Working with actions api", function () {
    // it("Navigate to Posse App", async function () {
    //     console.log("Starting test");
    //     browser.get('http://juliemr.github.io/protractor-demo/');
    //     // enter values
    //     // element(by.model("first")).sendKeys(5);
    //     // element(by.model("second")).sendKeys(2);
    //     browser.actions()
    //         .mouseMove(element(by.model("first")))
    //         .click()
    //         .sendKeys("5")
    //         .sendKeys(Key.TAB)
    //         .sendKeys(Key.TAB)
    //         .sendKeys("6")
    //         .sendKeys(Key.ENTER).perform();
    //     await browser.sleep(1000);
    // });

    // it("should navigate to delta and select a round trip type", async () => {
    //     console.log("Starting delta.com test");

    //     browser.get("https://www.delta.com/ca/en");
    //     let ele = element(by.id("selectTripType-val"));
    //     browser.actions()
    //         .mouseMove(ele)
    //         .click()
    //         .sendKeys(Key.ARROW_DOWN)
    //         .sendKeys(Key.TAB)
    //         .perform()

    //     await browser.sleep(1000);
    //     expect(ele.getText()).toBe("One Way")

    // });

    it("should handle new tab window", async () => {
        browser.get("https://posse.com");
        element(by.css("a[data-instr-search-area='sanfrancisco']")).click();
        console.log("clicked sanfrancisco");
        // await browser.sleep(3000);
        try {
            await browser.wait(ExpectedConditions.presenceOf(element(by.cssContainingText(".ng-binding", "Blue Bottlesd"))), 5000);

        } catch (error) {
            console.log("Caught error");
        }
        console.log("After error");
        browser.wait(ExpectedConditions.presenceOf(element(by.cssContainingText(".ng-binding", "Blue Bottle"))), 5000);
        element(by.cssContainingText(".ng-binding", "Blue Bottle")).click();

        // get all window handles which are window ids
        let handles = await browser.getAllWindowHandles();
        // switch to child window
        browser.switchTo().window(handles[1]);
        console.log(`Child Window Title: ${await browser.getTitle()}`);
        expect(element(by.cssContainingText("h3[itemprop='name']", 'Blue Bottle Coffee')).isDisplayed()).toBeTruthy();
        await browser.sleep(3000);

    });

    afterAll(() => {
        console.log("Entering after all");
        browser.quit();
        console.log("Quit browser");
    }, 1000);

    beforeAll(() => {
        console.log("Before All");
        browser.manage().window().maximize();
    }, 1000);

});