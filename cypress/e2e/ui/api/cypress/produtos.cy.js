describe('API - Cupons', () => {
  const token = Cypress.env('TOKEN');

  // CT12 – GET todos os cupons
  it('CT12 – Deve listar todos os cupons (GET)', () => {
    cy.request({
      method: 'GET',
      url: '/wp-json/wc/v3/coupons',
      headers: {
        Authorization: token,
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  // CT13 – GET cupom por ID existente
  it('CT13 – Deve retornar um cupom pelo ID existente (GET)', () => {
    const id = 6190; // Substitua pelo ID real de um cupom válido
    cy.request({
      method: 'GET',
      url: `/wp-json/wc/v3/coupons/${id}`,
      headers: {
        Authorization: token,
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', id);
    });
  });

  // CT14 – POST cupom com nome repetido
  it('CT14 – Não deve criar cupom com nome repetido (POST)', () => {
    cy.request({
      method: 'POST',
      url: '/wp-json/wc/v3/coupons',
      failOnStatusCode: false, // Para evitar falha no teste ao retornar erro esperado
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: {
        code: 'desconto10', // Código já existente
        amount: '10',
        discount_type: 'percent',
        individual_use: true
      }
    }).then((response) => {
      expect(response.status).to.eq(400); // Ou 409 se for conflito
      expect(response.body).to.have.property('code');
    });
  });
});
