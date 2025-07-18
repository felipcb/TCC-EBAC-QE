class CarrinhoPage {
  acessarLoja() {
    cy.visit('/');
  }

  selecionarProduto(nomeProduto) {
    cy.contains(nomeProduto).click();
  }

  selecionarTamanho(){
    cy.get('li.button-variable-item.button-variable-item-XS').click();
  }

  selecionarCor(){
    cy.get('li.button-variable-item.button-variable-item-Orange').click();
  }

  selecionarQtd(){
    cy.get('input.qty').clear().type('10');
  }

  adicionarAoCarrinho() {
    cy.get('.single_add_to_cart_button').click(); // botão "Adicionar ao carrinho"
  }

  verCarrinho() {
    cy.get('.woocommerce-message > .button').click();
  }

  validarMensagem(){
    cy.get('.product-name > a').should('contain', 'Ingrid Running Jacket - XS, Orange');
  }
}

export default new CarrinhoPage();
