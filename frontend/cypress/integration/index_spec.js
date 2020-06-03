describe("Visits homepage", () => {
  it("successfully visits homepage", () => {
    cy.visit("/")
    cy.contains("SciFi")
  })
})
