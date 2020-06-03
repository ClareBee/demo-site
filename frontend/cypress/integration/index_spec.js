describe("Visits homepage", () => {
  it("successfully visits homepage", () => {
    cy.visit("/")
    cy.contains("Gatsby, Sanity.io & Netlify Build Plugins")
  })
})
