import App from "./index";

describe("<App/>", () => {
  it("mounts", () => {
    cy.mount(<App />);
  });
});
