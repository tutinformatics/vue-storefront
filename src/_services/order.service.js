import axios from 'axios';
import authHeader from './auth-header';
import UserService from './user.service';

const API_URL = '/api/generic/v1/';

class OrderService {

    getProductList() {
        return axios.get(API_URL + 'entities/Product?productTypeId=DIGITAL_GOOD', { headers: authHeader() });
    }

    getOrderList() {
        return axios.get(API_URL + 'entities/OrderHeader?createdBy=' + JSON.parse(localStorage.getItem('user')).userLoginId, { headers: authHeader() })
    }

    getOrderHeader(id) {
        return axios.get(API_URL + 'entities/OrderHeader?orderId=' + id, { headers: authHeader() })
    }

    updateOrderHeader(data) {
        return axios.put(API_URL + 'entities/OrderHeader',data, { headers: authHeader() })
    }

    createOrder(name) {
        return axios.post(API_URL + 'services/createOrderHeader', {
            createdBy: JSON.parse(localStorage.getItem('user')).userLoginId,
            orderName: name,
            userLogin: UserService.getUserLogin()
        }, {headers: authHeader()})
    }
}

export default new OrderService();
