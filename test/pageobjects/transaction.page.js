import Page from './page';

class TransactionPage extends Page {


    //Elements to make a deposit
    get getDepositFormOption() {
        return $('a[href^="DepositInput"]');
    }

    setGoToDepositFormPage() {
        this.getDepositFormOption.click();
    }

    get getAccountDeposit() {
        return $('[name="accountno"]');
    }

    get getAmountDeposit() {
        return $('[name="ammount"]');
    }

    get getDescriptionDeposit() {
        return $('[name="desc"]');
    }

    get getBtnSubmitDeposit() {
        return $('[type="submit"]');
    }


    //Elements to make a withdrawal
    get getWithdrawalFormOption() {
        return $('a[href^="WithdrawalInput"]');
    }

    setGoToWithdrawalPage() {
        this.getWithdrawalFormOption.click();
    }

    get getAccountWithdrawal() {
        return $('[name="accountno"]');
    }

    get getAmountWithdrawal() {
        return $('[name="ammount"]');
    }

    get getDescriptionWithdrawal() {
        return $('[name="desc"]');
    }

    get getBtnSubmitWithdrawal() {
        return $('[type="submit"]');
    }

    //Elements to get the Balance Enquiry
    get getBalanceEnquiryFormOption() {
        return $('a[href^="BalEnqInput"]');
    }

    setGoToBalanceEnquiryPage() {
        this.getBalanceEnquiryFormOption.click();
    }

    get getAccountNumberBalanceEnquiry() {
        return $('[name="accountno"]');

    }
    get getAccountBalanceEnquiry() {
        return $('[name="balance"]');

    }

    get getBtnSubmitBalanceEnquiry() {
        return $('[type="submit"]');
    }


    //Method to make a deposit
    makeDeposit(accountno, amount, description) {
        this.getAccountDeposit.setValue(accountno);
        this.getAmountDeposit.setValue(amount);
        this.getDescriptionDeposit.setValue(description);
        this.getBtnSubmitDeposit.click();
    }


    //Method to make a withdrawal
    makewithdrawal(accountno, amount, description) {
        this.getAccountWithdrawal.setValue(accountno);
        this.getAmountWithdrawal.setValue(amount);
        this.getDescriptionWithdrawal.setValue(description);
        this.getBtnSubmitWithdrawal.click();
    }

    //Method to check the Balance Enquiry
    accountBalanceEnquiry(accountno) {
        this.getAccountNumberBalanceEnquiry.setValue(accountno);
        this.getBtnSubmitBalanceEnquiry.click();
    }

}

export default new TransactionPage();