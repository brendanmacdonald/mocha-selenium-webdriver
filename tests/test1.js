const By = require("selenium-webdriver").By;
const expect = require('chai').expect;
const po = require('./utils/page_objects');
const driverActions = require('./utils/driver')

let driver; 

describe('Title', () => {

    before(async () => {
       driver = driverActions.getDriver();
    })

    beforeEach(async () => {
        await driver.get(po.baseURL);
    });

    after(async () => {
        await driverActions.quitDriver(driver);
    });

    it('page title is correct', async () => {
        await driver.getTitle().then((title) => {
            expect(title).to.equal('Selenium Easy Demo - Simple Form to Automate using Selenium');
        });
    })
})