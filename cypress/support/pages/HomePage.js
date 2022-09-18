class HomePage {
    homePageLogo = "div.app_logo";
    btnLogOut = "#logout_sidebar_link";
    /*btnAddToCart = "[data-test*='add-to-cart']";
    btnRemove = "[data-test*='remove']";
    inventoryItem = ".inventory_item"
    shoppingCartItemQuantity = "span[class='shopping_cart_badge']";
    btnShoppingCart = "#shopping_cart_container";*/
    

    isOnHomePage = () => {
        cy.get( this.homePageLogo).should('exist');
    }

    logOut = () => {
        cy.get(this.btnLogOut).click();
    }

    /*addProductToCart = (productName) => {
        cy.contains(productName)
        .parents(this.inventoryItem)
        .find(this.btnAddToCart)
        .click();
    }

    verifyAddToCartButtonAt = (productName) => {
        cy.contains(productName)
        .parents(this.inventoryItem)
        .find(this.btnRemove)
        .should('have.text',"Remove");
    }

    verifyAddToCartIcon = (numberOfItem) => {
        cy.get(this.shoppingCartItemQuantity).should('have.text', numberOfItem+"");
    }

    goToShoppingCart = () => {
        cy.get(this.btnShoppingCart).click();
    }*/

}

export default HomePage;