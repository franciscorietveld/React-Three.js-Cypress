describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/')
    })

    it('Change shape type', () => {
        cy.visit('/')
        cy.get('.shape-type-radio').within(() => {
            cy.get('input[value="cube"]').click({ force: true })
            cy.get('input[value="pyramid"]').click({ force: true })
            cy.get('input[value="sphere"]').click({ force: true })
        })
    })

    it('Change shape color', () => {
        cy.visit('/')
        cy.get('.shape-color-btn > input').invoke("val", "#FF0000").trigger("change")
        cy.get('.shape-color-btn > input').invoke("val", "#66FF3F").trigger("change")
    })

    it('Change zoom level', () => {
        cy.visit('/')
        const currentValue = 12;
        const targetValue = 40;
        const increment = 2;
        const steps = (targetValue - currentValue) / increment;
        const arrows = '{rightarrow}'.repeat(steps);

        cy.get('.zoom-level-slider div[role="slider"]')
            .should('have.attr', 'aria-valuenow', 12)
            .type(arrows)
    })

    it('Change shape count', () => {
        cy.visit('/')
        cy.get('.shape-count-input input').clear().type("2")
    })
})