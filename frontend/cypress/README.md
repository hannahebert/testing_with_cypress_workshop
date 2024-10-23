# JS Days Cypress Workshop

## Installation von Cypress

1. Installiere Cypress als Dev-Dependency:
    ```bash
    cd .. && npm install --save-dev cypress
    ```

2. Öffne die Cypress Desktop App:
    ```bash
    npx cypress open
    ```

## Dokumentation

Weitere Informationen und detaillierte Anleitungen findest du in der offiziellen [Cypress Dokumentation](https://docs.cypress.io).

## Best Practices

1. **Halte Tests kurz und prägnant**: Vermeide lange und komplexe Tests, um die Wartbarkeit zu erhöhen.
2. **Schreibe unabhängige Tests**: Jeder Test sollte isoliert und unabhängig von anderen Tests sein.
3. **Verwende `beforeEach`**: Setze den Zustand vor jedem Test zurück, um Seiteneffekte zu vermeiden.
4. **Nutze `cy.fixture()` für Testdaten**: Lade Testdaten aus externen Dateien, um die Tests sauber und wartbar zu halten.
5. **Nutze `cy.intercept()` für API-Stubbing**: Simuliere API-Antworten, um Tests schneller und zuverlässiger zu machen.
6. **Verwende Custom Commands**: Erstelle wiederverwendbare Befehle für häufige Aktionen, um den Testcode zu vereinfachen.
7. **Nutze die Cypress Best Practices**: Folge den offiziellen Cypress Best Practices für Selektoren, Assertions und mehr.

## Frontend

To run the frontend in watch-mode do:
```bash
cd .. && npm i && npm start
```

## Backend

To run the backend in watch-mode do:
```bash
cd ../../backend && npm i && npm start
```
