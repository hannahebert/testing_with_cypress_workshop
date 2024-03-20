describe('Login', () => {

  /*
  * 1. Navigiere zu 'http://localhost:4200/login'.
  * 2. Logge dich ein (Name: 'cypress' & Password: 'bingo').
  * 3. Stelle sicher, dass der Login funktioniert hat.
  *
  * Tipps:
  * - Probiere den Selector Playground aus. https://docs.cypress.io/guides/core-concepts/cypress-app#Selector-Playground
  * - Versuche die Selektoren nach Cypress Best Practices zu wählen. https://https://docs.cypress.io/guides/references/best-practices#Selecting-Elements
  * - Verhindere, dass Passwort und Username in den Logs vorkommen. https://docs.cypress.io/api/commands/type
  * - Lagere baseUrl in cypress.config.ts aus.
  */

  beforeEach(() => {
    cy.visit('login');
  });

  it('should navigate to Conference Bingo', (): void => {
    cy.get('[data-cy="username"]').type('cypress', {log: false});
    cy.get('[data-cy="password"]').type('bingo', {log: false});

    cy.get('[data-cy="submit-button"]')
      .click()
      .should('not.exist');

    cy.url().should('eq', `${Cypress.config().baseUrl}/bingo-board`);

    cy.get('.board-title').should('have.text', 'Biggngo');
  });
});
