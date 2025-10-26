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
	it('Should not log in with incorrect login and password', () => {
		const errorText = 'Ошибка авторизации!';

		cy.login(user.invalidEmail, user.invalidPassword);
		cy.contains(errorText).should('be.visible');
	});

	it('Should warn if email is empty', () => {
		cy.login(' ', user.validPassword);
		cy.get(selector.email)
			.then(el => {
				return el[0].checkValidity();
			}).should('be.false');
	});
});