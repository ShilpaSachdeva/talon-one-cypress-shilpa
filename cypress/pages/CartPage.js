class CartPage {
  // =========================
  // Selectors
  // =========================
  selectors = {
    placeOrderButton: () => cy.contains("button", "Place Order"),
    purchaseButton: () => cy.contains("button", "Purchase"),
    cartProducts: "tr.success, tr",
    nameInput: "#name",
    countryInput: "#country",
    cityInput: "#city",
    cardInput: "#card",
    monthInput: "#month",
    yearInput: "#year",
  };

  // =========================
  // Actions
  // =========================
  getPlaceOrderButton() {
    return this.selectors.placeOrderButton();
  }

  clickPlaceOrderButton() {
    this.getPlaceOrderButton().click();
  }

  verifyProductInCart(productName) {
    cy.get(this.selectors.cartProducts).contains(productName).should("exist");
  }

  fillOrderForm(name, country, city, card, month, year) {
    if (name) {
      cy.get(this.selectors.nameInput).type(name, { delay: 30 });
    }

    if (country) {
      cy.get(this.selectors.countryInput).type(country, { delay: 30 });
    }

    if (city) {
      cy.get(this.selectors.cityInput).type(city, { delay: 30 });
    }

    if (card) {
      cy.get(this.selectors.cardInput).type(card, { delay: 30 });
    }

    if (month) {
      cy.get(this.selectors.monthInput).type(month, { delay: 30 });
    }

    if (year) {
      cy.get(this.selectors.yearInput).type(year, { delay: 30 });
    }
  }

  getPurchaseButton() {
    return this.selectors.purchaseButton();
  }

  clickPurchase() {
    this.getPurchaseButton().click();
  }
}

export default new CartPage();
