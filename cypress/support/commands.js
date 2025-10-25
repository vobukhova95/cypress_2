// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
const loginPageSelectors = require('../fixtures/loginPageSelectors.json');
const adminPageSelectors = require('../fixtures/adminPageSelectors.json');

Cypress.Commands.add('login', (email, password) => { 
    cy.get(loginPageSelectors.email).type(email);
    cy.get(loginPageSelectors.password).type(password);
    cy.contains('Авторизоваться').click();
});


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })