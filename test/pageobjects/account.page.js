import Page from './page';

class AccountPage extends Page {


    //Elements to add an account
    get getNewAccountOption() {
        return $('a[href^="addAccount"]');
    }

    setGoToNewCAccountCreationPage() {
        this.getNewAccountOption.click();
    }

    get getCustomerID() {
        return $('[name="cusid"]');
    }

    get getInitialDeposit() {
        return $('[name="inideposit"]');
    }

    get getAccountTypeDropdownList() {
        return $('[name="selaccount"]');
    }

    setAccountTypeDropdownValuebyIndex(index) {
        return this.getAccountTypeDropdownList.selectByIndex(index);
    }

    get getBtnSubmitAddAccount() {
        return $('[type="submit"]');
    }


    //Elements to edit an account
    get getEditAccountOption() {
        return $('a[href^="editAccount"]');
    }

    setGoToEditAccountPage() {
        this.getEditAccountOption.click();
    }

    get getAccountToEdit() {
        return $('[name="accountno"]');
    }

    get getBtnSubmitEditAccount() {
        return $('[type="submit"]');
    }

    //Elements to delete an account
    get getDeleteAccountOption() {
        return $('a[href^="deleteAccount"]');
    }

    setGoToDeleteAccountPage() {
        this.getDeleteAccountOption.click();
    }

    get getAccountToDelete() {
        return $('[name="accountno"]');
    }
    get getBtnSubmitDeleteAccount() {
        return $('[name="AccSubmit"]');
    }


    //Method to create an account
    createAccount(customerid, accounttype,  initialdeposit) {
        this.getCustomerID.setValue(customerid);
        this.setAccountTypeDropdownValuebyIndex(accounttype);
        this.getInitialDeposit.setValue(initialdeposit);
        this.getBtnSubmitAddAccount.click();
    }


    //Method to edit an account
    editAccount(accountno, accounttype) {
        this.getAccountToEdit.setValue(accountno);
        this.getBtnSubmitEditCustomer.click();
        this.setAccountTypeDropdownValuebyIndex(accounttype);
        this.getBtnSubmitEditCustomer.click();

    }

    //Method to delete an account
    deleteAccount(accountno) {
        this.getAccountToDelete.setValue(accountno);
        this.getBtnSubmitDeleteAccount.click();
    }

}

export default new AccountPage();