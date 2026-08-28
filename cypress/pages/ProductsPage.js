class ProductsPage {
  // =========================
  // Selectors
  // =========================
  selectors = {
    loggedInUser: "#nameofuser",
    navigationBarBrand: ".navbar-brand",
    productCard: ".card-block",
    categoryItem: ".list-group-item",
    productLink: ".hrefch",
  };

  // =========================
  // Locators
  // =========================
  getLoggedInUser() {
    return cy.get(this.selectors.loggedInUser);
  }

  getNavigationBarBrand() {
    return cy.get(this.selectors.navigationBarBrand);
  }

  getProductByName(productName) {
    return cy.contains(this.selectors.productCard, productName);
  }

  getCategory(categoryName) {
    return cy.contains(this.selectors.categoryItem, categoryName);
  }

  getProductByNameLink(productName) {
    return cy.contains(this.selectors.productLink, productName);
  }

  // =========================
  // Actions / Verifications
  // =========================
  verifyLoggedInUser(expectedUsername) {
    this.getLoggedInUser().should("contain.text", expectedUsername);
  }

  verifyNavigationBarBrand(expectedText) {
    this.getNavigationBarBrand().should("contain.text", expectedText);
  }

  verifyProductByName(productName) {
    this.getProductByName(productName).should("be.visible");
  }

  selectCategory(categoryName) {
    this.getCategory(categoryName).click();
  }

  selectProductByName(productName) {
    this.getProductByNameLink(productName).click();
  }
}

export default new ProductsPage();
