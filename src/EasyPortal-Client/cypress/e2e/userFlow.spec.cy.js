describe('User login', () => {
	it('Should login as user', () => {
		cy.visit('https://www.easyportal-businessmanagement.com');
		cy.contains('Login')
		.click()
		cy.get('input[name="email"]').type('helen@test.com');
		cy.get('input[name="password"]').type('Password1');
		cy.contains('Login').click();
		cy.url().should('include', '/rosters');
		cy.get('h4.loggedin').should('be.visible');
	});
});


describe('User logout', () => {
	it('Should login as a user and successfully logout', () => {
		cy.visit('https://www.easyportal-businessmanagement.com');
		cy.contains('Login')
		.click()
		cy.get('input[name="email"]').type('helen@test.com');
		cy.get('input[name="password"]').type('Password1');
		cy.contains('Login').click();
		cy.url().should('include', '/rosters');
		cy.get('h4[name="loggedin"]').should('be.visible');
		cy.contains('Logout').first().click();
		cy.contains('Login').should('be.visible');
	});
});