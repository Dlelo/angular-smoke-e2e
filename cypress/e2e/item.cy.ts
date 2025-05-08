describe('Manage item', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
  });

  it('Displays the list of items', () => {
    cy.contains('Items');
    cy.get('.item-list ul li').should('have.length.at.least', 1);
  });

  it('Adds a new item and views it', () => {
    cy.contains('Add Item').click();

    cy.get('input[name="name"]').type('Test Item');
    cy.get('textarea[name="description"]').type('Test item description');
    cy.get('button[type="submit"]').click();

    cy.contains('Items');
    cy.contains('Test Item').click();

    cy.contains('Test Item');
    cy.contains('Test item description');
    cy.contains('Edit');
  });

  it('Edits an item successfully', () => {
    cy.visit('/items');

    cy.get('.item-list ul li').first().click();

    cy.contains('Edit').click();

    cy.get('input[name="name"]').clear().type('Updated Item Name');
    cy.get('textarea[name="description"]').clear().type('Updated Item Description');
    cy.get('button[type="submit"]').click();

    cy.contains('Updated Item Name').click();
    cy.contains('Updated Item Name');
    cy.contains('Updated Item Description');
  });
});
