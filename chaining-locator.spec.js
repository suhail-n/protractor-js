const { browser, element, by } = require("protractor");

describe("Chaining Locators", function () {
    /**
     * enter two numbers and add them together
     * @param {number} a 
     * @param {number} b 
     */
    function add(a, b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.css('#gobutton')).click();
    }
    it('should open protractor demo app', async function () {
        // arrange
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.manage().window().maximize();
        add(1, 2);
        add(6, 3);
        add(5, 7);
        // element(by.model('first')).sendKeys(1);
        // element(by.model('second')).sendKeys(2);
        // element(by.css('#gobutton')).click();
        // element(by.model('first')).sendKeys(6);
        // element(by.model('second')).sendKeys(3);
        // element(by.css('#gobutton')).click();
        // act
        console.log("acting");
        console.log("---------------------------------------------------");
        console.log("Printing all td text of first row")
        await element(by.repeater("result in memory"))
            .all(by.tagName("td"))
            .map(async ele => console.log(await ele.getText()));

        console.log("---------------------------------------------------");
        console.log("Printing first found td text of first row");
        let t = await element(by.repeater("result in memory"))
            .element(by.tagName("td"))
            .getText();
        console.log(t);

        console.log("---------------------------------------------------");
        console.log("Print the 2nd child td tag");
        let nthChild = await element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText();
        console.log(nthChild);

        console.log("---------------------------------------------------");
        console.log("Print the 3nd child td tag using get index method");
        let nthChild3 = await element(by.repeater("result in memory")).all(by.css("td"))2).getText();
    console.log(nthChild3);

    console.log("---------------------------------------------------");
    console.log("Printing all td text of every row")
    let elements = await element.all(by.repeater("result in memory"))
    elements.forEach((ele, index) => {
        console.log("Row: " + index);
        console.log(`Ele: ${ele}`);
        ele.all(by.tagName("td")).map(async val => console.log(await val.getText()))

    });

    // console.log(tdText);
    await browser.sleep(2000);
    // assert
    expect(element(by.tagName("h4")).getText()).toBe("History");
});
})