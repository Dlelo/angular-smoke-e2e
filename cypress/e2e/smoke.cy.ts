describe('Tiny Angular App Smoke Test', () => {
  it('Logs in, view items', () => {
    cy.visit('/');

    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/items');
    cy.contains('Items');


  })
});
