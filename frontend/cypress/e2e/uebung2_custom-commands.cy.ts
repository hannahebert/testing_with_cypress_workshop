describe('Bingo Sieg', () => {
  /*
  * 1. Arrange:
  *   - Navigiere zu 'http://localhost:4200/.
  *   - Stelle sicher dass du dich auf der Login Seite befindest.
  *   - Logge dich ein (Name: 'cypress' & Password: 'bingo').
  *   - Stelle sicher, dass der Login funktioniert hat.
  *
  * 2. Act:
  *   - Stelle sicher, dass Erfolgsmeldung nicht angezeigt wird.
  *   - Klicke 5 Bingo Felder (horizontal oder vertikal).
  *
  * 3. Assert:
  *   - Stelle sicher, dass die Erfolgsmeldung angezeigt wird.
  *
  * 4. Act:
  *   - Wähle das Vacation Bingo aus.
  *
  * 5. Assert:
  *   - Stelle sicher, dass die Erfolgsmeldung nicht mehr angezeigt wird und keine Felder mehr selected sind.
  *
  * Tipps:
  * - Lagere Code in Custom Commands aus:
  *    > den Login.
  *    > cy.get(`[data-cy=${testid}]`)
  *    > das klicken eines Bingo Feldes in ein eigenes Command aus (Chainable Command).
  * - Nutze die Commands get, find und contains
  */
});
