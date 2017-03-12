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
        this.movieCards = $$('movie-card')
        this.firstMovieCardContainer = this.movieCards.first()
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

    getMovieCardByIndex(resultIndex) {
        this.getSingleMovieCard('div.col-sm-6.col-md-4:nth-child(' + resultIndex + ') movie-card')
    }

    getSingleMovieCard(pageComponent) {
        this.movieCardPicture = $(pageComponent + ' img')
        // movieCardTitle: $(pageComponent + ' h4 a'),
        // movieCardReleaseDate: $(pageComponent + ' div  h4 + p'),
        // movieCardDetailsLink: $(pageComponent +' div p a'),
        // movieCardRating: $(pageComponent + ' div p small')
    }
}

module.exports.HomePage = HomePage