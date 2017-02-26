'use strict';
const EC = protractor.ExpectedConditions;
const browser = protractor.browser;

describe('test suite name', () => {
  
  it('Search by search request', () => {
    browser.get('')
    let searchField = $("input[name='searchStr']")
    let buttonSearch = $("span.input-group-btn")
    let searchRequest = 'The Matrix'

    searchField.sendKeys(searchRequest)
    buttonSearch.click()

    let movieCard = $('movie-card')
    browser.wait(EC.textToBePresentInElement(movieCard, searchRequest), 5000);
    let movieTitle = movieCard.$('h4 a').getText()
    expect(movieTitle).toContain(searchRequest, 'First search result should contain The Matrix')
  })

  it('Check all elements in First Movie Card', () => {
    browser.get('')
    let firstMovieCardContainer = $('div.col-sm-6.col-md-4:nth-child(1) movie-card')
    let moviePicture = firstMovieCardContainer.$('img')
    let movieTitle = firstMovieCardContainer.$('h4 a')
    let movieReleaseDate = firstMovieCardContainer.$(' div  h4 + p')
    let movieDetailsLink = firstMovieCardContainer.$('div p a')
    let movieRating = firstMovieCardContainer.$('div p small')

    expect(moviePicture.isDisplayed()).toBe(true)
    expect(movieTitle.isDisplayed()).toBe(true)
    expect(movieReleaseDate.isDisplayed()).toBe(true)
    expect(movieDetailsLink.isDisplayed()).toBe(true)
    expect(movieRating.isDisplayed()).toBe(true)
  })
  
  it('Check search results in all cards', () => {
    browser.get('')
    let searchField = $("input[name='searchStr']")
    let buttonSearch = $("span.input-group-btn")
    let searchRequest = 'Titanic'
    searchField.sendKeys(searchRequest)
    buttonSearch.click()

    let movieTitlesInSearchResults = $("movies div.row.is-flex:nth-child(2) movie-card h4 a")
    browser.wait(EC.presenceOf(movieTitlesInSearchResults, 5000))
  
    let allTitles = $$("movies div.row.is-flex:nth-child(2) movie-card h4 a").getText().then(allTitles=> {
      allTitles.map(allTitles=> {
        expect(allTitles).toContain(searchRequest,'Search result contains wrong strings')
      })
    })
  })

  it('Open first movie and check it', () => {
    browser.get('')
    const firstMovieCardContainer = $('div.col-sm-6.col-md-4:nth-child(1) movie-card')
    let movieCardPicture = firstMovieCardContainer.$('img').getAttribute('ng-reflect-src').toString().substr(35)
    let movieCardTitle = firstMovieCardContainer.$('h4 a').getText()
    let movieCardRating = firstMovieCardContainer.$('div p small').getText()
    let movieCardDetailsLink = firstMovieCardContainer.$('div p a')

    movieCardDetailsLink.click()
    let moviePageTitle = $('app-movie div:nth-child(1) div.col-md-8 h2')
    browser.wait(EC.presenceOf(moviePageTitle), 5000);

    let moviePagePicture = $('app-movie img.thumbnail').getAttribute('ng-reflect-src').toString().substr(35)
    let moviePageRating = $('app-movie div.col-md-8 small')
    expect(moviePagePicture).toEqual(movieCardPicture)
    expect(moviePageTitle.getText()).toContain(movieCardTitle)
    expect(moviePageRating.getText()).toEqual(movieCardRating)
  })

});