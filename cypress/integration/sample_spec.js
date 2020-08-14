describe('Adding text to the text box', function() {
    it('Visits The Page', function(){
            cy.visit('http://localhost:3000');
    });

    it('Visits The Pizza Page', function() {
            cy.get('#PizzaButton').click();
    })

    it('Types A Name', function() {
            cy.get("#name").type("Tyson")
    });

    it('Picks A Size', function() {
            cy.get('#select').select('large').should('have.value', 'large');
    });

    it('Checks A Sause', function() {
            cy.get("#Red").check().should("be.checked");
    });

    it('Checkes All Toppings', function() {
            cy.get("#Pepperoni").check().should("be.checked");
            cy.get("#Sausage").check().should("be.checked");
            cy.get("#Onions").check().should("be.checked");
            cy.get("#Pineapple").check().should("be.checked");
    });

    it('Types Extra Information', function() {
            cy.get("#extraInfo").type("With Love");
    })

    it('Submits', function() {
            cy.contains("Submit").click();
    });
});