describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.in/')
    cy.get('[placeholder="Search Amazon.in"]').clear().type("Iphone15")
    cy.get('[value="Go"]').click()

    cy.title().should('contain','Iphone15')

    cy.url().should('contain','Iphone15')
  })
})