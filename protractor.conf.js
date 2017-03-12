module.exports.config = {
    directConnect: true,
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
    }
}