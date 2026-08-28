class ProductDetailsPage {
  // =========================
  // Selectors
  // =========================
  selectors = {
    loggedInUser: "#nameofuser",
    productName: ".name",
    productPrice: ".price-container",
    productDescription: "#more-information",
    addToCartButton: "a",
    cartLink: "#cartur",
  };

  // =========================
  // Locators
  // =========================
  getLoggedInUser() {
    return cy.get(this.selectors.loggedInUser);
  }

  getProductName() {
    return cy.get(this.selectors.productName);
  }

  getProductPrice() {
    return cy.get(this.selectors.productPrice);
  }

  getProductDescription() {
    return cy.get(this.selectors.productDescription);
  }

  getAddToCartButton() {
    return cy.contains(this.selectors.addToCartButton, "Add to cart");
  }

  getCartLink() {
    return cy.get(this.selectors.cartLink);
  }

  // =========================
  // Actions / Verifications
  // =========================
  verifyLoggedInUser(expectedUsername) {
    this.getLoggedInUser().should(
      "contain.text",
      `Welcome ${expectedUsername} `,
    );
  }

  verifyProductDetails(productName, productPrice, productDescription) {
    this.getProductName().should("have.text", productName);

    this.getProductPrice().should("contain.text", productPrice);

    this.getProductDescription().should("contain.text", productDescription);
  }

  clickAddToCart() {
    this.getAddToCartButton().click();
  }

  clickCartLink() {
    this.getCartLink().click();
  }
}

export default new ProductDetailsPage();
