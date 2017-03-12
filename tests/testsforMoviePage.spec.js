'use strict';
const EC = protractor.ExpectedConditions;
const browser = protractor.browser;

describe('Movie page', () => {
  
  xit('should open first Movie Card and compare it with opened Movie Page', () => {
    browser.get('')
    let firstMovieCardContainer = $('div.col-sm-6.col-md-4:nth-child(1) movie-card')
    let movieCardPicture = firstMovieCardContainer.$('img').getAttribute('ng-reflect-src').toString().substr(35)
    let movieCardTitle = firstMovieCardContainer.$('h4 a').getText()
    let movieCardRating = firstMovieCardContainer.$('div p small').getText()
    let movieCardDetailsLink = firstMovieCardContainer.$('div p a')

    movieCardDetailsLink.click()
    let moviePageTitle = $('app-movie div:nth-child(1) div.col-md-8 h2')
    browser.wait(EC.presenceOf(moviePageTitle), 5000);

    let moviePagePicture = $('app-movie img.thumbnail').getAttribute('ng-reflect-src').toString().substr(35)
    let moviePageRating = $('app-movie div.col-md-8 small')
    expect(moviePagePicture).toEqual(movieCardPicture, 'Different pictures in Card and Page')
    expect(moviePageTitle.getText()).toContain(movieCardTitle, 'Different titles in Card and Page')
    expect(moviePageRating.getText()).toEqual(movieCardRating, 'Different ratings in Card and Page')
  })

});