### Execute the tests with
```
npm run test1
```
OR
```
npm run test2
```
The tests are hard-coded to execute on the Chrome browser.
To run them on Firefox, use:
```
SELENIUM_BROWSER=firefox npm run test2
```

### Reports
Reports are generated in 
```
./mochawesome-report 
```

### Notes
There is a global setup file (currently only logs console messages):
```
./tests/global.js
```

The driver is configured in:
```
./tests/utils/driver.js
```

### Docs
 - https://www.npmjs.com/package/selenium-webdriver
 - https://seleniumhq.github.io/selenium/docs/api/javascript/index.html
 - 