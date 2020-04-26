import axios from 'axios';
import authHeader from './auth-header';

const API_URL = '/api/generic/v1/';

class ProductService {

  getProductList() {
    return axios.get(API_URL + 'entities/Product?productTypeId=DIGITAL_GOOD', { headers: authHeader() });
  }
}

export default new ProductService();
