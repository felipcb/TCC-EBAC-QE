class LoginPage {
  acessarPaginaDeLogin() {
    cy.visit('/minha-conta/');
  }

  preencherUsuario(usuario) {
    cy.get('#username').type(usuario);
  }

  preencherSenha(senha) {
    cy.get('#password').type(senha);
  }

  clicarEmEntrar() {
    cy.get('input[name="login"]').click();
  }

  validarMensagemDeBoasVindas(nome) {
    cy.get('.woocommerce-MyAccount-content').should('contain', nome);
  }

  validarMensagemDeErro(mensagem) {
    cy.get('.woocommerce-error li')
    .should('be.visible')
    .and('contain', mensagem);
  }

}

export default new LoginPage();
