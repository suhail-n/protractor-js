const { browser } = require("protractor");

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['first-test.spec.js'],
    // specs: ['chaining-locator.spec.js'],
    // specs: ['dropdown.spec.js'],
    // specs: ['actions-windows.spec.js'],
    // specs: ['alerts.spec.js'],
    // specs: ['frames.spec.js'],
    // specs: ['sync.spec.js'],
    specs: ['practice-ecommerce.spec.js'],
    capabilities: {
        browserName: 'chrome',
        // allow to use actiosn api
        chromeOptions: {
            w3c: false
        }
        // 'goog:chromeOptions': {
        //     w3c: false
        // }
    },
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 120000
    },
    getPageTimeout: 120000,
};