const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;
const expect = require('chai').expect;
const po = require('./utils/page_objects')

let driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

describe('Selenium Easy website', () => {
    beforeEach((done) => {
        driver.get(po.baseURL).then(done);
    });

    after((done) => {
        driver.quit().then(done);
    });

    it('can add two numbers', async () => {
        driver.wait(until.elementLocated(By.id("sum1")));
        driver.findElement(webdriver.By.id(po.sum1TextId)).sendKeys(1);
        driver.findElement(webdriver.By.id(po.sum2TextId)).sendKeys(2);
        await driver.findElement(webdriver.By.id(po.totalId)).findElement(By.className(po.btnClass)).click();

        // Wait until the 'total' field is not blank.
        driver.wait(function () {
            return driver.findElement(By.id(po.totalValueId)).getText().then(function (text) {
                return text != '';
            });
        }, 2000);
        let total = driver.findElement(By.id(po.totalValueId));
        return total.getText().then((value) => {
            expect(value).to.equal('3');
        })
    })
})