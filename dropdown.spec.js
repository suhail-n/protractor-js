const { browser, element, by } = require("protractor");

describe("Working with dropdowns", function () {
    /**
     * enter two numbers and add them together
     * @param {number} a 
     * @param {number} b 
     * @param {string} operator 
     */
    function calc(a, b, operator) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);

        // await browser.sleep(500);
        // await browser.sleep(500);
        // element.all(by.tagName("option")).each(async item => {
        //     if (await item.getText() === operator) {
        //         item.click();
        //     }
        // });
        element.all(by.tagName("option")).each(async item => {
            let val = await item.getAttribute("value");
            if (val === operator) {
                item.click();
            }
        });

        element(by.css('#gobutton')).click();
    }

    it("should handle dropdowns", async function () {
        console.log("Starting test");
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.manage().window().maximize();
        calc(10, 4, "MODULO");
        calc(1, 2, "ADDITION");
        calc(3, 5, "MULTIPLICATION");
        calc(8, 5, "SUBTRACTION");
        await browser.sleep(3000);
    });

    afterAll(() => {
        console.log("Entering after all");
        browser.quit();
        console.log("Quit browser");
    }, 1000)

});