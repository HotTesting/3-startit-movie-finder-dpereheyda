'use strict';
const EC = protractor.ExpectedConditions;
const browser = protractor.browser;

describe('Search functionality', () => {
    
    beforeEach(() => {
    browser.get('')
    })
  
    afterEach(() => {
      browser.executeScript('window.sessionStorage.clear();')
      browser.executeScript('window.localStorage.clear();')
      browser.driver.manage().deleteAllCookies()
    });

  describe('Check content in movie cards in search results', () => {

    xit('Check all elements in First Movie Card', () => {
      let firstMovieCardContainer = $('div.col-sm-6.col-md-4:nth-child(1) movie-card')
      let moviePicture = firstMovieCardContainer.$('img')
      let movieTitle = firstMovieCardContainer.$('h4 a')
      let movieReleaseDate = firstMovieCardContainer.$(' div  h4 + p')
      let movieDetailsLink = firstMovieCardContainer.$('div p a')
      let movieRating = firstMovieCardContainer.$('div p small')

      expect(moviePicture.isDisplayed()).toBe(true, 'Picture is not displayed')
      expect(movieTitle.isDisplayed()).toBe(true, 'Title is not displayed')
      expect(movieReleaseDate.isDisplayed()).toBe(true, 'Release date is not displayed')
      expect(movieDetailsLink.isDisplayed()).toBe(true, 'Link Details is not displayed')
      expect(movieRating.isDisplayed()).toBe(true, 'Rating is not displayed')
    })
  })

  describe('Search by request', () => {
  
    xit('should do search by search request and check first', () => {
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
  
    it('should do search and check search results in all cards', () => {
      let searchField = $("input[name='searchStr']")
      let buttonSearch = $("span.input-group-btn")
      let searchRequest = 'Titanic'
      searchField.sendKeys(searchRequest)
      buttonSearch.click()

      let movieTitlesInSearchResults = $$("movies div.row.is-flex:nth-child(2) movie-card h4 a")
      browser.wait(EC.presenceOf(movieTitlesInSearchResults, 5000))
    
      let allTitles = movieTitlesInSearchResults.getText().then(allTitles=> {
        allTitles.map(allTitles => {
          expect(allTitles).toContain(searchRequest,'Search result contains wrong strings')
        })
      })
    })
  })
});