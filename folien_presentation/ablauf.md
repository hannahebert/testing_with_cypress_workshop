## Ablauf ##

### Intro + Testing ###

| Thema         | Details | Verantwortliche |
|---------------|---------|-----------------|
| Intro         | Folien  | Hannah          |
| Vorstellung   | Folien  | Hannah/Milena   |
| Anfangsfragen | Menti   | Milena          |
| Testing Intro | Folien  | Milena          |
| Testing Quiz  | Menti   | Milena          |

### Cypress Intro

| Thema                          | Wo                                    | Verantwortliche              |
|--------------------------------|---------------------------------------|------------------------------|
| `npm i --save-dev cypress`     | In console ausführen oder über README | Milena tippt /Hannah spricht |
| `npx cypress open`             | In console ausführen oder über README | Milena tippt /Hannah spricht |
| Launchpad erklären             | Launchpad                             | Milena tippt /Hannah spricht |
| Test Runner zeigen             | Testrunner UI                         | Milena tippt /Hannah spricht |
| Test: Login                    | Testrunner UI                         | Milena tippt /Hannah spricht |
| Angelegte Dateien zeigen       | Intellij                              | Milena tippt /Hannah spricht |
| App zeigen                     | Browser                               | Milena                       |
| Testaufbau zeigen              | Folien                                | Hannah                       |
| Login Test: Visit + Assertions | Intellij dann Testrunner              | Milena tippt /Hannah spricht |

```
describe('login', () => {
  it('should successfully login', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('Bingo');
  })
})
```

| Thema                                                         | Wo                           | Verantwortliche              |
|---------------------------------------------------------------|------------------------------|------------------------------|
| Commands vs. Assertions                                       | Folien                       | Hannah                       |
| Commands -> Query/Non-Query                                   | Folien                       | Hannah                       |
| Chain of Commands                                             | Folien                       | Hannah                       |
| Verbesserung Login Test > type, click mit Selector Playground | Intellij, SelectorPlayground | Milena tippt /Hannah spricht |

```
describe('login', () => {
  it('should successfully login', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('Bingo');
    cy.get('[data-cy="login-form"]').find('h3').should('contain', 'Anmeldung');

    cy.get('[data-cy="username"]').type('cypress');
    cy.get('[data-cy="password"]').type('bingo');

    cy.get('[data-cy="submit-button"]').click();
  })
})
```

### Übung 1: Login Test ###

```
cy.get('[data-cy="login-form"]')
    .find('h3')
    .should('contain', 'Anmeldung');
```

### Cypress Theorie ###

| Thema                   | Wo                    | Verantwortliche              |
|-------------------------|-----------------------|------------------------------|
| Find vs get vs contains | Folien, dann Intellij | Milena tippt /Hannah spricht |

```
cy.get('[data-cy="login-form"]')
    .find('h3')
    .should('contain', 'Anmeldung');
```

| Thema                                             | Wo       | Verantwortliche              |
|---------------------------------------------------|----------|------------------------------|
| Selektoren (Beispiel wie bei find, contains, get) | Intellij | Milena tippt /Hannah spricht |
| Langsamer tippen                                  | Intellij | Milena tippt /Hannah spricht |

```cy.get('[data-cy="username"]').type('cypress', {delay: 1000});```

| Thema                           | Wo       | Verantwortliche              |
|---------------------------------|----------|------------------------------|
| Passwort in den Logs ausblenden | Intellij | Milena tippt /Hannah spricht |

```cy.get('[data-cy="password"]').type('cypress', {log: false});```

| Thema                                   | Wo            | Verantwortliche              |
|-----------------------------------------|---------------|------------------------------|
| Auslagern base URL  (cypress.config.ts) | Intellij      | Milena tippt /Hannah spricht |
| Config in der Desktop App anschauen     | Testrunner UI | Milena tippt /Hannah spricht |
| `npx cypress run`                       | Intellij      | Milena tippt /Hannah spricht |                           |                              |
| `npx cypress run --browser firefox`     | Intellij      | Milena tippt /Hannah spricht |  
| Fehlerfall: Screenshot wird erstellt    | Intellij      | Milena tippt /Hannah spricht |  

### Übung 2: Bingo Feld ###

| Thema                                                           | Wo                      | Verantwortliche              |
|-----------------------------------------------------------------|-------------------------|------------------------------|
| Test Click Bingo Feld (Aus login kopieren, Selector Playground) | Intellij, Testrunner UI | Milena tippt /Hannah spricht |
| Auslagern des Login Commands                                    | Folien, Intellij        | Milena tippt /Hannah spricht |
| Retry Logic                                                     | Folien                  | Hannah                       |
| Best Practices                                                  |                         | Milena                       |
| Abschluss                                                       |                         | Hannah?                      |