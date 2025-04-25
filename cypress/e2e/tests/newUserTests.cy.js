import LoginPage from "../actions/loginPage"
import AdminPage from "../actions/adminPage"
import DashboardPage from "../actions/dashboardPage"
describe('Tests new user profile functionalities', () => {
    const loginPage = new LoginPage()
    const adminPage = new AdminPage()
    const dashboardPage = new DashboardPage()
    it('Test new user login', () => {
      loginPage.open()
      loginPage.typeNewUserCreds()
      loginPage.clickLoginButton()
      dashboardPage.assertAdminNotExists()
      dashboardPage.assertAdminSecInaccessible()
    }) 
})