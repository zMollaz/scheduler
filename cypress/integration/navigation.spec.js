describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  //Test case for root endpoint navigation
  it("should navigate to Tuesday", () => {
    cy.visit("/");
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
