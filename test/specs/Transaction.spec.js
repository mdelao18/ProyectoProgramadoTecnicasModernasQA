import TransactionPage from '../pageobjects/transaction.page';
import LoginPage from '../pageobjects/login.page';

describe('Accounts actions: ', () => {

    beforeAll(async function () {
        LoginPage.managerLogIn('mngr373768', 'qehUzEr');
    });

    it('7.1-should go to Amount Deposit Form Page', async () => {
        TransactionPage.setGoToDepositFormPage();
        await expect(TransactionPage.pageTitle).toHaveTextContaining('Amount Deposit Form');
    });

    it('7.2-should deposit an amount', async () => {
        TransactionPage.setGoToDepositFormPage();
        TransactionPage.makeDeposit("123456789", "150", "Deposit 150 dollars "); //Account No, amount and description
        await expect(TransactionPage.pageMessage).toHaveTextContaining('The amount was deposited');
    });

    it('8.1-should go to Amount Withdrawal Form', async () => {
        TransactionPage.setGoToWithdrawalPage();
        await expect(TransactionPage.pageMessage).toHaveTextContaining('Amount Withdrawal Form');
    });

    it('8.2-should withdrawal an amount', async () => {
        TransactionPage.setGoToWithdrawalPage();
        TransactionPage.makewithdrawal("123456789", "50", "Withdrawal 50 dollars "); //Account No, amount and description
        await expect(TransactionPage.pageMessage).toHaveTextContaining('The amount was withdrawn');
    });

    it('10.1-should go to Balance Enquiry Form Page', async () => {
        TransactionPage.setGoToBalanceEnquiryPage();
        await expect(TransactionPage.pageTitle).toHaveTextContaining('Balance Enquiry Form');
    });

    it('10.2-should get the Balance Enquiry', async () => {
        TransactionPage.setGoToBalanceEnquiryPage();
        TransactionPage.accountBalanceEnquiry("123456789") //Account No
        await expect(TransactionPage.getAccountBalanceEnquiry).toHaveTextContaining('200');// Correct account balance
    });

});