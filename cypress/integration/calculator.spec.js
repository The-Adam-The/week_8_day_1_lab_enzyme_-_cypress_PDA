describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

    it('should have working number buttons', () => {
      cy.get('#number2').click();
      cy.get('.display').should('contain', '2')
    })

    it('should display running-total (0)', () => {
      cy.get('#running-total').should('contain', '0')
    })

    it('should output the result of a mathematical operation (1 + 1 = 2', () => {
      cy.get('#number1').click();
      cy.get('#operator_add').click();
      cy.get('#number1').click();
      cy.get('#operator-equals').click();
      cy.get('#running-total').should('contain', '2')
    })

    it('should be able to chain multiple operations ((2 * 9 + 3) / 7 = 3)', () => {
      cy.get('#number2').click();
      cy.get('#operator-multiply').click();
      cy.get('#number9').click();
      cy.get('#operator_add').click();
      cy.get('#number3').click();
      cy.get('#operator-divide').click();
      cy.get('#number7').click();
      cy.get('#operator-equals').click();
      cy.get('#running-total').should('contain', '3');
    })

    it('should display positive numbers (5)', () => {
      cy.get('#number5').click();
      cy.get('#running-total').should('contain', '5');
    })

    it('should display negative numbers (-1)', () => {
      cy.get('#number1').click();
      cy.get('#operator-subtract').click();
      cy.get('#number2').click();
      cy.get('#operator-equals').click();
      cy.get('#running-total').should('contain', '-1')
    })

    it('should display decimal numbers (2.3)', () => {
      cy.get('#number2').click();
      cy.get('#decimal').click();
      cy.get('#number3').click();
      cy.get('#running-total').should('contain', '2.3')
    })

    it('should display very large numbers (10000000000)', () => {
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-multiply').click();
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-multiply').click();
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-multiply').click();
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-multiply').click();
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-multiply').click();
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-multiply').click();
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-multiply').click();
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-multiply').click();
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-multiply').click();
      cy.get('#number1').click();
      cy.get('#number0').click();
      cy.get('#operator-equals').click();
      cy.get('#running-total').should('contain', '10000000000')
    })

    it("should display 'world destroyed' when trying to divide a number by 0", () => {
      cy.get('#number5').click();
      cy.get('#operator-divide').click();
      cy.get('#number0').click();
      cy.get('#operator-equals').click();
      cy.get('#running-total').should('contain', 'world destroyed');
    })
    
  });

