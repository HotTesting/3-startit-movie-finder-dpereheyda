'use strict'

const EC = protractor.ExpectedConditions
const HomePage = require('../pageObjects/HomePage.js').HomePage
const MoviePage = require('../pageObjects/MoviePage.js').MoviePage

xdescribe('Movie page', () => {
    let homePage = new HomePage()
    let moviePage = new MoviePage()

    it('should open first Movie Card and compare it with opened Movie Page', () => {
        homePage.open()
        let firstMovieCardContainer = homePage.allMovieCards.first()

        let movieCardPictureURL = firstMovieCardContainer.$('img').getAttribute('ng-reflect-src').then(movieCardPictureURL => movieCardPictureURL.substr(35))
        let movieCardTitle = firstMovieCardContainer.$('h4 a').getText()
        let movieCardRating = firstMovieCardContainer.$('div p small').getText()
        let movieCardDetailsLink = firstMovieCardContainer.$('div p a')

        movieCardDetailsLink.click()
        let moviePageTitle = $('app-movie div:nth-child(1) div.col-md-8 h2')
        browser.wait(EC.presenceOf(moviePageTitle), 5000);

        let moviePagePictureURL = $('app-movie img.thumbnail').getAttribute('ng-reflect-src').then(attributeValue => attributeValue.substr(35))
        let moviePageRating = $('app-movie div.col-md-8 small')
        expect(moviePagePictureURL).toEqual(movieCardPictureURL, 'Different pictures in Card and Page')
        expect(moviePageTitle.getText()).toContain(movieCardTitle, 'Different titles in Card and Page')
        expect(moviePageRating.getText()).toEqual(movieCardRating, 'Different ratings in Card and Page')
    })

    it('should check navigation between pages for browsers "Back" and "Forward" buttons', () => {
        homePage.open()
        homePage.allMovieCards.get(10).$('div p a').click()

        expect(moviePage.moviePageIsDisplayed()).toBeTruthy()
        browser.navigate().back()
        expect(homePage.homePageIsDisplayed()).toBeTruthy()
        browser.navigate().forward()
        expect(moviePage.moviePageIsDisplayed()).toBeTruthy()
    })

});