import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getProtectedContent() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getUserLogin(user) {
        return axios.get("/api/generic/v1/entities/UserLogin?userLoginId=" + user.userLoginId, { headers: authHeader() })
            .then(response => {
                if (response.data.length > 0) {
                    localStorage.setItem('userlogin', JSON.stringify(response.data[0]));
                }

                return response.data;
            });
    }
}

export default new UserService();
