/// <reference types="cypress"/>

import {
  PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Saucedemo different user test', () => {
  beforeEach(() => {
    cy.visit('/')
  Cypress.on('uncaught:exception', (err, runnable) => {
     return false
  })
  cy.clearLocalStorage()
})
 
  it('Logging via correct user', () => {
    
      cy.loginFormValidation_UI();
      cy.loggingIn(Cypress.env('users').correct_user["username"], Cypress.env('users').correct_user["password"]);
      cy.homePageValidation_UI();
      cy.loggingOut();

    })

    it('Logging via locked out user', () => {

      cy.loginFormValidation_UI();
      cy.loggingIn(Cypress.env('users').blocked_user["username"], Cypress.env('users').blocked_user["password"]);
      cy.verifyText('h3', 'Epic sadface: Sorry, this user has been locked out.')  
    })
    
    it('Logging via problem user', () => {

      cy.loginFormValidation_UI();
      cy.loggingIn(Cypress.env('users').bad_user["username"], Cypress.env('users').bad_user["password"]);
      cy.elementIsVisible('#item_4_img_link > .inventory_item_img')
      cy.loggingOut();
    })

    it('Logging via glitch user', () => {

      cy.loginFormValidation_UI();
      cy.loggingIn(Cypress.env('users').glitch_user["username"], Cypress.env('users').glitch_user["password"]);
      
      cy.homePageValidation_UI();
    
      cy.loggingOut();
      
    })
  })