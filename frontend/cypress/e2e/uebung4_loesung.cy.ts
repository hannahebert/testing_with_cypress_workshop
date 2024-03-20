import {CyHttpMessages} from 'cypress/types/net-stubbing';
import {BingoField} from '../../src/app/model/bingo-field.data';
import IncomingHttpResponse = CyHttpMessages.IncomingHttpResponse;

describe('Response', () => {
  describe('Office Bingo', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/bingo-items/office', (req) => {
        req.continue((res: IncomingHttpResponse): void => {
          const fields: BingoField[] = res.body;
          const changedFields: BingoField[] = fields.map((field: BingoField): BingoField => {
            return {...field, text: 'ERSETZT'};
          });
          res.send({...res, body: changedFields});
        });
      }).as('officeItems');

      cy.login('cypress', 'bingo');
    });

    it('should be successfully adapted', () => {
      cy.dataCy('bingo-field')
        .each(($bingoField) => {
          // mit Chai-jQuery assertions
          expect($bingoField.text().trim()).to.equal('ERSETZT');
          expect($bingoField).not.to.have.class('selected');

          // ODER
          cy.wrap($bingoField)
            .should('not.have.class', 'selected')
            .should('contain', 'ERSETZT'); // ends with a price
        });
    });
  });


  describe('Vacation Bingo', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/bingo-items/vacation', {fixture: 'vacation_bingo.json'}).as('vacationItems');

      cy.login('cypress', 'bingo');
    });

    it('should be successfully substituted', () => {
      cy.contains('Vacation Bingo')
        .click()
        .should('have.class', 'disabled');

      cy.dataCy('bingo-field')
        .each(($bingoField) => {
          expect($bingoField.text().trim()).to.contain('&&&');
        });
    });
  });
})
;
