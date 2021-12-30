import CustomerPage from '../pageobjects/customer.page';
import LoginPage from '../pageobjects/login.page';

describe('Customer actions: ', () => {

    beforeAll(async function () {
        await LoginPage.managerLogIn('mngr373768', 'qehUzEr'); // Manager user to log in
    });

    it('1.1-should go to the Add New Customer Page', async () => {
        CustomerPage.setGoToEditCustomerPage();
        await expect(CustomerPage.pageTitle).toHaveTextContaining('Add New Customer');
    });


    it('1.2-should  a customer', async () => {
        CustomerPage.setGoToNewCustomerCreationPage();
        CustomerPage.createCustomer(
            "Melissa De La O",
            "30-12-2017",
            "de la escuela 200 mtrs al sur",
            "San Rafael",
            "Heredia",
            "123456",
            "85877142",
            Math.floor((Math.random() * 100) + 1) + "@gmail.com", //random email to create 'n' users
            "Test123456");
        await expect(CustomerPage.pageMessage).toHaveTextContaining('Customer Registered Successfully!!!');
    });

    it('2.1-should go to the Edit Customer Form Page', async () => {
        CustomerPage.setGoToEditCustomerPage();
        await expect(CustomerPage.pageTitle).toHaveTextContaining('Edit Customer Form');
    });

    it('2.2-should edit a customer', async () => {
        CustomerPage.setGoToEditCustomerPage();
        CustomerPage.editCustomer("21419", "Santa Barbara"); //Customer ID and new address
        await expect(CustomerPage.pageMessage).toHaveTextContaining('Customer details updated Successfully!!!');
    });

    it('3.1-should go to the Delete Customer Form Page', async () => {
        CustomerPage.setGoToDeleteCustomerPage();
        await expect(CustomerPage.pageTitle).toHaveTextContaining('Delete Customer Form');
    });

    it('3.2-should delete a customer', async () => {
        CustomerPage.setGoToDeleteCustomerPage();
        CustomerPage.deleteCustomer("12348");//Customer ID
        await expect(CustomerPage.pageMessage).toHaveTextContaining('Customer deleted Successfully!!!');
    });

});
