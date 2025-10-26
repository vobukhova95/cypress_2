const selector = require('../fixtures/mainPageSelectors.json');

describe('Testing the main page', () => {
	it('Should display the main page correctly', () => {
		const mainText = 'Идёмвкино';

		cy.visit('/');
		cy.contains(mainText).should('be.visible');
		cy.get(selector.navigationDay).should('have.length', 7);
	})
});