describe('Google',()=>{
    beforeEach(() =>{
        cy.viewport(1920, 1080)
        //cy.clearCookies()
        //cy.getCookies().should('be.empty')
    })

    before(()=> {
    })
    it('Access to Zara',(done) => {
        cy.visit('https://www.acfc.com.vn/', {failOnStatusCode: false})
        cy.wait(3000)

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
            // this event will automatically be unbound when this
            // test ends because it's attached to 'cy'
        //cy.xpath("//input[@id='northern']").click({ waitForAnimations: false })


        cy.xpath("//input[@id='northern']").click({force: true})

        //select location option
        //cy.xpath("//input[@id='northern']").click()
        cy.wait(3000)

        //click confirm location
        cy.xpath("//button[@class='mgn-location-popup-button']").click()
        cy.wait(3000)

        //tap and input value to search box
        cy.xpath("//input[@id='search']")
            .type('Dress')
            .type('{enter}')
        cy.wait(3000)

        //choose the first item
        cy.xpath("//div[@class='products wrapper products-grid products-grid-3-columns']//li[1]").click()
        cy.wait(3000)

        //select size of item
        cy.xpath("//div[@class='swatch-attribute-options clearfix']//div[1]").click()
        cy.wait(3000)

        //Click add to card
        cy.xpath("//button[@id='product-addtocart-button']").click()
        cy.wait(4000)
        //cy.clearCookies({log: true})
        //cy.clearLocalStorage('your item', {log: true})

        //go to cart page
        cy.xpath("//div[@class='minicart-wrapper']").click()

        //Verify new URL which includes /shop/cart
        cy.url().should('include', 'checkout/cart')
        cy.wait(3000)

        //Verify price in cart
        const normalizeText = (inputString) => inputString.replace(/\s/g, '').toLowerCase()

        //col subtotal price of items
        let firstPrice

        //grand total price for items
        let secondPrice

        cy.xpath("//td[@class='col subtotal']//span[1]//span[@class='cart-price']")
            .find('.price')
            .then(($price) => {
                firstPrice = normalizeText($price.text())
            })

        cy.xpath("//tr[@class='grand totals']//td[1]//strong[1]")
        //cy.xpath("//tr[@class='totals sub']//td[1]") //tr[@class='grand totals']//td[1]//strong
            .find('.price')
            .then(($price) => {
                secondPrice = normalizeText($price.text())

                expect(secondPrice, 'second price').to.equal(secondPrice)
            })

        cy.clearCookies()
        //cy.getCookies().should('be.empty')
    })

})
