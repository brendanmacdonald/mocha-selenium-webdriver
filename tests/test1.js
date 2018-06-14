const expect = require('chai').expect,
    po = require('./utils/page_objects'),
    driverActions = require('./utils/driver');

let driver;

describe('Title', () => {

    before(async () => {
        driver = driverActions.getHeadlessDriver();
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