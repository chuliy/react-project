import { baseUrl } from "../../src/serverqueries";

describe('Check if created item appears in dom', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('http://localhost:3001/createitems')

    const mockVar = {
      name: "Samsung",
      categoryId: 3,
      cost: "45000"
    }

    cy.get('[data-cy="product-name"]')
      .type(`${mockVar.name}`)
      .should('have.value', `${mockVar.name}`)

    cy.get('[data-cy="product-category"]')
      .select([`${mockVar.categoryId - 1}`])

    cy.get('[data-cy="product-cost"]')
      .type(`${mockVar.cost}`)
      .should('have.value', `${mockVar.cost}`)

    cy.get('[data-cy="submit"]')
      .click()

    cy.get('[data-cy="list-page"]')
      .click()

    cy.url().should('include', 'localhost:3001')

    // ОЩУЩЕНИЕ ТОГО ЧТО ЭТО ШЛЯПА
    cy.request(`${baseUrl}/products`).its('body')
      .should('include', mockVar.name)
      .should('include', mockVar.categoryId)
      .should('include', mockVar.cost)

    cy.get('[data-cy="item-data-name"]').contains(mockVar.name)
    cy.get('[data-cy="item-data-name"]').contains(mockVar.cost)

  })
})