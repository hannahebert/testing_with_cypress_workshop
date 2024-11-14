describe('template spec', () => {
    it('passes', () => {
        cy.intercept('GET', '**/bingo-items/vacation', {fixture: 'vacation_bingo.json'}).as('vacationItems');
        cy.login('cypress', 'bingo');

        cy.wait('@vacationItems');
    })
})
