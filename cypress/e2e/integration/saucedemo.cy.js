///<reference types="cypress"/>

import LandingPage from "../../support/pages/LandingPage.js";
import HomePage from "../../support/pages/HomePage.js";
import HamburgerMenu from "../../support/pages/HamburgerMenu.js";


const landingPage = new LandingPage();
const homePage = new HomePage();
const hamburgerMenu = new HamburgerMenu();


context('Saucedemo test', () => {
  let numberOfItem;
  beforeEach(() => {
    numberOfItem = 0;
    cy.visit('https://www.saucedemo.com/');
  })

  it('Log in', () => {

      landingPage.isOnLandingPage();
      landingPage.fieldsOnLandingPage();
      cy.fixture('user.json').then(user => {
        landingPage.typeInCredentials(user.standardUsername, user.passWord);
      })
      landingPage.clickLogin();
      homePage.isOnHomePage();
    })
 
  it('Hamburger menu', () => {

    landingPage.isOnLandingPage();
    landingPage.fieldsOnLandingPage();
    cy.fixture('user.json').then(user => {
      landingPage.typeInCredentials(user.standardUsername, user.passWord);
    })
    landingPage.clickLogin();
    homePage.isOnHomePage();
    hamburgerMenu.existHamburgerIcon();
    hamburgerMenu.clickHamburgerIcon(); 
    hamburgerMenu.existHamburgerMenu();
  })
  
  it('Logout', () => {

    landingPage.isOnLandingPage();
    landingPage.fieldsOnLandingPage();
    cy.fixture('user.json').then(user => {
      landingPage.typeInCredentials(user.standardUsername, user.passWord);
    })
    landingPage.clickLogin();
    homePage.isOnHomePage();
    hamburgerMenu.existHamburgerIcon();
    hamburgerMenu.clickHamburgerIcon(); 
    homePage.clickLogOut();
  })
  
  })
