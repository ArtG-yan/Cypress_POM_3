const locators = {
    barButton: '[class$=item--name]',
    fieldTitle1: '.oxd-label',
    ancestor1: '.oxd-grid-item--gutters',
    searchFieldInput: '.oxd-input--active',
    editIcon: '.oxd-icon.bi-pencil-fill',
    searchButton: '[type=submit]',
    yesCheckbox: '[class$=oxd-checkbox-input-icon]',
    fieldTitle2: '[class$=oxd-input-field-required]',
    ancestor2: '[class$=user-password-cell]',
    newPasswordField: '[class$=oxd-input--active]', 
    saveButton: '[type=submit]',
    successMessage: '.oxd-toast-content--success p:nth-of-type(2)',
    addButton: '[type=button].oxd-button--secondary',
    dropdown: '.oxd-select-option',
    usernameField: '.oxd-input.oxd-input--active',
    employeeNameFIeld: "[placeholder='Type for hints...']",
    successMessage: '.oxd-toast-content--success p:nth-of-type(2)',
    parent: '.oxd-input-group',
    dropdownParent: '.oxd-select-wrapper',
    autocomplateFieldParent: '.oxd-autocomplete-wrapper',
    optionListParent: '[role=listbox]'
}
const constants = {
    barButtonName:'Admin',
    fieldName1: 'Username',
    userName: 'Admin',
    newPassword: 'artur1234',
    fieldName2: 'Password',
    fieldName3: 'Confirm Password',
    dropdownName1: 'User Role',
    dropdownName2: 'Status',
    password: 'artur12345',
    newUsername: 'Arthur'
    

}
export {locators, constants}