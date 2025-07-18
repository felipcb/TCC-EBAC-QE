import loginPage from '../Page_Objects/Mobile_login.page.js';

describe('E2e', () => {
    it('should login with valid credentials', async () => {
        const email = 'testett@test.com';
        const password = 'Teste@123';
        // Abre tela de login via botão "Profile"
        await loginPage.openProfile();

        // Executa login
        await loginPage.login(email, password);

        await loginPage.openProfile();

        await expect(loginPage.profileTitle).toBeDisplayed();
    });
});


//testett@test.com
//Teste@123