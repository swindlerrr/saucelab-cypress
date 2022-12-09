/// <reference types="cypress" />

const {
  PageElements
} = require("../support/selectors")
  
  const pe = new PageElements()
  
Cypress.Commands.add('loginFormValidation_UI', () => {
   // cy.lighthouse()  This should work
   cy.elementIsVisible('div.login_logo')
   cy.elementIsVisible(pe.userNameField)
   cy.elementIsVisible(pe.passField)
})

Cypress.Commands.add('loggingIn', (userName, passWord) => {
   cy.get(pe.userNameField).type(userName);
   cy.get(pe.passField).type(passWord);
   cy.get('input#login-button').click();
   

})

Cypress.Commands.add('homePageValidation_UI', () => {
   cy.elementIsVisible('div.app_logo');
   cy.elementIsVisible('a.shopping_cart_link');
   cy.elementIsVisible('#item_4_img_link > .inventory_item_img');
   
})

Cypress.Commands.add('loggingOut', () => {
   cy.elementIsVisible(pe.hamburgerIcon).click();
   cy.elementIsVisible('div > div.bm-menu');
   cy.elementIsVisible(pe.btnLogOut).click();
})

Cypress.Commands.add('elementIsVisible', (element) => {
   cy.get(element).should('be.visible')
 })

 Cypress.Commands.add('elementExist', (element) => {
   cy.get(element).should('exist')
 })

 Cypress.Commands.add('verifyText', (elementuu, texte) => {
   cy.get(elementuu).should('have.text', texte)
 })
/* Cypress.Commands.add('loginFormValidation_UI', () => {
    isOnLandingPage = () => {
        cy.get(pe.loginLogo).should('be.visible');
    }
    fieldsOnLandingPage = () => {
       cy.get(pe.txtUserName).should('be.visible');
       cy.get(pe.txtPassword).should('be.visible');
    }
    
    typeInCredentials = (userName, passWord) => {
       cy.get(pe.txtUserName).type(userName);
       cy.get(pe.txtPassword).type(passWord);
    }
    
    clickLogin = () => {
       cy.get(pe.btnLogin).click();
    }
    }) */