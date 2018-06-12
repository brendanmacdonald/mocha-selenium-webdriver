const By = require("selenium-webdriver").By;
const expect = require('chai').expect;
const po = require('./utils/page_objects');
const driverActions = require('./utils/driver')

let driver; 

describe('Adding numbers', () => {

    before(async () => {
        driver = driverActions.getDriver();
    })

    beforeEach(async () => {
        await driver.get(po.baseURL);
    });

    after(async () => {
        await driverActions.quitDriver(driver);
    });

    it('can add two numbers', async () => {
        await driver.findElement(By.id(po.sum1TextId)).sendKeys(1);
        await driver.findElement(By.id(po.sum2TextId)).sendKeys(2);
        await driver.findElement(By.id(po.totalId)).findElement(By.className(po.btnClass)).click();

        await driver.findElement(By.id(po.totalValueId)).getText().then((value) => {
            expect(value).to.equal('3');
        })
    })
})