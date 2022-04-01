/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("localhost:3001");
  });

  it("should display 6 games categories in the header", () => {
    cy.get("header").find("button").should("have.length", 6);
  });

  it("should display the right casino categories in the header", () => {
    cy.get("header").find("button").eq(0).should("have.text", "All Games");
    cy.get("header").find("button").eq(1).should("have.text", "Live Dealer");
    cy.get("header").find("button").eq(2).should("have.text", "Table Games");
    cy.get("header").find("button").eq(3).should("have.text", "Popular Games");
    cy.get("header").find("button").eq(4).should("have.text", "Video Slots");
    cy.get("header").find("button").eq(5).should("have.text", "Top Slots");
  });

  it("should filter the casino games", () => {
    cy.get("input").type("under");
    cy.get("[data-testid=games-list]").children().should("have.length", 3);
  });

  it("should filter the casino games when clicking on a category", () => {
    cy.contains("Popular Games").click();
    cy.get("[data-testid=game]").should("have.length", 7);
  });

  it("should display all games initially", () => {
    cy.get("[data-testid=game]").should("have.length", 182);
  });
});
