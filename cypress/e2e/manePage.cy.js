const selector = require('../fixtures/mainPageSelectors.json');

describe('Testing the main page', () => {
	it('Should display the main page correctly', () => {
		cy.visit('/');
		cy.contains('Идёмвкино').should('be.visible');
		cy.get(selector.navigationDay).should('have.length', 7);
	})
});