describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the login page and login', () => {
    cy.contains('Home')

  })

  it('Displays the login form', () => {
    cy.contains('Login');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
  });

  it('Rejects incorrect login credentials', () => {
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Invalid credentials');
    });
  });

})
