class GoogleHomePage{
    getGoogleSearchTextbox(){
        return  cy.xpath("//input[@name='q']")
    }
}
export default GoogleHomePage