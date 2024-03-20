describe('login', () => {
  it('should successfully login', () => {
    cy.visit('http://localhost:4200/')
    cy.contains('Bingo')
    cy.get('[data-cy="login-form"]').find('h3').should('contain', 'Anmeldung')
  })
})
