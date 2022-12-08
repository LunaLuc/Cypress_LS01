import {Component} from "react";
export default LazadaHomePage
class LazadaHomePage{
    getChooseLogin(){
        return cy.xpath('//div[@id="anonLogin"]')
    }
    getUserLogin(){
        return cy.xpath('//div[@class="mod-input mod-login-input-loginName mod-input-loginName"]')
    }

    getPasswordLogin(){
        return cy.xpath('//div[@class="mod-input mod-input-password mod-login-input-password mod-input-password"]')
    }

    getClickLogin(){
        return cy.xpath('//div[@class="mod-login-btn"]')
    }

}
export default LazadaHomePage