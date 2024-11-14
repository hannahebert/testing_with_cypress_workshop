describe('login', () => {
  it('should successfully login', () => {

    cy.visit('/');

    cy.get('[data-cy="username"]')
      .type('cypress');
    cy.get('[data-cy="password"]')
      .type('bingo', { log: false });

    cy.get('[data-cy="submit-button"]').click();

    cy.get('.header-container', { timeout: 10000 })
      .find('button')
      .should('exist');
  })
})
