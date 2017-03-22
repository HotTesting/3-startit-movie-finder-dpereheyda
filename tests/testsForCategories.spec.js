'use strict'

const EC = protractor.ExpectedConditions
const HomePage = require('../pageObjects/HomePage.js').HomePage
const CategoriesPage = require('../pageObjects/CategoriesPage.js').CategoriesPage
const MoviePage = require('../pageObjects/MoviePage.js').MoviePage

describe('Categories', () => {

    let homePage = new HomePage()
    let categoriesPage = new CategoriesPage()

    xit('Open one category', () => {
        let category = 'Crime'

        homePage.open()
        categoriesPage.openCategoryByName(category)

        categoriesPage.categoryPageIsDisplayed()
        let categoryPageTitle = categoriesPage.categoryPageTitle
        expect(categoryPageTitle.getText()).toEqual(category, 'Different titles for category link and category page')
    })

    it('should navigate to category page from movie page by click on the category tag', () => {
        let moviePage = new MoviePage()
        browser.get('movie/47971')

        let movieCategory = moviePage.moviePageCateories.first()
        let movieCategoryTitle = movieCategory.getText()
        movieCategory.click()

        categoriesPage.categoryPageIsDisplayed()
        let categoryPageTitle = categoriesPage.categoryPageTitle
        expect(categoryPageTitle.getText()).toEqual(movieCategoryTitle, 'Different titles for category page and film')
    })


});