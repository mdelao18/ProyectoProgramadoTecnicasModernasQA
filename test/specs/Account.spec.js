import AccountPage from '../pageobjects/account.page';
import LoginPage from '../pageobjects/login.page';
const testData = require ('../testData/data.json');

describe('Accounts actions: ', () => {

    beforeAll(async function () {//Hooks
        await LoginPage.managerLogIn('mngr373206', 'syzAsyj'); // Manager user to log in
    });

    it('4.1-should go to the Add new account form Page', async () => {
        AccountPage.setGoToNewCAccountCreationPage();
        await expect(AccountPage.pageTitle).toHaveTextContaining('Add new account form');
    });

    it('4.2-should create an account', async () => {
        AccountPage.setGoToNewCAccountCreationPage();
        AccountPage.createAccount("65723",0, "500"); //Customer ID, Account Type and initial deposit
        await expect(AccountPage.pageMessage).toHaveTextContaining('Account Generated Successfully!!!');
    });

    it('5.1-should go to the Edit Account Form Page', async () => {
        AccountPage.setGoToEditAccountPage();
        await expect(AccountPage.pageTitle).toHaveTextContaining('Edit Account Form');
    });

    it('5.2-should edit an account', async () => {
        AccountPage.setGoToEditAccountPage();
        AccountPage.editAccount("123456789", 1); //Account No and new Account Type
        await expect(AccountPage.pageMessage).toHaveTextContaining('Account Changed Successfully!!!');
    });

    it('6.1-should go to the Delete Account Form Page', async () => {
        AccountPage.setGoToDeleteAccountPage();
        await expect(AccountPage.pageTitle).toHaveTextContaining('Delete Account Form');
    });

    it('6.2-should delete an account', async () => {
        AccountPage.setGoToDeleteAccountPage();
        AccountPage.deleteAccount("123456789");//Account No
        await expect(AccountPage.pageMessage).toHaveTextContaining('Account Deleted Successfully!!!');
    });

});