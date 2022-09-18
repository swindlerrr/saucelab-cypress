class HamburgerMenu{
    HamburgerIcon = "button#react-burger-menu-btn";
    HamburgerMenu = "div.bm-menu-wrap";
    
    existHamburgerIcon = () => {
        cy.get(this.HamburgerIcon).should('be.visible');
    }
    clickHamburgerIcon = () => {
        
        cy.get(this.HamburgerIcon).click();
    }

    existHamburgerMenu = () => {
        cy.get(this.HamburgerMenu).should('be.visible');
     
    }
    
    }

export default HamburgerMenu;