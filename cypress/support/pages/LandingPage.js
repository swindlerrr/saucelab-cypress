class LandingPage {
    loginLogo = "div.login_logo";
    txtUserName = "input#user-name";
    txtPassword = "input#password";
    btnLogin = "input#login-button";

    isOnLandingPage = () => {
         cy.get(this.loginLogo).should('be.visible');
    }
    fieldsOnLandingPage = () => {
        cy.get(this.txtUserName).should('be.visible');
        cy.get(this.txtPassword).should('be.visible');
   }

    typeInCredentials = (userName, passWord) => {
        cy.get(this.txtUserName).type(userName);
        cy.get(this.txtPassword).type(passWord);
    }

    clickLogin = () => {
        cy.get(this.btnLogin).click();
    }

}

export default LandingPage;