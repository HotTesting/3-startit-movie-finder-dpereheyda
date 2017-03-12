class AbstractPage {

    open() {
        browser.get(this.URL)
        return this
    }
}

module.exports.AbstractPage = AbstractPage