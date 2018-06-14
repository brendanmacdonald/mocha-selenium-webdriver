const { Builder, By} = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox');

exports.getHeadlessDriver = () => {
    return new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .forBrowser('firefox')
        .setFirefoxOptions(new firefox.Options().headless())
        .build();
};

exports.getGalaxyS5Driver = () => {
    return new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().setMobileEmulation({
            deviceName: 'Galaxy S5'
        }))
        .build();
};

exports.quitDriver = function (driver) {
    return driver.quit();
}