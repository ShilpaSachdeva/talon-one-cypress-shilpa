import products from '../pages/ProductsPage';
import login from '../pages/LoginPage';
import productDetails from '../pages/ProductDetailsPage';
import cart from '../pages/CartPage';
import users from '../fixtures/users.json';
import product from '../fixtures/products.json';
import orderDetails from '../fixtures/orderDetails.json';


describe('Product Purchase Flow ', () => {
    beforeEach(() => {
        cy.visit('/');
        login.login(users.validUser.username, users.validUser.password);
    })

    it('should be able to purchase laptop', () => {

        // Verify login and navigate through products
        products.verifyNavigationBarBrand('PRODUCT STORE');
        products.verifyLoggedInUser(users.validUser.username);
        products.verifyProductByName(product.Products.Phones[0].name);
        products.selectCategory('Laptops');
        products.verifyProductByName(product.Products.Laptops[0].name);
        products.selectProductByName(product.Products.Laptops[0].name);

        // Verify product details and add to cart
        productDetails.verifyProductDetails(
            product.Products.Laptops[0].name,
            product.Products.Laptops[0].price,
            product.Products.Laptops[0].description
        );
        cy.stubAlert();
        productDetails.clickAddToCart();
        cy.shouldHaveAlert('Product added.');
        productDetails.clickCartLink();

        // Verify cart and place order
        cart.verifyProductInCart(product.Products.Laptops[0].name);
        cart.clickPlaceOrderButton();
        cart.fillOrderForm(orderDetails.completeOrderDetails.name,
            orderDetails.completeOrderDetails.country,
            orderDetails.completeOrderDetails.city,
            orderDetails.completeOrderDetails.card,
            orderDetails.completeOrderDetails.month,
            orderDetails.completeOrderDetails.year);
        cart.clickPurchase();

        // Verify purchase confirmation
        cy.get('.sweet-alert').should('be.visible');
        cy.get('.sweet-alert .confirm').click();


    });

    it('Blank name and credit card details for purchase', () => {

        // Verify login and navigate through products
        products.verifyNavigationBarBrand('PRODUCT STORE');
        products.verifyLoggedInUser(users.validUser.username);
        products.verifyProductByName(product.Products.Phones[0].name);
        products.selectCategory('Laptops');
        products.verifyProductByName(product.Products.Laptops[0].name);
        products.selectProductByName(product.Products.Laptops[0].name);

        // Verify product details and add to cart
        productDetails.verifyProductDetails(
            product.Products.Laptops[0].name,
            product.Products.Laptops[0].price,
            product.Products.Laptops[0].description
        );
        cy.stubAlert();
        productDetails.clickAddToCart();
        cy.shouldHaveAlert('Product added.');
        productDetails.clickCartLink();

        // Verify cart and place order
        cart.verifyProductInCart(product.Products.Laptops[0].name);
        cart.clickPlaceOrderButton();
        cart.fillOrderForm(orderDetails.completeOrderDetails.name,
            orderDetails.completeOrderDetails.country,
            orderDetails.completeOrderDetails.year);
        cy.stubAlert();
        cart.clickPurchase();
        cy.shouldHaveAlert('Please fill out Name and Creditcard.');

    });

});
