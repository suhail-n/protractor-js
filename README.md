# Protractor Readme

- [Protractor Readme](#protractor-readme)
  - [Setup](#setup)
  - [Definitions - Jasmine](#definitions---jasmine)
  - [Links](#links)
  - [Test Website Links](#test-website-links)

## Setup

1. npm install -g protractor
2. webdriver-manager update
3. webdriver-manager start
4. protractor conf.js

## Definitions - Jasmine

- **Describe**:
  - this keyword represents the **Test Suite**. Give it a descriptive name
- **it**:
  - This is considered a **Test Case**. Inside every Describe we have an "it" function which is the test case and inside that the test executes
- **Spec**:
  - This is the Test file in jasmine. Should have files named in the format "code.spec.js"
- **Configuration File**:
  - Considered as a driver file
  - Holds the names of all the specs we want to run and then we run the config file to execute everything

## Links

- Matchers like toBe, toEqual
  - https://jasmine.github.io/api/3.5/matchers.html
- Globals like beforeEach, afterAll
  - https://jasmine.github.io/api/3.5/global

## Test Website Links

- Angular Website: https://qaclickacademy.github.io/protocommerce
- Angular Calculator: https://juliemr.github.io/protractor-demo/
- Non Angular: http://qaclickacademy.com/practice.php