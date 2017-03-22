module.exports.config = {
    directConnect: false,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    specs: ['./tests/*.spec.js'],
    onPrepare: () => {
        browser.driver.manage().window().maximize();
        let Jasmine2Reporter = require('jasmine2-reporter').Jasmine2Reporter
        jasmine.getEnv().addReporter(new Jasmine2Reporter());
        let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
            })
        )
    },
//    seleniumArgs: ['-Dwebdriver.edge.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/MicrosoftWebDriver.exe'],
//    seleniumArgs: ['-Dwebdriver.gecko.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.15.0.exe'],
    capabilities: {
        browserName: 'firefox',
        count: 1,
        shardTestFiles: false,
        maxInstances: 1,
        seleniumAddress: 'http://localhost:4444/wd/hub'
     }
}