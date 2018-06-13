var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome');

exports.getChromeDriver = function () {
    let chromeCapabilities = webdriver.Capabilities.chrome();
    let chromeOptions = {
        'args': ['headless']
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);
    return new webdriver.Builder().withCapabilities(chromeCapabilities).build();
};

exports.getGalaxyS5Driver = function () {
    return new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().setMobileEmulation({
            deviceName: 'Galaxy S5'
        }))
        .build();
};

exports.quitDriver = function (driver) {
    return driver.quit();
}