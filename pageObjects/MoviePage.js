let AbstractPage = require('./AbstractPage.js').AbstractPage

class MoviePage extends AbstractPage {
    constructor(url) {
        super()
        this.URL = ''
        this.moviePageTitle = $('app-movie div:nth-child(1) div.col-md-8 h2')
        this.moviePagePicture = $('app-movie img.thumbnail').getAttribute('ng-reflect-src').toString().substr(35)
        this.moviePageRating = $('app-movie div.col-md-8 small')
        
    }
}

module.exports.MoviePage = MoviePage