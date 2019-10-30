const { browser, element, by, Key, ExpectedConditions } = require("protractor");

describe("Ecommerce Site", function () {

    it("Open ECommerce Website and submit form", () => {
        console.log("Opening e commrece app and submitting form");
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.name('name')).sendKeys("user1");
        element(by.css("input[name='email']")).sendKeys("user1@outlook.com");
        element(by.id("exampleInputPassword1")).sendKeys("Password123");
        element(by.id("exampleCheck1")).click();

        // cssContainingText is only for angular and not selenium
        element(by.cssContainingText("select[id='exampleFormControlSelect1'] > option", "Female")).click();
        // return all elements by given name
        element.all(by.name("inlineRadioOptions")).first().click();
        // buttonText is only for angular and not selenium
        element(by.buttonText("Submit")).click();
        expect(element(by.css("div.alert-success"))).toBeDefined();
        expect(element.all(by.css("div.alert-danger")).count()).toEqual(0);
        // browser.sleep(3000);
    });

    it("Validate Error Message", function () {
        console.log("Validating error messages")
        // clear and delete
        let nameField = element(by.name('name'));
        nameField.clear()
        nameField.sendKeys("q");

        element(by.css("div.alert-danger")).getText().then(text => {
            console.log(`Name Error: ${text}`);
        });
        // browser.sleep(3000);
    });

    function addToCart(item) {
        // get all app cards per item
        element.all(by.tagName("app-card")).each(ele => {
            ele.element(by.css("h4.card-title")).getText().then(title => {
                if (title === item) {
                    ele.element(by.tagName("button")).click();
                };
            });
        });
    }

    it("Navigate to shop and add to cart", function () {
        console.log("Navigate to shop and add to cart");
        element(by.linkText("Shop")).click();
        addToCart("Samsung Note 8");
        addToCart("Nokia Edge");

        element(by.partialLinkText("Checkout")).getText().then(t => {
            console.log(t);
            // one way to validate cart for 2
            // expect(t.split("(")[1].trim().charAt(0)).toBe("2");
            // use regex to check cart value from str
            expect(new RegExp(/(?<=.)2(?=\s\))/).test(t)).toBe(true);
        });
        // browser.sleep(2000);
    });

    it("open cart and validate total", function () {
        // open cart
        element(by.partialLinkText("Checkout")).click()
        let calculatedTotal = 0;
        // get all table rows

        element.all(by.css("tbody tr")).each(async ele => {
            let res = await ele.isElementPresent(by.buttonText("Remove"));
            if (res === true) {
                let price = await ele.all(by.tagName("td")).get(3).getText();
                price = new RegExp(/(?<=.)[\d.]+$/).exec(price);
                // add calculatedTotal
                calculatedTotal += Number(price);
            }
            let rowText = await ele.getText();
            if (rowText.match("Total") !== null) {
                console.log("Inside Total");
                // extract num from string like "$.  100.25"
                let total = new RegExp(/(?<=.)[\d.]+$/).exec(rowText);
                console.log(`total: ${total} === calculatedTotal: ${calculatedTotal}`);
                expect(calculatedTotal).toBe(Number(total));
            }
        });

    });

    beforeAll(() => {
        browser.manage().window().maximize();
    });

    afterAll(() => {
        console.log("After all");
        browser.quit();
        console.log("Quit browser");
    }, 1000);
});