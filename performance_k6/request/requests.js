import http from 'k6/http';
import encoding from 'k6/encoding';
import users from '../data/users.json'

const base_urlProdutos = 'http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/get_wc_v3_coupons';
const base_urlIDProdutos = 'http://lojaebac.ebaconline.art.br/restapi/docs/#/coupons/get_wc_v3_coupons__id_'

function getRandomUser() {
  const randomIndex = Math.floor(Math.random() * users.usuarios.length);
  return users.usuarios[randomIndex];
}

const AUTH_HEADER = {
  headers: {
    Authorization: 'Basic ' + encoding.b64encode(`${USER}:${PASS}`)
  }
};

export function getProducts(){
    return http.get(base_urlProdutos);
}

export function getIDProduct(cupomId) {
  const { user, pass } = getRandomUser();
  const authHeader = {
    headers: {
      Authorization: 'Basic ' + encoding.b64encode(`${user}:${pass}`)
    }
  };
  return http.get(base_urlIDProdutos, cupomId, AUTH_HEADER);
}


// http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/get_wc_v3_coupons
// http://lojaebac.ebaconline.art.br/restapi/docs/#/coupons/get_wc_v3_coupons__id_
