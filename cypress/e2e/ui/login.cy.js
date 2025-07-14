import LoginPage from '../../page_objects/LoginPage';

describe('Login EBAC - Page Object', () => {
  it('Deve logar com sucesso', () => {
    LoginPage.acessarPaginaDeLogin();
    LoginPage.preencherUsuario('user1_ebac');
    LoginPage.preencherSenha('psw!ebac@test');
    LoginPage.clicarEmEntrar();
    LoginPage.validarMensagemDeBoasVindas('Olá');
  });
  it('Não deve logar com senha inválida', () => {
    LoginPage.acessarPaginaDeLogin();
    LoginPage.preencherUsuario('user1_ebac');
    LoginPage.preencherSenha('senha@invalida');
    LoginPage.clicarEmEntrar();
    LoginPage.validarMensagemDeErro(
        'Erro: A senha informada para o usuário user1_ebac está incorreta. Perdeu a senha?'
    );
});


});
