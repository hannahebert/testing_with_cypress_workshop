/// <reference types="cypress" />

import Chainable = Cypress.Chainable;

declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): void;

    dataCy(testid: string): Chainable<JQuery<HTMLElement>>;
  }
}


Cypress.Commands.add('login', (username: string, password: string): void => {
  cy.visit('login');
  cy.get('[data-cy="username"]').type('cypress', {log: false});
  cy.get('[data-cy="password"]').type('bingo', {log: false});

  cy.get('[data-cy="submit-button"]')
    .click()
    .should('not.exist');

  cy.url().should('eq', `${Cypress.config().baseUrl}/bingo-board`);

  cy.get('.board-title').should('have.text', 'Bingo');
});

Cypress.Commands.add('clickBingoField', (index: number): Chainable<JQuery<HTMLElement>> => {
  return cy.dataCy('bingo-field')
    .eq(index)
    .click();
});

Cypress.Commands.add('dataCy', (testid: string): Chainable<JQuery<HTMLElement>> => cy.get(`[data-cy=${testid}]`));
