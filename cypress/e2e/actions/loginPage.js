import { locators, constants } from "../locators/loginPageLocators"
class LoginPage {
    open() {
        cy.visit(constants.url)
    }
    typeLoginCreds() {
        cy.get(locators.usernameField).type(constants.username)
        cy.get(locators.passwordField).type(constants.password)
    }
    clickLoginButton() {
        cy.get(locators.loginButton).click()
    }
    typeNewUserCreds() {
        cy.get(locators.usernameField).type(constants.newUsername)
        cy.get(locators.passwordField).type(constants.newUserPassword)
    }
}
export default LoginPage
