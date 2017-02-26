module.exports.config = {
    specs: ['spec.js'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    onPrepare: () => {
        browser.driver.manage().window().maximize();
    }
}