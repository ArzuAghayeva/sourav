import './commands'
import "cypress-real-events/support"

after(() => {
    cy.task("generateReport")
})