import LoginPage from '../pages/LoginPage';
import ProductDetails from '../pages/ProductsPage';
import user from '../fixtures/users.json';

describe('Login Flow', () => {

  it('should log in successfully with valid credentials', () => {
    LoginPage.openLoginModal();
    LoginPage.fillUsername(user.validUser.username);
    LoginPage.fillPassword(user.validUser.password);
    LoginPage.clickLogin();
    ProductDetails.verifyLoggedInUser(user.validUser.username);
  });

  it('should not be able to login with unregistered user / invalid username', () => {
    LoginPage.openLoginModal();
    LoginPage.fillUsername(user.invalidUser.username);
    LoginPage.fillPassword(user.invalidUser.password);
    cy.stubAlert();
    LoginPage.clickLogin();
    cy.shouldHaveAlert('User does not exist.');
  });

  it('should not be able to login with blank username and blank password', () => {
    LoginPage.openLoginModal();
    cy.stubAlert();
    LoginPage.clickLogin();
    cy.shouldHaveAlert('Please fill out Username and Password.');
  });

  it('should not be able to login with invalid password', () => {
    LoginPage.openLoginModal();
    LoginPage.fillUsername(user.validUser.username);
    LoginPage.fillPassword(user.invalidUser.password);
    cy.stubAlert();
    LoginPage.clickLogin();
    cy.shouldHaveAlert('Wrong password.');
  })

});
