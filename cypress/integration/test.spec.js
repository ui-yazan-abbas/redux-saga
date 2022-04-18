import { mount } from "@cypress/react";
import UsersList from "../../src/components/UsersList";

describe("startet", () => {
  const email = "yazan.abbas@ui.com";
  const pass = "UAD23232342";
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should sign in", () => {
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(pass);
    cy.get("button[type=submit]").click();
    cy.contains("You're Here");
  });

  it("should display fetched content", () => {
    cy.contains("Get Users").click();
    mount(<UsersList />).should("be.visible");
  });
});
