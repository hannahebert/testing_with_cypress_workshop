import {CyHttpMessages} from 'cypress/types/net-stubbing';
import {BingoField} from '../../src/app/model/bingo-field.data';
import IncomingHttpResponse = CyHttpMessages.IncomingHttpResponse;

describe('Response', () => {

  describe('Office Bingo', () => {

    // stub des HTTP-Get-Call vor jedem Test
    beforeEach(() => {
      cy.intercept('GET', '**/bingo-items/office', (req) => {
        req.continue((res: IncomingHttpResponse): void => {
          const fields: BingoField[] = res.body;
          // wir ersetzen die Texte aller Bingo-Felder mit 'ERSETZT'
          const changedFields: BingoField[] = fields.map((field: BingoField): BingoField => {
            return {...field, text: 'ERSETZT'};
          });
          // wir geben die gestubbte Antwort zurück
          // die Response-Phase endet erst, wenn das res.send aufgerufen wurde
          res.send({...res, body: changedFields});
        });
      }).as('officeItems');

      cy.login('cypress', 'bingo');
    });

    it('should be successfully adapted', () => {
      cy.get('bingo-field')
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

      // wir holen uns die Daten zum Stubben aus den Fixtures
      cy.intercept('GET', '**/bingo-items/vacation', {fixture: 'vacation_bingo.json'}).as('vacationItems');

      cy.login('cypress', 'bingo');
    });

    it('should be successfully substituted', () => {
      cy.contains('Vacation Bingo')
        .click()
        .should('have.class', 'disabled');

      // wir warten bis der Request tatsächlich aufgerufen wurde
      cy.wait('@vacationItems')
      // wir prüfen, ob alle Einträge mit &&& geprefixed wurden
      cy.dataCy('bingo-field')
        .each(($bingoField) => {
          expect($bingoField.text().trim()).to.contain('&&&');
        });
    });
  });
})
;
