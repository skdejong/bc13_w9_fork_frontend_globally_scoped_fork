import Gratitude from "./index";

describe("Gratitude functionality", () => {
  beforeEach(() => {
    cy.mount(<Gratitude />);
    cy.request("http://localhost:3000/api/gratitudes");
  });
  it("Successfully inputs a gratitude", () => {
    cy.get(".gratInputField")
      .click()
      .type("A wonderful thing")
      .should("have.value", "A wonderful thing");
    cy.get(".addButton").click();
  });
  it("Successfully displays the new gratitude", () => {
    cy.get(".GratitudeList").contains("A wonderful thing");
  });
  it("Succesfully refreshes and gratitudes are saved", () => {
    cy.mount(<Gratitude />);
    cy.get(".GratitudeList").contains("A wonderful thing");
  });
  it("Succesfully deletes a gratitude", () => {
    cy.get(".GratitudeList")
      .contains("A wonderful thing")
      .find(".gratitudeDeleteButton")
      .click();
    cy.get(".GratitudeList").contains("A wonderful thing").should("not.exist");
  });
  // it("Displays message when gratitudes list is empty", () => {
  //   cy.get(".empty").contains("No gratitudes here.");
  // });
});
