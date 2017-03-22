let AbstractPage = require('./AbstractPage.js').AbstractPage

class MoviePage extends AbstractPage {
    constructor(url) {
        super()
        this.URL = ''
        this.moviePageTitle = $('app-movie div:nth-child(1) div.col-md-8 h2')
        this.moviePagePicture = $('app-movie img.thumbnail')
        this.moviePageRating = $('app-movie div.col-md-8 small')
        this.moviePageCateories = $$('.label-info')
    }

    moviePageIsDisplayed() {
        let moviePageTitle = protractor.ExpectedConditions.visibilityOf(this.moviePageTitle)
        return browser.wait(moviePageTitle, 3000, 'Movie title is not visible')
    }

    getMoviePageTitle() {
        return this.moviePageTitle.getText()
    }
}

module.exports.MoviePage = MoviePage