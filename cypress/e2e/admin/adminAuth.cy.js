const user = require('../fixtures/users.json');
const selector = require('../fixtures/loginPageSelectors.json')


describe('Testing the login admin', () => {

	beforeEach(() => {
		cy.visit('https://qamid.tmweb.ru/admin/');
	});

	it('Should successfully log in with correct login and password', () => {
		const mainText = 'Управление залами';

		cy.login(user.validEmail, user.validPassword);
		cy.contains(mainText).should('be.visible');
	});
});