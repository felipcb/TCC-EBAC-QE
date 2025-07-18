import '@shelex/cypress-allure-plugin';
import CarrinhoPage from '../../page_objects/CarrinhoPage';

describe('Carrinho EBAC - Page Object', () => {
  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    CarrinhoPage.acessarLoja();
    CarrinhoPage.selecionarProduto('Ingrid Running Jacket'); // exemplo
    CarrinhoPage.selecionarTamanho();
    CarrinhoPage.selecionarCor();
    CarrinhoPage.selecionarQtd();
    CarrinhoPage.adicionarAoCarrinho();
    CarrinhoPage.verCarrinho();
    CarrinhoPage.validarMensagem();
  });
});
