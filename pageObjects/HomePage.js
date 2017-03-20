let AbstractPage = require('./AbstractPage.js').AbstractPage

class HomePage extends AbstractPage {
    constructor(url) {
        super()
        this.URL = ''

        // Search Form
        this.searchField = $("input[name='searchStr']")
        this.goButton = element(by.buttonText('Go!'))

        // Movie cards
        this.movieCardsInSearchResults = element(by.cssContainingText('movies div', 'Search Results')).$$('movie-card')
        this.allMovieCards = $$('movie-card')
        this.movieCardPicture = $('img')
        this.movieCardTitle = $('h4 a')
        this.movieCardReleaseDate = $('div  h4 + p')
        this.movieCardDetailsLink = $('div p a')
        this.movieCardRating = $('div p small')
    }

    open() {
        super.open()
    }

    searchForMovie(searchRequest) {
        this.searchField.sendKeys(searchRequest)
        this.goButton.click()
    }

    getSearchResults() {
        let waitForSearchMovieCards = protractor.ExpectedConditions.visibilityOf(this.movieCardsInSearchResults)
        browser.wait(waitForSearchMovieCards, 10000, 'Search result is not visible')
        return this.movieCardsInSearchResults
    }

    homePageIsDisplayed(){
        let searchField = protractor.ExpectedConditions.visibilityOf(this.searchField)
        return browser.wait(searchField, 3000, 'Search field is not visible')
    }

}

module.exports.HomePage = HomePage