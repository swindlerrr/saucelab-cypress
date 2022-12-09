class HomePage {
    homePageLogo = "div.app_logo";
    btnLogOut = "#logout_sidebar_link";


   
        cy.elementExist( pe.homePageLogo)
    
        cy.elementExist(pe.btnLogOut).click();
   

}

export default HomePage;