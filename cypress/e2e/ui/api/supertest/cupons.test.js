require('dotenv').config();
const request = require('supertest');

const baseUrl = process.env.BASE_URL;
const token = process.env.TOKEN;

describe('API - Cupons', () => {
  it('CT12 – Deve listar todos os cupons (GET)', async () => {
    const res = await request(baseUrl)
      .get('/wp-json/wc/v3/coupons')
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('CT13 – Deve retornar um cupom pelo ID existente (GET)', async () => {
    const id = 6190;                            // ID válido
    const res = await request(baseUrl)
      .get(`/wp-json/wc/v3/coupons/${id}`)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', id);
  });

  it('CT14 – Não deve criar cupom com nome repetido (POST)', async () => {
    const res = await request(baseUrl)
      .post('/wp-json/wc/v3/coupons')
      .set('Authorization', token)
      .set('Content-Type', 'application/json')
      .send({
        code: 'desconto10',                     // código já existente
        amount: '10',
        discount_type: 'percent',
        individual_use: true
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('code');
  });
});
