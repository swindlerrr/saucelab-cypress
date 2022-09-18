class HomePage {
    homePageLogo = "div.app_logo";
    btnLogOut = "#logout_sidebar_link";


    isOnHomePage = () => {
        cy.get( this.homePageLogo).should('exist');
    }

    clickLogOut = () => {
        cy.get(this.btnLogOut).click();
    }


}

export default HomePage;