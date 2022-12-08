class CuraHomePage{
    getUsername(){
        return cy.xpath('//input[@id="txt-username"]')
    }

    getPassword(){
        return cy.xpath('//input[@id="txt-password"]')
    }

    getLoginButton(){
        return cy.get('#btn-login')
    }

    getSuccessLoginMessage(){
        return cy.xpath('//h1[text()="CURA Healthcare Service"]')
    }

    getFailLoginMessage(){
        return cy.xpath('//p[@class="lead text-danger1"]')
    }
}
export default CuraHomePage