import { locators, constants } from "../locators/adminPageLocators"
class AdminPage {
    clickBarButton() {
        cy.get(locators.barButton).contains(constants.barButtonName).click()
    }
    typeUsername() {
        cy.contains(locators.fieldTitle1, constants.fieldName1).parentsUntil(locators.ancestor1).find(locators.searchFieldInput).type(constants.userName)
        cy.wait(1000)
    }
    clickSearchButton() {
        cy.get(locators.searchButton).click()
        cy.wait(1000)
    }
    clickEditIcon() {
        cy.get(locators.editIcon).click()
    }
    checkYes() {
        cy.get(locators.yesCheckbox).click()
    }
    changePassword() {
        cy.contains(locators.fieldTitle1, constants.fieldName2).parentsUntil(locators.ancestor2).find(locators.newPasswordField).type(constants.newPassword)
        cy.contains(locators.fieldTitle1, constants.fieldName3).parentsUntil(locators.ancestor1).find(locators.newPasswordField).type(constants.newPassword)
    }
    clickSaveButton() {
        cy.get(locators.saveButton).click()
    }
    assertSuccessMessage() {
        cy.get(locators.successMessage).should('exist').and('be.visible')
    }
    clickAddButton() {
        cy.get(locators.addButton).click()
    }
    selectUserRole() {
        cy.contains(locators.fieldTitle2, constants.dropdownName1).parents(locators.parent).find('.oxd-select-wrapper').click()
        cy.get(locators.optionListParent).children().eq(2).click() 
    }
    selectStatus() {
        cy.contains(locators.fieldTitle2, constants.dropdownName2).parents(locators.parent).find('.oxd-select-wrapper').click()
        cy.get(locators.optionListParent).children().eq(1).click()
    }
    typeEmployeeName() {
    cy.get(locators.employeeNameFIeld).type('a').parents(locators.parent).find(locators.autocomplateFieldParent).click()
    cy.get(locators.optionListParent).children().eq(1).click()
    }
    typeUsename() {
        cy.contains(locators.fieldTitle2, constants.fieldName1).parentsUntil(locators.ancestor1).find(locators.usernameField).type(constants.newUsername)
    }
    typePassword() {
        cy.contains(locators.fieldTitle1, constants.fieldName2).parentsUntil(locators.ancestor2).find(locators.newPasswordField).type(constants.password)
        cy.contains(locators.fieldTitle1, constants.fieldName3).parentsUntil(locators.ancestor1).find(locators.newPasswordField).type(constants.password)
    }
    assertSuccessMessage() {
        cy.get(locators.successMessage).should('exist').and('be.visible')
    }
    addUsers(username, password) {
        cy.contains(locators.fieldTitle2, constants.dropdownName1).parents(locators.parent).find(locators.dropdownParent).click()
        cy.get(locators.optionListParent).children().eq(2).click()
        cy.contains(locators.fieldTitle2, constants.dropdownName2).parents(locators.parent).find(locators.dropdownParent).click()
        cy.get(locators.optionListParent).children().eq(1).click()
        cy.get(locators.employeeNameFIeld).type('a').parents(locators.parent).find(locators.autocomplateFieldParent).click()
        cy.get(locators.optionListParent).children().eq(1).click()
        cy.contains(locators.fieldTitle2, constants.fieldName1).parentsUntil(locators.ancestor1).find(locators.usernameField).type(username)
        cy.contains(locators.fieldTitle1, constants.fieldName2).parentsUntil(locators.ancestor2).find(locators.newPasswordField).type(password)
        cy.contains(locators.fieldTitle1, constants.fieldName3).parentsUntil(locators.ancestor1).find(locators.newPasswordField).type(password)
        cy.get(locators.saveButton).click()
        cy.wait(3000)
    }
    // validateUsersExist(username) {
// cy.contains('[role=cell]', username).closest('.oxd-table-card').contains('[role=cell]', constants.role).should('exist')
    // }
}
export default AdminPage
