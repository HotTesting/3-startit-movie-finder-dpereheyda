let AbstractPage = require('./AbstractPage.js').AbstractPage

class CategoriesPage extends AbstractPage {
    constructor(url) {
        super()
        this.categoryContainer = $('.movies-cat .nav-stacked')
        this.categoryName = $('.movies-cat .list-group-item')
        this.categoryPageTitle = $('.orange-text')
    }

    openCategoryByName(name) {
        return element(by.linkText(name)).click()
    }

    categoryPageIsDisplayed() {
        let pageTitle = protractor.ExpectedConditions.visibilityOf(this.categoryPageTitle)
        return browser.wait(pageTitle, 3000, 'Title on category page is not visible')
    }

}

module.exports.CategoriesPage = CategoriesPage