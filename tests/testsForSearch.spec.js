'use strict'

const EC = protractor.ExpectedConditions
const browser = protractor.browser
const HomePage = require('../pageObjects/HomePage.js').HomePage

describe('Search functionality', () => {

    let homePage;

    beforeEach(() => {
        homePage = new HomePage().open()
    })

    // afterEach(() => {
    //   browser.executeScript('window.sessionStorage.clear();')
    //   browser.executeScript('window.localStorage.clear();')
    //   browser.driver.manage().deleteAllCookies()
    // })

    describe('Check content in movie cards in search results', () => {

        let homePage;
        homePage = new HomePage()

        xit('Check all elements in Movie Cards', () => {

            let firstMovieCard = homePage.allMovieCards.first()
            let moviePicture = firstMovieCard.$('img')
            let movieTitle = firstMovieCard.$('h4 a')
            let movieReleaseDate = firstMovieCard.$('div  h4 + p')
            let movieDetailsLink = firstMovieCard.$('div p a')
            let movieRating = firstMovieCard.$('div p small')

            expect(moviePicture.isDisplayed()).toBe(true, 'Picture is not displayed')
            expect(movieTitle.isDisplayed()).toBe(true, 'Title is not displayed')
            expect(movieReleaseDate.isDisplayed()).toBe(true, 'Release date is not displayed')
            expect(movieDetailsLink.isDisplayed()).toBe(true, 'Link Details is not displayed')
            expect(movieRating.isDisplayed()).toBe(true, 'Rating is not displayed')
        })
    })

    xdescribe('Search by request', () => {

        let homePage;
        homePage = new HomePage()

        it('should do search by search request and check first movie card', () => {

            let searchRequest = 'The Matrix'
            homePage.searchForMovie(searchRequest)

            let movieTitle = homePage.getSearchResults().first().$('h4 a').getText()
            expect(movieTitle).toContain(searchRequest, 'First search result should contain The Matrix')
        })

        it('should do search and check search results in all cards', () => {

            let searchRequest = 'Titanic'
            homePage.searchForMovie(searchRequest)

            let movieTitlesInSearchResults = homePage.getSearchResults().$$('h4 a')

            let allTitles = movieTitlesInSearchResults.getText().then(allTitles => {
                allTitles.map(allTitles => {
                    expect(allTitles).toContain(searchRequest, 'Search result contains wrong strings')
                })
            })
        })
    })
});