describe('test suite name', ()=> {
    // it('test case name', ()=> {
    //     browser.get('')
    //     let searchField = $("input[name = 'searchStr']")
    //     let buttonSearch = $("span.input-group-btn")
    //     let searchRequest = 'The Matrix'
    //     searchField.sendKeys(searchRequest)
    //     buttonSearch.click()
    //     browser.sleep(5000)
    //     let movieCard = $('movie-card')
    //     let movieTitle = movieCard.$('h4 a').getText()
    //     expect(movieTitle).toContain(searchRequest, 'First search result should contain The Matrix')
    // });


        it('test case name', ()=> {
        browser.get('')
        let searchField = $("input[name = 'searchStr']")
        let buttonSearch = $("span.input-group-btn")
        let searchRequest = 'The Matrix'
        
        searchField.sendKeys(searchRequest)
        buttonSearch.click()
        
        var EC = protractor.ExpectedConditions;
        let movieCard = $('movie-card')
        browser.wait(EC.textToBePresentInElement(movieCard, searchRequest), 5000);
        let movieTitle = movieCard.$('h4 a').getText()
        expect(movieTitle).toContain(searchRequest, 'First search result should contain The Matrix')
    })
})
