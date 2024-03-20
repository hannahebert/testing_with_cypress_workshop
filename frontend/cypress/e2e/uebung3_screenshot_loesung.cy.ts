describe('Bingofields', () => {
  /*
  * 1. Navigiere zu 'http://localhost:4200/login'.
  * 2. Logge dich ein via login command (Name: 'cypress' & Password: 'bingo').
  * 3. Mache einen Screenshot von der Bingofeld Component.
  * 4. Wähle das Vacationbingo aus.
  * 5. Stelle sicher dass das Vacation bingo ausgewählt ist
  * 6. Nehme den Test als Video auf.
  *
  * Tipps:
  * - https://docs.cypress.io/guides/guides/screenshots-and-videos
  */
  beforeEach(() => {
    cy.login('cypress', 'bingo');
  });

  it('should change when selecting another bingo topic', () => {
    cy.dataCy('bingo-field').screenshot();

    cy.contains('Vacation Bingo')
      .click()
      .should('have.class', 'disabled');
  });
});
