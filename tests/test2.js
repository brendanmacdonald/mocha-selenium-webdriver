const By = require("selenium-webdriver").By,
 until = require("selenium-webdriver").until,
    expect = require('chai').expect,
    po = require('./utils/page_objects'),
    driverActions = require('./utils/driver');

let driver;

describe('Adding numbers', () => {

    before(async () => {
        driver = driverActions.getGalaxyS5Driver();
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

        // Perform a right-click, just for fun.
        await driver.actions({bridge: true})
            .contextClick(driver.findElement(By.id(po.totalId)))
            .perform();
    })
})