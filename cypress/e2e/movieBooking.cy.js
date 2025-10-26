const user = require('../fixtures/users.json');
const adminPageSelectors = require('../fixtures/adminPageSelectors.json');
const seats = require("../fixtures/seats.json");
const mainPageSelectors = require("../fixtures/mainPageSelectors.json");

describe('Booking tickets tests', () => {
	it('Should check the hall from the admin page and book tickets', () => {
        const movieName = 'Ведьмак';
		const hallName = 'Вип зал';
        const acceptinButtonText = 'Получить код бронирования';

		cy.visit('https://qamid.tmweb.ru/admin/');
		cy.login(user.validEmail, user.validPassword);
		cy.get(adminPageSelectors.movie)
			.should('have.text', movieName);
		cy.get(adminPageSelectors).invoke('text').then((text) => {
			cy.visit('https://qamid.tmweb.ru/client/index.php');
			cy.get(mainPageSelectors.movieDate).click();
			cy.contains(mainPageSelectors.sectionMovie, movieName)
				.find(mainPageSelectors.movieHall)
				.contains(mainPageSelectors.movieHallTitle, hallName)
				.parent()
				.find(mainPageSelectors.movieTime)
				.contains('20:00')
				.click();
			seats.forEach((seat) => {
				cy.get(
					`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
				).click();
			});
			cy.get(mainPageSelectors.acceptinButton).click();
			cy.get(mainPageSelectors.acceptinButton)
				.should('have.text', acceptinButtonText)
				.and('be.visible').and('not.be.disabled');
		});
	});
});