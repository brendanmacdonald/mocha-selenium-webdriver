var webdriver = require('selenium-webdriver');

exports.getDriver = function () {
   let chromeCapabilities = webdriver.Capabilities.chrome();
        let chromeOptions = {
            'args': ['headless']
        };
        chromeCapabilities.set('chromeOptions', chromeOptions);
        return new webdriver.Builder().withCapabilities(chromeCapabilities).build();
};

exports.quitDriver = function (driver) {
    return driver.quit();
}