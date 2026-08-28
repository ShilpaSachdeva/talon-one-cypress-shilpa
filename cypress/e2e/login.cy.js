describe('Login', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://www.demoblaze.com')

    cy.get('#login2').should('be.visible').click()

    cy.get('#loginusername')
      .should('be.visible')
      .type('talonqa_shilpa', { delay: 300 })

    cy.get('#loginpassword')
      .should('be.visible')
      .type('Dummy@123', { delay: 300 })

    cy.contains('button', 'Log in')
      .should('be.visible')
      .click()

    cy.contains(`Welcome talonqa_shilpa`)
      .should('be.visible')
  })
})