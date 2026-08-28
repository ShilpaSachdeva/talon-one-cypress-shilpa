class LoginPage {
  // =========================
  // Selectors
  // =========================
  selectors = {
    loginButton: "#login2",
    loginModal: "#logInModal",
    usernameField: "#loginusername",
    passwordField: "#loginpassword",
    submitLoginButton: "#logInModal button",
  };

  // =========================
  // Locators
  // =========================
  getLoginButton() {
    return cy.get(this.selectors.loginButton);
  }

  getLoginModal() {
    return cy.get(this.selectors.loginModal);
  }

  getUsernameField() {
    return cy.get(this.selectors.usernameField);
  }

  getPasswordField() {
    return cy.get(this.selectors.passwordField);
  }

  getSubmitLoginButton() {
    return cy.contains(this.selectors.submitLoginButton, "Log in");
  }

  // =========================
  // Actions
  // =========================
  openLoginModal() {
    cy.visit("/");

    this.getLoginButton().click();

    this.getLoginModal().should("be.visible");
  }

   fillUsername(username) {
    this.getUsernameField().should('be.visible').and('be.enabled').clear().type(username).should('have.value', username);

  }

  fillPassword(password) {
    this.getPasswordField().should('be.visible').and('be.enabled').clear().type(password).should('have.value', password);
  }

  clickLogin() {
    this.getSubmitLoginButton().click();
  }

  login(username, password) {
    this.openLoginModal();

    this.fillUsername(username);

    this.fillPassword(password);

    this.clickLogin();
  }
}

export default new LoginPage();
