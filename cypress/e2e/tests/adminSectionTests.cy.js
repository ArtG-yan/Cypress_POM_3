import LoginPage from "../actions/loginPage"
import AdminPage from "../actions/adminPage"
import UsersToAdd from "../users/newUsers"
// import NewUsersOnTable from "../users/newUsersOnTable"
describe('Tests Admin section functionalities', () => {
    const loginPage = new LoginPage()
    const adminPage = new AdminPage()
    beforeEach(() => {
      loginPage.open()
      loginPage.typeLoginCreds()
      loginPage.clickLoginButton()
      adminPage.clickBarButton()
  })  
    it('Test change password functionality', () => {
      adminPage.typeUsername()
      adminPage.clickSearchButton()
      adminPage.clickEditIcon()
      adminPage.checkYes()
      adminPage.changePassword()
      adminPage.clickSaveButton()
      adminPage.assertSuccessMessage()
  })
    it('Test add user', () => {
      adminPage.clickAddButton()
      adminPage.selectUserRole()
      adminPage.selectStatus()
      adminPage.typeEmployeeName()
      adminPage.typeUsename()
      adminPage.typePassword()
      adminPage.clickSaveButton()
      adminPage.assertSuccessMessage()
  })
  it('Test add multiple users', () => { 
      UsersToAdd.forEach(({ username, password }) => {
      adminPage.clickAddButton()
      adminPage.addUsers(username, password)
    })
      // adminPage.validateUsersExist(NewUsersOnTable.at(0))

  })

})        