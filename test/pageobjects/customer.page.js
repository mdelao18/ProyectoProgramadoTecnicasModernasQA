

import Page from './page';

class CustomerPage extends Page {

    //Elements to add a customer

    get getNewCustomerOption() {
        return $('a[href^="addcustomer"]');
    }

    setGoToNewCustomerCreationPage() {
        this.getNewCustomerOption.click();
    }

    get getCustomerName() {
        return $('[name="name"]');
    }

    get getGender() {
        return $('[value="f"]');
    }

    get getDateOfBirth() {
        return $('[name="dob"]');
    }

    get getAddress() {
        return $('[name="addr"]');
    }

    get getCity() {
        return $('[name="city"]');
    }

    get getState() {
        return $('[name="state"]');
    }

    get getPIN() {
        return $('[name="pinno"]');
    }

    get getMobileNumber() {
        return $('[name="telephoneno"]');
    }

    get getEmail() {
        return $('[name="emailid"]');
    }

    get getPassword() {
        return $('[name="password"]');
    }

    get getBtnSubmitAddCustomer() {
        return $('[name="sub"]');
    }

    //Elements to edit a customer
    get getEditCustomerOption() {
        return $('a[href^="Edit"]');
    }

    setGoToEditCustomerPage() {
        this.getEditCustomerOption.click();
    }

    get getCustomerIDToEdit() {
        return $('[name="cusid"]');
    }

    get getBtnSubmitEditCustomer() {
        return $('[type="submit"]');
    }

    //Elements to delete a customer
    get getDeleteCustomerOption() {
        return $('a[href^="Delete"]');
    }

    setGoToDeleteCustomerPage() {
        this.getDeleteCustomerOption.click();
    }

    get getCustomerIDToDelete() {
        return $('[name="cusid"]');
    }

    get getBtnSubmitDeleteCustomer() {
        return $('[type="submit"]');

    }


    //Method to create a new customer
    createCustomer(name, dateOfBirth, address, city, state, pin, mobilenumber, email, password) {
        this.getCustomerName.setValue(name);
        this.getGender.click();
        this.getDateOfBirth.setValue(dateOfBirth);
        this.getAddress.setValue(address);
        this.getCity.setValue(city);
        this.getState.setValue(state);
        this.getPIN.setValue(pin);
        this.getMobileNumber.setValue(mobilenumber);
        this.getEmail.setValue(email);
        this.getPassword.setValue(password);
        this.getBtnSubmitAddCustomer.click();
    }

    //Method to edit a customer
    editCustomer(customerid, address) {
        this.getCustomerIDToEdit.setValue(customerid);
        this.getBtnSubmitEditCustomer.click();
        this.getAddress.setValue(address);
        this.getBtnSubmitEditCustomer.click();
    }

    //Method to delete a customer
    deleteCustomer(customerid) {
        this.getCustomerIDToDelete.setValue(customerid);
        this.getBtnSubmitDeleteCustomer.click();
    }

}

export default new CustomerPage();