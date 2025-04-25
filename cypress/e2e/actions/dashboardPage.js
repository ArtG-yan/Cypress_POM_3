import { locators, constants } from "../locators/adminPageLocators"
class DashboardPage {
  assertAdminNotExists() {
    cy.get('ul[class=oxd-main-menu]').should('not.contain', constants.barButtonName)
    cy.contains(locators.barButton, constants.barButtonName).should('not.exist')
    cy.contains('.oxd-topbar-body-nav-tab-item', 'User Management').should('not.exist')
  }
  assertAdminSecInaccessible() {
    cy.get('body').then($body => {
      const selector = `${locators.barButton}:contains("${constants.barButtonName}")`
        if ($body.find(selector).length > 0) {
            cy.get(locators.barButton).contains(constants.barButtonName).should('not.be.visible')
          } else {
            cy.log(`Button "${constants.barButtonName}" is not found — limited access`)
          }
    })
  }
}
export default DashboardPage