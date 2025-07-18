import { group } from 'k6';
import { getProducts, getCategories } from '../request/requests.js';
const coupomID = 6190

export const options = {
  stages: [
    { duration: '5s', target: 10 },
    { duration: '5s', target: 20 },
    { duration: '10s', target: 10 },
    { duration: '5s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'],
  },
};

export default function () {
  group('Listar produtos', () => {
    getProducts();
  });

  group('Listar categorias', () => {
    getIDProduct(coupomID);
  });
}
